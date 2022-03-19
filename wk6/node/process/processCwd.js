"use strict";

/**
 * process.cwd()
 * 
 * @usecase
 * 1. Get the current working dir
 * 
 * @scenario
 * 1. Return value of cwd()
 * 2. Different betweent __dirname 
 * 3. Get a path of file in project dir
 * 
 * @rule
 * Whereever you issue the node command, that becomes the cwd()
 */

// console.log(process.cwd()); // Where the node command is passed
// console.log(__dirname); // The file where it is currently sitting

// Use case of getting a file path
let filepath = `${process.cwd()}/data/sampleData.json`
console.log(`The filepath is: ${filepath}`);
