/**
 * Conditional statements use cases:
 * 1. Just if statement
 * 2. if (!)
 * 3. if and else
 * 4. if else if - Nested
 * 5. if else [inner conditions]
 * 6. Use of if conditions in loops
 *
 */

// Use case 1: Just if - handling a ramdom popup
let popupExist = false
if (popupExist === true) console.log(`>>> Perform click action...`);

// Use case 2: Just if (NOT) - Checking for falsy value
let data = ""
if(!data) throw Error(">>> No valid data provided")

// Use case 3: if..else: If file exist read the file, else create the file
let fileExist = "N"

if (fileExist === "Y") {
  console.log(`>> Reading the file`);
} else {
  console.log(`>> Creating the file`);
}

// Use case 4: if else if ... Nested conditions... Act based on list of conditions
let err = "AssertionError"
if (err === "Error") {
    console.log(`>> Retry...`);
} else if (err === "AssertionError") {
    console.log(`>> Fail the test`);
} else if (err === "DataValidation") {
    console.log(`>> Read the test data file...`);
} else {
    console.log(`>> Print the error message`);
}


// Use case 5: If else [Inner conditions]: Quering a database for test data
let isSuccess = false
if(isSuccess === true) {
    console.log(`>> Storing the db values..`);
} else {
    console.log(`No data recived`);
    let errorCode = "ACCEPT"
    if(errorCode === "ACCEPT") {
        console.log(`>> Continue the exection...`);
    } else {
        console.log(`>> Fail the test...`);
    }
}


// Use case 6: if in loops
for (let i = 1; i <=10; i++){
    if (i === 6) break
    console.log(i);
}
console.log(`>> After the for loop..`);
