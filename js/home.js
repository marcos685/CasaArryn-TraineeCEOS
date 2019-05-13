window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.pageYOffset > 80) {
        document.getElementById("navbar").style.padding = "0px 0px";
        document.getElementById("logo").style.fontSize = "22px";
    } else {
        document.getElementById("navbar").style.padding = "30px 0px";
        document.getElementById("logo").style.fontSize = "40px";

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