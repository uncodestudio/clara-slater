// Logo animation - mobile
// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Target the animated element and its wrapper
const logoList = document.querySelector('.csl_logo-list'); // Élément à animer
const logoWrapper = document.querySelector('.csl_logo-wrapper'); // Wrapper de l'élément

// Calculate the animation distance based on wrapper width and logo list offset
const distanceLogo = logoWrapper.clientWidth - logoList.offsetWidth;

// Create the animation for screens < 767px
if (window.innerWidth < 767) {
  gsap.to(logoList, {
    x: distanceLogo, // Déplacement horizontal de droite à gauche
    ease: 'none', // Animation linéaire
    scrollTrigger: {
      trigger: '.csl-logo_content', // Section qui déclenche l'animation
      start: 'top bottom', // Début de l'animation
      end: 'top top', // Fin de l'animation
      scrub: true, // Synchronise l'animation avec le scroll
      markers: false, // Facultatif : Activez pour debug
    },
  });
}

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
// GSAP Slider with Click Lock Mechanism
let isAnimating = false; // Variable to lock clicks during animation

function slideTo(newIndex, direction) {
  const slides = document.querySelectorAll('.testimonies-slide');
  const currentSlide = document.querySelector('.testimonies-slide.current');
  const nextSlide = slides[newIndex];

  if (isAnimating) return; // Prevent further clicks if an animation is in progress

  try {
    if (currentSlide && nextSlide) {
      let xValue = '35%';
      let rotationValue = 15;

      if (direction === 'prev') {
        xValue = '-35%';
        rotationValue = -15;
      }

      isAnimating = true; // Lock clicks during animation

      // Animate current slide
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

      // Animate next slide
      nextSlide.classList.add('current');
      nextSlide.style.zIndex = 1;
      gsap.fromTo(nextSlide, { opacity: 0, x: '0', rotationZ: 8 },
      {
        opacity: 1,
        x: '0%',
        rotationZ: 0,
        duration: 0.8,
        onComplete: () => {
          isAnimating = false; // Unlock clicks after animation completes
        },
      });
    } else {
      console.log(
        'Current slide not found. Make sure there is a slide with class "current" in the HTML.'
      );
      isAnimating = false; // Unlock if something goes wrong
    }
  } catch (error) {
    console.error('Error in slideTo function:', error);
    isAnimating = false; // Ensure unlocking in case of errors
  }
}

// Index tracking
let currentIndex = 0;
const slides = document.querySelectorAll('.testimonies-slide');
const slidesArray = Array.from(slides);

// Add .current class to the first slide element
slides[0].classList.add('current');

// Navigation Buttons
document.querySelector('.arrow_slider-testimonies-next').addEventListener('click', () => {
  if (!isAnimating) {
    currentIndex = (currentIndex + 1) % slidesArray.length;
    console.log('Next button clicked. New index:', currentIndex);
    slideTo(currentIndex, 'next');
  }
});

document.querySelector('.arrow_slider-testimonies-prev').addEventListener('click', () => {
  if (!isAnimating) {
    currentIndex = (currentIndex - 1 + slidesArray.length) % slidesArray.length;
    console.log('Previous button clicked. New index:', currentIndex);
    slideTo(currentIndex, 'prev');
  }
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
    start: 'top bottom', // Start when the top of the section reaches 75% viewport height
    end: 'bottom top', // End when the bottom of the section reaches 25% viewport height
    scrub: true, // Sync the animation to the scroll position
    markers: false, // Optional: add markers for debugging
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
    start: 'top bottom',
    end: 'bottom top',
    scrub: true, // Sync the animation to the scroll position
    markers: false // Optional: add markers for debugging
  }
});

// Rotation de la capsule - Testimonies
gsap.registerPlugin(ScrollTrigger);

gsap.to('.csl-testimonies_capsule', {
  rotation: 3, // Rotation finale
  ease: 'none',
  scrollTrigger: {
    trigger: '.section_csl-testimonies', // Élément déclencheur
    start: 'top center', // Début de l'animation
    end: 'top top', // Fin de l'animation
    scrub: true, // Animation fluide synchronisée avec le scroll
    markers: false, // Marqueurs pour debug (désactivez en prod)
  },
});

// Rotation de la capsule - CRM
gsap.registerPlugin(ScrollTrigger);

gsap.to('.capsule-crm-tool', {
  rotation: 3, // Rotation finale
  ease: 'none',
  scrollTrigger: {
    trigger: '.csl_crm-tools_content', // Élément déclencheur
    start: 'top bottom', // Début de l'animation
    end: 'bottom center', // Fin de l'animation
    scrub: true, // Animation fluide synchronisée avec le scroll
    markers: false, // Marqueurs pour debug (désactivez en prod)
  },
});
