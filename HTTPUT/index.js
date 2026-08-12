let requestStatusEl = document.getElementById("requestStatus");
let responsEl = document.getElementById("httpResponse");
let userInputEl = document.getElementById("userInput");
let addButtonEl = document.getElementById("sendPutRequestBtn");
let loadingEl = document.getElementById("loading");
let reqBodyEl = document.getElementById("requestBody");


function PutREQUEST() {
    let uniqueId = userInputEl.value;
    if(uniqueId === "") {
        alert("enter Id");
        return;
    }


    let url = "https://gorest.co.in/public-api/users/" + uniqueId;
    let responseText = reqBodyEl.value;
    
    let options = {
        method:"PUT",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
        },
        body:responseText
    }


    loadingEl.classList.remove("d-none");
    requestStatusEl.textContent = "";
    responsEl.textContent="";

    fetch(url,options)
    .then(function(response) {
        let req = response.status;
        requestStatusEl.textContent = req;
        return response.json();
    })

    .then(function(responseData) {
        loadingEl.classList.add("d-none");
        let data = JSON.stringify(responseData);
        responsEl.textContent = data;
    })


    .catch(function(erro){
        loadingEl.classList.add("d-none");
        requestStatusEl.textContent=  "Error: "+erro.message;
    })

}


addButtonEl.addEventListener("click",PutREQUEST);


