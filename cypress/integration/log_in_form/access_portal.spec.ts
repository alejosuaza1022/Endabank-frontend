import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('I need to write an email as {string}', (email) => {
	cy.get('#emailLogin')
	  .type(email)
});

Then('I need to write a password as {string}', (password) => {
	cy.get('#passwordLogin')
   	  .type(password)
});

Then('I click on Log In', () => {
	cy.get('#submitLogin').click()

})

Then('I dont see Log-in in the page' , () => {
	cy.get('#logoutSidebarElement')
	  .should('exist')
})