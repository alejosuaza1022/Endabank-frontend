import {
    Before,
    Given,
    When,
    Then,
    But,
  } from "cypress-cucumber-preprocessor/steps";

When('the user clicks on {string} link', (linkText) => {
    cy.contains(`${linkText}`).click();
})

// Then('the user should see {string} in the pop-up', (labelText) => {
//     cy.get('.p-6 > .relative > #email').as('resetPasswordEmail');

//     cy.get("h3.text-center").should("have.text", labelText);
//     // cy.get('resetPasswordEmail').should("be.visible");
//     // cy.get('@resetPasswordEmail').invoke('attr', 'name').should('eq', 'email');
// })

Then('the user should see the following elements:', (table) => {
    // const resetPasswordEmailLabel: Element = cy.get('.p-6 > .text-center'); 
    // const resetPasswordEmail: Element = cy.get('.p-6 > .relative > #email'); 
    // const resetPasswordSubmitButton: Element = cy.get('.flex > [type="submit"]'); 
    // const resetPasswordCloseButton: Element = cy.get('[type="button"]'); 
    // // cy.get('.p-6 > .text-center').as('resetPasswordEmailLabel')
    // // cy.get('.p-6 > .relative > #email').as('resetPasswordEmail');
    // // cy.get('.flex > [type="submit"]').as('resetPasswordSubmitButton');
    // // cy.get('[type="button"]').as('resetPasswordCloseButton');

    // const elements: Array<Element> = [
    //     resetPasswordEmailLabel,
    //     resetPasswordEmail,
    //     resetPasswordSubmitButton,
    //     resetPasswordCloseButton,]

    // table.hashes().forEach((row: any, index: number) => {
    //     cy.get(`@${elements[index]}`).should('eq', row.Value);
    //     console.log(row.Value);
    // });

    cy.get('.p-6 > .text-center').should("have.text", table.hashes()[0].Value)
    cy.get('.p-6 > .relative > #email').invoke('attr', 'name').should('eq', table.hashes()[1].Value)
    cy.get('.flex > [type="submit"]').should('have.text', table.hashes()[2].Value)
    cy.contains('Close').should("have.text", table.hashes()[3].Value)
    console.log(cy.get('.p-6 > .text-center'))
})
