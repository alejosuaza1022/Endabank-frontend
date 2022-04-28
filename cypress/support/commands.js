import { generate } from "generate-password";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("generateFixture", () => {
  cy.writeFile("cypress/fixtures/dummy-user.json", {
    hits: Cypress._.times(20, () => {
      return {
        password: generate({
          length: 10,
          numbers: true,
          symbols: true,
          lowercase: true,
          uppercase: true,
          strict: true,
        }),
      };
    }),
  });
});
