// SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

// PROGRESS
let progress = 0;
function increaseProgress() {
  if (progress < 100) {
    progress += 10;
    document.getElementById("progress-bar").style.width = progress + "%";
  }
}

// CONTACT TOGGLE
function toggleContact() {
  let info = document.getElementById("contact-info");
  info.style.display = info.style.display === "block" ? "none" : "block";
}

// COLLAPSIBLE
document.querySelector(".collapsible").onclick = function () {
  let content = document.querySelector(".content");
  content.style.display =
    content.style.display === "block" ? "none" : "block";
};
