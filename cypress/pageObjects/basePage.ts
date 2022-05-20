
export default class basePage {
    relativePath ='http://medellin-med.uc.r.appspot.com';

    constructor() {}

    visit(){
        return cy.visit(this.relativePath)
    }

    /*checkCorrectPath(){
        return cy.this.visit().should('include',this.relativePath)
    }*/
}