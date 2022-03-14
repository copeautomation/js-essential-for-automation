"use strict";

/**
 * Create a page class with re-usable methods
 */

class Page {

  runDate

  constructor() {
    console.log(`Calling the parent constructor..`);
    this.runDate = ''
  }

  // Re-usble methods
  navigateTo(url) {
    console.log(`>>> Navigating to the given url: ${url}`);
    // TODO - implement the actual step
  }

  click(ele) {
    console.log(`>>> Clicking the given ele : ${ele}`);
  }
}

module.exports = Page