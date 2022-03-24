"use strict";

/**
 * Common Error Objects in JS
 * 
 * * @types
 * 1. Error - Base object for user error 
 * 2. ReferenceError
 * 3. SyntaxError
 * 4. TypeError
 * 
 */




// One
console.log(x); // ReferenceError: x is not defined

// Two
let a = 10
let a = 20
console.log(a); // SyntaxError: Identifier 'a' has already been declared

// Three
const BROWSER = "chrome"
BROWSER = "firefox" 
console.log(BROWSER); // TypeError: Assignment to constant variable.