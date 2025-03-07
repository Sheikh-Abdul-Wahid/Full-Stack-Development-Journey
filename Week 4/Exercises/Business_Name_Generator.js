let adjectives = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}
let shop_names = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}
let last_words = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}

let random1 = Math.floor(Math.random()*3)+1
let random2 = Math.floor(Math.random()*3)+1
let random3 = Math.floor(Math.random()*3)+1
 
console.log(adjectives[random1] + " " + shop_names[random2] + " " + last_words[random3])
