"use strict";

/**
 * Array Intro
 *
 * @scenario
 * 1. Array are mutable
 * 2. Array are internally an Object
 */

// 1. Array are mutable

let str = "Hello";
let arr = [1, 2, 3];

console.log(str.toUpperCase()); // HELLO
console.log(str);

console.log(arr.push(4));
console.log(arr); // Mutable

console.log(arr[2]); // 3
console.log(arr["2"]); // 3



