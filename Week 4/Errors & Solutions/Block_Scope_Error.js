// Error Code:

let a = 6;
let b = 8;

if (a > b) {
    let c = a - b; // `c` is only accessible inside this block
} else {
    let c = b - a; // `c` is only accessible inside this block
}

console.log(c); // ❌ ReferenceError: c is not defined

// Solution 1: To fix this issue, we need to declare the variable outside the if-else block:

let a = 6;
let b = 8;
let c;  // Declare `c` outside so it can be used later

if (a > b) {
    c = a - b;
} else {
    c = b - a;
}

console.log(c); // Outputs: 2

// Solution 2: A shorter way is using the ternary (? :) operator:

let a = 6;
let b = 8;

let c = (a > b) ? a - b : b - a; // Assign value in a single line

console.log(c); // Outputs: 2
