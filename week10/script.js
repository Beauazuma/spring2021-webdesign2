// JavaScript Document

	let docHeading = document.getElementById("docHeading");
	let imgBig = document. getElementById("imgBig");
	let imageChange = document.getElementById("imageChange");
	let imageChangeTwo = document.getElementById("imageTwo");
	

	let changeImageTwo = function(){
		
		imgDeen.src = "img209lrg.jpg";
		
	}
	
	let changeImge = function(){
		
		imgDeen.src="img188large.jpeg"
	}
	
	let closeMenu = function(){
		
		if(docHeading.alt === "menu"){
			console.log("menu2");
			docHeading.src="hamberger-menu-closed.png";
			
		
		}
		
		else{
			console.log("menu1");
			docHeading.src="hamberger-menu-open.png";
			
		
		}
	}


	imageTwo.addEventListener("click", changeImageTwo);
	docHeading.addEventListener("click", closeMenu);