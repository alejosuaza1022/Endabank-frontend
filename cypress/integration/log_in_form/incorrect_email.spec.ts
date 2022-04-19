import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('I need to write an incorrect email as {string}', (email) => {
	cy.get('input[id=email]')
	  .type(email)
});

Then('I need to write a password as {string}', (password) => {
	cy.get('input[id=password]')
   	  .type(password)
});

Then('I click on Log In', () => {
	cy.get('button[type=submit]').click()

});

Then('I see {string} message error displayed' , (errorMessage) => {
	cy.get('button[type=submit]').should('eq', errorMessage)
})