import {Given, And,  When, Then } from "cypress-cucumber-preprocessor/steps";
import signUpPage from "../../pageObjects/signUpPage";
import userData from "../../fixtures/signUpConstants.json";

const signupPage: signUpPage= new signUpPage();

Given('the user is on the Register page',()=>{
    signupPage.visit();
})

When('the user is typing information into the registration form', () =>{
    signupPage.getFirstName().clear().type(userData.firstName);
    signupPage.getLastName().clear().type(userData.lastName);
    signupPage.getPhoneNumberInput().clear().type(userData.phoneNumber);
    signupPage.getPasswordInput().clear().type(userData.password);
    signupPage.getRePasswordInput().clear().type(userData.rePassword);
})

And('the user tries to register with an identifier that is already in use',()=>{
    signupPage.getIdentifier().clear().type(userData.existingIdentifier);
    signupPage.getNewEmailInput().clear().type(signupPage.newEmailGenerator());
})

Then('the user should see the error message {string}',(errorMessage)=>{
    signupPage.getSubmitSignUpButton().click();
    cy.contains(errorMessage).should('be.visible')
})