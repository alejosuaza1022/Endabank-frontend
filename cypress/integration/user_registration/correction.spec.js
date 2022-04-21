import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000/sign-up/'

Given('an user has entered a wrong value in a field',()=>{
    cy.visit(url)
    cy.get("#identifier").type("LOOOOL")
    cy.get("#firstName").type("564")
    cy.get("#lastName").type("789")
    cy.get("#phoneNumber").type("a")
    cy.get("#email").type("f")
    cy.get("#password").type("a1$")
    cy.get("#rePassword").type("Leduinabel1$")
    cy.get('.justify-center').click()


})

Then('an error message should be displayed',()=>{
    cy.get('.grid-cc > :nth-child(2) > .text-xs').should('have.text','This field must be just numbers with a length between 10 and 20')
    cy.get(':nth-child(1) > .text-xs').should('have.text','This field must be just letters with a length between 2 and 20')
    cy.get('.grid > :nth-child(2) > .text-xs').should('have.text','This field must be just letters with a length between 2 and 20')
    cy.get(':nth-child(3) > .text-xs').should('have.text','This field must be just numbers with a length between 10 and 20')
    cy.get(':nth-child(4) > .text-xs').should('have.text','This field must be a valid email')
    cy.get(':nth-child(5) > .text-xs').should('have.text','1 Capital, 1 lowercase, 1 number, 1 special character, 8-20 characters')
    cy.get(':nth-child(6) > .text-xs').should('have.text', 'Passwords do not match')

})

When('the user is correcting value in a field',()=> {

    cy.get("#identifier").clear().type("12345678910")
    cy.get("#firstName").clear().type("LeduinAbel")
    cy.get("#lastName").clear().type("Bejarano")
    cy.get("#phoneNumber").clear().type("3108818966")
    cy.get("#email").clear().type("leduinabel@hola.com")
    cy.get("#password").clear().type("Leduinabel1$")
    cy.get("#rePassword").clear().type("Leduinabel1$")


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


