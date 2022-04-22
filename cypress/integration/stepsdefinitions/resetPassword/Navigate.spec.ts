import {
    Before,
    Given,
    When,
    Then,
    But,
  } from "cypress-cucumber-preprocessor/steps";
  

const url = "http://localhost:3000";
  
Given("the user is on the Login page", () => {
cy.visit(`${url}/log-in`);
});