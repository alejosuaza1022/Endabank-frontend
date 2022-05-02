import {And,  When, Then , Given} from "cypress-cucumber-preprocessor/steps";


const url = 'http://localhost:3000/sign-up/'

Given('an user that has clicked on the "Create an account" link in the Login page', () => {
    cy.visit(url)
    
})

And('the Registration page loaded correctly', () => {
    cy.get('#typeIdentifierId').should('be.visible')
    
})

When('the user enters value in all fields', () => {
    cy.get("#identifier").type("12345678910")
    cy.get("#firstName").type("LeduinAbel")
    cy.get("#lastName").type("Bejarano")
    cy.get("#phoneNumber").type("3108818966")
    cy.get("#email").type("leduinabel@hola.com")
    cy.get("#password").type("Leduinabel1$")
    cy.get("#rePassword").type("Leduinabel1$")

    
})

And ('the user clicks on the "Submit" button', () => {
    cy.get('#submitSignUp').click()
    
})

Then('the information is saved and sent correctly.',()=> {
    cy.get('div').should('be.visible')
})