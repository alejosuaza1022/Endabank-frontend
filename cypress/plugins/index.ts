/// <reference types="cypress" />

const browserify = require("@cypress/browserify-preprocessor");
const cucumber = require("cypress-cucumber-preprocessor").default;
const path = require("path");

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
<<<<<<< HEAD
module.exports = (on:any, config:any) => {
=======
module.exports = (on, config) => {
>>>>>>> 667afdfa965b0be97da0d46978f80808f5a2e9db
 const options = {
 ...browserify.defaultOptions,
 typescript: path.join(path.resolve("."), "node_modules/typescript"),
 };
 on("file:preprocessor", cucumber(options));
};
