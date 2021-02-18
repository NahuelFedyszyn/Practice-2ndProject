var prevScrollpos = window.pageYOffset; //This variable indicates if we are going up or down in the page
window.onscroll = function() { //This function hides the header if we are going down, and shows it if we are going up
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}