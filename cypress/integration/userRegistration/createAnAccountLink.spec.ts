import {Given,  When, Then } from "cypress-cucumber-preprocessor/steps";
import logInPage from "../../../cypress/pageObjects/logInPage";

const url = 'http://localhost:3000/'
const loginPage: logInPage = new logInPage();

Given('the user is on the Login page', () => {
    loginPage.visit()
    //loginPage.relativePath
    //loginPage.checkCorrectPath()
    cy.contains('Log In').should('be.visible')
})

When('the user clicks on the {string} link', (linkName) => {
    cy.contains(linkName).click()
    
})

Then('the user should be redirected to the Register page', () => {
    cy.contains('First name').should('be.visible')
})