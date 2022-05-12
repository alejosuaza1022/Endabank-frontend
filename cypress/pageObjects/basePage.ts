
export default class basePage{
    relativePath ='http://localhost:3000';

    constructor() {}

    visit(){
        return cy.visit(this.relativePath)
    }

    /*checkCorrectPath(){
        return cy.this.visit().should('include',this.relativePath)
    }*/
}