import {Given,  When, Then, And } from "cypress-cucumber-preprocessor/steps";
import logInPage from "../../../cypress/pageObjects/logInPage";
import homePage from "../../../cypress/pageObjects/homePage";
import adminData from "../../fixtures/user.json";

const loginPage: logInPage = new logInPage();
const homePageInstance: homePage = new homePage();

Given('the admin user has logged in', ()=>{
    loginPage.visit();
    loginPage.logIn(adminData.emailAdmin,adminData.passwordAdmin);
})

When('the admin user enters to the "Users management" page', ()=> {
    cy.wait(4000)
    homePageInstance.getUsersManagement().click()
    
    
})

Then('the new users are visible', ()=> {
    cy.contains('leduinabel@hola.com').should('be.visible')
})

And('the new users are not approved yet', ()=> {

    cy.get('#ToggleApproveUser6').should('not.be.checked')

})