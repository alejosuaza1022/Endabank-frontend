Cypress.Commands.add('enterUrl', (command, url) => {
    cy.exec(command);
    cy.visit(url);
})

Cypress.Commands.add('login', (username, password) => {
    cy.get('input[id=email]').type(username);
    cy.get('input[id=password]').type(password);
    cy.get('button[type=submit]').click();
})