const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/cucumber-json",
<<<<<<< HEAD
  reportPath: "cypress/reports/cucumber-htmlreport.html",
=======
  
  reportPath: "./reports/cucumber-htmlreport.html",
>>>>>>> 76f7db25e61cc2b1229dfaab29c1a6a68c57c2e5
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
=======

>>>>>>> 76f7db25e61cc2b1229dfaab29c1a6a68c57c2e5
});
