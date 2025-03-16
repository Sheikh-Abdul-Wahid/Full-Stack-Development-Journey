console.log("Script.js initializing")

// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children
console.log(boxes)

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255); // Formula: a + r(b-a), where r = random number generated using Math.random(), a = 0 & b = 255 because rgb color lies between 0 and 255
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

console.log(Array.from(boxes))

Array.from(boxes).forEach(e => {
    // console.log(e)
    setInterval(() => {
        e.style.backgroundColor = getRandomColor()
        e.style.color = getRandomColor()
    }, 1000);

})
