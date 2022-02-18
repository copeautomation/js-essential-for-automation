/**
 * Logical operator NOT (!)
 */

// Check if both first and last name is provided

let firstname = "Rob"
let lastname = "Bob"

if (!firstname || !lastname) {
  console.log(`One of the names: ${firstname} or ${lastname} is not valid`);
}


