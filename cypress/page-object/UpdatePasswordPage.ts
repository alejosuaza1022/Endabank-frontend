class UpdatePasswordPage {
    
    private oldPasswordFieldId: string = '[data-id="oldPasswordResetPassword"]'
    private newPasswordFieldId: string = '[data-id="newPasswordResetPassword"]'
    private confirmPasswordFieldId: string = '[data-id="confirmPasswordResetPassword"]'
    private submitButtonId: string = '#submitResetPassword'

    public writeOldPassword(oldPassword: string) {
        cy.get(this.oldPasswordFieldId).type(oldPassword)
    }
    public writeNewPassword(newPassword: string) {
        cy.get(this.newPasswordFieldId).type(newPassword)
    }
    public confirmNewPassword(confirmedPassword: string) {
        cy.get(this.confirmPasswordFieldId).type(confirmedPassword)
    }
    public clickSubmitButton() {
        cy.get(this.submitButtonId).click()
    }
}

export default UpdatePasswordPage;