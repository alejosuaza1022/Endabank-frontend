import { Given } from "cypress-cucumber-preprocessor/steps";
import {URL} from "../../../support/utils/urlBaseEndabank"

Given('I open Endabank login page and wants to login', () => {
    cy.enterUrl(URL);
})