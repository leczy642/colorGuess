//initialize all colors in an array
//the parameter for generateRandomColors is the number of colors to generate
var colors = generateRandomColors(9);


//select all the divs with class of squares
var squares = document.querySelectorAll(".square");
//select a random color from the color's array
var pickedColor = pickColor();
//select the element with an ID of colorDisplay
var colorDisplay = document.getElementById("colorDisplay");
//initialize where the success and error messages will be displayed
var messageDisplay = document.getElementById("message");
//initilize h1
var h1 = document.querySelector("h1");

//initialize our reset button
var resetButton = document.querySelector("#reset");

//initialize the mode buttons
var modeBtn = document.querySelectorAll(".mode");

//set the default number of attempts to 6
var attempts = 6

var counter = 0;

//initialize the container
var squareContainer = document.getElementById("container");

var bgColor = "#232323";


resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(9);

	//pick a new random color from array
	pickedColor = pickColor();

	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;

	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}

	//reset the color if h1 back to the body's background color
	h1.style.background = "steelblue";

	//reset the display message which shows you displayed te wrong color
	message.textContent = " ";

	counter = 0;
});


//display the random color
colorDisplay.textContent = pickedColor;

for (var i=0; i<squares.length; i++){//why square.length and not color.length
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){

		counter ++;
		//grab color of clicked squares
		var clickedColor = this.style.background;

		console.log(counter);
		//compare the colors and send success or error messages
		if(clickedColor === pickedColor){
			message.textContent = "CORRECT";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play again?"
			//alert("correct");
		}
		if (counter === setGameMode ()){
			console.log("gameover");
			message.textContent = "YOU LOOSE!";
			changeColors(bgColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play again?";
			counter = 0;

		}
		else{
			message.textContent = "WRONG!";
			this.style.background = "#232323";
			//squares.textContent = "Wrong";

		}



	});
}


//switch between easy and hard mode
setGameMode ();


function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	//select a random color
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//this function generates random colors from randomColor() and inserts them
//into an empty array using push() method
function generateRandomColors(num) {
	//make an array
	var arr = [];

	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}

	//return that array
	return arr;
}

//this function creates random number between 0 - 255 and stores them inside the r,g, and b 
//variable
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor((Math.random() * 255 + 1));
	//pick a "green" from 0 - 255
	var g = Math.floor((Math.random() * 255 + 1));
	//pick a "blue" from 0 - 255
	var b = Math.floor((Math.random() * 255 + 1));

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function setGameMode (){
	    //set the default number of attempts to 6
       // var attempts = 6
		//when the user clicks the easy button
		modeBtn[0].addEventListener("click", function(){
		//increase set the attempts to 6
		 attempts = 6;
		});
		
		//when the user clicks the hard button
		modeBtn[1].addEventListener("click", function(){
		//reduce set the number of attempts to 3
		 attempts = 3;
		});
		
		return attempts;
	}


	/**function counAttempts(){
		var counter = 0
		for (var i=0; i<modeBtn.length; i++){
			 squares[i].addEventListener("click", function(){
			 	//increment the attemps
			 	counter++;
			 	 if(counter === 3){
			 	 	alert("gameover");
			 	 }
			 });		
		}
	}**/


