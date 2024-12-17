// Logo animation - mobile
// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Target the animated element and its wrapper
const logoList = document.querySelector('.contact-us_logo-list'); // Élément à animer
const logoWrapper = document.querySelector('.contact-us_logo-wrapper'); // Wrapper de l'élément

// Calculate the animation distance based on wrapper width and logo list offset
const distanceLogo = logoWrapper.clientWidth - logoList.offsetWidth;

// Create the animation for screens < 767px
if (window.innerWidth < 767) {
  gsap.to(logoList, {
    x: distanceLogo, // Déplacement horizontal de droite à gauche
    ease: 'none', // Animation linéaire
    scrollTrigger: {
      trigger: '.contact-logo_content', // Section qui déclenche l'animation
      start: 'top bottom', // Début de l'animation
      end: 'top top', // Fin de l'animation
      scrub: true, // Synchronise l'animation avec le scroll
      markers: false, // Facultatif : Activez pour debug
    },
  });
}
