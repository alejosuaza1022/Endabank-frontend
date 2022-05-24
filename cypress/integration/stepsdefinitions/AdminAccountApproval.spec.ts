import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import user from "../../fixtures/user.json";
import Url from "../../fixtures/url.json";
import AdminPanelPage from "../../pageObjects/AdminPanelPage";
import logInPage from "../../pageObjects/logInPage";

const adminPanelPage: AdminPanelPage = new AdminPanelPage();
const loginPage: logInPage = new logInPage();

Given("the user is logged in as an {string} user", (userType) => {
  loginPage.visit();
  if (userType == "Admin") {
    loginPage.logIn(user.emailAdmin,user.passwordAdmin);
  } else {
    loginPage.logIn(user.emailNormalUser, user.passwordNormalUser);
  }
});

And("the user is on the Admin Panel section", () => {
  cy.wait(Url.wait);
  adminPanelPage.getUserManagementButton().click();
});

When("the user toggles to {string} an account under review", (status) => {
  cy.verifyStatus(status);
});

Then("the user should see the user table columns with the following order", (table) => {
    cy.wait(Url.wait);
    let imput = table.hashes();
    for (let i = 0; i < imput.length; i++) {
      cy.get("thead").find("tr th").contains(imput[i].Titles);
    }
  }
);

When("the user tries to enter in the approval section", () => {
  cy.wait(2000);
  adminPanelPage.getUserManagementButton().should("not.exist");
});

Then("tries to enter trough the url {string} its redirected to home", (url) => {
  adminPanelPage.verifySection(url,2000,Url.baseUrl+Url.urlProfile)
});
