// Pages : email and blitzdays

//Animation Card

// Sélectionner les cartes et l'élément donnees-cards_left-content
const cards = document.querySelectorAll('.service-cards_cards-item');
const leftContent = document.querySelector('.service-cards_left-content');
const nbCards = cards.length; // Nombre total de cartes

// Fonction pour appliquer les styles dynamiques
function applyStickyStyles(baseTop, incrementTop, incrementMargin) {
  cards.forEach((card, index) => {
    const topValue = baseTop + index * incrementTop; // Calcul de `top`
    const marginValue = incrementMargin * (nbCards - index - 1); // Calcul de `margin-bottom`

    // Applique les styles dynamiques aux cartes
    gsap.set(card, {
      position: 'sticky', // Assure que chaque carte est sticky
      top: `${topValue}rem`, // Décalage sticky croissant
      marginBottom: `${marginValue}rem`, // Espacement décroissant
    });

    // Applique le margin-bottom de la première carte à donnees-cards_left-content, mais seulement sur desktop
    if (index === 0 && !window.matchMedia('(max-width: 767px)').matches) {
      gsap.set(leftContent, { marginBottom: `${marginValue}rem` });
    } else if (index === 0 && window.matchMedia('(max-width: 767px)').matches) {
      gsap.set(leftContent, { marginBottom: `0` }); // Réinitialise en mobile
    }
  });
}

// Appliquer les styles dynamiquement selon la taille d'écran
function updateStyles() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    // Pour les écrans ≤ 767px
    applyStickyStyles(10, 3, 3);
  } else {
    // Pour les écrans > 767px
    applyStickyStyles(15, 5, 5);
  }
}

// Exécute la fonction au chargement
updateStyles();

// Réécoute les changements de taille d'écran
window.addEventListener('resize', updateStyles);

// Curseur
// Register GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Vérifie si l'écran est supérieur à 992px
if (window.innerWidth > 992) {
  // Sélection du curseur et de la section
  const cursor = document.querySelector('.custom-cursor');
  const section = document.querySelector('.section_services-chiffres');

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
// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Target the text and its wrapper
const animatedTextData = document.querySelector('.service-chiffres_layout');
const wrapperData = document.querySelector('.services-chiffres_wrapper');

// Calculate the animation distance based on wrapper width and text offset
const distanceData = animatedTextData.offsetWidth - wrapperData.clientWidth;

// Create the animation
gsap.to(animatedTextData, {
  x: -distanceData, // Move the text to the left by the calculated distance
  ease: 'none', // No easing for a linear scroll effect
  scrollTrigger: {
    trigger: '.services-chiffres_wrapper', // Section that triggers the scroll animation
    start: 'top bottom',
    end: 'bottom top',
    scrub: true, // Sync the animation to the scroll position
    markers: false // Optional: add markers for debugging
  }
});

// Rotation de la capsule - cible
gsap.registerPlugin(ScrollTrigger);

gsap.to('.service-cibles_capsule', {
  rotation: -4, // Rotation finale
  ease: 'none',
  scrollTrigger: {
    trigger: '.section_service-cible', // Élément déclencheur
    start: 'top center', // Début de l'animation
    end: 'bottom top', // Fin de l'animation
    scrub: true, // Animation fluide synchronisée avec le scroll
    markers: false, // Marqueurs pour debug (désactivez en prod)
  },
});

// Rotation de la capsule - w-clara
gsap.registerPlugin(ScrollTrigger);

gsap.to('.service-w-clara_capsule', {
  rotation: 6, // Rotation finale
  ease: 'none',
  scrollTrigger: {
    trigger: '.section_service-w-clara', // Élément déclencheur
    start: 'top center', // Début de l'animation
    end: 'bottom top', // Fin de l'animation
    scrub: true, // Animation fluide synchronisée avec le scroll
    markers: false, // Marqueurs pour debug (désactivez en prod)
  },
});

// Rotation de la capsule - w clara red
gsap.registerPlugin(ScrollTrigger);

gsap.to('.service-w-clara_capsule-red', {
  rotation: -6, // Rotation finale
  ease: 'none',
  scrollTrigger: {
    trigger: '.section_service-w-clara', // Élément déclencheur
    start: 'top center', // Début de l'animation
    end: 'bottom top', // Fin de l'animation
    scrub: true, // Animation fluide synchronisée avec le scroll
    markers: false, // Marqueurs pour debug (désactivez en prod)
  },
});

// Rotation de la capsule - services chiffres
gsap.registerPlugin(ScrollTrigger);

gsap.to('.services-chiffres_capsule', {
  rotation: 4, // Rotation finale
  ease: 'none',
  scrollTrigger: {
    trigger: '.section_services-chiffres', // Élément déclencheur
    start: 'top center', // Début de l'animation
    end: 'bottom top', // Fin de l'animation
    scrub: true, // Animation fluide synchronisée avec le scroll
    markers: false, // Marqueurs pour debug (désactivez en prod)
  },
});

//hover product cards
// Register GSAP
gsap.registerPlugin(ScrollTrigger);

// Configuration de l'animation pour le hover sur les éléments avec la classe .donnees-product_card-item
document.querySelectorAll('.product_card-item').forEach(card => {

  // Gestionnaire d'événement pour le hover in
  card.addEventListener('mouseenter', () => {
    // Animation sur .donnees-product_card-item pour l'élévation sur y et l'ajout des ombres
    gsap.to(card, {
      y: -10, // Translation sur y
      duration: 0.7,
      ease: "cubic-bezier(0.64, 0, 0.25, 1)",
      boxShadow: "2px 14px 30px 0px rgba(0, 0, 0, 0.04), 7px 54px 55px 0px rgba(0, 0, 0, 0.03), 16px 123px 74px 0px rgba(0, 0, 0, 0.02), 29px 218px 88px 0px rgba(0, 0, 0, 0.01), 45px 341px 96px 0px rgba(0, 0, 0, 0)",
    });

    // Animation sur .donnees-product_image-wrapper pour la translation en x et y
    gsap.to(card.querySelector('.product_image-wrapper'), {
      x: -10,
      y: -20,
      duration: 0.7,
      ease: "cubic-bezier(0.64, 0, 0.25, 1)"
    });
  });

  // Gestionnaire d'événement pour le hover out
  card.addEventListener('mouseleave', () => {
    // Réinitialisation de .donnees-product_card-item
    gsap.to(card, {
      y: 0, // Retour à la position d'origine sur y
      duration: 0.7,
      ease: "cubic-bezier(0.64, 0, 0.25, 1)",
      boxShadow: "none" // Retrait des ombres
    });

    // Réinitialisation de .donnees-product_image-wrapper
    gsap.to(card.querySelector('.product_image-wrapper'), {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "cubic-bezier(0.64, 0, 0.25, 1)"
    });
  });
});

//Animation Cards page cartopgrahie
// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Target the text and its wrapper
const animatedCards = document.querySelector('.after-etude_layout');
const wrapperCards = document.querySelector('.after-etude_content-wrapper');

// Calculate the animation distance based on wrapper width and text offset
const distanceCards = animatedCards.offsetWidth - wrapperCards.clientWidth;

// Create the animation
gsap.to(animatedCards, {
  x: -distanceCards, // Move the text to the left by the calculated distance
  ease: 'none', // No easing for a linear scroll effect
  scrollTrigger: {
    trigger: '.after-etude_component', // Section that triggers the scroll animation
    start: 'bottom bottom',
    end: 'top top',
    scrub: true, // Sync the animation to the scroll position
    markers: false // Optional: add markers for debugging
  }
});
