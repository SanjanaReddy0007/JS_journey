let firstEl = document.getElementById("first");
let secondel = document.getElementById("second");
let gameResultEl = document.getElementById("gameResult");
let inputEl = document.getElementById("userInput");
let checkButton = document.getElementById("check");
let resetButtonEl = document.getElementById("reset");

let successMessge ="Yah cogragulationsss you get it.....";
let warningMsg = "Try again again";



function resetGame() {
    let firstttttttt = Math.random() * 100;
    let secondddddddd = Math.random()*100;

    firstEl.textContent=Math.ceil(firstttttttt);
    secondel.textContent=Math.ceil(secondddddddd);
    inputEl.value="";
    gameResultEl.textContent="";
}



checkButton.onclick=function() {
    let firstValue = parseInt(firstEl.textContent);
    let secondValue = parseInt(secondel.textContent);
    let userEnterreValue = parseInt(inputEl.value);
    let sum = firstValue + secondValue;

    if(sum === userEnterreValue) {
       gameResultEl.textContent=successMessge;
       gameResultEl.style.backgroundColor="#028a0f";
       gameResultEl.style.color="white";
    } else {
        gameResultEl.textContent=warningMsg;
        gameResultEl.style.backgroundColor="#1e217c";
        gameResultEl.style.color="white";
    }
}



resetButtonEl.onclick=resetGame;
resetGame();

