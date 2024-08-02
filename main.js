'use strict'

let index = 0;
let slides = document.querySelectorAll("#slider .slide");

function showSlide(i) {
  slides.forEach((slide, index) => {
    slide.style.display = index === i ? 'block' : 'none';
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 3000); // 3秒ごとにスライドを切り替えます

