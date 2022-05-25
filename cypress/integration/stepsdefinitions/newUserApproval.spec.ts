import {Given,  When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LogInPage from "../../pageObjects/LogInPage";
import HomePage from "../../pageObjects/HomePage";
import adminData from "../../fixtures/user.json";

const logInPage: LogInPage = new LogInPage();
const homePage: HomePage = new HomePage();

Given('the admin user has logged in', ()=>{
    logInPage.visit();
    logInPage.logIn(adminData.emailAdmin,adminData.passwordAdmin);
})

When('the admin user enters to the "Users management" page', ()=> {
    cy.wait(4000)
    homePage.getUsersManagement().click()
    
    
})

Then('the new users are visible', ()=> {
    cy.contains('leduinabel@hola.com').should('be.visible')
})

And('the new users are not approved yet', ()=> {

    cy.get('#ToggleApproveUser6').should('not.be.checked')

})