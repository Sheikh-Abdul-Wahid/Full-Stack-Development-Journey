let a = 6;

// Using Reduce Method
function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let fact = arr.slice(1,).reduce((a,b) => {
        return a * b
    })
    return fact
}

// Using simple for loop
function factFor(num){
    fact = 1;
    for (let index = 1; index <= num; index++) {
        fact = fact * index        
    }
    return fact
}
console.log(factorial(a))
console.log(factFor(a))
