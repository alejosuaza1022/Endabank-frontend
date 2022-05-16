import {And,  When, Then , Given} from "cypress-cucumber-preprocessor/steps";

import logInPage from "../../../cypress/pageObjects/logInPage";
import signUpPage from "../../pageObjects/signUpPage";

const loginPage: logInPage = new logInPage();
const signupPage: signUpPage = new signUpPage();

const newEmail = signupPage.newEmailGenerator();
const newindetifier = signupPage.newIdentifier();

const wrongEmail = signupPage.wrongEmailGenerator();
const wrongIndetifier = signupPage.wrongIdentifier();


Given('the user has entered a wrong value in a field',()=>{
    cy.fixture('wrongConstants.json').then((wrongUserData) => {
        signupPage.getIdentifier().type(wrongIndetifier);
        signupPage.getFirstName().type(wrongUserData.firstName);
        signupPage.getLastName().type(wrongUserData.lastName)
        signupPage.getPhoneNumberInput().type(wrongUserData.phoneNumber)
        signupPage.getNewEmailInput().type(wrongEmail)
        signupPage.getPasswordInput().type(wrongUserData.password)
        signupPage.getRePasswordInput().type(wrongUserData.rePassword)
    })


})

Then('an error message should be displayed',()=>{
    cy.get('.grid-cc > :nth-child(2) > .text-xs').should('have.text','This field must be just numbers with a length between 6 and 20')
    cy.get(':nth-child(1) > .text-xs').should('have.text','This field must be just letters with a length between 2 and 20')
    cy.get('.grid > :nth-child(2) > .text-xs').should('have.text','This field must be just letters with a length between 2 and 20')
    cy.get(':nth-child(3) > .text-xs').should('have.text','This field must be just numbers with a length between 10 and 20')
    cy.get(':nth-child(4) > .text-xs').should('have.text','This field must be a valid email')
    cy.get(':nth-child(5) > .text-xs').should('have.text','1 Capital, 1 lowercase, 1 number, 1 special character, 8-20 characters')
    cy.get(':nth-child(6) > .text-xs').should('have.text', 'Passwords do not match')

})

When('the user is correcting value in a field',()=> {

    cy.fixture('constants.json').then((userData) => {
        signupPage.getIdentifier().type(newindetifier);
        signupPage.getFirstName().type(userData.firstName);
        signupPage.getLastName().type(userData.lastName)
        signupPage.getPhoneNumberInput().type(userData.phoneNumber)
        signupPage.getNewEmailInput().type(newEmail)
        signupPage.getPasswordInput().type(userData.password)
        signupPage.getRePasswordInput().type(userData.rePassword)
    })

})

Then('the error message should dissappear',()=> {

    cy.get('.grid-cc > :nth-child(2) > .text-xs').should('not.exist')
    cy.get(':nth-child(1) > .text-xs').should('not.exist')
    cy.get('.grid > :nth-child(2) > .text-xs').should('not.exist')
    cy.get(':nth-child(3) > .text-xs').should('not.exist')
    cy.get(':nth-child(4) > .text-xs').should('not.exist')
    cy.get(':nth-child(5) > .text-xs').should('not.exist')
    cy.get(':nth-child(6) > .text-xs').should('not.exist')



})


