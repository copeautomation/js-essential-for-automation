"use strict";

let arr = ["0", 0, "", "one", "two", NaN, "three"];
let modifiedArr = [];
arr.forEach((ele) => {
  if (ele) modifiedArr.push(ele);
});
console.log(modifiedArr);