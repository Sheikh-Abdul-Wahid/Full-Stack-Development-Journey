function createCard(title, cName, views, yearsOld, duration, thumbnail){
    let viewStr
    if (views < 1000){
        viewStr = views
    }
    else if (views > 1000000){
        viewStr = views/1000000 + "M"
    }
    else{
        viewStr = views/1000 + "K"
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${cName} . ${viewStr} views . ${yearsOld} year ago</p>
            </div>
        </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Introduction to JavaScript - WebDevelopment | FreeCourse", "Learn-JS", 5500000, 1, "16:05", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmU9pydTADIh-l9EDogya_N6DwA9oppo7bA&s");

createCard("Advanced JavaScript Techniques - WebDevelopment | FreeCourse", "Learn-JS", 120000, 2, "22:15", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmU9pydTADIh-l9EDogya_N6DwA9oppo7bA&s");

createCard("JavaScript for Beginners - WebDevelopment | FreeCourse", "Learn-JS", 950, 1, "30:00", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmU9pydTADIh-l9EDogya_N6DwA9oppo7bA&s");
