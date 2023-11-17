var listLink = document.getElementById('list');
function showMenu(){
  listLink.style.right = "0";
}
function hideMenu(){
  listLink.style.right = "-200px"
}


function shopNow_1(){
  var a = 90 ;
  var qty = document.getElementById("qty").value;

  var t = a * parseInt(qty);
  alert(t);
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 8000); 

}