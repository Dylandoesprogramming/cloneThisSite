console.log("Instructions are loaded!");

//Get the modal
var modal = document.getElementById('myModal');

//Get the <span> that closes the modal
var span = document.getElementsByClassName("close")[0];

var btn = document.getElementById("myBtn");

//open on load
// window.onload = function(){
//   console.log("Function on trigger!");
//   modal.style.display = "block";
// };

window.onclick = function(event) {
  if(event.target == modal || event.target == span) {
    modal.style.display = "none";
  }
};

btn.onclick = function(){
  modal.style.display = "block";
}
