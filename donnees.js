//Page nos données

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

//Sticky features home Animation DONE
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/*
// Color mapping for each content section ID
const colorMapping = {
  'donnees-infos_orange': '#ffa047',
  'donnees-infos_blue': '#b8d9ef',
  'donnees-infos_purple': '#f1eefd',
  'donnees-infos_red': '#fef1f6',
};
*/

// Check if the viewport width is greater than 991px
if (window.matchMedia("(min-width: 992px)").matches) {

  // Initial 30% opacity on scroll
  gsap.to('.donnees-infos_content', {
    opacity: 0.3,
    scrollTrigger: {
      trigger: '.section_donnees-infos',
      start: 'top bottom',
      end: 'top top',
      markers: false,
    }
  });

  /*
  gsap.to('.donnees-infos_image_wrapper', {
    opacity: 0.3,
    scrollTrigger: {
      trigger: '.section_donnees-infos',
      start: 'top bottom',
      end: 'top top',
      markers: false,
    }
  });
  */

  // Sticky section animations for opacity transitions
  gsap.set('.donnees-infos_content', { opacity: 0.3 });

  gsap.utils.toArray('.donnees-infos_content').forEach((content) => {
    gsap.fromTo(content, { opacity: 0.3 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: content,
        start: 'top 70%',
        end: 'top 50%',
        scrub: true,
        markers: false,
      }
    });

    gsap.fromTo(content, { opacity: 1 },
    {
      opacity: 0.3,
      scrollTrigger: {
        trigger: content,
        start: 'top 5%',
        end: 'top top',
        scrub: true,
        markers: false,
      }
    });
  });

  /*
  gsap.utils.toArray('.donnees-infos_image_wrapper').forEach((imageWrapper) => {
    gsap.set(imageWrapper, { opacity: 0.3 });

    gsap.fromTo(imageWrapper, { opacity: 0.3 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: imageWrapper,
        start: 'top 70%',
        end: 'top 50%',
        scrub: true,
        markers: false,
      }
    });

    gsap.fromTo(imageWrapper, { opacity: 1 },
    {
      opacity: 0.3,
      scrollTrigger: {
        trigger: imageWrapper,
        start: 'top 5%',
        end: 'top top',
        scrub: true,
        markers: false,
      }
    });
  });
  */


  /*
  // Smooth Background color change on scroll for .home-features-background
  gsap.utils.toArray('.donnees-infos_content').forEach((content) => {
    const id = content.getAttribute('id'); // Get the ID of each content section
    const newColor = colorMapping[id]; // Map the ID to its corresponding color

    ScrollTrigger.create({
      trigger: content,
      start: 'top 70%',
      end: 'top 50%',
      scrub: true,
      markers: false,
      onEnter: () => {
        gsap.to('.donnees-infos-background', {
          backgroundColor: newColor,
          duration: 0.3,
          overwrite: 'auto'
        });
      },
      onEnterBack: () => { // Trigger color change when scrolling back up
        gsap.to('donnees-infos-background', {
          backgroundColor: newColor,
          duration: 0.3,
          overwrite: 'auto'
        });
      }
    });

    // Separate trigger for scroll-up behavior
    ScrollTrigger.create({
      trigger: content,
      start: 'top 5%',
      end: 'top top',
      scrub: true,
      markers: false,
      onLeaveBack: () => { // Revert color when leaving this section going upwards
        gsap.to('.donnees-infos-background', {
          backgroundColor: newColor,
          duration: 0.3,
          overwrite: 'auto'
        });
      }
    });
  });
  */
}

// Sélectionner les cartes et l'élément donnees-cards_left-content
const cards = document.querySelectorAll('.donnees-cards_card-item');
const leftContent = document.querySelector('.donnees-cards_left-content');
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

    // Applique le margin-bottom de la première carte à donnees-cards_left-content
    if (index === 0) {
      gsap.set(leftContent, { marginBottom: `${marginValue}rem` });
    }
  });
}

// Appliquer les styles dynamiquement selon la taille d'écran
function updateStyles() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    // Pour les écrans ≤ 767px
    applyStickyStyles(5, 3, 3);
  } else {
    // Pour les écrans > 767px
    applyStickyStyles(8, 5, 5);
  }
}

// Exécute la fonction au chargement
updateStyles();

// Réécoute les changements de taille d'écran
window.addEventListener('resize', updateStyles);

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

// Animation du cercle (inchangée)
gsap.to(".circle-fill", {
  backgroundImage: "conic-gradient(from 0deg, #D81159 0%, #D81159 75%, rgba(216, 17, 89, 0.08) 75%, rgba(216, 17, 89, 0.08) 100%)",
  scrollTrigger: {
    trigger: '.section_donnees-infos',
    start: 'top center',
    end: '90% center',
    scrub: 0.1,
    onUpdate: (self) => {
      const progress = self.progress;
      const value = Math.round(progress * 74 + 1);
      const formattedValue = value.toString().padStart(2, '0');
      document.querySelector('.odometer').innerHTML = formattedValue;
    }
  }
});