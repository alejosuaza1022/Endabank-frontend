import { createYield } from "typescript";

export default class basePage{
    relativePath ='';

    constructor() {}

    visit(){
        return cy.visit(this.relativePath)
    }

    checkCorrectPath(){
        return cy.this.visit().should('include',this.relativePath)
    }
}