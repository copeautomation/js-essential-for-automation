"use strict";

/**
 * Use of indexOf method
 * 
 */

let str = "App # {12345} submitted"
let start = str.indexOf("{")
let end = str.lastIndexOf("}")
console.log(end);
let appNum = str.slice(start + 1, end)
console.log(appNum);

