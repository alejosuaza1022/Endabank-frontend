import { When, Then } from "cypress-cucumber-preprocessor/steps";

const newEmail = 'leduinabel@hola.com'
const identifierAlreadyRegistered = '11111111'
const firstName = 'LeduinAbel'
const lastName = 'Bejarano'
const phoneNumber = '3108818966'
const password = 'Leduinabel1$'
const rePassword = 'Leduinabel1$'

When('the user enters an indentifier that is already in use', () =>{

    cy.get("#identifier").clear().type(identifierAlreadyRegistered)
    cy.get("#firstName").clear().type(firstName)
    cy.get("#lastName").clear().type(lastName)
    cy.get("#phoneNumber").clear().type(phoneNumber)
    cy.get("#email").clear().type(newEmail)
    cy.get("#password").clear().type(password)
    cy.get("#rePassword").clear().type(rePassword)
})

Then('an error message should be displayed in a popup window',()=>{
    cy.get('#submitSignUp').click()
    cy.contains('There is already a user registered with this identifier').should('be.visible')
})