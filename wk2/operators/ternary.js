/**
 * Ternary operator (?)
 * @syntax:
 *  <expression> ? "val1" : "val2"
 */

// Use case: Set log level for different run environment


// Basic use
let ruuner = "local"
// let loglevel = ruuner === "local" ? "Info" : "Error"
// console.log(loglevel);


// Advanced use
let loglevel = ruuner === "local" ? "Info" : ruuner === "cloud" ? "Silent" : "Error"
console.log(loglevel);
