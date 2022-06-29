import {And,  When, Then , Given} from "cypress-cucumber-preprocessor/steps";

import LogInPage from "../../pageObjects/LogInPage";
import SignUpPage from "../../pageObjects/SignUpPage";
import userData from "../../fixtures/signUpConstants.json";

const logInPage: LogInPage = new LogInPage();
const signUpPage: SignUpPage = new SignUpPage();


Given('the user has not completed the mandatory fields',()=> {

    logInPage.visit()
    logInPage.getCreateAccountLink().click()
    signUpPage.getFirstName().type(userData.firstName)

})

When('the user tries to submit the incomplete information',()=>{

    signUpPage.getSubmitSignUpButton().click()
})

Then('an error message should be visible', ()=>{
    cy.contains('This field is required').should('be.visible')
})