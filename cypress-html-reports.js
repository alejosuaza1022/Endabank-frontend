const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/cucumber-json",
  reportPath: "./reports/cucumber-cypress-html-reports.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "100",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "10",
    },
  },
});
