import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import datauser from "../../fixtures/user.json"
import HomePage from "../../pageObjects/HomePage";
import LogInPage from "../../pageObjects/LogInPage";
import MerchantApprovalLogPage from "../../pageObjects/MerchantApprovalLogPage";
import ThirdPartyAppPage from "../../pageObjects/ThirdPartyAppPage"

const homePage: HomePage = new HomePage();
const logInPage: LogInPage = new LogInPage();
const merchantApprovalLogPage: MerchantApprovalLogPage = new MerchantApprovalLogPage();
const thirdPartyAppPage: ThirdPartyAppPage = new ThirdPartyAppPage();

Given('the products are shown on the merchant website', () => {
    thirdPartyAppPage.visit()
    cy.wait(1000)
})

When('the customer want to select one or many products',() =>{
    thirdPartyAppPage.getAirJordan1AddButton().click();
    thirdPartyAppPage.getJordanRetro4AddButton().click();
    thirdPartyAppPage.getAirJordan11AddButton().click();
    thirdPartyAppPage.getJordanRacerAddButton().click();
    thirdPartyAppPage.getAirForce1AddButton().click();
    thirdPartyAppPage.getNikeAir96AddButton().click();
    thirdPartyAppPage.getAdidasYeezyAddButton().click();
    thirdPartyAppPage.getJordan1LowAddButton().click();
})

Then('the products will be added to the shopping car',()=>{
    thirdPartyAppPage.getShoppingCarButton().click();
    thirdPartyAppPage.getAirJordan1Label().should('exist');
    thirdPartyAppPage.getJordanRetro4Label().should('exist');
    thirdPartyAppPage.getAirJordan11Label().should('exist');
    thirdPartyAppPage.getJordanRacerLabel().should('exist');
    thirdPartyAppPage.getAirForce1Label().should('exist');
    thirdPartyAppPage.getNikeAir96Label().should('exist');
    thirdPartyAppPage.getAdidasYeezyLabel().should('exist');
    thirdPartyAppPage.getJordan1LowLabel().should('exist');
})

And("change the value of the total amount",() =>{
    cy.get(':nth-child(1) > .text-right').should(($div) => {
        expect($div.text().trim()).equal('$1,802,000');
      });
})

/////////////////////////////////////////////////////////////////////////////
Given('the products are shown on the merchant website', () => {
    thirdPartyAppPage.visit()
    cy.wait(1000)
})

And('the customer want to select some products',() =>{
    thirdPartyAppPage.getJordanRacerAddButton().click();
    thirdPartyAppPage.getAirForce1AddButton().click();
    thirdPartyAppPage.getNikeAir96AddButton().click();
    thirdPartyAppPage.getAdidasYeezyAddButton().click();
    thirdPartyAppPage.getJordan1LowAddButton().click();
})

And('the products will be displayed at the shopping car',()=>{
    thirdPartyAppPage.getShoppingCarButton().click();
    thirdPartyAppPage.getJordanRacerLabel().should('exist');
    thirdPartyAppPage.getAirForce1Label().should('exist');
    thirdPartyAppPage.getNikeAir96Label().should('exist');
    thirdPartyAppPage.getAdidasYeezyLabel().should('exist');
    thirdPartyAppPage.getJordan1LowLabel().should('exist');
})

And("change the value of the amount",() =>{
     cy.get(':nth-child(1) > .text-right').should(($div) => {
        expect($div.text().trim()).equal('$1,062,000');
      });  
})

When("the customer want to unselect one or many products",()=>{
    thirdPartyAppPage.getNikeAir96RemoveButton().click();
    thirdPartyAppPage.getAdidasYeezyRemoveButton().click();
    thirdPartyAppPage.getJordan1LowRemoveButton().click();
})

Then("the products will be removed from the shopping car",()=>{
    thirdPartyAppPage.getNikeAir96Label().should('not.exist');
    thirdPartyAppPage.getAdidasYeezyLabel().should('not.exist');
    thirdPartyAppPage.getJordan1LowLabel().should('not.exist');
})

And("change the value of the total",()=>{
    cy.get(':nth-child(1) > .text-right').should(($div) => {
        expect($div.text().trim()).equal('$452,000');
      });  
 })
