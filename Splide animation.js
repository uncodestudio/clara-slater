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
      gap: '0.25rem',
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

//Splide is-tab WIP (pagination à ajouter)
new Splide('.splide.is-tab-1', {
  type: 'slide',
  perPage: 3,
  gap: '1rem',
  drag: false,
  focus: 'center',
  arrows: false,
  pagination: false,
  breakpoints: {
    479: {
      gap: '1rem',
      perPage: 1.25,
      pagination: false,
      focus: 0,
      drag: true,
    },
    767: {
      gap: '1rem',
      perPage: 1.75,
      pagination: false,
      focus: 0,
      drag: true,
    },
    991: {
      gap: '1rem',
      perPage: 2.5,
      pagination: false,
      focus: 0,
      drag: true,
    }
  },
}).mount();

new Splide('.splide.is-tab-2', {
  type: 'slide',
  perPage: 3,
  gap: '1rem',
  drag: false,
  focus: 'center',
  arrows: false,
  pagination: false,
  breakpoints: {
    479: {
      gap: '1rem',
      perPage: 1.25,
      pagination: false,
      focus: 0,
      drag: true,
    },
    767: {
      gap: '1rem',
      perPage: 1.75,
      pagination: false,
      focus: 0,
      drag: true,
    },
    991: {
      gap: '1rem',
      perPage: 2.5,
      pagination: false,
      focus: 0,
      drag: true,
    }
  },
}).mount();

new Splide('.splide.is-tab-3', {
  type: 'slide',
  perPage: 3,
  gap: '1rem',
  drag: false,
  focus: 'center',
  arrows: false,
  pagination: false,
  breakpoints: {
    479: {
      gap: '1rem',
      perPage: 1.25,
      pagination: false,
      focus: 0,
      drag: true,
    },
    767: {
      gap: '1rem',
      perPage: 1.75,
      pagination: false,
      focus: 0,
      drag: true,
    },
    991: {
      gap: '1rem',
      perPage: 2.5,
      pagination: false,
      focus: 0,
      drag: true,
    }
  },
}).mount();
