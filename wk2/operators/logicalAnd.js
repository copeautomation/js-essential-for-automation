/**
 * Logical Operator
 * 1. &&
 * 2. || 
 * 3. !
 * 
 * Two main purposes:
 * 1. In conditional statements (e.g if...else)
 * 2. To have a default value 
 */

// Use case 1: AND (&&) check if given val is a text

let val = ""
if (typeof val === "string" && val.length > 1){
    console.log(`Given value : ${val} is valid string`);
} else {
    console.log(`Given value : ${val} is NOT valid string`);
}