const cypress = require("cypress");
const fse = require("fs-extra");
const { merge } = require("mochawesome-merge");
const generator = require("mochawesome-report-generator");

async function runTests() {
  await fse.remove("mochawesome-report"); // remove the reports folder
  const { totalFailed } = await cypress.run(); // get the number of failed tests
  const jsonReport = await merge(); // generate JSON report
  await generator.create(jsonReport); // create fancy HTML report
  process.exit(totalFailed); // exit with the number of failed tests
}

runTests();
