import {Given, And,  When, Then } from "cypress-cucumber-preprocessor/steps";
import signUpPage from "../../pageObjects/signUpPage";
import userData from "../../fixtures/constants.json";

const signupPage: signUpPage= new signUpPage();

And('the user enters an identifier that is already in another account',()=>{
    signupPage.getNewEmailInput().clear().type(userData.existingIdentifier);
    signupPage.getNewEmailInput().clear().type(signupPage.newEmailGenerator());
})

Then('the user should see {string} error message',(errorMessage)=>{
    signupPage.getSubmitSignUpButton().click();
    cy.contains(errorMessage).should('be.visible')
})