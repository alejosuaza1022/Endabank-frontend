import basePage from "../basePage";

export default class logInPage extends basePage{
    relativePath = '/log-in'

    getCreateAccountLink(){
        return(cy.get('#signUpHyperLink'))
    }

    getPasswordInput(){
        return(cy.get('#password'))
    }

    getEmailInput(){
        return(cy.get('#email'))
    }
    
    checkElementsDisplayed(elements){
        
    }

}