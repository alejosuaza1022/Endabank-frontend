import basePage from "../pageObjects/basePage";

export default class homePage extends basePage{

    relativePath: string = this.relativePath +'/profile'

    getUsersManagement(){
        return (cy.get('#usersManagementSidebarElement'))
    }

}