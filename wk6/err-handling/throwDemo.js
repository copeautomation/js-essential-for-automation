"use strict";
let fs = require("fs");

/**
 * throw
 *
 * @syntax
 * throw expression
 *
 */



// Definition
function readFile(filepath){
    if(!fs.existsSync(filepath)){
        throw Error(`Given path: ${filepath} does not exist...`)
    }
    let data = fs.readFileSync(filepath, "utf-8");
    return data
}


// Calling
// let filepath = `${process.cwd()}/dat/sampleData.json`;
// let data = readFile(filepath)
// console.log(data);

module.exports = {
    readFile
}