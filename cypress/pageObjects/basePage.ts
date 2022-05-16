export default class basePage{
    relativePath='http://medellin-med.uc.r.appspot.com/';

    visit(){
        return cy.visit(this.relativePath)
    }

}