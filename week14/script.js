// JavaScript Document


let menuIMG = document.getElementById("menuimg");
let menuTGGL = document.getElementById("menutoggle");

let toggleTheImage = function(){

    if(menuTGGL.checked){
        console.log("open");
        menuIMG.src = "imgs/openmenu.png";
    }
    else {
        console.log("closed");
        menuIMG.src = "imgs/closemenu.png";
    }
}
 