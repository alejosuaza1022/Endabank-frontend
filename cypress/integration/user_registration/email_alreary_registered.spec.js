import {Given, And,  When, Then } from "cypress-cucumber-preprocessor/steps";

Given('the user is entering data in the Registration form', () => {
    cy.visit('http://localhost:3000/sign-up/')
})

When('the user enters an email that is already in use', () =>{
    cy.get('#email').type('asbb@gmail.com')
})

Then('an error message should be shown',()=>{
    cy.contains('email already exists').should('be.visible')
})
