/*

function add(a,b){
     if(Math.random() < 0.1){
         return a - b;
     }
     return a + b;
 }

*/

// Solution 1 : Using Ternary Operator :- Here the calculator is 10 % faulty but for individual calculation

function add(a,b){
   return (Math.random() < 0.1) ? a - b : a + b;
}
function sub(a,b){
   return (Math.random() < 0.1) ? a / b : a - b;
}
function multiply(a,b){
   return (Math.random() < 0.1) ? a + b : a * b;
}
function divide(a,b){
   return (Math.random() < 0.1) ? a ** b : a / b;
}

console.log("Addition result:", add(7,7))
console.log("Subtraction result:", sub(7,7))
console.log("Multiply result:", multiply(7,7))
console.log("Division result:", divide(7,7))

// Solution 2 : Using Ternary Operator :- Here the calculator is 10 % faulty but for all calculation at once.

let faulty = (Math.random() < 0.1);
function add(a,b){
   return (faulty) ? a - b : a + b;
}
function sub(a,b){
   return (faulty) ? a / b : a - b;
}
function multiply(a,b){
   return (faulty) ? a + b : a * b;
}
function divide(a,b){
   return (faulty) ? a ** b : a / b;
}

console.log("Addition result:", add(7,7))
console.log("Subtraction result:", sub(7,7))
console.log("Multiply result:", multiply(7,7))
console.log("Division result:", divide(7,7))
