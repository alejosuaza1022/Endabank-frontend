export default class emailPopUp {
    private EMAIL_FIELD: string = '[data-id="emailResetPassword"]';
    private SUBMIT_BUTTON: string = '#submitSendEmailPopUp';
    private CLOSE_BUTTON: string = '#closePopUp';

    public writeEmail(email: string) {
        cy.get(this.EMAIL_FIELD).type(email);
    }

    public clickSubmitButton() {
        cy.get(this.SUBMIT_BUTTON).click();
    }

    public clickCloseButton() { 
        cy.get(this.CLOSE_BUTTON).click();
    }
}
