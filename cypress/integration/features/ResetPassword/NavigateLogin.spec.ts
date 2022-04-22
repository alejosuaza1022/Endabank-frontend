import {
    Before,
    Given,
    When,
    Then,
    But,
  } from "cypress-cucumber-preprocessor/steps";

const loginUrl = Cypress.env('LOGIN_URL');
  
Given("the user is on the Login page", () => {
  cy.visit(loginUrl);
});