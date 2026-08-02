let colorPick = document.getElementById("container");
let selectText = document.getElementById("speccific");



function changeColor (color) {
    colorPick.style.backgroundColor=color;
    selectText.textContent=color;
}


let button1 = document.getElementById("button1");
button1.style.backgroundColor="#e0e0e0";
button1.onclick = function() {
    changeColor("#e0e0e0");
}

let button2 = document.getElementById("button2");
button2.style.backgroundColor="#6fcf97";
button2.onclick=function() {
    changeColor("#6fcf97");
}


let button3 = document.getElementById("button3");
button3.style.backgroundColor="#56ccf2";
button3.onclick=function(){
    changeColor("#56ccf2");
}

let button4 = document.getElementById("button4");
button4.style.backgroundColor = "#bb6bd9";
button4.onclick = function() {
    changeColor("#bb6bd9");
};






