let formEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErr = document.getElementById("nameError");

let emailEl = document.getElementById("email");
let emailErr = document.getElementById("emailerror");

let genderMaleEl = document.getElementById("male");
let genderFemaleEl = document.getElementById("Female");
let selectEl = document.getElementById("select");

let formData = {
    name:"",
    email:"",
    status:"Active",
    gender:"Female"
};

nameEl.addEventListener("change",function(event) {
     if(event.target.value === "") {
        nameErr.textContent="Required*";
     } else {
        nameErr.textContent="";
     }
     formData.name=event.target.value;
});

emailEl.addEventListener("change",function(event) {
    if(event.target.value === "") {
        emailErr.textContent="Required*";
    }else{
        emailErr.textContent="";
    }

    formData.email=event.target.value;
});

selectEl.addEventListener("change",function(event){
    formData.status = event.target.value;
})


genderMaleEl.addEventListener("change",function(event) {
    formData.gender=event.target.value;
})

genderFemaleEl.addEventListener("change",function(event) {
    formData.gender=event.target.value;
})


function validateformdata(formData) {
     let {name,email} = formData;
     if(name === "") {
        nameErr.textContent = "Required*";
     } 
      if(email === "" ){
        emailErr.textContent="Required*";
     }
}


function submitFormData(formData) {
    let options = {
        method:"POSt",
         headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
    },
     body:JSON.stringify(formData)
    }

    let url="https://gorest.co.in/public-api/users"
    fetch(url,options)
    .then(function(response){
        return response.json();
    })

    .then(function(responseData) {
        console.log(responseData);
        if(responseData.code === 422) {
            if(responseData.data[0].message==="has already be taken") {
                emailErr.textContent="Email already exists";
            }
        }
    })
}



formEl.addEventListener("submit",function(event) {
    event.preventDefault();
    validateformdata(formData);
    submitFormData(formData);
})




