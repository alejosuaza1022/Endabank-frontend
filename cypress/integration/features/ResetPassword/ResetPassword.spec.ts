import {
    Before,
    Given,
    When,
    Then,
    But,
    And
  } from "cypress-cucumber-preprocessor/steps";
import DummyUser from "./DummyUser";

const recoveryLink: string = `http://localhost:3000/reset-password/?token=${DummyUser.token}`

When("the user clicks on {string} link", (linkText) => {
    cy.contains(`${linkText}`).click();
})

And('the user fills in the "Email"', () => {
    cy.get('.p-6 > .relative > #email').type(DummyUser.email);
})

And('clicks in the "Submit" button', () => {
    cy.get('.flex > [type="submit"]').click();
    cy.wait(3000);
})

And("the user opens the recovery link", () => {
    cy.visit(recoveryLink);
})

And("the user fills in the fields for the recovery password", () => {
    cy.get("#password").type(DummyUser.newPassword);
    cy.get("#rePassword").type(DummyUser.newPassword);
})

And("clicks in the \"Submit\" button", () => {
    cy.get('form > [type="submit"]').click();
})

Then('the user should see a green message that says {string}', (successMessage) => {
    cy.get('#alert-2').should('have.text', successMessage);
})