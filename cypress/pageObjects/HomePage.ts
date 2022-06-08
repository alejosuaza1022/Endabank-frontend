import BasePage from "./BasePage";
import url from "../fixtures/url.json"

export default class homePage extends BasePage{

    relativePath: string = this.relativePath +url.urlProfile;

    private MY_PROFILE_BUTTON: string = '#profileSidebarElement'
    private PASSWORD_MANAGEMENT_SIDEBAR: string = '#pwdManagementSidebarElement'
    private LOG_OUT_BUTTON: string = '#logoutSidebarElement'
    private USER_MANAGEMENT_SIDEBAR: string = '#usersManagementSidebarElement'

    getProfileButton() {
        return cy.get(this.MY_PROFILE_BUTTON);
    }
    getPasswordManagementSidebar() {
        return cy.get(this.PASSWORD_MANAGEMENT_SIDEBAR);
    }
    getLogoutButton() {
        return cy.get(this.LOG_OUT_BUTTON);
    }
    getUsersManagementButton() {
        return cy.get(this.USER_MANAGEMENT_SIDEBAR);
    }

    getUsersManagement(){
        return (cy.get(this.USER_MANAGEMENT_SIDEBAR));
    }

}