// GSAP Transition Function
function slideTo(newIndex, direction) {
  const slides = document.querySelectorAll('.testimonies-slide');
  const currentSlide = document.querySelector('.testimonies-slide.current');
  const nextSlide = slides[newIndex];

  try {
    if (currentSlide) {
      let xValue = '100%';
      let rotationValue = 25;

      if (direction === 'prev') {
        xValue = '-100%';
        rotationValue = -25;
      }

      gsap.to(currentSlide, {
        opacity: 0,
        x: xValue,
        rotationZ: rotationValue,
        duration: 0.3,
        onComplete: () => {
          currentSlide.classList.remove('current');
          currentSlide.style.zIndex = 0;
          currentSlide.style.transform = 'none';

          nextSlide.classList.add('current');
          nextSlide.style.zIndex = 1;
          gsap.fromTo(nextSlide, { opacity: 0, x: '0', rotationZ: 8 }, {
            opacity: 1,
            x: '0%',
            rotationZ: 0,
            duration: 0.3
          });
        },
      });
    } else {
      console.log(
        'Current slide not found. Make sure there is a slide with class "current" in the HTML.');
    }
  } catch (error) {
    console.error('Error in slideTo function:', error);
  }
}

// Index tracking
let currentIndex = 0;
const slides = document.querySelectorAll('.testimonies-slide');
const slidesArray = Array.from(slides); // Convert NodeList to Array

// Add .current class to the first slide element
slides[0].classList.add('current');

// Navigation Buttons
document.querySelector('arrow_slider-testimonies-prev').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slidesArray.length;
  console.log('Next button clicked. New index:', currentIndex);
  slideTo(currentIndex, 'next');
});

document.querySelector('arrow_slider-testimonies-prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slidesArray.length) % slidesArray.length;
  console.log('Previous button clicked. New index:', currentIndex);
  slideTo(currentIndex, 'prev');
});
