let errormsgEl = document.getElementById("error");
let HyderabadCityEl = document.getElementById("HyderabadCity");
let chennaiCityEl = document.getElementById("chennaiCity");
let DelhiCityEl = document.getElementById("DelhiCity");
let MumbaiCityEl = document.getElementById("MumbaiCity");
let submitButtonEl = document.getElementById("submitButton");
let questionFormEl = document.getElementById("questionForm");

HyderabadCityEl.addEventListener("change",function(event){
    console.log("Selected: " + event.target.value);
})

chennaiCityEl.addEventListener("change",function(event){
    console.log("Selected: " + event.target.value);
})

DelhiCityEl.addEventListener("change",function(event){
    console.log("Selected: " + event.target.value);
})

MumbaiCityEl.addEventListener("change",function(event){
    console.log("Selected: " + event.target.value);
})

questionFormEl.addEventListener("submit",function(event){
    event.preventDefault();

    let selectedCity = "";
    if(HyderabadCityEl.checked) {
        selectedCity="Hyderabad";
    } else if(chennaiCityEl.checked) {
        selectedCity="Chennai";
    } else if(DelhiCityEl.checked) {
        selectedCity = "Delhi";
    } else {
        selectedCity="Mumbai";
    }


    if(selectedCity === "") {
        errormsgEl.textContent = "Please Enter a Valid";
        errormsgEl.style.color = "red";
    } else if(selectedCity === "Delhi") {
        errormsgEl.textContent="Correct Answer";
        errormsgEl.style.color="green";
    }else{
        errormsgEl.textContent="Wrong Answer";
        errormsgEl.style.color="red";
    }

})

