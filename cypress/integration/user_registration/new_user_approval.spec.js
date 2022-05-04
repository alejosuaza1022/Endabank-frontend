import {Given, And,  When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000/log-in/'
const adminEmail = 'juanpablo.perezleon@endava.com'
const adminPassword = 'Jpperezl25.'
const newEmail = 'leduinabel@hola.com'

Given('an admin user has logged in', ()=>{
    cy.visit(url)
    cy.get('#email').type(adminEmail)
    cy.get('#password').type(adminPassword)
    cy.get('#submitLogin').click()
})

When('an admin user clicks on the user management option',()=>{
    cy.get('#usersManagementSidebarElement').click()
    cy.wait(2000)

    //cy.get('.sidebar').scrollTo('bottom')

    cy.get('#ToggleApproveUser42').scrollIntoView().should('not.be.checked')
})

Then ('the new user is visible',()=>{
    cy.contains(newEmail).should('be.visible')
})

And ('the user approved toggle is off',()=>{
    cy.get('#ToggleApproveUser42').scrollIntoView().should('not.be.checked')
})