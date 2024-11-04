//Texte animé DONE
let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('[animate] .word', {
  opacity: 0.2,
  duration: 0.5,
  ease: 'power1.out',
  stagger: 0.1,

  scrollTrigger: {
    trigger: '[animate]',
    start: 'top 75%',
    end: 'top 35%',
    scrub: true
  }
})

// GSAP Slider
function slideTo(newIndex, direction) {
  const slides = document.querySelectorAll('.testimonies-slide');
  const currentSlide = document.querySelector('.testimonies-slide.current');
  const nextSlide = slides[newIndex];

  try {
    if (currentSlide) {
      let xValue = '35%';
      let rotationValue = 15;

      if (direction === 'prev') {
        xValue = '-35%';
        rotationValue = -15;
      }

      // Animate current slide with a duration of 0.5s
      gsap.to(currentSlide, {
        opacity: 0,
        x: xValue,
        rotationZ: rotationValue,
        duration: 0.5,
        onComplete: () => {
          currentSlide.classList.remove('current');
          currentSlide.style.zIndex = 0;
          currentSlide.style.transform = 'none';
        },
      });

      // Immediately start animation for the next slide with a duration of 0.8s
      nextSlide.classList.add('current');
      nextSlide.style.zIndex = 1;
      gsap.fromTo(nextSlide, { opacity: 0, x: '0', rotationZ: 8 },
      {
        opacity: 1,
        x: '0%',
        rotationZ: 0,
        duration: 0.8 // Different duration for nextSlide animation
      });
    } else {
      console.log(
        'Current slide not found. Make sure there is a slide with class "current" in the HTML.'
      );
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
document.querySelector('.arrow_slider-testimonies-next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slidesArray.length;
  console.log('Next button clicked. New index:', currentIndex);
  slideTo(currentIndex, 'next');
});

document.querySelector('.arrow_slider-testimonies-prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slidesArray.length) % slidesArray.length;
  console.log('Previous button clicked. New index:', currentIndex);
  slideTo(currentIndex, 'prev');
});

//texte translate solution
// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Target the text and its wrapper
const animatedTextSolution = document.querySelector('.animated-bg-text-solution');
const wrapperSolution = document.querySelector('.animated-bg-text_wrapper-solution');

// Calculate the animation distance based on wrapper width and text offset
const distanceSolution = animatedTextSolution.offsetWidth - wrapperSolution.clientWidth;

// Create the animation
gsap.to(animatedTextSolution, {
  x: -distanceSolution, // Move the text to the left by the calculated distance
  ease: 'none', // No easing for a linear scroll effect
  scrollTrigger: {
    trigger: '.section_cls-solution-cta', // Section that triggers the scroll animation
    start: 'top 75%', // Start when the top of the section reaches 75% viewport height
    end: '75% 75%', // End when the bottom of the section reaches 25% viewport height
    scrub: true, // Sync the animation to the scroll position
    markers: false // Optional: add markers for debugging
  }
});

//texte translate data
// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Target the text and its wrapper
const animatedTextData = document.querySelector('.animated-bg-text-data');
const wrapperData = document.querySelector('.animated-bg-text_wrapper-data');

// Calculate the animation distance based on wrapper width and text offset
const distanceData = animatedTextData.offsetWidth - wrapperData.clientWidth;

// Create the animation
gsap.to(animatedTextData, {
  x: -distanceData, // Move the text to the left by the calculated distance
  ease: 'none', // No easing for a linear scroll effect
  scrollTrigger: {
    trigger: '.animated-bg-text_wrapper-data', // Section that triggers the scroll animation
    start: 'bottom bottom', // Start when the top of the section reaches 75% viewport height
    end: 'top top', // End when the bottom of the section reaches 25% viewport height
    scrub: true, // Sync the animation to the scroll position
    markers: false // Optional: add markers for debugging
  }
});

//Rotation de la CRM
gsap.registerPlugin(ScrollTrigger);

gsap.to('.capsule-crm-tool', {
  rotation: 1, // L'élément tourne jusqu'à 2 degrés
  ease: 'none',
  scrollTrigger: {
    trigger: '.csl_crm-tools_content', // Déclencheur : la section
    start: 'top center', // Démarre quand la section entre dans le viewport
    end: 'top 25%', // Se termine quand la section sort du viewport
    scrub: true, // L'animation suit le scroll
    markers: false,
    onUpdate: (self) => {
      gsap.set('.capsule_wrapper_csl-crm', { rotation: -1.5 + 2.5 * self.progress });
    },
  },
});
