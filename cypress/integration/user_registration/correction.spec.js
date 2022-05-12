import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000/sign-up/'
const identifier_wrongValue = 'LOOOOL'
const firstName_wrongValue = '564'
const lastName_wrongValue = '789'
const phoneNumber_wrongValue = 'a'
const email_wrongValue = 'f'
const password_wrongValue = 'a1$'
const rePassword_wrongValue = 'Leduinabel1$'
const newEmail = 'leduinabel@hola.com'
const identifier = '12345678910'
const firstName = 'LeduinAbel'
const lastName = 'Bejarano'
const phoneNumber = '3108818966'
const password = 'Leduinabel1$'
const rePassword = 'Leduinabel1$'

Given('the user has entered a wrong value in a field',()=>{
    cy.visit(url)
    cy.get("#identifier").type(identifier_wrongValue)
    cy.get("#firstName").type(firstName_wrongValue)
    cy.get("#lastName").type(lastName_wrongValue)
    cy.get("#phoneNumber").type(phoneNumber_wrongValue)
    cy.get("#email").type(email_wrongValue)
    cy.get("#password").type(password_wrongValue)
    cy.get("#rePassword").type(rePassword_wrongValue)
    cy.get('.justify-center').click()


})

Then('an error message should be displayed',()=>{
    cy.get('.grid-cc > :nth-child(2) > .text-xs').should('have.text','This field must be just numbers with a length between 6 and 20')
    cy.get(':nth-child(1) > .text-xs').should('have.text','This field must be just letters with a length between 2 and 20')
    cy.get('.grid > :nth-child(2) > .text-xs').should('have.text','This field must be just letters with a length between 2 and 20')
    cy.get(':nth-child(3) > .text-xs').should('have.text','This field must be just numbers with a length between 10 and 20')
    cy.get(':nth-child(4) > .text-xs').should('have.text','This field must be a valid email')
    cy.get(':nth-child(5) > .text-xs').should('have.text','1 Capital, 1 lowercase, 1 number, 1 special character, 8-20 characters')
    cy.get(':nth-child(6) > .text-xs').should('have.text', 'Passwords do not match')

})

When('the user is correcting value in a field',()=> {

    cy.get("#identifier").clear().type(identifier)
    cy.get("#firstName").clear().type(firstName)
    cy.get("#lastName").clear().type(lastName)
    cy.get("#phoneNumber").clear().type(phoneNumber)
    cy.get("#email").clear().type(newEmail)
    cy.get("#password").clear().type(password)
    cy.get("#rePassword").clear().type(rePassword)


})

Then('the error message should dissappear',()=> {

    cy.get('.grid-cc > :nth-child(2) > .text-xs').should('not.exist')
    cy.get(':nth-child(1) > .text-xs').should('not.exist')
    cy.get('.grid > :nth-child(2) > .text-xs').should('not.exist')
    cy.get(':nth-child(3) > .text-xs').should('not.exist')
    cy.get(':nth-child(4) > .text-xs').should('not.exist')
    cy.get(':nth-child(5) > .text-xs').should('not.exist')
    cy.get(':nth-child(6) > .text-xs').should('not.exist')



})


