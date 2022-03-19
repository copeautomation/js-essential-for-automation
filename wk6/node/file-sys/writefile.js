"use strict";

/**
 * File operations - Write file
 *
 * @method
 * fs.writeFileSync()
 *
 */

let err = {
  testid: "TC123",
  errDes: "App failed to launch",
};

let fs = require("fs")

let filepath = `${process.cwd()}/data/err.json`
// let data = JSON.stringify(err)
let data = JSON.stringify(err, undefined, 4)
fs.writeFileSync(filepath,data)