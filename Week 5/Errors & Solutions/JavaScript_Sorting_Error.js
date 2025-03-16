// Incorrect Sorting Method:
let array = [15, 12, 4, 8, 10, 12];
console.log(array.sort()); // Output: [10, 12, 12, 15, 4, 8]  [Here 4 and 8 were not placed correctly]

// Solution 1: For Ascending order

let array = [15, 12, 4, 8, 10, 12];
console.log(array.sort((a, b) => a - b));  // Output: [4, 8, 10, 12, 12, 15]

// Solution 2: For Descending order

let array = [15, 12, 4, 8, 10, 12];
console.log(array.sort((a, b) => b - a));  // Output: [15, 12, 12, 10, 8, 4]
