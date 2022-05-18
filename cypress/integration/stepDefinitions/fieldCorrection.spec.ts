import {And,  When, Then , Given} from "cypress-cucumber-preprocessor/steps";

<<<<<<< HEAD
import logInPage from "../../../cypress/pageObjects/logInPage";
import signUpPage from "../../pageObjects/signUpPage";
=======
import logInPage from "../../pageObjects/logInPage";
import signUpPage from "../../pageObjects/signUpPage";
import wrongUserData from "../../fixtures/wrongConstants.json";
import { sign } from "crypto";
>>>>>>> 1e67c1384f2f72d015030e4f343a2c9c3734d6f4

const loginPage: logInPage = new logInPage();
const signupPage: signUpPage = new signUpPage();

const newEmail = signupPage.newEmailGenerator();
const newindetifier = signupPage.newIdentifier();

const wrongEmail = signupPage.wrongEmailGenerator();
const wrongIndetifier = signupPage.wrongIdentifier();

<<<<<<< HEAD

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
=======
Given('the user has been redirected to the Register page',()=>{
    signupPage.visit()
})

And('the user has entered a wrong value in a field',()=>{
    signupPage.getIdentifier().type(wrongIndetifier);
    signupPage.getFirstName().type(wrongUserData.firstName);
    signupPage.getLastName().type(wrongUserData.lastName)
    signupPage.getPhoneNumberInput().type(wrongUserData.phoneNumber)
    signupPage.getNewEmailInput().type(wrongEmail)
    signupPage.getPasswordInput().type(wrongUserData.password)
    signupPage.getRePasswordInput().type(wrongUserData.rePassword)
    signupPage.getIdentifier().click()
})

Then('an error message should be displayed',()=>{
    signupPage.getIdentifierMessage().should('have.text','This field must be just numbers with a length between 6 and 20')
    signupPage.getFirstNameMessage().should('have.text','This field must be just letters with a length between 2 and 20')
    signupPage.getLastNameMessage().should('have.text','This field must be just letters with a length between 2 and 20')
    signupPage.getPhoneNumberMessage().should('have.text','This field must be just numbers with a length between 10 and 20')
    signupPage.getNewEmailMessage().should('have.text','This field must be a valid email')
    signupPage.getPasswordMessage().should('have.text','1 Capital, 1 lowercase, 1 number, 1 special character, 8-20 characters')
    signupPage.getRePasswordMessage().should('have.text', 'Passwords do not match')
>>>>>>> 1e67c1384f2f72d015030e4f343a2c9c3734d6f4

})

When('the user is correcting value in a field',()=> {

    cy.fixture('constants.json').then((userData) => {
<<<<<<< HEAD
        signupPage.getIdentifier().type(newindetifier);
        signupPage.getFirstName().type(userData.firstName);
        signupPage.getLastName().type(userData.lastName)
        signupPage.getPhoneNumberInput().type(userData.phoneNumber)
        signupPage.getNewEmailInput().type(newEmail)
        signupPage.getPasswordInput().type(userData.password)
        signupPage.getRePasswordInput().type(userData.rePassword)
=======
        signupPage.getIdentifier().clear().type(newindetifier);
        signupPage.getFirstName().clear().type(userData.firstName);
        signupPage.getLastName().clear().type(userData.lastName)
        signupPage.getPhoneNumberInput().clear().type(userData.phoneNumber)
        signupPage.getNewEmailInput().clear().type(newEmail)
        signupPage.getPasswordInput().clear().type(userData.password)
        signupPage.getRePasswordInput().clear().type(userData.rePassword)
>>>>>>> 1e67c1384f2f72d015030e4f343a2c9c3734d6f4
    })

})

Then('the error message should dissappear',()=> {

<<<<<<< HEAD
    cy.get('.grid-cc > :nth-child(2) > .text-xs').should('not.exist')
    cy.get(':nth-child(1) > .text-xs').should('not.exist')
    cy.get('.grid > :nth-child(2) > .text-xs').should('not.exist')
    cy.get(':nth-child(3) > .text-xs').should('not.exist')
    cy.get(':nth-child(4) > .text-xs').should('not.exist')
    cy.get(':nth-child(5) > .text-xs').should('not.exist')
    cy.get(':nth-child(6) > .text-xs').should('not.exist')



=======
    signupPage.getIdentifierMessage().should('not.exist')
    signupPage.getFirstNameMessage().should('not.exist')
    signupPage.getLastNameMessage().should('not.exist')
    signupPage.getPhoneNumberMessage().should('not.exist')
    signupPage.getNewEmailMessage().should('not.exist')
    signupPage.getPasswordMessage().should('not.exist')
    signupPage.getRePasswordMessage().should('not.exist')
    
>>>>>>> 1e67c1384f2f72d015030e4f343a2c9c3734d6f4
})


