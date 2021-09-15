var hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');

    var overlay = document.getElementById("overlay");
    if (overlay.style.opacity === "1") {
      overlay.style.opacity = "0";
      overlay.style.zIndex = "-1";
    } else {
      overlay.style.opacity = "1";
      overlay.style.zIndex = "2";
    }
  });
}

function closeNav() {
  hamburger.classList.toggle('is-active');
  document.getElementById("overlay").style.opacity = "0";
  overlay.style.zIndex = "-1";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("badge");
  if (n >= x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "0";
    x[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace("selected-badge", "");
  // }
  if (x.length > 0) {
    x[slideIndex - 1].style.display = "block";
    x[slideIndex - 1].style.opacity = "1";
    // dots[slideIndex-1].className += " selected-badge";
  }
}

var i = setInterval(function () {
  showDivs(slideIndex++);
}, 3000);


var slideIndexMobile = 1;
showDivsMobile(slideIndexMobile);

function plusDivsMobile(n) {
  showDivsMobile(slideIndexMobile += n);
}

function currentDivMobile(n) {
  showDivsMobile(slideIndexMobile = n);
}

function showDivsMobile(n) {
  var i;
  var x = document.getElementsByClassName("mobile-slides");
  if (n >= x.length) { slideIndexMobile = 1 }
  if (n < 1) { slideIndexMobile = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "0";
    x[i].style.display = "none";
  }
  if (x.length > 0) {
    x[slideIndexMobile - 1].style.display = "block";
    x[slideIndexMobile - 1].style.opacity = "1";
  }
}

var i = setInterval(function () {
  showDivsMobile(slideIndexMobile++);
}, 3000);


function onStartClick() {
  closeNav();
  var element = document.getElementById("introduction");

  element.scrollIntoView({ block: "end", inline: "start" });
}

function onAboutClick() {
  closeNav();
  var element = document.getElementById("introduction-details");

  element.scrollIntoView({ block: "end", inline: "start" });
}


function onFunctionalitiesClick() {
  closeNav();
  var element = document.getElementById("functionalities");

  element.scrollIntoView({ block: "end", inline: "start" });
}

function onFunctionalitiesClick() {
  closeNav();
  var element = document.getElementById("functionalities");

  element.scrollIntoView({ block: "end", inline: "start" });
}

function onMobileClick() {
  closeNav();
  var element = document.getElementById("mobile-version");

  element.scrollIntoView({ block: "start", inline: "start" });
}


function onDemoClick(){
  closeNav();
  var element = document.getElementById("demo");

  element.scrollIntoView({ block: "end", inline: "start" });
}

function onContactClick() {
  closeNav();
  var element = document.getElementById("contact");

  element.scrollIntoView({ block: "start", inline: "start" });
}



function onPartnersClick() {
  closeNav();
  var element = document.getElementById("partners");

  element.scrollIntoView({ block: "end", inline: "start" });
}
