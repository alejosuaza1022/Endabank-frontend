import {And,  When, Then , Given} from "cypress-cucumber-preprocessor/steps";

import LogInPage from "../../pageObjects/LogInPage";
import SignUpPage from "../../pageObjects/SignUpPage";
import wrongUserData from "../../fixtures/wrongConstants.json";

const logInPage: LogInPage = new LogInPage();
const signUpPage: SignUpPage = new SignUpPage();


Given('the user is creating and confirming his password', ()=> {

    logInPage.visit()
    logInPage.getCreateAccountLink().click()

})

When('the confirm password information does not match with password information',()=>{

    signUpPage.getPasswordInput().type(wrongUserData.password)
    signUpPage.getRePasswordInput().type(wrongUserData.rePassword)
    signUpPage.getFirstName().click()

})

Then('the field will be highlighted in red',()=>{
    signUpPage.getRePasswordInput().should('have.css','borderColor', 'rgb(240, 82, 82)')

})

And('a  message should be visible indicating "Passwords do not match"',()=>{

    signUpPage.getRePasswordMessage().should('have.text', 'Passwords do not match')

})