import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('I need to write an email with incorrect format as {string}', (email) => {
	cy.get('#emailLogin')
	  .type(email)
});

Then('I need to write a password as {string}', (password) => {
	cy.get('#passwordLogin')
   	  .type(password)
});

Then('I see {string} highlight error displayed' , (errorMessage) => {
	cy.get('.text-red-600.ml-1')
	  .contains(errorMessage)
})