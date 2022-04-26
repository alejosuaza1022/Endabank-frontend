const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/cucumber-json",
<<<<<<< HEAD
  reportPath: "cypress/reports/cucumber-htmlreport.html",
=======
  reportPath: "./reports/cucumber-htmlreport.html",
>>>>>>> origin/development
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
<<<<<<< HEAD
});
=======
});
>>>>>>> origin/development
