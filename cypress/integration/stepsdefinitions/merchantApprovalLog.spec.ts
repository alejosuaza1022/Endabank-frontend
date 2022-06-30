import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import datauser from "../../fixtures/user.json"
import HomePage from "../../pageObjects/HomePage";
import LogInPage from "../../pageObjects/LogInPage";
import MerchantApprovalLogPage from "../../pageObjects/MerchantApprovalLogPage";

const homePage: HomePage = new HomePage();
const logInPage: LogInPage = new LogInPage();
const merchantApprovalLogPage: MerchantApprovalLogPage = new MerchantApprovalLogPage();

Given('the admin is on the endabank login page', () => {
    logInPage.visit()
    cy.wait(1000)
})

And('the admin types in a valid email',() =>{
    logInPage.writeEmail(datauser.emailAdmin);
})

And('the admin types in a password',()=>{
    logInPage.writePassword(datauser.passwordAdmin);
})

And("the admin clicks on login buttton",() =>{
    logInPage.getLoginButton().click();
})

When('the admin clicks on merchant approval log button',() =>{
    homePage.getMerchantApprovalLogButton().click()
})

Then('the admin is allowed to see the merchant approval log section',()=>{
    merchantApprovalLogPage.getSubmitFilterButton().should('exist');
    merchantApprovalLogPage.getStartDateField().should('exist');
    merchantApprovalLogPage.getEndDateField().should('exist');
    merchantApprovalLogPage.getMerchantSearchInputField().should('exist');
    merchantApprovalLogPage.getReviewingUserSearchInputField().should('exist');
})
/////////////////////////////////////////////////////////////////////////////
Given('the admin is on the endabank login page', () => {
    logInPage.visit()
    cy.wait(1000)
})

And('the admin types in a valid email',() =>{
    logInPage.writeEmail(datauser.emailAdmin);
})

And('the admin types in a password',()=>{
    logInPage.writePassword(datauser.passwordAdmin);
})

And("the admin clicks on login buttton",() =>{
    logInPage.getLoginButton().click();
})

And('the admin clicks on merchant approval log button',() =>{
    homePage.getMerchantApprovalLogButton().click()
})

And('the admin is allowed to see the merchant approval log section',()=>{
    merchantApprovalLogPage.getSubmitFilterButton().should('exist');
    merchantApprovalLogPage.getStartDateField().should('exist');
    merchantApprovalLogPage.getEndDateField().should('exist');
    merchantApprovalLogPage.getMerchantSearchInputField().should('exist');
    merchantApprovalLogPage.getReviewingUserSearchInputField().should('exist');
})

When('the admin uses the merchant filter',() =>{
    //merchantApprovalLogPage.writeMerchant(datauser.merchantSearch1);
    cy.get('#merchantSearchInput').type("test");
})

And('the admin clicks on submit filter button',() =>{
    merchantApprovalLogPage.getSubmitFilterButton().click()
})

Then('the grid will show the information according to the merchant filter',()=>{
    cy.contains('test').should('exist');
})
/////////////////////////////////////////////////
Given('the admin is on the endabank login page', () => {
    logInPage.visit()
    cy.wait(1000)
})

And('the admin types in a valid email',() =>{
    logInPage.writeEmail(datauser.emailAdmin);
})

And('the admin types in a password',()=>{
    logInPage.writePassword(datauser.passwordAdmin);
})

And("the admin clicks on login buttton",() =>{
    logInPage.getLoginButton().click();
})

And('the admin clicks on merchant approval log button',() =>{
    homePage.getMerchantApprovalLogButton().click()
})

And('the admin is allowed to see the merchant approval log section',()=>{
    merchantApprovalLogPage.getSubmitFilterButton().should('exist');
    merchantApprovalLogPage.getStartDateField().should('exist');
    merchantApprovalLogPage.getEndDateField().should('exist');
    merchantApprovalLogPage.getMerchantSearchInputField().should('exist');
    merchantApprovalLogPage.getReviewingUserSearchInputField().should('exist');
})

When('the admin uses the reviewing user filter',() =>{
    //merchantApprovalLogPage.writeReviewingUser(datauser.reviewingUserSearch2);
    cy.get('#reviewingUserSearchInput').type("Daniel");
})

And('the admin clicks on submit filter button',() =>{
    merchantApprovalLogPage.getSubmitFilterButton().click()
})

Then('the grid will show the information according to the reviewing user filter',()=>{
    cy.contains('Daniel').should('exist');
})
//////////////////////////////////////////////////////
Given('the admin is on the endabank login page', () => {
    logInPage.visit()
    cy.wait(1000)
})

And('the admin types in a valid email',() =>{
    logInPage.writeEmail(datauser.emailAdmin);
})

And('the admin types in a password',()=>{
    logInPage.writePassword(datauser.passwordAdmin);
})

And("the admin clicks on login buttton",() =>{
    logInPage.getLoginButton().click();
})

And('the admin clicks on merchant approval log button',() =>{
    homePage.getMerchantApprovalLogButton().click()
})

And('the admin is allowed to see the merchant approval log section',()=>{
    merchantApprovalLogPage.getSubmitFilterButton().should('exist');
    merchantApprovalLogPage.getStartDateField().should('exist');
    merchantApprovalLogPage.getEndDateField().should('exist');
    merchantApprovalLogPage.getMerchantSearchInputField().should('exist');
    merchantApprovalLogPage.getReviewingUserSearchInputField().should('exist');
})

When('the admin uses the reviewing user filter and the merchant filter',() =>{
    //merchantApprovalLogPage.writeReviewingUser(datauser.reviewingUserSearch1);
    cy.get('#reviewingUserSearchInput').type("Facundo");
    cy.get('#merchantSearchInput').type("test");
})

/*And('the admin uses the merchant filter too',()=>{
    //merchantApprovalLogPage.writeMerchant(datauser.merchantSearch1);
    cy.get('#merchantSearchInput').type("test");
})*/

And('the admin clicks on submit filter button',() =>{
    merchantApprovalLogPage.getSubmitFilterButton().click()
})

Then('the grid will show the information according to the merchant and reviewing user filters',()=>{
    cy.contains('Facundo').should('exist');
    cy.contains('test').should('exist');
})
//////////////////////////////////////////////////////
Given('the admin is on the endabank login page', () => {
    logInPage.visit()
    cy.wait(1000)
})

And('the admin types in a valid email',() =>{
    logInPage.writeEmail(datauser.emailAdmin);
})

And('the admin types in a password',()=>{
    logInPage.writePassword(datauser.passwordAdmin);
})

And("the admin clicks on login buttton",() =>{
    logInPage.getLoginButton().click();
})

And('the admin clicks on merchant approval log button',() =>{
    homePage.getMerchantApprovalLogButton().click()
})

And('the admin is allowed to see the merchant approval log section',()=>{
    merchantApprovalLogPage.getSubmitFilterButton().should('exist');
    merchantApprovalLogPage.getStartDateField().should('exist');
    merchantApprovalLogPage.getEndDateField().should('exist');
    merchantApprovalLogPage.getMerchantSearchInputField().should('exist');
    merchantApprovalLogPage.getReviewingUserSearchInputField().should('exist');
})

When('the admin uses the merchant filter with wrong data',() =>{
    //merchantApprovalLogPage.writeMerchant(datauser.merchantSearch1);
    cy.get('#merchantSearchInput').type("test4");
})

And('the admin clicks on submit filter button',() =>{
    merchantApprovalLogPage.getSubmitFilterButton().click()
})

Then('the grid will show the information according to the criteria',()=>{
    cy.contains('test4').should('not.exist');
})

////////////////////////////////////////////////
                                             
