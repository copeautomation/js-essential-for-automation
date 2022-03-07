"use strict";

/**
 * Callback function - intro
 */

function a() {
  console.log("function a...");
}

function b() {
  setTimeout(() => {
    console.log("function b...");
  }, 2000);
}

function c() {
  console.log("function c...");
}

// calling
a()
b()
c()