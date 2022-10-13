function dropdownmenu() {
  var x = document.getElementById("dropdownicon");
  if (x.className === "topnav"){
      x.className += " responsive";
  } else{
      x.className = "topnav";
  }
}