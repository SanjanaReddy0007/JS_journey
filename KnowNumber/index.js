let userInputEl = document.getElementById("userInput");
let spinnerel = document.getElementById("spinner");
let factel = document.getElementById("fact");

function ClickTheButton() {
   let enteredVal = userInputEl.value;

   if(enteredVal === "") {
     alert("Enter a Value");
     return;
   }
   
    let url = "https://apis.ccbp.in/numbers-fact?number=" + enteredVal;
    let options = {
        method:"GET"
    }


    spinnerel.classList.remove("d-none");
    factel.classList.add("d-none");

    fetch(url,options)
    .then(function(response) {
        return response.json();
    })

    .then(function(jsonData) {
        let {fact} = jsonData;

        spinnerel.classList.add("d-none");
        factel.classList.remove("d-none");

        factel.textContent = fact;
    })


    .catch(function(error) {
        spinnerel.classList.remove("d-none");
        factel.classList.add("d-none");
        factel.textContent = "Error at fecthing the number";
        console.log(error);
    })
}


userInputEl.addEventListener("keyup" , ClickTheButton);

