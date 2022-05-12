import basePage from "../basePage";

export default class registerPage extends basePage{
    relativePath = '/sign-up'

    getIdTypeDropDown(){
        return(cy.get('#typeIdentifierId'))
    }

    getIdentifierInput(){
        return(cy.get('#identifier'))
    }

    getFirstNameInput(){
        return(cy.get('#firstName'))
    }

    

}