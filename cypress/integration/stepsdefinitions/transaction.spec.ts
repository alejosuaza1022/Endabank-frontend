import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pageObjects/HomePage";
import datauser from "../../fixtures/user.json"
import LogInPage from "../../pageObjects/LogInPage";
import TransactionPage from "../../pageObjects/TransactionPage";



const homePage: HomePage = new HomePage();
const logInPage: LogInPage = new LogInPage();
const transactionPage: TransactionPage = new TransactionPage();

Given('the user has logged in', () => {
    logInPage.visit();
    cy.wait(1000);
    logInPage.writeEmail(datauser.emailAdmin);
    logInPage.writePassword(datauser.passwordAdmin);
    logInPage.getLoginButton().click();

})

When('the user has entered the "transfer transaction" page', ()=> {
    homePage.getTransactionElement().click();
    cy.wait(1000);
    transactionPage.getTransactionForm().should('be.visible');    
})

Then('the user should be able to complete the form succesfully', ()=> {
    transactionPage.getDestinyAccount().type('1000000000000000');
    transactionPage.getAmount().type('400');
    transactionPage.getSubmitTransactionFormButton().click()


})

And('the user should see the transaction confirmation and summary', ()=> {
    transactionPage.getTransactionSummaryPopUp().should('be.visible');
    
})


