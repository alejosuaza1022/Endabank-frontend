class LoginPage {
    private emailFieldId: string = '[data-id="emailInputLogin"]';
    private passwordFieldId: string = '[data-id="passwordInputLogin"]';
    private loginButtonId: string = '#submitLogin';
    private forgotPasswordButtonId: string = '#forgotPasswordHyperlink';
    private createAccountButtonId: string = '#signUpHyperlink';

    public writeEmail(email: string) {
        cy.get(this.emailFieldId).type(email);
    }

    public writePassword(password: string) {
        cy.get(this.passwordFieldId).type(password);
    }

    public clickLoginButton() {
        cy.get(this.loginButtonId).click();
    }

    public clickForgotPasswordHyperlink() {
        cy.get(this.forgotPasswordButtonId).click();
    }

    public clickCreateAccountHyperlink() {
        cy.get(this.createAccountButtonId).click();
    }
}

export default LoginPage;
