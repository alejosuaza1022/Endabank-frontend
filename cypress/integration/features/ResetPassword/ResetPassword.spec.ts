import {
    Before,
    Given,
    When,
    Then,
    But,
    And
  } from "cypress-cucumber-preprocessor/steps";
  

class DummyUser {
    static readonly id: string = "24";
    static readonly email: string = "nicolas.cardona@endava.com";
    static readonly password: string = "Nicolas17*";
    static readonly token: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaWNvbGFzLmNhcmRvbmFAZW5kYXZhLmNvbSIsImV4cCI6MTY1MDQ3MjU2OSwiaWF0IjoxNjUwNDcxMzY5LCJ1c2VySWQiOjI0fQ.aFtdG7tSS8ss_yd6qrBPj2_eNkq87oUyc8pXrqVvbteLh9fIWJtwxE34svXvFMddi6wmQs0p0GHwFtUcyW_MSg"
}

const recoveryLink: string = `http://localhost:3000/reset-password/?token=${DummyUser.token}`

When("the user clicks on {string} link", (linkText) => {
    cy.contains(`${linkText}`).click();
})

And("the user fills in the \"Email\"", () => {
    cy.get('.p-6 > .relative > #email').type(DummyUser.email);
})

And("clicks in the \"Submit\" button", () => {
    cy.get('.flex > [type="submit"]').click();
    cy.wait(3000);
})

And("the user opens the recovery link", () => {
    cy.visit(recoveryLink);
})

And("the user fills in the fields for the recovery password", () => {
    cy.get("#password").type("Ni123456*");
    cy.get("#rePassword").type("Ni123456*");
})

And("clicks in the \"Submit\" button", () => {
    cy.get('form > [type="submit"]').click();
})