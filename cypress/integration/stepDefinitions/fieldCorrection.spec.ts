import {And,  When, Then , Given} from "cypress-cucumber-preprocessor/steps";

import logInPage from "../../pageObjects/logInPage";
import signUpPage from "../../pageObjects/signUpPage";
import wrongUserData from "../../fixtures/wrongConstants.json";
import userData from "../../fixtures/constants.json";

const loginPage: logInPage = new logInPage();
const signupPage: signUpPage = new signUpPage();

const newEmail = signupPage.newEmailGenerator();
const newindetifier = signupPage.newIdentifier();

const wrongEmail = signupPage.wrongEmailGenerator();
const wrongIndetifier = signupPage.wrongIdentifier();

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

})

When('the user is correcting value in a field',()=> {

    signupPage.getIdentifier().clear().type(newindetifier);
    signupPage.getFirstName().clear().type(userData.firstName);
    signupPage.getLastName().clear().type(userData.lastName)
    signupPage.getPhoneNumberInput().clear().type(userData.phoneNumber)
    signupPage.getNewEmailInput().clear().type(newEmail)
    signupPage.getPasswordInput().clear().type(userData.password)
    signupPage.getRePasswordInput().clear().type(userData.rePassword)
    

})

Then('the error message should dissappear',()=> {

    signupPage.getIdentifierMessage().should('not.exist')
    signupPage.getFirstNameMessage().should('not.exist')
    signupPage.getLastNameMessage().should('not.exist')
    signupPage.getPhoneNumberMessage().should('not.exist')
    signupPage.getNewEmailMessage().should('not.exist')
    signupPage.getPasswordMessage().should('not.exist')
    signupPage.getRePasswordMessage().should('not.exist')
    
})


