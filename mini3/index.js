let gameReslt = document.getElementById("game-result");
let valuee = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random()*100);

function checkGuess(){
    let guessNumber = parseInt(valuee.value);

    if(guessNumber > randomNumber) {
        gameReslt.textContent = "This is too Highhhh";
        gameReslt.style.backgroundColor = "#1e217c";
    } else if(guessNumber < randomNumber) {
        gameReslt.textContent = "It's too low";
        gameReslt.style.backgroundColor = "yellow";
    }  else if(guessNumber === randomNumber) {
        gameReslt.textContent = "Congragulationssssss";
        gameReslt.style.backgroundColor="green";
    } else {
        gameReslt.textContent="Enter valid Input";
        gameReslt.backgroundColor="pink";
    }
}

