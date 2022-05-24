import AdminPanelPage from "../../pageObjects/AdminPanelPage";
//import logInPage from "../../pageObjects/logInPage";
import url from "../../fixtures/url.json";

//const loginPage: logInPage = new logInPage();
const adminPanelPage: AdminPanelPage = new AdminPanelPage();

Cypress.Commands.add("enterUrl", (url) => {
  cy.visit(url);
});

Cypress.Commands.add("login", (email, password) => {
  //cy.get(loginPage.EMAIL_FIELD).type(email);
  //cy.get(loginPage.PASSWORD_FIELD).type(password);
  //cy.get(loginPage.LOGIN_BUTTON).click();
});

Cypress.Commands.add("verifySection", (url, time, url2) => {
  cy.visit(url);
  cy.wait(time);
  cy.url().should("eq", url2);
});

Cypress.Commands.add("verifyStatus", (status) => {
  if (status == "Activate") {
    cy.wait(url.wait);
    cy.get(adminPanelPage.USER_TOGGLE)
      .scrollIntoView()
      .should("not.be.checked");
    cy.wait(url.wait);
    cy.get(adminPanelPage.USER_TOGGLE).click({ force: true });
    cy.get(adminPanelPage.USER_LOGOUT_BUTTON).click({ force: true });
  } else {
    cy.wait(url.wait);
    cy.get(adminPanelPage.USER_TOGGLE).scrollIntoView().should("be.checked");
    cy.wait(url.wait);
    cy.get(adminPanelPage.USER_TOGGLE).click({ force: true });
    cy.get(adminPanelPage.USER_LOGOUT_BUTTON).click({ force: true });
  }
});
