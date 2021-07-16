// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("sticky").style.fontSize = "25px";
    document.getElementById("title").style.fontSize = "25px";
    if (window.width < 600 ) {
        document.getElementById("sticky").style.height = "90px";
    }
    document.getElementById("sticky").style.height = "120px";
  } else {
    document.getElementById("sticky").style.fontSize = "40px";
    document.getElementById("title").style.fontSize = "40px";
    document.getElementById("sticky").style.height = "175px";
  }
}