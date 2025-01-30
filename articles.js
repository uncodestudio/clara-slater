// Attendre 5 secondes (5000 millisecondes)
setTimeout(() => {
  // Enregistrer le plugin ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // Initialiser SplitType
  let typeSplit = new SplitType('[animate]', {
    types: 'lines, words, chars',
    tagName: 'span'
  });

  // Animation GSAP
  gsap.fromTo('[animate] .word', 
    {
      opacity: 0.2 // Valeur de départ
    },
    {
      opacity: 1, // Valeur d'arrivée
      ease: 'none', // Animation linéaire
      scrollTrigger: {
        trigger: '[animate]',
        start: 'top 75%',
        end: 'top 35%',
        scrub: true, // Permet une animation fluide liée au scroll
        markers: false,
      }
    }
  );
}, 5000); // Délai de 5 secondes
