/*navigator.serviceWorker && navigator.serviceWorker.register(‘./sw.js’).then(function(registration) {  console.log(‘Excellent, registered with scope: ‘, registration.scope);});*/

startButton = document.getElementById("start");

startButton.addEventListener("click", quiz)
function quiz(){
  //redirect to quiz page 
  window.location.href = "test.html";
}
