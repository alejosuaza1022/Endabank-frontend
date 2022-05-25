import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import datauser from "../../fixtures/user.json"
import HomePage from "../../pageObjects/HomePage";
import LogInPage from "../../pageObjects/LogInPage";

const homePage: HomePage = new HomePage();
const logInPage: LogInPage = new LogInPage();

Given('the user is on the endabank login page', () => {
    logInPage.visit()
    cy.wait(1000)
})

When('the user types in a valid email',() =>{
    logInPage.writeEmail(datauser.emailNormalUser);
})

Then('the user types in a password',()=>{
    logInPage.writePassword(datauser.passwordNormalUser);
})

And( "the user clicks on login buttton",() =>{
    logInPage.getLoginButton().click();
})

And ("the user has to be allowed to see their profile, password management and Logout in the page",()=>{
    homePage.getProfileButton().should('exist');
    homePage.getLogoutButton().should('exist');
    homePage.getPasswordManagementSidebar().should('exist');
})

///////////////////////




//////////////////////

Given('the user is on the endabank login page', () => {
    logInPage.visit()
    cy.wait(1000)
})

When('the user types in an email with an incorrect format',() =>{
    logInPage.writeEmail(datauser.nonValidFormat);
})

And('the user types in a password',()=>{
    logInPage.writePassword(datauser.passwordNormalUser);
})

Then ("the user should see a highlight error message {string}",(errorMessage)=>{
    logInPage.getErrorMessageEmail().should('exist');
	logInPage.getErrorMessageEmail().contains(errorMessage).should('be.visible');
})