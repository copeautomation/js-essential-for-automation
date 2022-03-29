"use strict";

// Method 1
let arr = ["Java", "JS", "Python", "C#"];
let isExist = "Not Found";
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "JS") {
    isExist = "Found";
    break;
  }
}
console.log(isExist);

// Method 2
let isExist = arr.some((ele) => ele === "JS");
isExist ? console.log("Found") : console.log("Not Found");
