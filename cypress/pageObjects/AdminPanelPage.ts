import url from "../fixtures/url.json";

export default class AdminPanelPage {
    private USER_MANAGEMENT_BUTTON: string ='#usersManagementSidebarElement';
    private USER_TOGGLE: string ='#ToggleApproveUser3';
    private USER_LOGOUT_BUTTON: string="#logoutSidebarElement";

    getUserManagementButton(){
        return cy.get(this.USER_MANAGEMENT_BUTTON);
    }

    verifyStatus(status: string){
        if (status == "Activate") {
            cy.wait(url.wait);
            cy.get(this.USER_TOGGLE)
              .scrollIntoView()
              .should("not.be.checked");
            cy.wait(url.wait);
            cy.get(this.USER_TOGGLE).click({ force: true });
            cy.get(this.USER_LOGOUT_BUTTON).click({ force: true });
          } else {
            cy.wait(url.wait);
            cy.get(this.USER_TOGGLE).scrollIntoView().should("be.checked");
            cy.wait(url.wait);
            cy.get(this.USER_TOGGLE).click({ force: true });
            cy.get(this.USER_LOGOUT_BUTTON).click({ force: true });
          }
    }

    verifySection(url1: string, time: number, url2:string){
        cy.visit(url1);
        cy.wait(time);
        cy.url().should("eq", url2);
    }


}

