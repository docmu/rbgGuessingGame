# rgbGuessingGame  
## Description
This game is created with html, css, and JavaScript. In this game, users are presented with a random rgb code. 
There are 3-6 options to choose from dependind on the mode(i.e Easy/Hard). Guess the rgb color by clicking on the corresponding
square. If the guess is incorrect, the square fades away and players must guess again. If the guess is correct, all squares and the
header background change to the corresponding correct color. Generate a new game by clicking New Game or Play Again.

## Demo
<a href="https://imgflip.com/gif/3q2ept"><img src="https://i.imgflip.com/3q2ept.gif" title="made at imgflip.com"/></a>

## Code Samples
The function below adds click listeners for the squares. If the clicked square is the correct color, all squares change to the correct
color and "correct" is displayed. Else, the square disapears and "try again" is displayed.
![Alt Text](https://github.com/docmu/rgbGuessingGame/blob/master/Screenshot%20(66).png)

The reset function is called at the initial state of the game and after "new game" or "play again" is clicked. This function generates
new random colors for squares, choose a color from the colors array to be the "correct" color, display the color to guess in the header,
etc.
![Alt Text](https://github.com/docmu/rgbGuessingGame/blob/master/Screenshot%20(67).png)

The pickColor function is a helper function used in the reset function to pick a color from the colors array at random. The generateRandomColors is also called within reset. This function generates random rgb colors for the number of squares available.  
![Alt Text](https://github.com/docmu/rgbGuessingGame/blob/master/Screenshot%20(68).png)
