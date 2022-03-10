"use strict";

/**
 * How to have dynamic key and values?
 *
 * @scenario
 * 1. Dynamic val
 *  - Run date
 *  - Runner
 *  - Based on condition
 * 2. Dynamic key
 *  - Env config
 *
 */
let testRunner = "local"
let machineID = ""
let envFile = "test_config"

let reportData = {
  testID: 12345,
  status: "PASS",
  "PASS/FAIL Flag": "PASS",
  totalTest: 100,
  totalPass: 80,
  isInScope: true,
  passrate() {
    return (this.totalPass / this.totalTest) * 100;
  },
  runDt: new Date(),
  runner: testRunner,
  macID: machineID ? machineID : "Unknown",
  [envFile] :{
      env: "test",
      url : "http://test.com"
  }
};

console.log(reportData);
console.log(reportData.runDt);
console.log(reportData.runner);
console.log(reportData.macID);
console.log(reportData.test_config);
