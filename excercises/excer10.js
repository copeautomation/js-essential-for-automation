"use strict";

let arr = ["1", "2", "3", "4", "5", "six"];

let modifiedArr = [];
arr.forEach((ele) => {
  let val = +ele;
  if (val) {
    ele = +ele;
    modifiedArr.push(ele);
  }
});
console.log(modifiedArr);
