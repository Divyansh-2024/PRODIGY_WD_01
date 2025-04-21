
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const logoText = document.querySelector('.logotext');
  if (window.scrollY > 500) {
    header.style.backgroundColor = "#2095ae";
    logoText.style.color = "#fff";

  }
  else {
    header.style.backgroundColor = "transparent";
    logoText.style.color = "#2095ae";
  }
})


const slides = document.querySelectorAll('.overlay');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Change slide every 3 seconds


//---------------------------

function toggle() {
  var nav = document.getElementById('navlinks')

  nav.classList.toggle('active');
}