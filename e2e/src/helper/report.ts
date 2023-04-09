const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/multiReports",
  reportName:"ValueBlue Technical Test | Playwright Automation Report",
  pageTitle: "ValueBlue Technical Test",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "112",
    },
    device: "Kingsley Test-Station",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "ValueBlue Technical Test" },
      { label: "Release", value: "0.0.1" },
      { label: "Cycle", value: "Smoke-1" },
    ],
  },
});