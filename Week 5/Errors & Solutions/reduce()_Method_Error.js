// Incorrect Code: 

function factorial(number) {
    let arr = Array.from(Array(number + 1).keys());
    let fact = arr.slice(1).reduce((a, b) => {
        return a * b;
    });
    return fact;
}

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: TypeError: Reduce of empty array with no initial value

// Solution 1: Adding a Base Case for 0!:

function factorial(number) {
    if (number === 0) return 1; // Handle 0! separately
    let arr = Array.from(Array(number + 1).keys());
    let fact = arr.slice(1).reduce((a, b) => {
        return a * b;
    });
    return fact;
}

console.log(factorial(0)); // Output: 1
console.log(factorial(5)); // Output: 120

// Solution 2: Set an Initial Value in reduce():

function factorial(number) {
    let arr = Array.from(Array(number + 1).keys());
    return arr.slice(1).reduce((a, b) => a * b, 1); // Initial value set to 1
}

console.log(factorial(0)); // Output: 1
console.log(factorial(5)); // Output: 120
