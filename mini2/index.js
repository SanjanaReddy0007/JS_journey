let counterValue = document.getElementById("value");

function onIncrement() {
  let previousValue = counterValue.textContent;
  let updateValue = parseInt(previousValue) + 1;
  counterValue.textContent = updateValue;

  if(updateValue > 0) {
    counterValue.style.color="green";
  } else if(updateValue < 0) {
    counterValue.style.color="red";
  } else {
    counterValue.style.color="black;"
  }


}

function onReset(){
  let counterEl = 0;
  counterValue.textContent = counterEl;
  counterValue.style.color="black";
}


function onDecrement(){
  let previousValue = counterValue.textContent;
  let updateValue = parseInt(previousValue) - 1;
  counterValue.textContent = updateValue;

  if(updateValue > 0) {
    counterValue.style.color="green";
  } else if(updateValue < 0) {
    counterValue.style.color="red";
  } else {
    counterValue.style.color="black;"
  }

}


