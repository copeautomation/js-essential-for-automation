"use strict";

/**
 * File operations - Read file
 * 
 * @method
 * fs.readFileSync()
 * 
 */
let fs = require("fs")

let filepath = `${process.cwd()}/data/sampleData.json`
let data = fs.readFileSync(filepath, "utf-8")
console.log(data);


