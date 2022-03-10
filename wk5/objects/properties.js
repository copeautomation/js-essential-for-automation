"use strict";

/**
 * Object - Properties
 * 
 * @usecase
 * Imagine you build a custom test report
 * 
 * @scenario
 * The property key can be in one of the forms
 *  a. name (as like variable/function name)
 *  b. string (applicable when key having special char as space or /)
 *  c. number
 */

let reportData = {
    testID: 12345,
    status: "PASS",
    "PASS/FAIL Flag": "PASS",
    totalTest: 100, 
    totalPass: 80,
    isInScope: true
}

console.log(reportData); // complete object
console.log(reportData["PASS/FAIL Flag"]); // PASS
console.log(typeof reportData.isInScope); // boolean