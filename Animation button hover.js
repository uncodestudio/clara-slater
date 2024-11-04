// Check if GSAP and ScrollTrigger are available
if (typeof gsap !== 'undefined') {
  document.querySelectorAll('.button').forEach(button => {
    const hoverElement = button.querySelector('.hover_animation');

    // GSAP hover animation
    button.addEventListener('mouseenter', () => {
      gsap.to(hoverElement, {
        y: '-150%',
        duration: 0.3,
        ease: 'cubic-bezier(0.64, 0, 0.25, 1)',
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(hoverElement, {
        y: '0%',
        duration: 0.3,
        ease: 'cubic-bezier(0.64, 0, 0.25, 1)',
      });
    });
  });
}
