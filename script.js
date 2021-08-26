var hamburger = document.getElementById('hamburger');
if(hamburger){
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');

    var overlay = document.getElementById("overlay");
    if(overlay.style.opacity === "1"){
      overlay.style.opacity = "0";
      overlay.style.zIndex = "-1";
    } else {
      overlay.style.opacity = "1";
      overlay.style.zIndex = "1";
    }
  });
}

function closeNav() {
  hamburger.classList.toggle('is-active');
  document.getElementById("overlay").style.opacity = "0";
  overlay.style.zIndex = "-1";
}