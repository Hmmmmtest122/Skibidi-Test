alert("KILL ALL SATANISTS KILL ALL LEFTIST GLORY TO JESUS, AMEN")
var rate = document.getElementById("1rate");
var btn = document.getElementById("btn");
var idk = document.getElementById("idk");
var idk2 = document.getElementById("idk2");
var skibidi2 = document.getElementById("skibidi2");
var yes = document.getElementById("yes");
var not = document.getElementById("not");

btn.addEventListener("click",func)

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
    if (isNaN(rateValue)) {
        alert("Please Rate Skibidi Toilet");
        return;
    }
    
    // Calculate the base rating
    var rating = rateValue * 10; // Scale from 1-10 to 10-100

    // Adjust rating based on user selections
    if (idk.checked) {
        rating += 5; // 0.5 rating added to 5 points
    }
    if (idk2.checked) {
        rating += 5; // 0.5 rating added to 5 points
    }
    if (skibidi2.checked) {
        rating += 100;
    }
    if (yes.checked) {
        rating += 100;
    }
    if (not.checked) {
        rating -= 50;
    }

    // Define the maximum possible rating
    var maxRating = 260; // Based on the above calculations

    // Calculate percentage
    let percentage = (rating / maxRating) * 100;
    
    alert("Your rating is " + percentage.toFixed(2) + "%"); // Fixed to 2 decimal places
}
