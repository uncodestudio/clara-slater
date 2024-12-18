// animation images footer
// Enregistre le plugin GSAP pour utiliser GSAP
gsap.registerPlugin(ScrollTrigger);

// Initialise la position et la rotation des éléments
gsap.set(".cta_image-right-wrapper", {
  y: "120%", // Positionne l'élément en bas de 120%
  rotation: 0 // Départ sans rotation
});

gsap.set(".cta_image-left-wrapper", {
  y: "100%", // Positionne l'élément en bas de 100%
  rotation: 0 // Départ sans rotation
});

// Animation pour faire remonter les deux éléments et appliquer la rotation
gsap.to(".cta_image-right-wrapper", {
  y: "0%", // Position cible pour la translation
  rotation: 7.4, // Rotation finale
  ease: "power1.out", // Easing pour une transition douce
  scrollTrigger: {
    trigger: ".section_cta", // Déclencheur de la section footer
    start: "top 25%", // Démarre quand le bas de l'écran arrive au top de la section
    end: "bottom 45%", // Se termine quand le bas de l'écran atteint le bas de la section
    scrub: true, // Synchronise avec le scroll pour un effet fluide
    markers: false, // Marqueurs pour le débogage (à désactiver en production)
  },
});

gsap.to(".cta_image-left-wrapper", {
  y: "0%", // Position cible pour la translation
  rotation: -10.76, // Rotation finale
  ease: "power1.out", // Easing pour une transition douce
  scrollTrigger: {
    trigger: ".section_cta", // Déclencheur de la section footer
    start: "top 25%", // Démarre quand le bas de l'écran arrive au top de la section
    end: "bottom 45%", // Se termine quand le bas de l'écran atteint le bas de la section
    scrub: true, // Synchronise avec le scroll pour un effet fluide
    markers: false, // Marqueurs pour le débogage (à désactiver en production)
  },
});
