import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000/log-in/'
Given('I open Endabank login page and wants to sign in', () => {
    cy.visit(url)
    cy.wait(1000)
})