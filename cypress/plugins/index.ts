/// <reference types="cypress" />

const browserify = require("@cypress/browserify-preprocessor");
const cucumber = require("cypress-cucumber-preprocessor").default;
const path = require("path");

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
 const options = {
 ...browserify.defaultOptions,
 typescript: path.join(path.resolve("."), "node_modules/typescript"),
 };
 on("file:preprocessor", cucumber(options));
};
