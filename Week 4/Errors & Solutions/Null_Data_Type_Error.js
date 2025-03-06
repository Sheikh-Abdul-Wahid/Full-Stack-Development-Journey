// Null Data Type gives "object" as Output:
let a = null;
console.log(typeof a); // Output: "object"

// To avoid this error you can use strict equality operator (===) as shown below:
let a = null;
if (a === null) {
    console.log("Value is null");
  }
