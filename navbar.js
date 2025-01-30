// Menu Animation - apparition and link hover

document.querySelectorAll('.navbar_link').forEach(link => {
  const menuSelect = link.querySelector('.menu_select');

  // Si le lien est current, applique les styles initiaux
  if (link.classList.contains('w--current')) {
    gsap.set(link, {
      x: 20 // Translation en X de 20px
    });

    gsap.set(menuSelect, {
      scale: 1 // Échelle de 1 (visible)
    });
  }

  // Animation au survol
  link.addEventListener('mouseenter', () => {
    // Animation uniquement si le lien n'est pas current
    if (!link.classList.contains('w--current')) {
      gsap.to(link, {
        duration: 0.3,
        x: 20, // Translation en X de 20px
        ease: 'cubic-bezier(0.64, 0, 0.25, 1)' // Animation easing
      });

      gsap.to(menuSelect, {
        duration: 0.3,
        scale: 1, // Passage à une échelle de 1
        ease: 'cubic-bezier(0.64, 0, 0.25, 1)' // Animation easing
      });
    }
  });

  // Animation à la sortie du survol
  link.addEventListener('mouseleave', () => {
    // Animation uniquement si le lien n'est pas current
    if (!link.classList.contains('w--current')) {
      gsap.to(link, {
        duration: 0.3,
        x: 0, // Réinitialiser la translation en X à 0
        ease: 'cubic-bezier(0.64, 0, 0.25, 1)' // Animation easing
      });

      gsap.to(menuSelect, {
        duration: 0.3,
        scale: 0, // Passage à une échelle de 0
        ease: 'cubic-bezier(0.64, 0, 0.25, 1)' // Animation easing
      });
    }
  });
});

// Animation GSAP pour le menu
gsap.registerPlugin();

// Sélection des éléments
const menuButton = document.querySelector('.navbar_menu-button');
const navbarBg = document.querySelector('.navbar_bg');
const menuLayout = document.querySelector('.navbar_menu_layout');
const menuRight = document.querySelector('.navbar_menu-right');
const menuLineTop = document.querySelector('.menu-icon_line-top');
const menuLineBottom = document.querySelector('.menu-icon_line-bottom');
const navbarShadow = document.querySelector('.navbar_shadow');

// État du menu (ouvert ou fermé)
let isMenuOpen = false;

// Initialisation des styles avec GSAP
gsap.set(menuLayout, { width: 0, height: 0 }); // Définit la taille initiale à 0
gsap.set(navbarBg, { backgroundColor: 'transparent', display: 'none' }); // Cache le background
gsap.set(navbarShadow, { display: 'none' }); // Cache la shadow au départ

// Fonction pour désactiver temporairement le clic
const disableButtonTemporarily = (duration) => {
  menuButton.disabled = true; // Désactive le bouton
  setTimeout(() => {
    menuButton.disabled = false; // Réactive le bouton après la durée spécifiée
  }, duration * 1000); // Convertir la durée en millisecondes
};

// Fonction pour déterminer les dimensions en fonction de la largeur de l'écran
const getMenuDimensions = () => {
  if (window.innerWidth > 992) {
    return { width: 'auto', height: 'auto' };
  } else {
    return { width: '100%', height: 'auto' };
  }
};

// Animation au clic
menuButton.addEventListener('click', () => {
  if (menuButton.disabled) return; // Bloque si le bouton est déjà désactivé

  disableButtonTemporarily(0.9); // Désactive le bouton pendant la durée de l'animation

  if (!isMenuOpen) {
    // **Ouverture du menu**
    gsap.set(navbarBg, { display: 'flex' }); // Affiche le background avant l'animation
    gsap.set(navbarShadow, { display: 'none' }); // Cache la shadow au début de l'ouverture

    gsap.timeline({
        defaults: { duration: 0.9, ease: 'cubic-bezier(.64, 0, .25, 1)' },
        onComplete: () => {
          isMenuOpen = true; // Indique que le menu est ouvert
        },
      })
      .to(navbarBg, { backgroundColor: 'rgba(24, 2, 10, 0.5)' }, 0) // Change la couleur de fond
      .to(menuLayout, getMenuDimensions(), 0) // Change la taille selon la largeur de l'écran
      .to(menuRight, { backgroundColor: 'transparent', borderColor: 'transparent' },
        0) // Change les couleurs du menu à droite
      .to(menuLineTop, { y: 4, rotationZ: -45 }, 0) // Ligne supérieure : déplace et pivote
      .to(menuLineBottom, { y: -4, rotationZ: 45 }, 0); // Ligne inférieure : déplace et pivote
  } else {
    // **Fermeture du menu**
    gsap.timeline({
        defaults: { duration: 0.9, ease: 'cubic-bezier(.64, 0, .25, 1)' },
        onComplete: () => {
          isMenuOpen = false; // Indique que le menu est fermé
          gsap.set(navbarBg, { display: 'none' }); // Cache le background après l'animation
          gsap.set(
            navbarShadow, { display: 'flex' }
          ); // Affiche la shadow à la fin de la fermeture
        },
      })
      .to(menuLineTop, { y: 0, rotationZ: 0 }, 0) // Réinitialise la ligne supérieure
      .to(menuLineBottom, { y: 0, rotationZ: 0 }, 0) // Réinitialise la ligne inférieure
      .to(menuRight, { backgroundColor: 'white', borderColor: 'rgba(24, 2, 10, 0.05)' },
        0) // Réinitialise les couleurs
      .to(menuLayout, { width: 0, height: 0 }, 0) // Réinitialise la taille
      .to(navbarBg, { backgroundColor: 'transparent' }, 0); // Réinitialise la couleur de fond
  }
});

// Ajout de l'événement de clic sur navbar_bg pour fermer le menu
navbarBg.addEventListener('click', (event) => {
  // Vérifie si le clic est sur navbar_bg ou menu_container
  const clickedElement = event.target;
  const isClickOnBgOrContainer = clickedElement.classList.contains('navbar_bg') || 
                                clickedElement.classList.contains('menu_container');

  if (isClickOnBgOrContainer && isMenuOpen) {
    gsap.timeline({
      defaults: { duration: 0.9, ease: 'cubic-bezier(.64, 0, .25, 1)' },
      onComplete: () => {
        isMenuOpen = false;
        gsap.set(navbarBg, { display: 'none' });
        gsap.set(navbarShadow, { display: 'flex' });
      },
    })
    .to(menuLineTop, { y: 0, rotationZ: 0 }, 0)
    .to(menuLineBottom, { y: 0, rotationZ: 0 }, 0)
    .to(menuRight, { backgroundColor: 'white', borderColor: 'rgba(24, 2, 10, 0.05)' }, 0)
    .to(menuLayout, { width: 0, height: 0 }, 0)
    .to(navbarBg, { backgroundColor: 'transparent' }, 0);
  }
});
