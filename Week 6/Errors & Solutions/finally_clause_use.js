// Error Code:

let a = prompt("Enter First Number: ");
let b = prompt("Enter Second Number: ");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry!!! Please enter a number");
}

let sum = parseInt(a) + parseInt(b);

function main() {
    let x = 1;
    try {
        console.log("The sum is:", sum * x);
        return true
    } catch (error) {
        console.log(error);
        return false
    }
    // This code will never run!
    console.log("Closing files...");
}
main()

// Solution: Use finally to run code even after return keyword inside a function.

let a = prompt("Enter First Number: ");
let b = prompt("Enter Second Number: ");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry!!! Please enter a number");
}

let sum = parseInt(a) + parseInt(b);

function main() {
    let x = 1;
    try {
        console.log("The sum is:", sum * x);
        return true
    } catch (error) {
        console.log(error);
        return false
    }
    // After return statement in the try & catch block, the message inside finally still runs.
    finally {
        console.log("Files are being closed, along with the database connection");
    }
}
main()
