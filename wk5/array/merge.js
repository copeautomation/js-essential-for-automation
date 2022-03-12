"use strict";

/**
 * Merge array using of spread operator
 */

 let arr1 = ["apple", "orange", "banana"];
 let arr2 = ["chocolate", "biscuit", "cake"];
 
 let arr = [...arr1, ...arr2]

 console.log(arr); 
 console.log(arr.length); // 6