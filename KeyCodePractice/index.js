let keycodeListEl = document.getElementById("keycodeList");
let userInputElement = document.getElementById("userInput");

function createAppend(keyCode) {
    let listelemnt = document.createElement("li");
    listelemnt.textContent = keyCode;
    keycodeListEl.appendChild(listelemnt);
}

function onkeyDown(event) {
    createAppend(event.keyCode);
}

userInputElement.addEventListener("keydown",onkeyDown);

