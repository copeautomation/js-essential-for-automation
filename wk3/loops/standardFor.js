/**
 * Standard for loop
 * Remember these points(!): 
 * 1. Define the starting point
 * 2. Define end/exit condition
 * 3. Decide increment/decrement
 */

/**
 * 1. Simple use case
 */
for (let i = 10; i >= 1; i--){
    console.log(i);
}

/**
 * Standard for loop with Array and continue statement
 * Scenario: 
 * Sum only the numbers from an array
 */

let arr = ["Apple", 10, "Orange", 20, "Grapes", 30];
// console.log(arr.length); //5
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  let arrEle = arr[i];
  //   if (typeof arrEle === "number") {
  //     // sum  = sum + arrEle
  //     sum += arrEle;
  //   }

  if (typeof arrEle !== "number") continue;
  sum += arrEle;
}
console.log(`The value of sum: ${sum}`);


