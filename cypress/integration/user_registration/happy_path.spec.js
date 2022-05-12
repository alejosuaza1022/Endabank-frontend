import {And,  When, Then , Given} from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000/sign-up/'
const newEmail = 'leduinabel@hola.com'
const identifier = '12345678910'
const firstName = 'LeduinAbel'
const lastName = 'Bejarano'
const phoneNumber = '3108818966'
const password = 'Leduinabel1$'
const rePassword = 'Leduinabel1$'

Given('the user that has clicked on the "Create an account" link in the Login page', () => {
    cy.visit(url)
})

And('the Registration page loaded correctly', () => {
    cy.get('#typeIdentifierId').should('be.visible')
})

When('the user enters correct values in all fields', () => {
    cy.get("#identifier").type(identifier)
    cy.get("#firstName").type(firstName)
    cy.get("#lastName").type(lastName)
    cy.get("#phoneNumber").type(phoneNumber)
    cy.get("#email").type(newEmail)
    cy.get("#password").type(password)
    cy.get("#rePassword").type(rePassword)
})

And ('the user clicks on the "Submit" button', () => {
    cy.get('#submitSignUp').click()
})

Then ('the information is saved and sent correctly.',()=> {
    cy.contains("User registered").should('be.visible')
})