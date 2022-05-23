import {Given,  When, Then } from "cypress-cucumber-preprocessor/steps";
import logInPage from "../../pageObjects/logInPage";

const loginPage: logInPage = new logInPage();

Given('the user is on the Login page', () => {
    loginPage.visit()

    cy.contains('Log In').should('be.visible')
})

When('t the user tries to enter the registration form via the {string} link', (linkName) => {
    cy.contains(linkName).click()
    
})

Then('the user should be redirected to the Register page', () => {
    cy.contains('First name').should('be.visible')
})