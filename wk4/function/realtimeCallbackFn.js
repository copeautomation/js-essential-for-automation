"use strict";

/**
 * Real time use of callback function using fetch npm package
 * 
 * @scenario
 * Get the api response
 * 
 * @url
 * https://api.github.com/users/github
 * 
 * @pointsToRemember
 * 1. Look at the documentation and see if they support promise
 * 2. Understand the order in which the callback function attaches the processed value
 * 
 */

const fetchUrl = require("fetch").fetchUrl;


function getAPIRes(){
  fetchUrl("https://api.github.com/users/github", (err, meta, body) => {
    console.log(body.toString());
  });
}

getAPIRes()
