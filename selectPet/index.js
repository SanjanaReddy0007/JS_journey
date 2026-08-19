let petIamge = {
    Dog:"https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_1280.jpg",
    Cat:"https://images7.alphacoders.com/324/324819.jpg",
    Rabbit:"https://tse4.mm.bing.net/th/id/OIP.Ha0hkn-zeqj2tu3Wsw62twHaHa?r=0&pid=Api&h=220&P=0",
    Parrot:"https://tse2.mm.bing.net/th/id/OIP.IHmSOAqD3QL9iO09BihsbAHaE8?r=0&pid=Api&h=220&P=0",
    DogCat:"https://wallpapercave.com/wp/wp2446973.jpg"
}


let imageEl = document.getElementById("selectPet");
let picsEl = document.getElementById("img");

imageEl.addEventListener("change",function(event) {
    let selectIg = event.target.value;
    let finalImg = petIamge[selectIg];
    picsEl.src=finalImg;
})

