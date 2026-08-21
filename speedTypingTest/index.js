let resultEl = document.getElementById("result");
let quoteDispalyEl = document.getElementById("quoteDisplay");
let textInputEl = document.getElementById("textInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
let timerEl = document.getElementById("timer");

let seconds = 0;
let currentquote = "";
let intervalId;

function startInterval() {
    clearInterval(intervalId);
    seconds = 0;
    timerEl.textContent = seconds;
   
    intervalId = setInterval(function() {
        seconds++;
        timerEl.textContent=seconds;
    },1000);

}
    function stopTimer() {
        clearInterval(intervalId);
    }


    function getRandomQuote() {
        spinnerEl.classList.remove("d-none");
        quoteDispalyEl.textContent="";
        resultEl.textContent="";
        textInputEl.textContent="";
        textInputEl.disable=false;

         fetch("https://apis.ccbp.in/random-quote")
         .then(function(response){
            return response.json();
         })

         .then(data=>{
            spinnerEl.classList.remove("d-none");
            currentquote = data.content.trim();
            quoteDispalyEl.textContent=currentquote;
            startInterval();
            textInputEl.focus();
         })

         .catch(() => {
            spinnerEl.classList.add("d-none");
            quoteDispalyEl.textContent = "Failed to load quote. Try again.";
        });

    }


    function checkInput() {
        let typedtext = textInputEl.value;
        if(typedtext === "") {
            resultEl.textContent="Enter Correct one";
            resultEl.style.color="#6b7258";
            return;
        } 

        if(typedtext === currentquote) {
            stopTimer();
            resultEl.textContent=`success the time taken is : ${seconds} onlyyy..`;
             resultEl.style.color = "#16a34a";
             textInputEl.disable = true;
        } else {
            resetBtnEl.textContent="Keeeeeep Tryinggggg";
            resetBtnEl.style.color="#dc2626";
        }
    }


    submitBtnEl.addEventListener("click",checkInput);
    resetBtnEl.addEventListener("click", () =>{
        stopTimer();
        getRandomQuote();
    })

window.onload = getRandomQuote;


