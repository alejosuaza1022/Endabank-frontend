import {
    Before,
    Given,
    When,
    Then,
    But,
    And
  } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../page-object/LoginPage";
import PopUp from "../../../page-object/PopUp";
import ResetPasswordPage from "../../../page-object/ResetPasswordPage";
import DummyUser from "../../../test-data/DummyUser";

const resetPasswordLink: string = `http://localhost:3000/reset-password/?token=${DummyUser.token}`

const loginPage: LoginPage = new LoginPage();
const popUp: PopUp = new PopUp();
const resetPassword: ResetPasswordPage = new ResetPasswordPage();

When('the user fills in the "Email"', () => {
    // cy.get('[data-id="emailResetPassword"]').type(DummyUser.email);
    popUp.writeEmail(DummyUser.email);
})

And('clicks in the "Submit" button on the pop up', () => {
    // cy.get('#submitSendEmailPopUp').click();
    popUp.clickSubmitButton();
    cy.wait(3000);
})

And("the user opens the recovery link", () => {
    cy.visit(resetPasswordLink);
})

And("the user fills in the fields for the recovery password", () => {
    // cy.get("#password").type(DummyUser.newPassword);
    // cy.get("#rePassword").type(DummyUser.newPassword);
    resetPassword.writeNewPassword(DummyUser.newPassword);
    resetPassword.confirmPassword(DummyUser.newPassword);
})

And('clicks in the "Submit" button on the reset password page', () => {
    // cy.get('#submitResetPassword').click();
    resetPassword.clickSubmitButton();
})

Then('the user should see a green message that says {string}', (successMessage) => {
    cy.get('#alertPopUpMessage').should('contain.text', successMessage);
})