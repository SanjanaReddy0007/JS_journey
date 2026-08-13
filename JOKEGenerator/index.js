let jokeButtonEl = document.getElementById("jokeButton");
let spinerEl = document.getElementById("spinner");
let jokeTextel = document.getElementById("jokeText");

let url = "https://apis.ccbp.in/jokes/random";

function JOKEGENERATE() {
    spinerEl.classList.remove("d-none");
    jokeTextel.textContent = "";

    let options = {
        mehtod:"GET"
    }

    fetch(url,options)
    .then(function(response) {
        return response.json();
    })

    .then(function(responseData) {
        spinerEl.classList.add("d-none");
        jokeTextel.textContent = responseData.value;
    })
}


jokeButtonEl.addEventListener("click" , JOKEGENERATE);

