    // Слайдер авто
    let currentCarIndex = 0;
const carSliderTrack = document.querySelector('.car-slider-track');
const carSlides = document.querySelectorAll('.car-slide');

function showCarSlides() {
  carSliderTrack.style.transform = `translateX(-${currentCarIndex * 100}%)`;
}

setInterval(() => {
  currentCarIndex = (currentCarIndex + 1) % carSlides.length;
  showCarSlides();
}, 5000);

showCarSlides();