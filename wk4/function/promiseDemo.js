"use strict";

/**
 * Promise
 * 
 * @scenario
 * 1. Initialise a promise object
 * 2. Pending, fulfilled and rejected status
 * 3. How to get a resolved and rejected value? - then()...catch()
 * 4. UnhandledPromiseRejection error
 * 5. Promise chaining
 */

let proObj = new Promise((resolve, reject) => {
    console.log(`Executing the promise..`);
    if (1 > 2) {
      setTimeout(() => {
        resolve("Promise is resolved and you got a API data.."); // Async action that returns some value after 2 secs
      }, 2000);
    } else {
        reject(`Oh no ! some error occurred in promise`)
    }
    
    
})

// Consuming the promise
// proObj
//   .then((res) => {
//     console.log(res);
//     return `${res} Updated with more value`;
//   })
//   .then((updatedVal) => {
//     console.log(updatedVal);
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// Using async and await
async function getData() {
  try {
    let res = await proObj;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

getData()