alert("KILL ALL LEFTISTS AND SATANISTS LONG LIVE JESUS CHRIST AMEN!")

rate = document.getElementById("1rate")
btn = document.getElementById("btn")
idk = document.getElmentById("idk")
idk2 = document.getElementById("idk2")
skibidi = document.getElementById("skibidi")
//is skibidi a input or a label?(Ghostwriter: )
skibidi2.getElementById("skibidi2")

btn.addEventListener("click", func)
function func(){
  if (rate.value > 10){
    alert("Can't be higher than 10")
    return}
  if (rate.value <1){
    alert("Can't be lower than 1")
    return}
  if (rate.value=null){
    alert("Please Rate Skibidi Toilet")
    return
  
  }
  var rating = rate.value
  rating = rating*100/10
  if (idk.checked){
    rating =+ 0.5
  }
  if (idk2.checked){
    rating =+ 0.5
  }
  if (skibidi2.checked){
    rating += 100
  }
  alert("Your rating is " + rating%1000+"/100%")
  }
  
