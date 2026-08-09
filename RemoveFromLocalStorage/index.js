let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");
let inputel = document.getElementById("inputId");

let storageKey = "keyy";

if(storageKey === null) {
    localStorage.setItem(storageKey,"Helloo");
}

inputel.value=localStorage.getItem(storageKey);

saveBtnEl.onclick = function() {
    let inputElement = inputel.value;
    localStorage.setItem(storageKey,inputElement);
}

clearBtnEl.onclick=function() {
    inputel.value="";
    localStorage.removeItem(storageKey);
}


