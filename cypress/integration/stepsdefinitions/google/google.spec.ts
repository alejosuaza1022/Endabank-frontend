import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
  //cy.exec('npm run dev')
  cy.visit(url)
  //cy.visit('http://localhost:3000/log-in/')
})