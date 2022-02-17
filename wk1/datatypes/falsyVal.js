/**
 * Falsy values:
 * 1. false
 * 2. undefined
 * 3. null
 * 4. 0
 * 5. NaN
 * 6. "" (empty string)
 */

let val = []

if (val) {
  console.log("Condition met...");
} else {
  console.log(`Given ${val} is a falsy value...`);
}

let val2 = 5 + undefined
console.log(val2);

let val3 = 5 + null
console.log(val3);