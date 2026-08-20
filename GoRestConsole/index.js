let requestUrlElement = document.getElementById("requestUrl");
let requestErrorEl = document.getElementById("requestError");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let sendButtonEl = document.getElementById("sendButton");
let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");
let formEl = document.getElementById("formPage");

requestMethodEl.addEventListener("change" , function() {
   if(requestMethodEl.value === "POST") {
      requestUrlElement.value = "https://gorest.co.in/public-api/users";
   } else if(requestMethodEl.value==="PUT") {
    requestUrlElement.value = "https://gorest.co.in/public-api/users/USER_ID";
   }
})

formEl.addEventListener("submit" , function(event) {
     event.preventDefault();
     let requestUrl = requestUrlElement.value;

     if(requestUrl==="") {
        requestErrorEl.textContent="Errorr";
     }else {
        requestErrorEl.textContent="";
     }

     let reqMethod = requestMethodEl.value;
     let reqBody = requestBodyEl.value;
      
     let options = {
        method:reqMethod,
         headers: {
            "content-type": "application/json",
            Accept: "application/json",
            Authentication: "Bearer 152c9896968676342fa7819448914041dd3e1d07845816a3aa2b2f4930f8b66f"
        },
        body:reqBody
     }

     fetch(requestUrl,options)
     .then(function(response) {
        return response.json();
     })


     .then(function(responseData) {
        responseStatusEl.value = responseData.code;
        responseBodyEl.value = JSON.stringify(responseData);
     })

     .catch(function(error) {
        responseStatusEl.value = error;
        responseBodyEl.value = error;
     })

})




