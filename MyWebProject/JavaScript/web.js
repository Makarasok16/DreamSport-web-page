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