import {
    Before,
    Given,
    When,
    Then,
    But,
    And
  } from "cypress-cucumber-preprocessor/steps";
import DummyUser from "../../../test-data/DummyUser";

const recoveryLink: string = `http://localhost:3000/reset-password/?token=${DummyUser.token}`

When('the user clicks on "Forgot password?" link', () => {
    cy.get("#forgotPasswordHyperlink").click();
})

And('the user fills in the "Email"', () => {
    cy.get('[data-id="emailResetPassword"]').type(DummyUser.email);
})

And('clicks in the "Submit" button on the pop up', () => {
    cy.get('#submitSendEmailPopUp').click();
    cy.wait(3000);
})

And("the user opens the recovery link", () => {
    cy.visit(recoveryLink);
})

And("the user fills in the fields for the recovery password", () => {
    cy.get("#password").type(DummyUser.newPassword);
    cy.get("#rePassword").type(DummyUser.newPassword);
})

And('clicks in the "Submit" button on the reset password page', () => {
    cy.get('#submitResetPassword').click();
})

Then('the user should see a green message that says {string}', (successMessage) => {
    cy.get('#alertPopUpMessage').should('contain.text', successMessage);
})