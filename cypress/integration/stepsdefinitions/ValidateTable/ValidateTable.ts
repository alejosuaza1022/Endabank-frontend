import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('Logged user as admin', ()=>{
    cy.visit('http://localhost:3000/log-in/');
    //cy.enterUrl('npm run dev','http://localhost:3000/log-in/')
    cy.login( 'juanpablo.perezleon@endava.com', 'Jpperezl25.')
})
When('Im in the session User Approval',()=>{
    cy.wait(2000)
    cy.get('#usersManagementSidebarElement').click()
})
Then('I verify that the table user approval contains this: FIRST NAME, LAST NAME, EMAIL, APPROVED',()=>{
    cy.wait(2000)
    cy.get('thead').find('tr th').contains('First Name')
    cy.get('thead').find('tr th').contains('Last Name')
    cy.get('thead').find('tr th').contains('Email')
    cy.get('thead').find('tr th').contains('Approved')
})