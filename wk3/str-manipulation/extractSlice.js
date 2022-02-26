"use strict";

/**
 * Extract substring - use of slice method
 * @rules
 * 1. slice method requires start(inclusive) and end index (end index is not included)
 * 2. You can specify only the start index 
 * 3. You can specific the negative range 
 */


/**
 * Scenario
 * 1. Extract only yy-mm-dd format
 * 2. Extract year (4 digits) - 0 index
 * 3. Ectract month - 5 index
 * 4. Extract date - 8 index
 */

let dt = "2022-02-26" 

// Extract only yy-mm-dd format
let yymmdd = dt.slice(2)
console.log(yymmdd);

// Extract year (4 digits) - 0 index
let year = dt.slice(0,4)
console.log(year);

// Ectract month - 5 index
let month = dt.slice(5,7)
console.log(month);

// Extract date - 8 index
// let day = dt.slice(8,10) // Option 1
// let day = dt.slice(8) // Option - only start
let day = dt.slice(-2) // Negative index
console.log(day);

