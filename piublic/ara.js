console.log(firebase)
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }}
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image

  let btnBack = document.querySelector('button');
  btnBack.addEventListener('click',()=>{ 
    window.history.back();
  });
  const firebaseConfig = {
    apiKey: "AIzaSyAjPMPHgT_eoG4npL0sjhOQI-l0G-wK09o",
    authDomain: "starevnts-19467.firebaseapp.com",
    projectId: "starevnts-19467",
    storageBucket: "starevnts-19467.appspot.com",
    messagingSenderId: "966864711223",
    appId: "1:966864711223:web:0e2bacd8439bc1d47f99b2",
    measurementId: "G-7X7F7C6EQB"
  };
  