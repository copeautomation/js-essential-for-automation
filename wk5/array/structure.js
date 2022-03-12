"use strict";

/**
 * Different data structure
 *
 * @scenario
 * 1. Same type of data
 * 2. Different type of data
 * 3. Array containing an object
 * 4. Array containing an array
 */

// 1. Same type of data
let arr = ["apple", "orange", "banana"];

// 2. Different type of data
let arr = [1, "two", true]

// 3. Array containing an object
let arr = [
  {
    name: "Rob",
    age: 25,
  },
  {
    name: "Bob",
    age: 30,
  },
];

//  4. Array containing an array
let arr = [
  [1, 2, 3],
  ["one", "two", "three"],
];

// check
console.log(arr);
console.log(`Total elements: ${arr.length}`);

