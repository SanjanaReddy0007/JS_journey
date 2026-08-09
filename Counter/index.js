let timerElement = document.getElementById("timer");
let defuseelement = document.getElementById("defuse");
let countdown = 10;

let intervalId = setInterval(function() {
   countdown = countdown - 1;
    timerElement.textContent = countdown;
    if(countdown == 0) {
        timerElement.textContent="BOOM";
        clearInterval(intervalId);
    }

},1000);


defuseelement.addEventListener("keydown" , function(event) {
    let bombDefuseElement = defuseelement.value;
    if(event.key == "Enter" && bombDefuseElement === "defuse" && countdown !== 0) {
        timerElement.textContent = "Congratssssssss";
        clearInterval(intervalId);
    }
});

