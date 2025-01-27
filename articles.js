//Texte animé DONE
gsap.registerPlugin(ScrollTrigger);

let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('[animate] .word', {
  opacity: 0.2,
  duration: 0.5,
  ease: 'power1.out',
  stagger: 0.1,
  markers: false,

  scrollTrigger: {
    trigger: '[animate]',
    start: 'top 75%',
    end: 'top 35%',
    scrub: true,
    markers: false,
  }
})
