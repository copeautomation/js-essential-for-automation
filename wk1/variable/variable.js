/**
 * Variables rules:
1. Variable name should start with a letter, or underscore (_), or dollar sign ($)
2. System reserved keywords can’t be used e.g. if, else, throw, break
3. Variable names are case-sensitive
4. Can’t have same name for other types (e.g. function name, object name)
5. Multiple variables can be declared in single line (separated by comma) 
6. When you just declare a variable, the data type will be undefined
 */


let greeting = "Hello, World!", greeting1 = "Good, Morning"
console.log(greeting, greeting1);
 
function greeting(){
    // TODO
}


/**
 * var, let and const use cases
 */

// let
let val = 0
val = "Ten"
console.log("The val: ", val);

// const
const APP_URL = "https://abc.com"
APP_URL = "https://abc1.com"
console.log(APP_URL);


const count = 0

if(true){
    const count = 10 
    console.log("The value of count inside if block: ", count);
}
console.log("The value of count outside if block: ", count);
