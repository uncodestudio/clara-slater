// Pour la page pack manager

// Logo animation - mobile
// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Target the animated element and its wrapper
const logoList = document.querySelector('.pm_logo-list'); // Élément à animer
const logoWrapper = document.querySelector('.pm_logo-wrapper'); // Wrapper de l'élément

// Calculate the animation distance based on wrapper width and logo list offset
const distanceLogo = logoWrapper.clientWidth - logoList.offsetWidth;

// Create the animation for screens < 767px
if (window.innerWidth < 767) {
  gsap.to(logoList, {
    x: distanceLogo, // Déplacement horizontal de droite à gauche
    ease: 'none', // Animation linéaire
    scrollTrigger: {
      trigger: '.pm-logo_content', // Section qui déclenche l'animation
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

// Curseur
// Register GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Vérifie si l'écran est supérieur à 992px
if (window.innerWidth > 992) {
  // Sélection du curseur et de la section
  const cursor = document.querySelector('.custom-cursor');
  const section = document.querySelector('.section_pm-chiffres');

  // Définit les styles initiaux pour le curseur
  gsap.set(cursor, { scale: 0, opacity: 0 });
  
  // Fonction pour mettre à jour la position du curseur avec latence
  function updateCursor(e) {
    gsap.to(cursor, {
      duration: 0.4, // Ajuste l'effet de délai
      x: e.clientX,
      y: e.clientY,
      ease: "cubic-bezier(0.64, 0, 0.25, 1)"
    });
  }

  /*
  // Affiche le curseur avec une animation de scale et d'opacité au survol de la section
  section.addEventListener('mouseenter', () => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.360,
      ease: "cubic-bezier(0.64, 0, 0.25, 1)"
    });
    document.addEventListener('mousemove', updateCursor);
  });
  */

  // Cache le curseur avec une animation de scale et d'opacité à la sortie de la section
  section.addEventListener('mouseleave', () => {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
      duration: 0.360,
      ease: "cubic-bezier(0.64, 0, 0.25, 1)"
    });
    document.removeEventListener('mousemove', updateCursor);
  });
}

//Animation chiffres DONE
// ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Target the text and its wrapper
const animatedTextDataPm = document.querySelector('.pm-chiffres_wrapper');
const wrapperDataPm = document.querySelector('.pm-chiffres_layout');

// Calculate the animation distance based on wrapper width and text offset
const distanceDataPm = animatedTextDataPm.offsetWidth - wrapperDataPm.clientWidth;

// Create the animation
gsap.to(animatedTextDataPm, {
  x: +distanceDataPm, // Corrected typo here
  ease: 'none', // No easing for a linear scroll effect
  scrollTrigger: {
    trigger: '.pm-chiffres_wrapper', // Section that triggers the scroll animation
    start: 'top bottom', // Start when the top of the section reaches 75% viewport height
    end: 'bottom top', // End when the bottom of the section reaches 25% viewport height
    scrub: true, // Sync the animation to the scroll position
    markers: false, // Optional: add markers for debugging
  }
});

//texte translate solution Pack Manager
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
    trigger: '.section_pm-solution-cta', // Section that triggers the scroll animation
    start: 'top bottom', // Start when the top of the section reaches 75% viewport height
    end: 'bottom top', // End when the bottom of the section reaches 25% viewport height
    scrub: true, // Sync the animation to the scroll position
    markers: false // Optional: add markers for debugging
  }
});

//Rotation de la capsule avec les chiffres
gsap.registerPlugin(ScrollTrigger);

gsap.to('.caspule-pm-chiffres', {
  rotation: 2, // L'élément tourne jusqu'à 2 degrés
  ease: 'none',
  scrollTrigger: {
    trigger: '.section_pm-chiffres', // Déclencheur : la section
    start: 'top bottom', // Démarre quand la section entre dans le viewport
    end: 'bottom top', // Se termine quand la section sort du viewport
    scrub: true, // L'animation suit le scroll
    onUpdate: (self) => {
      gsap.set('.caspule-pm-chiffres', { rotation: -2 + 4 * self.progress });
    },
  },
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
    scrub: true,
    markers: false,
  }
});

//Rotation de la capsule CRM
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
