import basePage from "../pageObjects/basePage";

export default class logInPage extends basePage{

    //relativePath = '/log-in'
    relativePath: string = this.relativePath +'/log-in'

    getCreateAccountLink(){
        return(cy.get('#signUpHyperlink'))
    }

    getPasswordInput(){
        return(cy.get('#password'))
    }

    getEmailInput(){
        return(cy.get('#email'))
    }

}