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
  
  Then('the user should see {string} in the link', (forgotPasswordLabel) => {
    cy.get(".decoration-0").should("have.text", forgotPasswordLabel);
  });
  
  When('the user clicks on the {string} link', () => {
      cy.get(".decoration-0").click();
  })

  Then('the user should see {string} in the pop-up', (labelText) => {
      cy.get("h3.text-center").should("have.text", labelText);
      cy.get('.p-6 > form > .relative > #email').should("be.visible");
      cy.get('.p-6 > form > .relative > #email').should("have.text", "Email")
  })

