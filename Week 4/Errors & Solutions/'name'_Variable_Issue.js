// The word 'name' gets strikethrough symbol with a warning in VS Code:

let name = "Abdul"
let friend = "Rahul"

console.log("His name is " + name + " and his friends name is " + friend)
console.log(`His name is ${name} and his friends name is ${friend}`)

// Solution: Use a different variable name like person_name or user_name:

let person_name = "Abdul"
let friend_name = "Rahul"

console.log("His name is " + person_name + " and his friends name is " + friend_name)
console.log(`His name is ${person_name} and his friends name is ${friend_name}`)
