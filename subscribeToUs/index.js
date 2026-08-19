let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let buttonEl = document.getElementById("subscribe");
let nameerrEl = document.getElementById("nameError");
let emailErrEl = document.getElementById("emailError");


nameEl.addEventListener("blur" ,function(event) {
    if(event.target.value === "") {
        nameerrEl.textContent = "Required*";
    } else {
        nameerrEl.textContent = "";
    }
})

emailEl.addEventListener("blur" , function(event) {
    if(event.target.value === "") {
        emailErrEl.textContent="Required*";
    } else {
        emailErrEl.textContent = "";
    }
})

buttonEl.addEventListener("submit" ,function(event) {
    event.preventDefault();
})
