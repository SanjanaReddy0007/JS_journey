let stopButton = document.getElementById("stop");
let readyButton = document.getElementById("ready");
let goButton = document.getElementById("go");

let stopLight = document.getElementById("stoplight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");


function resetColors() {
    stopButton.style.backgroundColor = "#1f1d41";
    readyButton.style.backgroundColor = "#1f1d41";
    goButton.style.backgroundColor = "#1f1d41";

    stopLight.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#4b5069";
}

stopButton.onclick=function() {
    resetColors();
    stopButton.style.backgroundColor="#cf1124";
    stopLight.style.background="#cf1124";
}
readyButton.onclick=function() {
    resetColors();
    readyButton.style.backgroundColor="#f7c948";
    readyLight.style.background="#f7c948";
}
goButton.onclick=function() {
    resetColors();
    goButton.style.backgroundColor="#199473";
    goLight.style.background="#199473";
}


