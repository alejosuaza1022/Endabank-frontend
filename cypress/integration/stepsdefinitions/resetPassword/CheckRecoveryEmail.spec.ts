import {
    Before,
    Given,
    When,
    Then,
    But,
  } from "cypress-cucumber-preprocessor/steps";

When('the user clicks on the {string} link', () => {
    cy.get(".decoration-0").click();
})

Then('the user should see {string} in the pop-up', (labelText) => {
    cy.get('.p-6 > .relative > #email').as('resetPasswordEmail');

    cy.get("h3.text-center").should("have.text", labelText);
    cy.get('resetPasswordEmail').should("be.visible");
    cy.get('@resetPasswordEmail').invoke('attr', 'name').should('eq', 'email');
})
