import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import  user  from "../../../fixtures/user.json";
import adminPanelPage from "../../../support/selectors/adminPanelPage"

Given('the user is logged in as an {string} user', (userType)=>{
    //cy.visit('http://localhost:3000/log-in/');
    //cy.login( user.email, user.password );
    return true;
})

And('the user is on the Admin Panel section',()=>{
    //cy.get(adminPanelPage.USER_MANAGEMENT_BUTTON).click();
    return true;
})

When('The toggle is activated',()=>{
    //cy.wait(2000)
    //cy.get(adminPanelPage.USER_TOGGLE).scrollIntoView().should('not.be.checked')
    return true;
})
Then('Change to true and the color turns blue',()=>{
    // cy.wait(2000)
    // cy.get(adminPanelPage.USER_TOGGLE).click({ force: true })
    return true;
})