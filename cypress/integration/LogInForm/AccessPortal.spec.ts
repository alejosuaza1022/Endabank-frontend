import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('I need to write an email as {string}', (email) => {
	cy.get('#email')
	  .type(email)
});

Then('I need to write a password as {string}', (password) => {
	cy.get('#password')
   	  .type(password)
});

Then('I click on Log In', () => {
	cy.get('#submitLogin').click()

})

Then('I see My Profile, Password Management and Log-out in the page' , () => {
	cy.get('#profileSidebarElement')
	  .should('exist')
	cy.get('#logoutSidebarElement')
	  .should('exist')
	  cy.get('#pwdManagementSidebarElement')
	  .should('exist')
})