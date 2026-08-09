let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let inputElement = document.getElementById("userInput");
let errorMsgel = document.getElementById("error");
let wordsContainerElement = document.getElementById("wordsContainer");


function createAppend(word) {
    let randomSize = Math.ceil(Math.random() * 40) + "px";
    let wordElement = document.createElement("span");
    wordElement.textContent = word;
    wordElement.style.fontSize = randomSize;
    wordElement.style.marginRight = "5px";
    wordElement.style.display="inline-block";
    wordsContainerElement.appendChild(wordElement);
}


function addWordToPage(){
    let enteredValue = inputElement.value;
    if(enteredValue === "" ) {
        alert("enter a Valid value pleasee");
        return;
    }

    errorMsgel.textContent = "";
    inputElement.value="";

    createAppend(enteredValue);
}


wordCloud.forEach(word => createAppend(word));
