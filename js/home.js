window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.pageYOffset > 80) {
        document.getElementById("navbar").style.padding = "5px 10px";
        document.getElementById("logo").style.fontSize = "22px";
    } else {
        document.getElementById("navbar").style.padding = "33px 50px";
        document.getElementById("logo").style.fontSize = "30px";

    }
}