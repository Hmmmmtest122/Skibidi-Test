alert("KILL ALL SATANISTS KILL ALL LEFTIST GLORY TO JESUS, AMEN")
var rate = document.getElementById("1rate");
var btn = document.getElementById("btn");
var idk = document.getElementById("idk");
var idk2 = document.getElementById("idk2");
// LORD FORGIVE ME 
var skibidi2 = document.getElementById("skibidi2");

btn.addEventListener("click", func);

function func() {
  if (rate.value > 10) {
    alert("Can't be higher than 10");
    return;
  }
  if (rate.value < 1) {
    alert("Can't be lower than 1");
    return;
  }
  if (rate.value === "") {
    alert("Please Rate Skibidi Toilet");
    return;
  }

  var rating = rate.value;
  rating = rating * 100 / 10;

  if (idk.checked) {
    rating += 0.5;
  }
  if (idk2.checked) {
    rating += 0.5;
  }
  if (skibidi2.checked) {
    rating += 100;
  }

  alert("Your rating is " + (rating % 1000) + "/100%");
}

