import {
    Before,
    Given,
    When,
    Then,
    But,
  } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../page-object/LoginPage";

const loginPage: LoginPage = new LoginPage();
const loginUrl = Cypress.env('LOGIN_URL');

Given('the user is logged in', () => {
    cy.visit(loginUrl);
    // cy.get('[data-id="emailInputLogin"]').type(DummyUser.email);
    // cy.get('[data-id="passwordInputLogin"]').type(DummyUser.password)
    // cy.get('#submitLogin').click();
    cy.fixture('existing-user.json').then((userData) => {
      loginPage.writeEmail(userData.email);
      loginPage.writePassword(userData.password);
    })
    loginPage.clickLoginButton();
})