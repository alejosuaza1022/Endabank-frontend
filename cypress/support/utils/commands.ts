Cypress.Commands.add('enterUrl', (command, url) => {
    cy.exec(command);
    cy.visit(url);
})

Cypress.Commands.add('login', (email, password) => {
    cy.get('input[id=email]').type(email);
    cy.get('input[id=password]').type(password);
    cy.get('button[type=submit]').click();
})