import {
    Before,
    Given,
    When,
    Then,
    But,
  } from "cypress-cucumber-preprocessor/steps";
import DummyUser from "../../../test-data/DummyUser";

const loginUrl = Cypress.env('LOGIN_URL');

Given('the user is logged in', () => {
    cy.visit(loginUrl);
    cy.get('[data-id="emailInputLogin"]').type(DummyUser.email);
    cy.get('[data-id="passwordInputLogin"]').type(DummyUser.currentPassword)
    cy.get('#submitLogin').click();
})