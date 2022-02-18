/**
 * Comparison operator
 * 1. ==  (Checks only the value)
 * 2. === (strick equality operator: value + type)
 * 3. != 
 * 4. !==
 * 5. >
 * 6. >=
 * 7. <
 * 8. <=
 *  @returns boolean
 * 
 * @rule:
 * In most cases, if the two operands are not of the same type, 
 * JavaScript attempts to convert them to an appropriate type for the comparison. 
 * This behaviour generally results in comparing the operands numerically
 * 
 * 
 */

// Use case 1: Strict equality (=== , !==)

let a = "One"
let b = 1

console.log(a == b); // false
console.log(a === b); // false
console.log(+"One");

// Not equl

console.log(1 !== 2); // true
