import {
    Before,
    Given,
    When,
    Then,
    But,
  } from "cypress-cucumber-preprocessor/steps";
  
  Then('the user should see {string} in the link', (forgotPasswordLabel) => {
    cy.get(".decoration-0").should("have.text", forgotPasswordLabel);
  });


