class LoginPage {
    private emailField: string = '[data-id-"emailInputLogin"]';
    private passwordField: string = '[data-id-"passwordInputLogin"]';
    private loginButton: string = '#submitLogin';

    public writeEmail(email: string){
        cy.get(this.emailField).type(email);
    }

    public writePassword(password: string){
        cy.get(this.passwordField).type(password);
    }

    public clickLoginButton(){
        cy.get(this.loginButton).click();
    }
}

export default LoginPage;