class ProfilePage {
    private myProfileButtonId: string = '#profileSidebarElement'
    private passwordManagementButtonId: string = '#pwdManagementSidebarElement'
    private logoutButtonId: string = '#logoutSidebarElement'
    private usersManagementButtonId: string = '#usersManagementSidebarElement'

    public clickProfileButton() {
        cy.get(this.myProfileButtonId).click()
    }
    public clickPasswordManagementButton() {
        cy.get(this.passwordManagementButtonId).click()
    }
    public clickLogoutButton() {
        cy.get(this.logoutButtonId).click()
    }
    public clickUsersManagementButton() {
        cy.get(this.usersManagementButtonId).click()
    }
}

export default ProfilePage;