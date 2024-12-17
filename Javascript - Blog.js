// Wait for Finsweet CMS Library to initialize
window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  'cmsload',
  (listInstance) => {
    console.log("Finsweet CMS Library loaded");

    // Check screen size to apply responsive logic
    function isMobileView() {
      return window.innerWidth <= 991;
    }

    // Function to apply the "large" class to the first and seventh items if not mobile
    function applyLargeClass() {
      const items = document.querySelectorAll('.articles_collection-item');

      items.forEach(item => {
        item.classList.remove('large'); // Remove all large classes by default

        const largeImage = item.querySelector('.article_image-large');
        const thumbnailImage = item.querySelector('.article_image-thumbnail');

        // Set default image visibility
        if (largeImage && thumbnailImage) {
          largeImage.style.display = 'none'; // Hide large image by default
          thumbnailImage.style.display = 'block'; // Show thumbnail image by default
        }
      });

      // Apply "large" class only on larger screens
      if (!isMobileView()) {
        if (items[0]) items[0].classList.add('large'); // First item
        if (items[6]) items[6].classList.add('large'); // Seventh item
        console.log("Applied 'large' class to items 1 and 7 on larger screens");

        // Show the large image for items with the "large" class
        items.forEach(item => {
          const largeImage = item.querySelector('.article_image-large');
          const thumbnailImage = item.querySelector('.article_image-thumbnail');

          if (item.classList.contains('large')) {
            if (largeImage && thumbnailImage) {
              largeImage.style.display = 'block'; // Show large image
              thumbnailImage.style.display = 'none'; // Hide thumbnail
            }
          }
        });
      }
    }

    // Function to insert CTA after the 5th item or at the end if fewer than 5 items
    function insertCTA() {
      const items = document.querySelectorAll('.articles_collection-item');
      const ctaElement = document.getElementById('articles-cta');

      if (!ctaElement) {
        console.error("CTA element with ID 'articles-cta' not found.");
        return;
      }

      // Remove CTA if it's already inserted somewhere
      if (ctaElement.parentNode) {
        ctaElement.parentNode.removeChild(ctaElement);
        console.log("Removed CTA from previous position.");
      }

      // Insert CTA after the 5th item or at the end if fewer than 5 items
      if (items.length >= 5) {
        items[4].after(ctaElement);
        console.log("Inserted CTA after the 5th item.");
      } else if (items.length > 0) {
        items[items.length - 1].after(ctaElement);
        console.log("Inserted CTA after the last item due to fewer than 5 items.");
      }

      ctaElement.style.display = "block"; // Ensure the CTA is visible
    }

    // GSAP hover animation for buttons
    function initializeButtonAnimations() {
      document.querySelectorAll('.button').forEach(button => {
        const hoverElement = button.querySelector('.hover_animation');

        button.removeEventListener('mouseenter', button._mouseenterHandler);
        button.removeEventListener('mouseleave', button._mouseleaveHandler);

        button._mouseenterHandler = () => {
          gsap.to(hoverElement, {
            y: '-150%',
            duration: 0.9,
            ease: 'cubic-bezier(0.35, 0.01, 0.16, 1)',
          });
        };

        button._mouseleaveHandler = () => {
          gsap.to(hoverElement, {
            y: '0%',
            duration: 0.9,
            ease: 'cubic-bezier(0.35, 0.01, 0.16, 1)',
          });
        };

        button.addEventListener('mouseenter', button._mouseenterHandler);
        button.addEventListener('mouseleave', button._mouseleaveHandler);
      });
    }

    // Initial run to apply classes, insert CTA, and initialize button animations on page load
    applyLargeClass();
    insertCTA();
    initializeButtonAnimations();

    // Re-apply layout on window resize
    window.addEventListener('resize', () => {
      applyLargeClass();
    });

    const collectionList = document.querySelector('.articles_collection-list');
    if (collectionList) {
      const observer = new MutationObserver((mutationsList, obs) => {
        obs.disconnect(); // Temporarily stop observing to avoid infinite loops

        setTimeout(() => {
          applyLargeClass();
          insertCTA();
          initializeButtonAnimations();
          console.log("Detected DOM changes and reapplied styles and animations.");

          obs.observe(collectionList, {
            childList: true,
            subtree: true
          }); // Resume observing
        }, 0);
      });

      observer.observe(collectionList, { childList: true, subtree: true });
    } else {
      console.error("Collection list not found for MutationObserver setup.");
    }
  }
]);

