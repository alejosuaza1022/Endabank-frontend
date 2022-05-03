import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('Logged user as admin in the approval section', ()=>{
    cy.visit('http://localhost:3000/log-in/');
    cy.login( 'juanpablo.perezleon@endava.com', 'Jpperezl25.')
    cy.get(':nth-child(4) > .flex').click()
})
When('The toggle change to disable',()=>{
    cy.wait(2000)
    cy.get('#ToggleApproveUser42').should('be.checked')
})
Then('Toggle change to false and the color turns grey',()=>{
    cy.wait(2000)
    cy.get('#ToggleApproveUser42').click({ force: true })
   
})