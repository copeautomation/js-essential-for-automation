let val1 = "5"
let val2 = "5.5"

console.log(`The type of val1: ${typeof val1}`); // string
console.log(`The type of val1: ${typeof val2}`); // string

// Convert a string to number
//  numVal1 = parseInt(val1)
//  numVal2 = parseFloat(val2)

 // Unary plus
 numVal1 = +val1
 numVal2 = +val2

 console.log(`The type of numVal1: ${typeof numVal1}, and the value: ${numVal1}`); // number
 console.log(`The type of numVal2: ${typeof numVal2} and the value: ${numVal2}`); // number

// Convert to a string
let strVal = numVal1.toString()

console.log(`The type of strVal: ${typeof strVal}, and the value: ${strVal}`);