// Assurez-vous que GSAP et ScrollToPlugin sont chargés
if (typeof gsap !== 'undefined' && typeof ScrollToPlugin !== 'undefined') {
  // Fonction de défilement vers .section_blog-list
  function scrollToBlogList() {
    console.log("Défilement vers .section_blog-list"); // Vérification dans la console
    gsap.to(window, {
      duration: 1, // Durée de l'animation en secondes
      scrollTo: { y: ".section_blog-list", offsetY: 50 }, // Cible du défilement avec décalage
      ease: "power2.out" // Easing pour une transition douce
    });
  }

  // Attacher l'événement de clic sur les boutons de pagination
  document.querySelectorAll('.articles_page-button').forEach(button => {
    button.addEventListener('click', (e) => {
      console.log("Changement de page détecté"); // Vérification dans la console
      scrollToBlogList(); // Déclenche le défilement
    });
  });

  // Initialisation de Finsweet et de l'observation pour activer au chargement
  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    'cmsload',
    (listInstance) => {
      console.log("Finsweet CMS Library loaded");

      // Utilisation de MutationObserver pour observer les changements dans la collection
      const collectionList = document.querySelector('.articles_collection-list');
      if (collectionList) {
        const observer = new MutationObserver((mutationsList) => {
          mutationsList.forEach(mutation => {
            if (mutation.type === 'childList') {
              console.log("Changement de page par MutationObserver");
              scrollToBlogList(); // Déclenche le défilement
            }
          });
        });

        // Observer les changements dans la liste des articles
        observer.observe(collectionList, { childList: true, subtree: true });
      } else {
        console.error("Collection list not found for MutationObserver setup.");
      }
    }
  ]);
}

// Vérifier la taille de l'écran pour activer l'animation seulement si < 991px
function checkScreenSize() {
  return window.innerWidth <= 991;
}

// Initialiser la visibilité de base de .category_selecteur
function setDefaultVisibility() {
  document.querySelectorAll('.category_selecteur').forEach(selector => {
    // Montrer seulement les éléments avec 'tab-visibility' = 'on'
    if (selector.getAttribute('tab-visibility') === 'on') {
      selector.style.display = 'block';
    } else {
      selector.style.display = 'none';
    }
  });
}

// Fonction pour gérer le changement de catégorie
function changeCategory(filter) {
  document.querySelectorAll('.category_selecteur').forEach(selector => {
    if (selector.getAttribute('tab-filter') === filter) {
      selector.style.display = 'block'; // Afficher le .category_selecteur correspondant
    } else {
      selector.style.display = 'none'; // Masquer les autres
    }
  });
}

// Écouter les clics sur .article_radio-field
document.querySelectorAll('.article_radio-field').forEach(button => {
  button.addEventListener('click', () => {
    if (checkScreenSize()) { // Vérifier la taille de l'écran avant de changer la catégorie
      const filter = button.getAttribute('tab-filter');
      changeCategory(filter); // Appeler la fonction de changement de catégorie
    }
  });
});

// Appel initial pour définir la visibilité par défaut au chargement de la page
setDefaultVisibility();

// Réécouter la taille de l'écran lors du redimensionnement pour activer ou désactiver l'animation dynamiquement
window.addEventListener('resize', () => {
  if (!checkScreenSize()) {
    // Remettre tous les .category_selecteur à leur visibilité par défaut
    setDefaultVisibility();
  }
});
