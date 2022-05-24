import Url from "../fixtures/url.json";

export default class basePage {
    relativePath =Url.baseUrl;

    constructor() {}

    visit(){
        return cy.visit(this.relativePath)
    }

    /*checkCorrectPath(){
        return cy.this.visit().should('include',this.relativePath)
    }*/
}