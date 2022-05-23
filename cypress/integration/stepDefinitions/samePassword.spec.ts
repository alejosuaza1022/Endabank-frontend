import {And,  When, Then , Given} from "cypress-cucumber-preprocessor/steps";

import logInPage from "../../pageObjects/logInPage";
import signUpPage from "../../pageObjects/signUpPage";
import wrongUserData from "../../fixtures/wrongConstants.json";

const loginPage: logInPage = new logInPage();
const signupPage: signUpPage = new signUpPage();


Given('the user is creating and confirming his password', ()=> {

    loginPage.visit()
    loginPage.getCreateAccountLink().click()

})

When('the confirm password information does not match with password information',()=>{

    signupPage.getPasswordInput().type(wrongUserData.password)
    signupPage.getRePasswordInput().type(wrongUserData.rePassword)

})

Then('the field will be highlighted in red',()=>{
    signupPage.getRePasswordInput().should('have.css','borderColor', 'rgb(240, 82, 82')

})

And('a  message should be visible indicating "Passwords do not match"',()=>{

    signupPage.getRePasswordMessage().should('have.text', 'Passwords do not match')

})