import {Given, And,  When, Then } from "cypress-cucumber-preprocessor/steps";
import SignUpPage from "../../pageObjects/SignUpPage";
import userData from "../../fixtures/signUpConstants.json";

const signUpPage: SignUpPage= new SignUpPage();

Given('the user is on the Register page',()=>{
    signUpPage.visit()
})

When('the user is typing information into the registration form', () =>{
    signUpPage.getFirstName().clear().type(userData.firstName);
    signUpPage.getLastName().clear().type(userData.lastName);
    signUpPage.getPhoneNumberInput().clear().type(userData.phoneNumber);
    signUpPage.getPasswordInput().clear().type(userData.password);
    signUpPage.getRePasswordInput().clear().type(userData.rePassword);
})

And('the user tries to register with an email that is already in use',()=>{
    signUpPage.getNewEmailInput().clear().type(userData.existingEmail);
    signUpPage.getIdentifier().clear().type(signUpPage.newIdentifier());
})

Then('the user should see the error message {string}',(errorMessage)=>{
    signUpPage.getSubmitSignUpButton().click();
    cy.contains(errorMessage).should('be.visible')
})