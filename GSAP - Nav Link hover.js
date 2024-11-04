document.querySelectorAll('.navbar_link').forEach(link => {
  const menuSelect = link.querySelector('.menu_select');

  link.addEventListener('mouseenter', () => {
    gsap.to(link, {
      duration: 0.3, // Durée de l'animation en secondes
      x: 20, // Translation en X de 20px
      ease: 'cubic-bezier(0.64, 0, 0.25, 1)' // animation easinganimation easing
    });

    gsap.to(menuSelect, {
      duration: 0.3, // Durée de l'animation en secondes
      scale: 1, // Passage à une échelle de 1
      ease: 'cubic-bezier(0.64, 0, 0.25, 1)' // animation easinganimation easinganimation easing
    });
  });

  link.addEventListener('mouseleave', () => {
    gsap.to(link, {
      duration: 0.3, // Durée de l'animation en secondes
      x: 0, // Réinitialiser la translation en X à 0
      ease: 'cubic-bezier(0.64, 0, 0.25, 1)' // animation easing
    });

    gsap.to(menuSelect, {
      duration: 0.3, // Durée de l'animation en secondes
      scale: 0, // Passage à une échelle de 0
      ease: 'cubic-bezier(0.64, 0, 0.25, 1)' // animation easing
    });
  });
});
