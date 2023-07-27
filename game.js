//create a variable randomNumber that chooses the random number between 1 and 100, integers only 
let randomNumber = Math.floor(Math.random() * 100) +1;

// create a constants with references to parts of our UI 
// Each constant will always reference the same HTML element that it begins with 
//The values / text inside some of these elements may change but the reference will stay the same, hence why its a constant

//Used to insert values into the paragraphs later in the code 
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

//Used to store references for the form text input and the submit button 
//Used in controlling the game 
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

//Used to track how many guesses the player has had 
let guessCount = 1;

let resetButton;

function checkGuess() {
    //Create a variable called userGuess that holds the value entered into the text field 
    const userGuess = Number(guessField.value);
    //Built in number constructor to ensure the value is a number 
    // Conditional code block which will run depending on the condition
    if(guessCount===1) {
        //inside the parenthesis is the condition
        //if condition is met then the code in the curly braces will be run
        //This condition is whether the guess is the players first guess or not 
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += `${userGuess} `;
    //This appends the users current guess value to the end of the paragraph 
//Another conditional code block to determine if the guess is correct or not and 
//then will return the resulting answer 
    if(userGuess === randomNumber) {
        lastResult.textContent = "Congrats! You got it right!";
        lastResult.getElementsByClassName.backgroundColor = "green";
        lowOrhi.textContent = "";
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "!!!Game Over!!!";
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!";
        lastResult.getElementsByClassName.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "Last guess was too low";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too high";
        }
    }
    guessSubmit.addEventListener("click", checkGuess)
    //Add an event listener to the submit button 
    //The two input values are the 1. event (click) and the code we want to run on the event (checkGuess)
 
    //These lines get us ready for the next guess to be submitted 
  guessCount++; //the ++ is an increment operation - increment by one each time a guess is made 
  guessField.value = "";
  guessField.focus();
}
   


function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new Game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame () {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultsParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() *100) +1;
}

