import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import user from "../../fixtures/user.json";
import url from "../../fixtures/url.json";
import adminPanelPage from "../../support/pages/adminPanelPage";

Given("the user is logged in as an {string} user", (userType) => {
  cy.visit(url.url);
  cy.login(user.email, user.password);
});

And("the user is on the Admin Panel section", () => {
  cy.get(adminPanelPage.USER_MANAGEMENT_BUTTON).click();
});

When("the user toggles to {string} an account under review", (status) => {
  cy.verifyStatus(status);
});

Then(
  "the user should see the user table columns with the following order",
  () => {
    cy.wait(url.wait);
    cy.get("thead").find("tr th").contains("First Name");
    cy.get("thead").find("tr th").contains("Last Name");
    cy.get("thead").find("tr th").contains("Email");
    cy.get("thead").find("tr th").contains("Approved");
  }
);
