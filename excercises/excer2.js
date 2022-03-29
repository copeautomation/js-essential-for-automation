"use strict";

function checkOS(personName, os) {
  // Param checking
  if (!personName || !os) throw Error(`One or more vlaues are missing...`);

  // Type checking
  if (typeof personName !== "string" || typeof os !== "string") {
    throw Error(
      `Only string values are accepted, but received values are ${personName} and ${os}`
    );
  }

  // Check OS
  console.log(
    `Hello ${personName}, you have provided ${os} as your operating system...`
  );

  os = os.trim().toUpperCase();
  if (os === "APPLE") {
    return `${personName} is using macOS...`;
  } else if (os === "WINDOWS") {
    return `${personName} is using Windows...`;
  } else {
    return `${personName} is using other OS...`;
  }
}

// Test with input
let val = checkOS("Rose", "Linux");
console.log(val);