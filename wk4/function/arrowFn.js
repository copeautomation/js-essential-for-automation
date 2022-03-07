"use strict";

/**
 * Arrow functions 
 * 
 * @scenario
 * 1. Convert a normal function to arrow funtion
 * 2. No param
 * 3. Single param
 * 4. More than one param(single and more than one statements)
 * 5. forEach() method example
 */

// 1. Convert a normal function to arrow funtion

  let sum = (num1, num2) => num1 + num2;
    

  let total = sum(2, 2)
  console.log(total);

//  2. No param
// let arrowFn = () => 10 > 5
// let res = arrowFn()
// console.log(res);


// Single param
// let greet = name => console.log(`Hello, ${name}!`)
// greet("Rob")