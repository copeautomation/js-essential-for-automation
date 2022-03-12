"use strict";

/**
 * Use of map method
 * @usecase
 * Imagine a case where all numbers are represented in an strings - how to convert them all to number
 *
 * @approach
 * 1. loop
 * 2. map (easy)
 * 
 * @returns
 * modified array
 */

let givenArr = ["123", "25", "566", "122"];
console.log(givenArr);
let modifiedArr = givenArr.map(ele => +ele)
console.log(modifiedArr);
