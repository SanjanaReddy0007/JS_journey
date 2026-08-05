
let inputContainerElement = document.getElementById("inputContainer");
let listContainerElement = document.getElementById("list-container");

function addNow() {
    let inputvalue = inputContainerElement.value;
    if(inputvalue === "") {
        alert("Enter valid value");
        return;
    }

    let listEl = document.createElement("li");
    listEl.textContent = inputvalue;
    listContainerElement.appendChild(listEl);
    inputContainerElement.value="";
}


