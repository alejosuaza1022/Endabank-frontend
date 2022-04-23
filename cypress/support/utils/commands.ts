Cypress.Commands.add('enterUrl', (url) => {
    cy.visit(url);
})

Cypress.Commands.add('login', (email, password) => {
    cy.get('input[id=email]').type(email);
    cy.get('input[id=password]').type(password);
    cy.get('button[type=submit]').click();
})

Cypress.Commands.add('verifySection', (url, time, url2)=>{
    cy.visit(url);
	cy.wait(time);
	cy.url().should('eq', url2);
})