"use strict"

/**
 * How callback functions works?
 */

// Simple function that prints the given message
function printMsg(msg) {
    console.log(`Calling the callback function...`);
    console.log(msg);
}

function greet(name, greeter){
    console.log('Calling the main function....');
    let greetMsg = `Hello, ${name}` // Action of Asyn operations
    return greeter(greetMsg) // The processed value will be ATTACHED  to the callback function
}

// calling

// Option 1: 
// greet("Rob", printMsg)

// Option 2: 
// greet("Rob", function(val){
//     console.log(`The received value from the main function: ${val}`);
// })

// Option 3: 
let res = greet("Rob", (res) => {
    return `The received value from the main function: ${res}`
})
console.log(res);
/**
 * Understanding return statement in callback functions
 */


