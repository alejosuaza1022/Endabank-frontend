import {Given, And,  When, Then } from "cypress-cucumber-preprocessor/steps";
import signUpPage from "../../pageObjects/signUpPage";

const signupPage: signUpPage=new signUpPage()

When('the user types a wrong {string} in the {string}', (value, fieldName) =>{
    cy.get(fieldName).type(value)
})
And('the user tries to fill another', ()=>{
    cy.get(':nth-child(5) > .bottom-2 > .w-5').click()
})
Then('the following {string} should be displayed',(errorMessage)=>{
    cy.contains(errorMessage).should('be.visible')
})
And('the {string} should be highlighted',(fieldName)=>{
    cy.get(fieldName).should('have.css','borderColor','rgb(240, 82, 82)')
})