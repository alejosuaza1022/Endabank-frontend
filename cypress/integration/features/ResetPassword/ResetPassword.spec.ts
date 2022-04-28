import {
    When,
    Then,
    And
  } from "cypress-cucumber-preprocessor/steps";
import PopUp from "../../../page-object/PopUp";
import ResetPasswordPage from "../../../page-object/ResetPasswordPage";
import ExistingUser from "../../../test-data/ExistingUser";

const resetPasswordLink: string = `http://localhost:3000/reset-password/?token=${ExistingUser.token}`

const popUp: PopUp = new PopUp();
const resetPassword: ResetPasswordPage = new ResetPasswordPage();

When('the user fills in the "Email"', () => {
    // cy.get('[data-id="emailResetPassword"]').type(ExistingUser.email);
    cy.fixture('existing-user.json').then((userData) => {
        popUp.writeEmail(userData.email);
    })
})

And('clicks in the "Submit" button on the pop up', () => {
    // cy.get('#submitSendEmailPopUp').click();
    // popUp.clickSubmitButton();
    cy.wait(3000);
})

And("the user opens the recovery link", () => {
    cy.visit(resetPasswordLink);
})

And("the user fills in the fields for the recovery password", () => {
    // cy.get("#password").type(newPassword);
    // cy.get("#rePassword").type(newPassword);

    // Saving to ExistingUser the new password, there should another storage to save this password, maybe creating a testing database
    ExistingUser.chooseNewPassword();

    resetPassword.writeNewPassword(ExistingUser.password);
    resetPassword.confirmPassword(ExistingUser.password);

    // Generating the dummy user fixture to store somehow the password, the only drawback is that this need to be commit each time the test runs, therefore there should be some errors when running it other tools such as jenkins, etc.
    ExistingUser.generateFixture();
})

And('clicks in the "Submit" button on the reset password page', () => {
    // cy.get('#submitResetPassword').click();
    resetPassword.clickSubmitButton();
})

Then('the user should see a green message that says {string}', (successMessage) => {
    cy.get('#alertPopUpMessage').should('contain.text', successMessage);
})