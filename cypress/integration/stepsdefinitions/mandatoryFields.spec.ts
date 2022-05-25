import {Given, And,  When, Then } from "cypress-cucumber-preprocessor/steps";
import SignUpPage from "../../pageObjects/SignUpPage";

const signUpPage: SignUpPage=new SignUpPage()

When('the user types a wrong {string} into the {string}', (value, fieldName) =>{
    cy.get(fieldName).type(value)
})
And('the user tries to move on the next field', ()=>{
    cy.get(':nth-child(5) > .bottom-2 > .w-5').click()
})
Then('the error message {string}  should be displayed',(errorMessage)=>{
    cy.contains(errorMessage).should('be.visible')
})
And('the {string} field should be highlighted',(fieldName)=>{
    cy.get(fieldName).should('have.css','borderColor','rgb(240, 82, 82)')
})