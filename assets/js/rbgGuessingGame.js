var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
  //mode btns event listener
  setupModeBtns();
  //square listeners
  setupSquares();
  
  reset();
}

function setupModeBtns(){
  //mode btns event listener
  for(var i=0; i <modeBtns.length; i++){
  modeBtns[i].addEventListener("click", function(){
    modeBtns[0].classList.remove("selected");
    modeBtns[1].classList.remove("selected");
    this.classList.add("selected");
    //if "Easy" numSquares = 3; else 6
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    reset();
  });
} 
}

function setupSquares(){
    for(var i=0; i<squares.length; i++){
    //add click listener to squares
    squares[i].addEventListener("click", function(){
        //color of clicked square
        var clickedColor = this.style.background;
        //compare to pickedColor
        if(clickedColor === pickedColor){
        messageDisplay.textContent = "correct";
        messageDisplay.classList.add("correct");
        resetButton.textContent = "play again?"
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        }
        else{
        this.style.background = "#232323";
        messageDisplay.textContent = "try again";
        messageDisplay.classList.add("tryAgain");
        }
    });
    }
}

function reset(){
    messageDisplay.classList.remove("correct");  
    messageDisplay.classList.remove("tryAgain");  
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //only says "play again?" after winning
    resetButton.textContent = "New Colors";
    //no longer "correct"
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.background = colors[i]
        }
        else{
        squares[i].style.display = "none";
        }
    }
    // h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function(){
  reset();
});

function changeColors(color){
    //change all colors to match given color
    for(var i=0; i<squares.length; i++){
        squares[i].style.background = color;
    }
    }
    //pick random colors for the h1
    function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
    }
    //random colors for squares
    function generateRandomColors(num){
    var arr = []
    for(var i=0; i<num; i++){
        //get rand colors and push into array
        arr.push(randomColor());
    }
    return arr;
    }
    //helper function
    function randomColor(){
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256); 
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256); 
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256); 
    return "rgb(" + r + ", " + g + ", " + b + ")";
}