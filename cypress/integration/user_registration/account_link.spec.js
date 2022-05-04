import {And,  When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000/log-in/'

When('an user enter to the login page using the url', () => {
    cy.visit(url)
})
Then('the page loads correctly', () => {
    cy.contains('Log In').should('be.visible')
})
And('the create an account link exists', () => {
    cy.contains('create an account').click()
})
And('it is working', () => {
    cy.contains('First name').should('be.visible')
})