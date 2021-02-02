var css = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("random-btn");

//console.log(btn);
setGradient();

//functions
function randomizeColors(){
	color1.value=generateHexColor();
	color2.value=generateHexColor();
	setGradient();
}
function generateHexColor(){
	return "#" 
	+ generateHexComponent() 
	+ generateHexComponent() 
	+ generateHexComponent();
}
function generateHexComponent(){
	var hex = Math.floor(Math.random()*256).toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function setGradient(){
	// console.log(body.style.background.linearGradient);
	body.style.background = "linear-gradient(to right, "
	 + color1.value 
	 + ", "
	 + color2.value 
	 + ")";

	 css.textContent = body.style.background + ";";
	 // console.log(color1.value);
	 //console.log(body.style.background);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", randomizeColors);