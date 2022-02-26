"use strict";

/**
 * Extract string by split method
 * @rule
 * 1. The separator(string | regexp) is omitted from the returned array
 * 2. If the very first/last char is provided as a separator,it adds an empty string as in the first/last positions
 *
 * @returns
 * string []
 */

/**
 * Scenario
 * 1. Get only the date part of the timestamp
 * 2. Split by space/first or last char
 * 3. Get only the filename
 */

let tstamp = "2022-02-26T10:51:52.207Z";
let str = "Hello World";
let filename = "invoice_123.pdf";

// 1. Get only the date part of the timestamp
let dtArr = tstamp.split("T")
console.log(dtArr[0]);


// 2. Split by space/first or last char

let arr = str.split("d")
console.log(arr);

// 3. Get only the filename
let fileArr = filename.split(".")
console.log(fileArr);