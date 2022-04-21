import {
    Before,
    Given,
    When,
    Then,
    But,
  } from "cypress-cucumber-preprocessor/steps";
import DummyUser from "./DummyUser";


const loginUrl = Cypress.env('LOGIN_URL');

Given('the user is logged in', () => {
    cy.visit(loginUrl);
    cy.get('#emailLogin').type(DummyUser.email);
    cy.get('#passwrodLogin').type(DummyUser.currentPassword)
})