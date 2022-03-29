"use strict";

let givenStr = "SOUTH AFRICA";
givenStr = givenStr.toLowerCase();
let strArr = givenStr.split(" ");
let firstWord = strArr[0].charAt(0).toUpperCase() + strArr[0].slice(1);
let secondWord = strArr[1].charAt(0).toUpperCase() + strArr[1].slice(1);
let modifiedStr = `${firstWord} ${secondWord}`;
console.log(modifiedStr);
