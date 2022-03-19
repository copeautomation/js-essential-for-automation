"use strict";

/**
 * File operations - Delete file
 *
 * @method
 * fs.unlinkSync()
 *
 */

 let fs = require("fs")

 let filepath = `${process.cwd()}/data/err.json`
 fs.unlinkSync(filepath)
 