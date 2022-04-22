import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I open Endabank login page and wants to sing in', () => {
    cy.enterUrl('npm run dev', url);
})