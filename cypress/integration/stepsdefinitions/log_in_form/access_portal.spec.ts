import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('I need to login with email as {string} and password as {string}', (email, password) => {
	cy.login(email, password);
});

Then('I see {string} displayed' , (url) => {
	cy.url().should('eq', url)
})