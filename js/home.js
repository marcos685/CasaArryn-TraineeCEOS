window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var nav = document.getElementById("navbar");
  var logo = document.getElementById("logo");
  var mediaQuery = window.matchMedia('(max-width: 1080px)')

  if (!mediaQuery.matches){
    if (window.pageYOffset > 80) {
      if(nav.className === "navb") {
        nav.className += " stickynav";
        logo.className += " stickylogo";
      }
    } else {
        nav.className = "navb";
        logo.className = "lg";
    }
  }
}

function mobileNavbar() {
    var nav = document.getElementById("navbar");
    if (nav.className === "navb") {
      nav.className += " mobnav";
    } else {
      nav.className = "navb";
    }
}