"use strict";

/**
 * Use of filter method
 * @usecase
 * Find elements which meets some conditions
 *
 * @returns
 * Filtered Array
 */

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

// Get books which are > $10
let res = book.filter(ele => ele.price > 7)
console.log(res);