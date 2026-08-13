let deleteButtonel = document.getElementById("sendDeleteRequestBtn");
let requestElement = document.getElementById("requestStatus");
let responseStatusEl = document.getElementById("httpResponse");
let lodingEl = document.getElementById("loading");
let userInputEl = document.getElementById("userInput");


function HTTPDELETE() {
    let textt = userInputEl.value;
    
    let url = "https://gorest.co.in/public-api/users/" + textt;
    let options = {
        method:"DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0"
        }
    }

    lodingEl.classList.remove("d-none");
    requestElement.classList.add("d-none");

    fetch(url, options)
    .then(function(response) {
        return response.json();
    })


    .then(function(responseData) {
        lodingEl.classList.add("d-none");
        requestElement.classList.remove("d-none");

        requestElement.textContent = responseData.code;
        responseStatusEl.textContent = JSON.stringify(responseData,null,2);
    })

 .catch(function(error) {

            loadingEl.classList.add("d-none");
            requestStatusEl.classList.remove("d-none");

            requestStatusEl.textContent = "Error";
            httpResponseEl.textContent = error;
        });


}

deleteButtonel.addEventListener("click", HTTPDELETE);

