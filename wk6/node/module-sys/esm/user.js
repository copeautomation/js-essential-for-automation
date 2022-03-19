"use strict";

/**
 * Importing
 * 1. Own code
 * 2. npm package
 * 
 * @Recommendation
 * please go with CommonJS 
 * (this will work in both .js and .ts world as it is backward compatible)
 */

import data from "./helper.js"

// const data = require("./helper") // default
// const { obj } = require("./helper"); // named 

// check
console.log(typeof data);
console.log(data);
console.log(data.greet());


