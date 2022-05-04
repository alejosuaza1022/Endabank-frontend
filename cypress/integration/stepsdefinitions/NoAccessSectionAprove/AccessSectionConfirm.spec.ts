import { When, Then} from "cypress-cucumber-preprocessor/steps";
import {URL} from "../../../support/utils/urlBaseEndabank"

When('the user tries to enter in the approval section', () => {
	cy.wait(2000)
	cy.get('#usersManagementSidebarElement').should('not.exist');
});

Then('tries to enter trough the url {string} its redirected to home' , (url) => {
	cy.verifySection(url,2000,URL );
})