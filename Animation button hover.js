// Check GSAP and ScrollTrigger
if (typeof gsap !== 'undefined') {
  document.querySelectorAll('.button').forEach(button => {
    const hoverElement = button.querySelector('.hover_animation');

    // GSAP hover animation
    button.addEventListener('mouseenter', () => {
      gsap.to(hoverElement, {
        y: '-150%',
        duration: 0.6,
        ease: 'cubic-bezier(0.35, 0.01, 0.16, 1)',
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(hoverElement, {
        y: '0%',
        duration: 0.6,
        ease: 'cubic-bezier(0.35, 0.01, 0.16, 1)',
      });
    });
  });
}
