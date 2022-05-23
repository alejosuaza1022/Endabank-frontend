import {Given, And,  When, Then } from "cypress-cucumber-preprocessor/steps";
import signUpPage from "../../pageObjects/signUpPage";
import userData from "../../fixtures/constants.json";

const signupPage: signUpPage= new signUpPage();

And('the user tries to register with an identifier that is already in use',()=>{
    signupPage.getNewEmailInput().clear().type(userData.existingIdentifier);
    signupPage.getNewEmailInput().clear().type(signupPage.newEmailGenerator());
})

Then('the user should see the error message {string}',(errorMessage)=>{
    signupPage.getSubmitSignUpButton().click();
    cy.contains(errorMessage).should('be.visible')
})