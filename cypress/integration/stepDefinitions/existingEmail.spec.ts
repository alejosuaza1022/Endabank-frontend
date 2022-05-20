import {Given, And,  When, Then } from "cypress-cucumber-preprocessor/steps";
import signUpPage from "../../pageObjects/signUpPage";
import userData from "../../fixtures/constants.json";

const signupPage: signUpPage= new signUpPage();

When('the user is entering data into the registration form fields', () =>{
    signupPage.getFirstName().clear().type(userData.firstName);
    signupPage.getLastName().clear().type(userData.lastName);
    signupPage.getPhoneNumberInput().clear().type(userData.phoneNumber);
    signupPage.getPasswordInput().clear().type(userData.password);
    signupPage.getRePasswordInput().clear().type(userData.rePassword);
})

And('the user enters an email that is already in another account',()=>{
    signupPage.getNewEmailInput().clear().type(userData.existingEmail);
    signupPage.getIdentifier().clear().type(signupPage.newIdentifier());
})

Then('the user should see {string} error message',(errorMessage)=>{
    signupPage.getSubmitSignUpButton().click();
    cy.contains(errorMessage).should('be.visible')
})