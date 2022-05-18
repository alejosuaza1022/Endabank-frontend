import {Given,  When, Then, And } from "cypress-cucumber-preprocessor/steps";
import logInPage from "../../../cypress/pageObjects/logInPage";
import homePage from "../../../cypress/pageObjects/homePage";
import adminData from "../../fixtures/adminCredentials.json";

const loginPage: logInPage = new logInPage();
const homePage: homePage = new homePage();

Given('the admin user has logged in', ()=>{
    loginPage.visit()
    loginPage.getEmailInput().type(adminData.Email)
    loginPage.getPasswordInput().type(adminData.password)
})

When('the admin user clicks on "Users management"', ()=> {

    homePage.getUsersManagement().click()
    cy.wait(2000)
    
})

Then('the new users are visible', ()=> {
    cy.contains('leduinabel@hola.com').should('be.visible')
})

And('the new users are not approved yet', ()=> {

    cy.get('#ToggleApproveUser6').should('not.be.checked')

})