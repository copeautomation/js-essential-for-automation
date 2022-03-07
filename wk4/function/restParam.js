"use strict";

/**
 * Rest parameter and arguments object
 * 
 * @definition
 * 1. The rest param is denoted by ...<paramName> 
 * The rest parameter syntax allows us to represent an indefinite number of arguments as an array
 * 
 * 2. arguments object made available within the function body
 * 3. The arguments can be access by array-like notation arguments[i]
 * 4. It has a length property
 * 
 */

 function sum(num1, num2, ...numN) {
   let total = 0;
   //  console.log(arguments);
   //  console.log(arguments[2]); // 3
   console.log(arguments.length);
   // let sum = num1 + num2
   // return sum
   for (let i = 0; i < arguments.length; i++) {
     total += arguments[i];
   }
   return total;
 }

let val = sum(2,2,3,3)
console.log(val);