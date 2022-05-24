import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import user from "../../fixtures/user.json";
import Url from "../../fixtures/url.json";
import adminPanelPage from "../../support/pages/adminPanelPage";
import { URL } from "../../support/utils/constants";

Given("the user is logged in as an {string} user", (userType) => {
  cy.visit(Url.urlLogin);
  if (userType == "Admin") {
    cy.login(user.emailAdmin, user.passwordAdmin);
  } else {
    cy.login(user.emailNormalUser, user.passwordNormalUser);
  }
});

And("the user is on the Admin Panel section", () => {
  cy.wait(Url.wait);
  cy.get(adminPanelPage.USER_MANAGEMENT_BUTTON).click();
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
    cy.get(adminPanelPage.USER_LOGOUT_BUTTON).click({ force: true });
  }
);

When("the user tries to enter in the approval section", () => {
  cy.wait(2000);
  cy.get(adminPanelPage.USER_MANAGEMENT_BUTTON).should("not.exist");
});

Then("tries to enter trough the url {string} its redirected to home", (url) => {
  cy.verifySection(url, 2000, Url.urlProfile);
});
