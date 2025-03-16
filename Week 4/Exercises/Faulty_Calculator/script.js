let random = Math.random()
console.log(random)

let a = prompt("Enter first number: ")
let c = prompt("Enter the operation: ")
let b = prompt("Enter second number: ")

let obj = {
    "+" : "-",
    "-" : "/",
    "*" : "+",
    "/" : "**"
}
if (random > 0.1){
    // Perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)  // eval() function makes every calculation inside it like a calculator
}
else{
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
