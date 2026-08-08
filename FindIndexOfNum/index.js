let numbersArray = [ 17, 31, 77, 20, 63 ];
let InputIdelement = document.getElementById("InputId");
let indexOfNumerElement = document.getElementById("indexOfNumer");


function findIndexOfNumber() {
    let number = parseInt(InputIdelement.value);
    let numbersIndex  = number.findIndex(function(each) {
              return each === number;
    })
    indexOfNumerElement.textContent = numbersIndex;
}


