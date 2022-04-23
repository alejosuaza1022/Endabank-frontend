import { When, Then} from "cypress-cucumber-preprocessor/steps";
import {URL} from "../../../support/utils/urlBaseEndabank"

When('the user tries to enter in the approval section', () => {
	cy.get(':nth-child(4) > .flex').should('not.exist');
});

Then('tries to enter trough the url {string} its redirected to home' , (url) => {
	cy.verifySection(url,2000,URL );
})