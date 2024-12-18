// Animation GSAP // Paralax 
gsap.registerPlugin(ScrollTrigger);

gsap.to('.cible-header_image', {
  y: '-5%', // Translation de 0% à -9% sur l'axe Y
  ease: 'none', // Animation linéaire
  scrollTrigger: {
    trigger: '.section_cible-header', // Élément déclencheur
    start: 'top top', // Début de l'animation
    end: 'bottom center', // Fin de l'animation
    scrub: true, // L'animation suit le scroll
    markers: false // Définir à true pour activer les marqueurs de debug
  }
});

// Rotation de la capsule - Actualiser
gsap.registerPlugin(ScrollTrigger);

gsap.to('.cible_cible-capsule', {
  rotation: -6, // Rotation finale
  ease: 'none',
  scrollTrigger: {
    trigger: '.section_cible-header', // Élément déclencheur
    start: 'top top', // Début de l'animation
    end: 'bottom center', // Fin de l'animation
    scrub: true, // Animation fluide synchronisée avec le scroll
    markers: false, // Marqueurs pour debug (désactivez en prod)
  },
});

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

//Card hover - other cibles
// Enregistre GSAP
gsap.registerPlugin(ScrollTrigger);

// Sélectionne tous les éléments avec la classe .other-cibles_card-item
document.querySelectorAll('.other-cibles_card-item').forEach(card => {
  const imageWrapper = card.querySelector('.other-cibles_image-wrapper');
  const isRight = imageWrapper.classList.contains('is-right');

  // Initialisation : définir la position de départ pour chaque image
  gsap.set(imageWrapper, {
    rotation: isRight ? 3 : -3 // Position initiale : 3° si is-right, sinon -3°
  });

  // Gestionnaire d'événement pour le hover in
  card.addEventListener('mouseenter', () => {
    // Animation pour .other-cibles_card-item
    gsap.to(card, {
      y: -20, // Translation sur y
      duration: 0.720,
      ease: "cubic-bezier(0.64, 0, 0.25, 1)"
    });

    // Animation pour .other-cibles_image-wrapper
    gsap.to(imageWrapper, {
      rotation: 0, // Rotation vers 0°
      duration: 0.720,
      ease: "cubic-bezier(0.64, 0, 0.25, 1)"
    });
  });

  // Gestionnaire d'événement pour le hover out
  card.addEventListener('mouseleave', () => {
    // Réinitialisation pour .other-cibles_card-item
    gsap.to(card, {
      y: 0, // Retour à la position initiale
      duration: 0.720,
      ease: "cubic-bezier(0.64, 0, 0.25, 1)"
    });

    // Réinitialisation pour .other-cibles_image-wrapper
    gsap.to(imageWrapper, {
      rotation: isRight ? 3 : -
        3, // Retour à la rotation initiale selon la classe is-right
      duration: 0.720,
      ease: "cubic-bezier(0.64, 0, 0.25, 1)"
    });
  });
});
