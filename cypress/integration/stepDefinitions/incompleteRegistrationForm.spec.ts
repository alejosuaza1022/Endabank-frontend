import {And,  When, Then , Given} from "cypress-cucumber-preprocessor/steps";

import logInPage from "../../pageObjects/logInPage";
import signUpPage from "../../pageObjects/signUpPage";
import userData from "../../fixtures/constants.json";

const loginPage: logInPage = new logInPage();
const signupPage: signUpPage = new signUpPage();


Given('the user has not filled all mandatory fields',()=> {

    loginPage.visit()
    loginPage.getCreateAccountLink().click()
    signupPage.getFirstName().type(userData.firstName)

})

When('the user clicks on submit button',()=>{

    signupPage.getSubmitSignUpButton().click()
})

Then('an error message should be visible', ()=>{
    cy.contains('This field is required').should('be.visible')
})