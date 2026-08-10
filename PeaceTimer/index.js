let twentySecondsBtnElm = document.getElementById("twentySeconds");
let thirtySecondsBtnElm = document.getElementById("thirtySeconds");
let fourtySecondsBtnElm = document.getElementById("fourtySeconds");
let oneMinuteBtnelm = document.getElementById("oneMinute");
let timertextElm = document.getElementById("timertext");

let timerId = null;let successMessgae = "Completed";
let secondsLeft = 0;


function clearPreviousTime() {
    if(timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}


function startsCountDown() {
    timertextElm.textContent = secondsLeft + " seconds left";

    timerId = setInterval(function() {
        secondsLeft--;

        if(secondsLeft > 0) {
            timertextElm.textContent = secondsLeft + " seconds left";
        } else {
            clearPreviousTime();
            timertextElm.textContent = successMessgae;
        }
    },1000);
}


thirtySecondsBtnElm.onclick = function() {
    clearPreviousTime();
    secondsLeft = 20;
    startsCountDown();
}

fourtySecondsBtnElm.onclick = function() {
    clearPreviousTime();
    secondsLeft = 40;
    startsCountDown();
}


thirtySecondsBtnElm.onclick = function() {
    clearPreviousTime();
    secondsLeft = 30;
    startsCountDown();
}

twentySecondsBtnElm.onclick = function() {
    clearPreviousTime();
    secondsLeft = 20;
    startsCountDown();
}


