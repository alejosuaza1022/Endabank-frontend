import {
    Before,
    Given,
    When,
    Then,
    But,
    And
  } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../page-object/LoginPage";

const loginUrl: string = Cypress.env('LOGIN_URL');
const loginPage: LoginPage = new LoginPage();

Given("the user is on the Login page", () => {
  cy.visit(loginUrl);
});

And('the user clicks on "Forgot password?" link', () => {
  // cy.get("#forgotPasswordHyperlink").click();
  loginPage.clickForgotPasswordHyperlink();
})