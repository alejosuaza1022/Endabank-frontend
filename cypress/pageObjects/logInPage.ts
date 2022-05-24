import basePage from "../pageObjects/basePage";
import Url from "../fixtures/url.json";

export default class logInPage extends basePage {

    private EMAIL_FIELD: string = '[data-id="emailInputLogin"]';
    private PASSWORD_FIELD: string = '[data-id="passwordInputLogin"]';
    private LOGIN_BUTTON: string = '#submitLogin';
    private FORGOT_PASSWORD_BUTTON: string = '#forgotPasswordHyperlink';
    private CREATE_ACCOUNT_BUTTON: string = '#signUpHyperlink';

    relativePath: string = this.relativePath +Url.urlLogin;

    getCreateAccountLink(){
        return(cy.get(this.CREATE_ACCOUNT_BUTTON))
    }

    getPasswordInput(){
        return(cy.get(this.PASSWORD_FIELD))
    }

    getEmailInput(){
        return(cy.get(this.EMAIL_FIELD))
    }

    logIn (email: string,password: string){
        cy.get(this.EMAIL_FIELD).type(email);
        cy.get(this.PASSWORD_FIELD).type(password);
        cy.get(this.LOGIN_BUTTON).click();
    }
}
