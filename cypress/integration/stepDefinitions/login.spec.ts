import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import datauser from "../../fixtures/loginCredentials.json"

const url = 'http://medellin-med.uc.r.appspot.com/log-in'

Given('the user is on the endabank login page', () => {
    cy.visit(url)
    cy.wait(1000)
})

When('the user types in a valid email',() =>{
    cy.get("#email").type(datauser.email)
})

Then('the user types in a password',()=>{
    cy.get("#password").type(datauser.password)
})

And( "the user clicks on login buttton",() =>{
    cy.get("#submitLogin").click()
})

And ("the user has to be allowed to see their profile, password management and Logout in the page",()=>{
    cy.get('#profileSidebarElement').should('exist')
	cy.get('#logoutSidebarElement').should('exist')
	cy.get('#pwdManagementSidebarElement').should('exist')
})

///////////////////////




//////////////////////

Given('the user is on the endabank login page', () => {
    cy.visit(url)
    cy.wait(1000)
})

When('the user types in an email with an incorrect format',() =>{
    cy.get("#email").type(datauser.nonValidFormat)
})

And('the user types in a password',()=>{
    cy.get("#password").type(datauser.password)
})

Then ("the user should see a highlight error message",()=>{
	cy.get(':nth-child(1) > .text-xs').should('exist')
})


