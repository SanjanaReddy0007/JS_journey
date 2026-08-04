let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let bgElement = document.getElementById("container");
let buttonEl = document.getElementById("click");


function clickIt() {
    let randomEl = Math.ceil(Math.random()*bgColorsArray.length);
    let randomColor = bgColorsArray[randomEl];
    bgElement.style.backgroundColor=randomColor;
}

buttonEl.onclick = clickIt;


