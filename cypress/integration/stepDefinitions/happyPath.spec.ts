import {And,  When, Then , Given} from "cypress-cucumber-preprocessor/steps";

import logInPage from "../../pageObjects/logInPage";
import signUpPage from "../../pageObjects/signUpPage";
import userData from "../../fixtures/constants.json";

const loginPage: logInPage = new logInPage();
const signupPage: signUpPage = new signUpPage();

const newEmail = signupPage.newEmailGenerator();
const newindetifier = signupPage.newIdentifier();

Given('the user that has clicked on the {string} link in the Login page', (link) => {
    loginPage.visit()
    loginPage.getCreateAccountLink().click()
})

And('the user has been redirected to the Register page', () => {
    signupPage.getTypeIdentifierID().should('be.visible')
})

When('the user enters correct values in all fields', () => {
    signupPage.getIdentifier().type(newindetifier);
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
    cy.contains(message).should('be.visible')
})