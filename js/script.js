//bouton remonter en haut
mybutton = document.getElementById("ToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//bonton remonter en haut
//Bouton changer css
function changeCSS (sheet) {
  document.getElementById('pagestyle').setAttribute('href', sheet);
}
function swapCSS(sheet){
  document.getElementById('pagestyle').setAttribute('href', sheet);
}