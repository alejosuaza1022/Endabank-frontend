import {Given, And,  When, Then } from "cypress-cucumber-preprocessor/steps";

Given('an user goes to the register page url site', () => {
    cy.visit('http://localhost:3000/sign-up/')
})
When('the user types a wrong value in the field_name', () =>{
    cy.get('#identifier').type('jd')
   // cy.contains('Identifier').type('jd')
})
And('the user tries to fill another field_name', ()=>{
    cy.get('#firstName').click()
})
Then('the following error_message should be displayed',()=>{
    cy.contains('This field must be just numbers with a length between 10 and 20')
})
And('the field_name should be highlighted',()=>{
    //cy.get('.div:nth-child(1)').should('have.css','color','red')
    cy.get('.grid-cc > :nth-child(2) > .absolute').should('have.css','color','rgb(240, 82, 82)')
})