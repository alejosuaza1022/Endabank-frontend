import {Given, And,  When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000/sign-up/'
const password_wrongValue = 'Leduinabela1$'
const rePassword_wrongValue = 'Leduinabel1$'

Given('the user is filling the password and confirm password fields',()=> {
    cy.visit(url)
    cy.get("#password").type(password_wrongValue)
})

When('the user writes different values on those fields',()=> {
    cy.get("#rePassword").type(rePassword_wrongValue)
})

Then('the fields will be highlighted in red',()=> {
    cy.get("#identifier").click()
    cy.get('#rePassword').should('have.css','borderColor','rgb(240, 82, 82)')
})

And('a label message is shown indicating "Passwords do not match"',()=> {
    cy.get(':nth-child(6) > .text-xs').should('have.text', 'Passwords do not match')
})