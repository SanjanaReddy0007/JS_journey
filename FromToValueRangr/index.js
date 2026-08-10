let counterValueelemnt = document.getElementById("counterText");
let fromValueelemnt = document.getElementById("fromVlaue");
let toValueelement = document.getElementById("toValue");


function displayNum(fromVal,ToVal) {
   let current  = fromVal;
   counterValueelemnt.textContent = current;

   let timerId = setInterval(function() {
      if(current < ToVal) {
          current += 1;
          counterValueelemnt.textContent = current;
      } else {
        clearInterval(timerId);
      }
   },1000);
}


function ClickAddFunction(){
    let fromVal = fromValueelemnt.value;
    let ToVal = toValueelement.value;

    if(fromVal === "") {
        alert("Enter from value");
    } else if(ToVal === "") {
        alert("Enter To value");
    } else {
        fromVal = parseInt(fromVal);
        ToVal = parseInt(ToVal);
        displayNum(fromVal, ToVal);
    }
}

