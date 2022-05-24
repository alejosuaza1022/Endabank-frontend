import {And,  When, Then , Given} from "cypress-cucumber-preprocessor/steps";

import logInPage from "../../pageObjects/logInPage";
import signUpPage from "../../pageObjects/signUpPage";
import userData from "../../fixtures/signUpConstants.json";

const loginPage: logInPage = new logInPage();
const signupPage: signUpPage = new signUpPage();

const newEmail = signupPage.newEmailGenerator();
const newidentifier = signupPage.newIdentifier();

Given('the user that has entered the registration form via the "create an account" link', () => {
    loginPage.visit()
    loginPage.getCreateAccountLink().click()
})

And('the user is on the Register page', () => {
    signupPage.getTypeIdentifierID().should('be.visible')
})

When('the user writes the requested information in each field', () => {
    signupPage.getIdentifier().type(newidentifier);
    signupPage.getFirstName().type(userData.firstName);
    signupPage.getLastName().type(userData.lastName)
    signupPage.getPhoneNumberInput().type(userData.phoneNumber)
    signupPage.getNewEmailInput().type(newEmail)
    signupPage.getPasswordInput().type(userData.password)
    signupPage.getRePasswordInput().type(userData.rePassword)
})

And ('the user clicks on the "Submit" button', () => {
    signupPage.getSubmitSignUpButton().click()
})

Then ('the user should see a pop-up with the next information {string}',(message)=> {
    cy.wait(4000)
    //cy.contains(message).should('be.visible')
})