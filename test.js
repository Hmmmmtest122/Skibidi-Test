alert("KILL ALL SATANISTS KILL ALL LEFTIST GLORY TO JESUS, AMEN")
var rate = document.getElementById("1rate");
var btn = document.getElementById("btn");
var idk = document.getElementById("idk");
var idk2 = document.getElementById("idk2");
var skibidi2 = document.getElementById("skibidi2");
var yes = document.getElementById("yes");
var not = document.getElementById("not");

btn.addEventListener("click", func);

function func() {
    // Convert the input value to a number
    var rateValue = parseFloat(rate.value);

    // Validation checks
    if (rateValue > 10) {
        alert("Can't be higher than 10");
        return;
    }
    if (rateValue < 1) {
        alert("Can't be lower than 1");
        return;
    }
    if (isNaN(rateValue)) { // Changed to check for NaN
        alert("Please Rate Skibidi Toilet");
        return;
    }

    var rating = rateValue * 10; // Scale from 0 to 100
    if (idk.checked) {
        rating += 0.5;
    }
    if (idk2.checked) {
        rating += 0.5;
    }
    if (skibidi2.checked) {
        rating += 100;
    }

    if (yes.checked ){
        rating += 100;
    }
    if (not.checked){
        rating -= 50;
    }
    let precentage= (rating - 1000) / (1000) * 100
    alert("Your rating is " + precentage + "/100%");
}
