/**
 * Folder operations
 *
 * * @rule
 * fs modules expects a full path (not relative)
 * @methods
 * 1. existsSync
 * 2. mkdirSync
 * 3. rmdirSync
 * 4. readdirSync
 *
 * @scenario
 * 1. Check if dir exist
 * 2. If exist, delete (old results). If not exist, create (screenshot)
 * 3. Get files and sub folder of a dir
 */

const fs = require("fs")

let reportExists = fs.existsSync(`${process.cwd()}/allure-reports`) // true
let resultExists = fs.existsSync(`${process.cwd()}/screenshots`) // false

console.log(`Report exists? :${reportExists}`);
console.log(`Results exists? :${resultExists}`);

// delete
if(reportExists) {
    fs.rmdirSync(`${process.cwd()}/allure-reports`)
}

// Create
if(!resultExists){
    fs.mkdirSync(`${process.cwd()}/screenshots`)
}

// Read sub-dir /files from a folder
let resArr = fs.readdirSync(`${process.cwd()}/data`)
console.log(resArr);

