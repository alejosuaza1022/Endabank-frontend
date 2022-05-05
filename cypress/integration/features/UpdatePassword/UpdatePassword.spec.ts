import {
    Before,
    Given,
    When,
    Then,
    But,
    And} from "cypress-cucumber-preprocessor/steps";
import ProfilePage from "../../../page-object/ProfilePage";
import UpdatePasswordPage from "../../../page-object/UpdatePasswordPage";
import ExistingUser from "../../../test-data/ExistingUser";

const updatePasswordPage: UpdatePasswordPage = new UpdatePasswordPage();
const profilePage: ProfilePage = new ProfilePage();

When('the user clicks on the "Password management" left side button', () => {
    // cy.get('#pwdManagementSidebarElement').click();
    profilePage.clickPasswordManagementButton();
})

And('the user fills in the old, new and confirmation password', () => {
    // Generates new password
    ExistingUser.chooseNewPassword();

    cy.fixture('existing-user.json').then((userData) => { 
        const oldPassword: string = userData.password;
        // cy.get('#oldPassword').type(oldPassword);
        updatePasswordPage.writeOldPassword(oldPassword);
    })

    // cy.get('#password').type(ExistingUser.password);
    // cy.get('#rePassword').type(ExistingUser.password);
    updatePasswordPage.writeNewPassword(ExistingUser.password);
    updatePasswordPage.confirmNewPassword(ExistingUser.password);

    // Saves new password into a json file
    ExistingUser.generateFixture();
});

And('the user clicks the "Submit" button on the update password page', () => {
    // cy.get('#submitResetPassword').click();
    updatePasswordPage.clickSubmitButton();
});

Then('the user should see a green message that says {string}', (successMessage) => {
    cy.get('#alertPopUpMessage').should('contain.text', successMessage);
});