import {Given, And,  When, Then } from "cypress-cucumber-preprocessor/steps";
const url = 'http://localhost:3000/sign-up/'
Given('the user is filling the password and confirm password fields',()=> {
    cy.visit(url)
    cy.get("#password").type("Leduinabel1$")
})

When('the user writes different values on those fields',()=> {
    cy.get("#rePassword").type("Leduinabel258$")

})

Then('the fields will be highlighted in red',()=> {
    cy.get("#identifier").click()
    
    cy.get(':nth-child(6) > .text-xs').should('have.css','color','rgb(240, 82, 82)')
    
    
})

And('a label message is shown indicating "Passwords do not match"',()=> {
    cy.get(':nth-child(6) > .text-xs').should('have.text', 'Passwords do not match')
})