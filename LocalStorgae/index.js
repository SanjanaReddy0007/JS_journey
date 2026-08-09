let msgelement = document.getElementById("msg");
let saveBtnElement = document.getElementById("Save");
let clearBtnElement = document.getElementById("Clear");

let storageKey = "UserInput";
let stroageVValue = localStorage.getItem(storageKey);

if(stroageVValue !== null) {
    msgelement.value = stroageVValue;
}

saveBtnElement.onclick=function() {
    let textt = msgelement.value;
    localStorage.setItem(storageKey,textt);
}

clearBtnElement.onclick=function() {
    msgelement.value = "";
    localStorage.removeItem(storageKey);
}

