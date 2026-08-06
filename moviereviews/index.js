let reviewContainerElement = document.getElementById("reviewContainer");
let AddbuttonElement = document.getElementById("addBtn");
let textAreaInputElement = document.getElementById("textAreaInput");
let inputElement = document.getElementById("userInput");


AddbuttonElement.onclick=function() {
    let inputValue = inputElement.value;
    let textareaInput = textAreaInputElement.value;

    if(inputValue==="") {
        alert("Enter valid text");
        return;
    }


    let movietitleElement = document.createElement("h1");
    movietitleElement.textContent="Title: "+inputValue;
    movietitleElement.classList.add("movie-title");

    let movieDescriptionelment = document.createElement("p");
    movieDescriptionelment.textContent = "Review: " + textareaInput;
    movieDescriptionelment.classList.add("description");

   reviewContainerElement.appendChild(movietitleElement);
  reviewContainerElement.appendChild(movieDescriptionelment);

  movietitleElement.value="";
  movieDescriptionelment.value="";

}

