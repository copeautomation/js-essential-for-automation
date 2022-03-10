"use strict";

/**
 * Objects creation - Different ways
 * 
 * @scenario
 * 1. Using object literals/initializer (Commonly used in Test Automation)
 * 2. Using constructor fn
 * 3. Object create method
 *  From ES5, Object can be created using classess
 */

// 1. Using object literals/initializer (Commonly used in Test Automation)
let obj = {
    name: "Rob",
    age : 25,
    isMarried: false
}

// Using constructor fn
// function Person(name, age, isMarried){
//     this.name = name
//     this.age = age
//     this.isMarried = isMarried
//     return `The name is: ${this.name} and the age is: ${this.age} and marital status: ${this.isMarried}`
// }

// let obj = new Person("Bob", 30, true)

// Object create method
let obj1 = Object.create(obj)
console.log(Object.getPrototypeOf(obj1));

// Result
// console.log(obj1); // overall object
console.log(obj1.name); // Single property
console.log(typeof obj1); // type checking
