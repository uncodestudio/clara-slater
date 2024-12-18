// Page à propos
// Animation Timeline
gsap.registerPlugin(ScrollTrigger);

// Fonction pour appliquer des animations selon la largeur de l'écran
ScrollTrigger.matchMedia({
  // Écrans ≤ 767px
  "(max-width: 767px)": function () {
    console.log("Animation Timeline pour mobile");
    gsap.to('.about-timeline_years-item', {
      y: '-500%', // Déplacement vertical
      ease: 'none', // Mouvement linéaire
      scrollTrigger: {
        id: "mobile-timeline", // Identifiant unique pour debug et gestion
        trigger: '.about-timeline_wrapper', // Déclencheur pour mobile
        start: 'top 25%', // Démarrage de l'animation
        end: 'bottom bottom', // Fin de l'animation
        scrub: true, // Synchronisation avec le scroll
        markers: false, // Désactiver les marqueurs pour la production
      },
    });
  },

  // Écrans > 767px
  "(min-width: 768px)": function () {
    console.log("Animation Timeline pour desktop");
    gsap.to('.about-timeline_years-item', {
      y: '-500%', // Déplacement vertical
      ease: 'none', // Mouvement linéaire
      scrollTrigger: {
        id: "desktop-timeline", // Identifiant unique pour debug et gestion
        trigger: '.section_about-timeline', // Déclencheur pour desktop
        start: 'top top', // Démarrage de l'animation
        end: 'bottom bottom', // Fin de l'animation
        scrub: true, // Synchronisation avec le scroll
        markers: false, // Désactiver les marqueurs pour la production
      },
    });
  },
});

// Animation Texte
let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars', // Découpe le texte par lignes, mots, et caractères
  tagName: 'span', // Balise pour envelopper chaque élément
});

gsap.from('[animate] .word', {
  opacity: 0.2, // Apparition progressive
  duration: 0.5, // Durée de l'animation
  ease: 'power1.out', // Courbe d'animation
  stagger: 0.1, // Décalage entre chaque mot

  scrollTrigger: {
    trigger: '[animate]', // Élément déclencheur
    start: 'top 75%', // Démarrage de l'animation
    end: 'top 35%', // Fin de l'animation
    scrub: true, // Animation fluide synchronisée avec le scroll
    markers: false, // Débuggage avec marqueurs (désactivez en production)
  },
});

// Animation : Rotation de la capsule - Actualiser
gsap.to('.actualiser_capsule', {
  rotation: -2, // Rotation finale
  ease: 'none',
  scrollTrigger: {
    trigger: '.section_about-actualiser', // Élément déclencheur
    start: 'top center', // Début de l'animation
    end: 'bottom top', // Fin de l'animation
    scrub: true, // Animation fluide synchronisée avec le scroll
    markers: false, // Désactiver les marqueurs pour la production
  },
});

// Animation : Rotation de la capsule - About team
gsap.to('.about-team_capsule', {
  rotation: -2, // Rotation finale
  ease: 'none',
  scrollTrigger: {
    trigger: '.section_about-team', // Élément déclencheur
    start: 'top center', // Début de l'animation
    end: 'bottom top', // Fin de l'animation
    scrub: true, // Animation fluide synchronisée avec le scroll
    markers: false, // Désactiver les marqueurs pour la production
  },
});

// Animation : Rotation de la capsule - About valeurs
gsap.to('.about-valeur-oser_capsule', {
  rotation: 2, // Rotation finale
  ease: 'none',
  scrollTrigger: {
    trigger: '.about-valeur-oser_capsule', // Élément déclencheur
    start: 'top center', // Début de l'animation
    end: 'bottom 25%', // Fin de l'animation
    scrub: true, // Animation fluide synchronisée avec le scroll
    markers: false, // Désactiver les marqueurs pour la production
  },
});

gsap.to('.about-valeur-collaborer_capsule', {
  rotation: -2, // Rotation finale
  ease: 'none',
  scrollTrigger: {
    trigger: '.about-valeur-collaborer_capsule', // Élément déclencheur
    start: 'top center', // Début de l'animation
    end: 'bottom 25%', // Fin de l'animation
    scrub: true, // Animation fluide synchronisée avec le scroll
    markers: false, // Désactiver les marqueurs pour la production
  },
});

gsap.to('.about-valeur-exprimer_capsule', {
  rotation: 2, // Rotation finale
  ease: 'none',
  scrollTrigger: {
    trigger: '.about-valeur-exprimer_capsule', // Élément déclencheur
    start: 'top center', // Début de l'animation
    end: 'bottom 25%', // Fin de l'animation
    scrub: true, // Animation fluide synchronisée avec le scroll
    markers: false, // Désactiver les marqueurs pour la production
  },
});

// Animation GSAP // Parallaxe
gsap.to('.about-header_image', {
  y: '-5%', // Translation de 0% à -9% sur l'axe Y
  ease: 'none', // Animation linéaire
  scrollTrigger: {
    trigger: '.section_about-header', // Élément déclencheur
    start: 'top top', // Début de l'animation
    end: 'bottom center', // Fin de l'animation
    scrub: true, // L'animation suit le scroll
    markers: false, // Activer les marqueurs pour le debug (désactiver en prod)
  },
});
