import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import datauser from "../../fixtures/user.json"
import homePage from "../../pageObjects/homePage";
import logInPage from "../../pageObjects/logInPage";

const homepage: homePage = new homePage();
const loginPage: logInPage = new logInPage();

Given('the user is on the endabank login page', () => {
    loginPage.visit()
    cy.wait(1000)
})

When('the user types in a valid email',() =>{
    loginPage.writeEmail(datauser.emailNormalUser);
})

Then('the user types in a password',()=>{
    loginPage.writePassword(datauser.passwordNormalUser);
})

And( "the user clicks on login buttton",() =>{
    loginPage.getLoginButton().click();
})

And ("the user has to be allowed to see their profile, password management and Logout in the page",()=>{
    homepage.getProfileButton().should('exist');
    homepage.getLogoutButton().should('exist');
    homepage.getPasswordManagementSidebar().should('exist');
})

///////////////////////




//////////////////////

Given('the user is on the endabank login page', () => {
    loginPage.visit()
    cy.wait(1000)
})

When('the user types in an email with an incorrect format',() =>{
    loginPage.writeEmail(datauser.nonValidFormat);
})

And('the user types in a password',()=>{
    loginPage.writePassword(datauser.passwordNormalUser);
})

Then ("the user should see a highlight error message {string}",(errorMessage)=>{
    loginPage.getErrorMessageEmail().should('exist');
	loginPage.getErrorMessageEmail().contains(errorMessage).should('be.visible');
})