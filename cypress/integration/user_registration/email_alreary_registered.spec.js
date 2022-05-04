import {Given, And,  When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000/sign-up/'
const identifier = '12345678910'
const firstName = 'LeduinAbel'
const lastName = 'Bejarano'
const phoneNumber = '3108818966'
const password = 'Leduinabel1$'
const rePassword = 'Leduinabel1$'
const emailAlreadyRegistered = 'asb@asb.com'


Given('the user is entering data in the Registration form', () => {
    cy.visit(url)
})

When('the user enters an email that is already in use', () =>{

    cy.get("#identifier").clear().type(identifier)
    cy.get("#firstName").clear().type(firstName)
    cy.get("#lastName").clear().type(lastName)
    cy.get("#phoneNumber").clear().type(phoneNumber)
    cy.get("#email").clear().type(emailAlreadyRegistered)
    cy.get("#password").clear().type(password)
    cy.get("#rePassword").clear().type(rePassword)
})

Then('an error message should be shown',()=>{
    cy.get('#submitSignUp').click()
    cy.contains('There is already a user registered with this email').should('be.visible')
})
