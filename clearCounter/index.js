let countElement = document.getElementById("number");
let clearButtonElemet  = document.getElementById("clear");

let count = 0;

let counterTimer = function() {
    count = count + 1;
    countElement.textContent = count;
}

let intervalId = setInterval(counterTimer , 1000);
clearButtonElemet.onclick = function() {
    clearInterval(intervalId);
}

