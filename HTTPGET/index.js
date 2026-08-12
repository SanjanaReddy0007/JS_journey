let requestEl = document.getElementById("requestStatus");
let responseStatus = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");
let requestButtonel = document.getElementById("sendGetRequestBtn");

let requestUrl = "https://gorest.co.in/public-api/users";

function getHTTPUrl() {
    loadingEl.classList.remove("d-none");
    requestEl.textContent = "";
    responseStatus.textContent = "";

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })

    .then(function(responseData) {
        loadingEl.classList.add("d-none");

        let statusText = responseData.status;
        let httpResponse = JSON.stringify(responseData);

        requestEl.textContent = statusText;
        responseStatus.textContent = httpResponse;

    })

    .catch(function(error) {
       loadingEl.classList.add("d-none");
       requestButtonel.textContent = "Again do it";
       responseStatus.textContent = error;
    })
}


requestButtonel.addEventListener("click",getHTTPUrl);
