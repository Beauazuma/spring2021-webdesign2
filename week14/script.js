// JavaScript Document


let menuIMG = document.getElementById("menuimg");
let menuTGGL = document.getElementById("menutoggle");
let trigButton = document.getElementById("donationBtn");

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

console.log(trigButton);
		
		trigButton.addEventListener("click", function(){
			
			let userAnswer = confirm("Are you sure you want to this this?");
			
				if(userAnswer == true){
					alert("Thank You for you donation!");
				}
			
			
		})





$( function() {
    var availableTags = ['$10','$15','$20','$30','$50','$100'];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );


$( "a" ).click(function( event ) {
  event.preventDefault();
  $( "<div>" )
    .append( "default " + event.type + " prevented" )
    .appendTo( "#log" );
});



 