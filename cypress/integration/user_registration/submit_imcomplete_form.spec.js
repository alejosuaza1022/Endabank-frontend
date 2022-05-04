import {Given,  When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000/sign-up/'
const identifier = '1107007501'

Given('the user has filled some mandatory fields but not all', () => {
    cy.visit(url)
    cy.get('#identifier').type(identifier)
})

When('the user clicks on submit button', () =>{
    cy.contains('Submit').click()
})

Then('an error message should be visible',()=>{
    cy.contains('This field is required').should('be.visible')
})