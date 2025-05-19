// Слайдер отзывов
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 2) % slides.length;
  showSlides();
}

function prevSlide() {
  currentIndex = (currentIndex - 2 + slides.length) % slides.length;
  showSlides();
}

document.addEventListener("DOMContentLoaded", showSlides); // запустить после загрузки