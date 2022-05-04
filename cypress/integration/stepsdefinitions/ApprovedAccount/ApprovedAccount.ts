import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('Logged user as admin in the approval section', ()=>{
    cy.visit('http://localhost:3000/log-in/');
    cy.login( 'juanpablo.perezleon@endava.com', 'Jpperezl25.')
    cy.get('#usersManagementSidebarElement').click()
})
When('The toggle is activated',()=>{
    cy.wait(2000)
    //cy.get('.sidebar').scrollTo('bottom')
    cy.get('#ToggleApproveUser42').scrollIntoView().should('not.be.checked')
})
Then('Change to true and the color turns blue',()=>{
    cy.wait(2000)
    cy.get('#ToggleApproveUser42').click({ force: true })
})