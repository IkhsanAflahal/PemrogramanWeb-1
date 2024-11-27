let currentSlide = 0;

     function showSlide(index) {
         const slides = document.querySelectorAll('.promo-slide');
         if (index >= slides.length) {
             currentSlide = 0;
         } else if (index < 0) {
             currentSlide = slides.length - 1;
         } else {
             currentSlide = index;
         }
         const slider = document.querySelector('.promo-slider');
         slider.style.transform = `translateX(-${currentSlide * 100}%)`;
     }

     function nextSlide() {
         showSlide(currentSlide + 1);
     }

     function prevSlide() {
         showSlide(currentSlide - 1);
     }

     document.addEventListener('DOMContentLoaded', () => {
         setInterval(nextSlide, 3000);
     });