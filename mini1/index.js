function switchOff(){
 document.getElementById("bulbImage").src =
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("catImage").src =
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";

    document.getElementById("switchText").textContent="Off It";
    document.getElementById("onSwitch").style.backgroundColor="#22c55e";
    document.getElementById("offSwitch").style.backgroundColor="#dcdbd8";

}



function switchOn() {
  document.getElementById("bulbImage").src =
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("catImage").src =
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
 document.getElementById("switchText").textContent="ON It";
    
 document.getElementById("onSwitch").style.backgroundColor="#b8b8b4";

document.getElementById("offSwitch").style.backgroundColor="#e12d39";
}







