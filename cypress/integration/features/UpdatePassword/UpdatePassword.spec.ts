import {
    Before,
    Given,
    When,
    Then,
    But,
    And} from "cypress-cucumber-preprocessor/steps";
import DummyUser from "../../../test-data/DummyUser";

When('the user clicks on the "Password management" left side button', () => {
    cy.get('#pwdManagementSidebarElement').click();
})

And('the user fills in the old, new and confirmation password', () => {
    cy.get('#oldPassword').type(DummyUser.currentPassword);
    cy.get('#password').type(DummyUser.newPassword);
    cy.get('#rePassword').type(DummyUser.newPassword);
})

And('the user clicks the "Submit" button on the update password page', () => {
    cy.get('#submitResetPassword').click();
})

Then('the user should see a green message that says {string}', (successMessage) => {
    cy.get('#alertPopUpMessage').should('contain.text', successMessage);
})