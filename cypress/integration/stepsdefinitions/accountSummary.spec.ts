import {And,  When, Then , Given} from "cypress-cucumber-preprocessor/steps";
import LogInPage from "../../pageObjects/LogInPage";
import user from "../../fixtures/user.json";
import HomePage from "../../pageObjects/HomePage";
import Url from "../../fixtures/url.json";

const logInPage: LogInPage = new LogInPage();
const homePage: HomePage = new HomePage();

Given('the user is logged in Endabank', () => {
    logInPage.visit();
    cy.wait(Url.wait);
    logInPage.logIn(user.emailAdmin,user.passwordAdmin);
});
When("the user is on the Account summary section", () => {
    homePage.getAccountSummary().click()
});
Then('the user should see the following information',()=>{
    cy.wait(Url.wait);
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .font-bold');
    cy.get('.font-light');
    cy.get(':nth-child(2) > .p-4');
});
And("a maximum of 10 transactions per page", () => {
    cy.wait(Url.wait);
    cy.get(':nth-child(2) > .p-4').find('li').should(($li)=>{expect($li).to.have.length.of.at.most(10)});
});
