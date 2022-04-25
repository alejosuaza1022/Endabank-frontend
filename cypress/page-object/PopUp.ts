class PopUp {
    private emailResetPasswordFieldId: string = '[data-id="emailResetPassword"]';
    private submitSendEmailButtonPopUpId: string = '#submitSendEmailPopUp';
    private closePopUpButtonId: string = '#closePopUp';

    public writeEmail(email: string) {
        cy.get(this.emailResetPasswordFieldId).type(email);
    }

    public clickSubmitButton() {
        cy.get(this.submitSendEmailButtonPopUpId).click();
    }

    public clickCloseButton() { 
        cy.get(this.closePopUpButtonId).click();
    }
}

export default PopUp;