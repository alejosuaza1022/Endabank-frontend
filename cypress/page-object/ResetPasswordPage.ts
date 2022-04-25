class ResetPasswordPage {
    private newPasswordFieldId: string = '[data-id="newPasswordResetPassword"]';
    private confirmPasswordFieldId: string = '[data-id="confirmPasswordResetPassword"]';
    private submitResetPasswordId: string = '#submitResetPassword';

    public writeNewPassword(newPassword: string) {
        cy.get(this.newPasswordFieldId).type(newPassword);
    }

    public confirmPassword(newPassword: string) {
        cy.get(this.confirmPasswordFieldId).type(newPassword);
    }

    public clickSubmitButton() {
        cy.get(this.submitResetPasswordId).click();
    }

}

export default ResetPasswordPage;