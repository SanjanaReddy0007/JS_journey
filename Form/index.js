let formEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErr = document.getElementById("nameError");

let emailEl = document.getElementById("email");
let emailErr = document.getElementById("emailerror");



nameEl.addEventListener("blur",function(event) {
     if(event.target.value === "") {
        nameErr.textContent="Required*";
     } else {
        nameErr.textContent="";
     }
})

emailEl.addEventListener("blur",function(event) {
    if(event.target.value === "") {
        emailErr.textContent="Required*";
    }else{
        emailErr.textContent="";
    }
})

formEl.addEventListener("submit",function(event) {
    event.preventDefault();
})


