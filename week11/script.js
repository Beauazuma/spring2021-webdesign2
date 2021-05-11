// for the carousel:
let carouselImages = ["dance1.jpg", "dance2.jpg", "dance3.jpg"];
let foodImages = ["pizza.jpg", "cake.jpg", "fish.jpg"];
let partyImages = ["party1.jpg", "party2.jpg", "party3.jpg"];
let rockinImages = ["rockin1.jpg", "rockin2.jpg", "rockin3.jpg"];
let drinkImages = ["drink1.jpg", "drink2.jpg", "drink3.jpg"];
let currentIndex = 2;
let carouselIMG = document.getElementById("carouselIMG");

//for the select:
let groupSelect = document.getElementById("groupSelect");
let categorySelect = document.getElementById("categorySelect");
let danceOptions = ['dance', 'party', 'rockin'];
let foodOptions = ['Pizza', 'Cake', 'Fish'];
let drinksOptions = ['Rockstar', 'Mountian Dew', 'Monster'];

let changeSlide = function(){
    if(currentIndex === 0){
        carouselIMG.src = carouselImages[1];
        //currentIndex = 1;
    }
    else if(currentIndex === 1) {
        carouselIMG.src = carouselImages[2];
        //currentIndex = 2;
    }
    else {
        carouselIMG.src = carouselImages[0];
        //currentIndex =  0;
    }

    if(currentIndex === 2) {
        currentIndex = 0;
    }
    else {
        currentIndex = currentIndex+1;
    }
}

let updateCategory = function(){
    console.log(groupSelect);
    categorySelect.innerHTML = '';
    let selectedValue = groupSelect.value;
    if(selectedValue === "dance"){
        danceOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }
    else if(selectedValue === "food"){
        foodOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }
    else if(selectedValue === "drinks"){
        drinksOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }
}


window.addEventListener("load", function(){
    // triggered once after 5 sec
    setTimeout(function(){
        prompt("SUBSCRIBE TO OUR NEWSLETTER!!!", "my@email.com");
    }, 5000);

    //triggered every 5 sec
    setInterval(changeSlide, 500);
});

groupSelect.addEventListener("change", updateCategory);



