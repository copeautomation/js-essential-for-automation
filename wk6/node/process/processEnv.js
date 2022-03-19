"use strict";

/**
 * process.env
 * 
 * @notes
 * 1. process is a global module - i.e can access directly
 * 
 * @usecase
 * You want to set an environment variable so you can access anywhere in your project
 * 
 * @scenario
 * 1. To set a environment variable at runtime (decide which environment to run the test)
 * 2. To read .env file and get all secret info such as user creds, auth key...etc
 * 
 * @bestpractice
 * The env variable in UPPER CASE
 * 
 * @steps
 * 1. Access process.env global object
 * 2. Set an environment variable via command line
 * 3. Access that variable in test code
 * 4. Run the code from project root
 * 5. Set up environment variable via npm script
 * 6. Run the code from project root
 * 
 */

const process = require("process")
// console.log(process.env);

// console.log(process.env.TARGET);
console.log(process.env["TARGET"]);
