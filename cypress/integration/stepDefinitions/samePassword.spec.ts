import {And,  When, Then , Given} from "cypress-cucumber-preprocessor/steps";

import logInPage from "../../pageObjects/logInPage";
import signUpPage from "../../pageObjects/signUpPage";
import wrongUserData from "../../fixtures/wrongConstants.json";

const loginPage: logInPage = new logInPage();
const signupPage: signUpPage = new signUpPage();


Given('the user is filling the password and confirm password fields', ()=> {

    loginPage.visit()
    loginPage.getCreateAccountLink().click()

})

When('the user writes different values on those fields',()=>{

    signupPage.getPasswordInput().type(wrongUserData.password)
    signupPage.getRePasswordInput().type(wrongUserData.rePassword)

})

Then('the field will be highlighted in red',()=>{
    signupPage.getRePasswordInput().should('have.css','borderColor', 'rgb(240, 82, 82')

})

And('a  message is shown indicating "Passwords do not match"',()=>{

    signupPage.getRePasswordMessage().should('have.text', 'Passwords do not match')

})