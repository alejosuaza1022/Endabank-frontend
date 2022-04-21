import {Given,  When, Then } from "cypress-cucumber-preprocessor/steps";

Given('the user has filled some mandatory fields but not all', () => {
    cy.visit('http://localhost:3000/sign-up/')
    cy.get('#identifier').type(1107007501)
})

When('the user clicks on submit button', () =>{
    cy.contains('Submit').click()
})

Then('an error message should be visible',()=>{
    cy.contains('This field is required').should('be.visible')
})