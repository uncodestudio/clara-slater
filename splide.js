//Splide Problem DONE

new Splide('.splide.splide_problem', {
  type: 'slide',
  perPage: 3,
  gap: '2.625rem',
  arrows: false,
  pagination: false,
  focus: 'center',
  drag: false,
  breakpoints: {
    479: {
      gap: '0.5rem',
      perPage: 1.5,
      focus: 'center',
      drag: true,
      trimSpace: false, // Prevents cutting off the last slide
    },
    767: {
      gap: '1rem',
      perPage: 1.75,
      focus: 'center',
      drag: true,
      trimSpace: false, // Prevents cutting off the last slide
    },
    991: {
      gap: '1rem',
      perPage: 2.5,
      focus: 'center',
      drag: true,
      trimSpace: false, // Prevents cutting off the last slide
    }
  },
}).mount();
