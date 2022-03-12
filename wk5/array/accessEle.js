"use strict";

/**
 * Array - traversal and accessing elements
 * @scenairo
 * 1. Access an inner object property
 * 2. Acceess an inner array elements
 * 3. Access elements across different objects (by finding the path)
 *
 * @note
 * 1. Use [] to access an array's elements
 * 2. Use dot (.) operator for object in most cases
 *
 */

// Array containing an object
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

console.log(arr[1]); // prints the second obj
console.log(arr[1].age); // 30

// Array containing an array

let arr = [
  [1, 2, 3],
  ["one", "two", "three"],
];

console.log(arr[1][2]); // three


// A typical usecase of array and object

let book = [
  {
    category: "reference",
    author: "Nigel Rees",
    title: "Sayings of the Century",
    price: 8.95,
  },
  {
    category: "fiction",
    author: "Evelyn Waugh",
    title: "Sword of Honour",
    price: 12.99,
  },
  {
    category: "fiction",
    author: "Herman Melville",
    title: "Moby Dick",
    isbn: "0-553-21311-3",
    price: 8.99,
  },
];

// Get only the prices values

let priceArr = []
for(let i = 0; i < book.length; i++){
    let price = book[i].price
    priceArr.push(price)
}

console.log(priceArr);
