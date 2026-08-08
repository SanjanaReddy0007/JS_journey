let updateContainerElement = document.getElementById("updateValue");
let addButtonelement = document.getElementById("addButton");
let startIndexElement = document.getElementById("startIndex");
let deleteIndexElement = document.getElementById("deleteIndex");
let AddIndexElement = document.getElementById("AddIndex");

let arr = [1, 7, 3, 1, 0, 20, 77];
updateContainerElement.textContent = JSON.stringify(arr);

addButtonelement.onclick = function() {
    let startindex = startIndexElement.value;
    let deleteIndex = deleteIndexElement.value;
     let addindex = AddIndexElement.value;

     if(startindex === "") {
        alert("Enter Index");
        return;
     }

     if(deleteIndex === "") {
        deleteIndex = 0;
     }

     startindex = parseInt(startindex);
     deleteIndex = parseInt(deleteIndex);

     if(addindex === "") {
        arr.splice(startindex,deleteIndex);
     } else {
        arr.splice(startindex,deleteIndex,addindex);
     }

     startindex.value = "";
     deleteIndex.value = "";
     addindex.value = "";

    updateContainerElement.textContent = JSON.stringify(arr);

}


