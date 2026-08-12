let requestUrl = "https://gorest.co.in/public-api/users";

let requestEl = document.getElementById("requestStatus");
let responseEl = document.getElementById("httpResponse");
let addButtonEl = document.getElementById("sendGetRequestBtn");
let loadingEl = document.getElementById("loading");
let textAreaEl = document.getElementById("requestBody");

function sendPostrequest() {
    let reqBodyText = textAreaEl.value;

    let options = {
        method:"POST",
        headers: {
            "content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0"
        },

        body:reqBodyText
    }
 fetch(requestUrl, options)

    .then(function(response) {

        requestEl.textContent = response.status;

        return response.json();
    })

    .then(function(responseData) {

        responseEl.textContent =
            JSON.stringify(responseData);
    })

    .catch(function(error) {

        requestEl.textContent = error;
    });
}


addButtonEl.addEventListener("click", sendPostrequest);

