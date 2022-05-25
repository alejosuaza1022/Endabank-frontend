import {And,  When, Then , Given} from "cypress-cucumber-preprocessor/steps";

import LogInPage from "../../pageObjects/LogInPage";
import SignUpPage from "../../pageObjects/SignUpPage";
import userData from "../../fixtures/signUpConstants.json";

const logInPage: LogInPage = new LogInPage();
const signUpPage: SignUpPage = new SignUpPage();

const newEmail = signUpPage.newEmailGenerator();
const newidentifier = signUpPage.newIdentifier();

Given('the user that has entered the registration form via the "create an account" link', () => {
    logInPage.visit()
    logInPage.getCreateAccountLink().click()
})

And('the user is on the Register page', () => {
    signUpPage.getTypeIdentifierID().should('be.visible')
})

When('the user writes the requested information in each field', () => {
    signUpPage.getIdentifier().type(newidentifier);
    signUpPage.getFirstName().type(userData.firstName);
    signUpPage.getLastName().type(userData.lastName)
    signUpPage.getPhoneNumberInput().type(userData.phoneNumber)
    signUpPage.getNewEmailInput().type(newEmail)
    signUpPage.getPasswordInput().type(userData.password)
    signUpPage.getRePasswordInput().type(userData.rePassword)
})

And ('the user clicks on the "Submit" button', () => {
    signUpPage.getSubmitSignUpButton().click()
})

Then ('the user should see a pop-up with the next information {string}',(message)=> {
    cy.wait(4000)
    //cy.contains(message).should('be.visible')
})