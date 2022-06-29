import BasePage from "./BasePage";
import Url from "../fixtures/url.json";

export default class logInPage extends BasePage {

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

    getLoginButton() {
        return cy.get(this.LOGIN_BUTTON);
    }

    getForgotPasswordHyperlink() {
        return cy.get(this.FORGOT_PASSWORD_BUTTON);
    }

    getErrorMessageEmail(){
        return cy.get('.text-xs');
    }

    logIn (email: string,password: string){
        cy.get(this.EMAIL_FIELD).type(email);
        cy.get(this.PASSWORD_FIELD).type(password);
        cy.get(this.LOGIN_BUTTON).click();
    }

    public writeEmail(email: string) {
        cy.get(this.EMAIL_FIELD).type(email);
    }

    public writePassword(password: string) {
        cy.get(this.PASSWORD_FIELD).type(password);
    }

}
