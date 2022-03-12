"use strict";

/**
 * Array creation - different options
 *
 * @options
 * 1. Literals (most commonly used)
 * 2. Constructor function
 * 3. Object creation using new keyword
 *
 */

//  1. Literals (most commonly used)
let arr = ["apple", "orange", "banana"]

// Constructor function
// let arr = Array("apple", "orange", "banana")

// Object creation using new keyword
// let arr = new Array("apple", "orange", "banana")


// Check
console.log(arr); 
console.log(`Single ele: ${arr[1]}`);
console.log(typeof arr); // Object
console.log(arr.constructor);