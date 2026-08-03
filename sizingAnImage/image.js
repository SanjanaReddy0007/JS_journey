let imageEl = document.getElementById("image");
let warningMsgEl = document.getElementById("warning");
let imageWidthEl = document.getElementsByTagName("img-width");

let imgWidth = 200;
let imgMaxWidth = 300;
let imgMinWidth = 100;
let maxWarning = "Too Big , reduce It";
let minWarning = "Too Small , Increase bit";

imageEl.style.width = imgWidth + "px";
imageWidthEl.textContent = imgWidth + "px";

function Increase() {
    if(imgWidth >= imgMaxWidth ) {
        warningMsgEl.textContent = maxWarning;
    } else {
        imgWidth += 5;
        imageEl.style.width = imgWidth +"px";
        imageWidthEl.textContent=imgWidth+"px";
        warningMsgEl.textContent="";
    }
}


function Decrease(){
    if(imgWidth <= imgMinWidth) {
        warningMsgEl.textContent = minWarning;
    } else {
        imgWidth -= 5;
        imageEl.style.width = imgWidth + "px";
        imageWidthEl.textContent = imgWidth + "px";
        warningMsgEl.textContent="";
    }
}


