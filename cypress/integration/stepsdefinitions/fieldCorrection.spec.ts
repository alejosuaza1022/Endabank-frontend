import {And,  When, Then , Given} from "cypress-cucumber-preprocessor/steps";

import LogInPage from "../../pageObjects/LogInPage";
import SignUpPage from "../../pageObjects/SignUpPage";
import wrongUserData from "../../fixtures/wrongConstants.json";
import userData from "../../fixtures/signUpConstants.json";

const logInPage: LogInPage = new LogInPage();
const signUpPage: SignUpPage = new SignUpPage();

const newEmail = signUpPage.newEmailGenerator();
const newidentifier = signUpPage.newIdentifier();

const wrongEmail = signUpPage.wrongEmailGenerator();
const wrongIdentifier = signUpPage.wrongIdentifier();

Given('the user is on the Register page',()=>{
    signUpPage.visit()
})

And('the user has typed wrong information in a field',()=>{
    
    signUpPage.getIdentifier().type(wrongIdentifier);
    signUpPage.getFirstName().type(wrongUserData.firstName);
    signUpPage.getLastName().type(wrongUserData.lastName)
    signUpPage.getPhoneNumberInput().type(wrongUserData.phoneNumber)
    signUpPage.getNewEmailInput().type(wrongEmail)
    signUpPage.getPasswordInput().type(wrongUserData.password)
    signUpPage.getRePasswordInput().type(wrongUserData.rePassword)
    signUpPage.getIdentifier().click()
})

Then('an error message should be displayed',()=>{

    signUpPage.getIdentifierMessage().should('have.text','This field must be just numbers with a length between 6 and 20')
    signUpPage.getFirstNameMessage().should('have.text','This field must be just letters with a length between 2 and 20')
    signUpPage.getLastNameMessage().should('have.text','This field must be just letters with a length between 2 and 20')
    signUpPage.getPhoneNumberMessage().should('have.text','This field must be just numbers with a length between 10 and 20')
    signUpPage.getNewEmailMessage().should('have.text','This field must be a valid email')
    signUpPage.getPasswordMessage().should('have.text','1 Capital, 1 lowercase, 1 number, 1 special character, 8-20 characters')
    signUpPage.getRePasswordMessage().should('have.text', 'Passwords do not match')

})

When('the user is correcting the information',()=> {

    signUpPage.getIdentifier().clear().type(newidentifier);
    signUpPage.getFirstName().clear().type(userData.firstName);
    signUpPage.getLastName().clear().type(userData.lastName)
    signUpPage.getPhoneNumberInput().clear().type(userData.phoneNumber)
    signUpPage.getNewEmailInput().clear().type(newEmail)
    signUpPage.getPasswordInput().clear().type(userData.password)
    signUpPage.getRePasswordInput().clear().type(userData.rePassword)
    

})

Then('the error message should disappear',()=> {

    signUpPage.getIdentifierMessage().should('not.exist')
    signUpPage.getFirstNameMessage().should('not.exist')
    signUpPage.getLastNameMessage().should('not.exist')
    signUpPage.getPhoneNumberMessage().should('not.exist')
    signUpPage.getNewEmailMessage().should('not.exist')
    signUpPage.getPasswordMessage().should('not.exist')
    signUpPage.getRePasswordMessage().should('not.exist')
    
})