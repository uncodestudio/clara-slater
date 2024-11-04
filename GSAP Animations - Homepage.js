// Animation image header DONE

// Calcul de la position à laquelle l'animation doit commencer
const triggerPosition = window.innerHeight * 0.5; // 50% de la hauteur de l'écran

// Animation GSAP
gsap.to('.home-header_header_image', {
  rotationX: 0, // Rotation initiale à 0 degrés
  scrollTrigger: {
    trigger: '.home-header_image-wrapper', // Élément déclencheur
    start: 'top center', // Début de l'animation lorsque le déclencheur atteint le centre de l'écran
    end: 'top top', // Fin de l'animation lorsque le déclencheur atteint le haut de l'écran
    scrub: true, // Permet une animation fluide pendant le scroll
    onUpdate: self => {
      const progress = self.progress; // Récupérer la progression du scroll
      const rotationValue = gsap.utils.mapRange(0, 1, 0, 30,
        progress); // Mapper la progression du scroll à la valeur de rotation
      gsap.set(
        '.home-header_header_image', { rotationX: rotationValue }
      ); // Mettre à jour la rotation de l'élément
    },
    markers: false // Affiche des marqueurs pour visualiser les déclencheurs
  }
});

// Animation chiffre DONE
// Register GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Set initial positions for the animations
gsap.set(".number_animation-1", { y: "110%" });
gsap.set(".number_animation-2", { y: "170%" });
gsap.set(".pourcentage", { y: "130%" });

// Create animations for each element, triggered simultaneously
const scrollTriggerConfig = {
  trigger: ".section_home-problems", // Section triggering the animations
  start: "25% bottom", // Start when 25% of the section reaches the bottom of the viewport
  end: "top 25%", // End when the top of the section reaches 25% from the top of the viewport
  scrub: true, // Syncs animations with scroll
  markers: true, // Optional: set to true for debugging
};

gsap.to(".number_animation-1", {
  y: "0%", // Moves from -110% to 0%
  ease: "none", // Linear animation
  scrollTrigger: scrollTriggerConfig, // Uses the same trigger settings
});

gsap.to(".number_animation-2", {
  y: "0%", // Moves from -170% to 0%
  ease: "none",
  scrollTrigger: scrollTriggerConfig, // Same scroll trigger settings
});

gsap.to(".pourcentage", {
  y: "0%", // Moves from -130% to 0%
  ease: "none",
  scrollTrigger: scrollTriggerConfig, // Same scroll trigger settings
});

//Texte animé DONE
let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('[animate] .word', {
  opacity: 0.2,
  duration: 0.5,
  ease: 'power1.out',
  stagger: 0.1,

  scrollTrigger: {
    trigger: '[animate]',
    start: 'top 75%',
    end: 'top 35%',
    scrub: true
  }
})

//Sticky features home Animation DONE
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Color mapping for each content section ID
const colorMapping = {
  'home-features-yellow': '#fee486',
  'home-features-orange': '#ffa047',
  'home-features-blue': '#b8d9ef',
  'home-features-purple': '#f1eefd',
  'home-features-red': '#d81159'
};

// Check if the viewport width is greater than 991px
if (window.matchMedia("(min-width: 992px)").matches) {

  // Initial 30% opacity on scroll
  gsap.to('.home-features_content', {
    opacity: 0.3,
    scrollTrigger: {
      trigger: '.section_home-w-clara',
      start: 'top bottom',
      end: 'top top',
      markers: false,
    }
  });

  gsap.to('.home-features_image_wrapper', {
    opacity: 0.3,
    scrollTrigger: {
      trigger: '.section_home-w-clara',
      start: 'top bottom',
      end: 'top top',
      markers: false,
    }
  });

  // Sticky section animations for opacity transitions
  gsap.set('.home-features_content', { opacity: 0.3 });

  gsap.utils.toArray('.home-features_content').forEach((content) => {
    gsap.fromTo(content, { opacity: 0.3 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: content,
        start: 'top 70%',
        end: 'top 50%',
        scrub: true,
        markers: false,
      }
    });

    gsap.fromTo(content, { opacity: 1 },
    {
      opacity: 0.3,
      scrollTrigger: {
        trigger: content,
        start: 'top 5%',
        end: 'top top',
        scrub: true,
        markers: false,
      }
    });
  });

  gsap.utils.toArray('.home-features_image_wrapper').forEach((imageWrapper) => {
    gsap.set(imageWrapper, { opacity: 0.3 });

    gsap.fromTo(imageWrapper, { opacity: 0.3 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: imageWrapper,
        start: 'top 70%',
        end: 'top 50%',
        scrub: true,
        markers: false,
      }
    });

    gsap.fromTo(imageWrapper, { opacity: 1 },
    {
      opacity: 0.3,
      scrollTrigger: {
        trigger: imageWrapper,
        start: 'top 5%',
        end: 'top top',
        scrub: true,
        markers: false,
      }
    });
  });

  // Smooth Background color change on scroll for .home-features-background
  gsap.utils.toArray('.home-features_content').forEach((content) => {
    const id = content.getAttribute('id'); // Get the ID of each content section
    const newColor = colorMapping[id]; // Map the ID to its corresponding color

    ScrollTrigger.create({
      trigger: content,
      start: 'top 70%',
      end: 'top 50%',
      scrub: true,
      markers: false,
      onEnter: () => {
        gsap.to('.home-features-background', {
          backgroundColor: newColor,
          duration: 0.3,
          overwrite: 'auto'
        });
      },
      onEnterBack: () => { // Trigger color change when scrolling back up
        gsap.to('.home-features-background', {
          backgroundColor: newColor,
          duration: 0.3,
          overwrite: 'auto'
        });
      }
    });

    // Separate trigger for scroll-up behavior
    ScrollTrigger.create({
      trigger: content,
      start: 'top 5%',
      end: 'top top',
      scrub: true,
      markers: false,
      onLeaveBack: () => { // Revert color when leaving this section going upwards
        gsap.to('.home-features-background', {
          backgroundColor: newColor,
          duration: 0.3,
          overwrite: 'auto'
        });
      }
    });
  });
}

// Curseur
// Register GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Select cursor and section
const cursor = document.querySelector('.custom-cursor');
const section = document.querySelector('.section_home-chiffres');

// Define initial styles for cursor
gsap.set(cursor, { scale: 0, opacity: 0 });

// Function to update cursor position with latency
function updateCursor(e) {
  gsap.to(cursor, {
    duration: 0.4, // Adjusts the delay effect
    x: e.clientX,
    y: e.clientY,
    ease: "power3.out"
  });
}

// Show cursor with scale and opacity animation on section hover
section.addEventListener('mouseenter', () => {
  gsap.to(cursor, {
    scale: 1,
    opacity: 1,
    duration: 0.3,
    ease: "power3.out"
  });
  document.addEventListener('mousemove', updateCursor);
});

// Hide cursor with scale and opacity animation on section leave
section.addEventListener('mouseleave', () => {
  gsap.to(cursor, {
    scale: 0,
    opacity: 0,
    duration: 0.3,
    ease: "power3.out"
  });
  document.removeEventListener('mousemove', updateCursor);
});

//Animation chiffres DONE
// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Target the text and its wrapper
const animatedTextData = document.querySelector('.home-chiffres_layout');
const wrapperData = document.querySelector('.home-chiffres_wrapper');

// Calculate the animation distance based on wrapper width and text offset
const distanceData = animatedTextData.offsetWidth - wrapperData.clientWidth;

// Create the animation
gsap.to(animatedTextData, {
  x: -distanceData, // Move the text to the left by the calculated distance
  ease: 'none', // No easing for a linear scroll effect
  scrollTrigger: {
    trigger: '.home-chiffres_wrapper', // Section that triggers the scroll animation
    start: 'bottom bottom', // Start when the top of the section reaches 75% viewport height
    end: 'top 25%', // End when the bottom of the section reaches 25% viewport height
    scrub: true, // Sync the animation to the scroll position
    markers: false // Optional: add markers for debugging
  }
});

//Paralax image DONE
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Apply parallax effect
gsap.to('.home-cta-data_image', {
  y: '-20%', // Adjust this value for more or less parallax effect
  ease: 'none',
  scrollTrigger: {
    trigger: '.section_home-cta-data',
    start: 'top bottom', // Start parallax when section enters the viewport
    end: 'bottom top', // End parallax when section exits the viewport
    scrub: true, // Sync animation with scrolling
    markers: false,
  }
});

//Rotation de la capsule DONE
gsap.registerPlugin(ScrollTrigger);

gsap.to('.capsule_wrapper_home-chiffres', {
  rotation: 2, // L'élément tourne jusqu'à 2 degrés
  ease: 'none',
  scrollTrigger: {
    trigger: '.section_home-chiffres', // Déclencheur : la section
    start: 'top bottom', // Démarre quand la section entre dans le viewport
    end: 'bottom top', // Se termine quand la section sort du viewport
    scrub: true, // L'animation suit le scroll
    onUpdate: (self) => {
      gsap.set('.capsule_wrapper_home-chiffres', { rotation: -2 + 4 * self.progress });
    },
  },
});

// GSAP Slider
function slideTo(newIndex, direction) {
  const slides = document.querySelectorAll('.testimonies-slide');
  const currentSlide = document.querySelector('.testimonies-slide.current');
  const nextSlide = slides[newIndex];

  try {
    if (currentSlide) {
      let xValue = '35%';
      let rotationValue = 15;

      if (direction === 'prev') {
        xValue = '-35%';
        rotationValue = -15;
      }

      // Animate current slide with a duration of 0.5s
      gsap.to(currentSlide, {
        opacity: 0,
        x: xValue,
        rotationZ: rotationValue,
        duration: 0.5,
        onComplete: () => {
          currentSlide.classList.remove('current');
          currentSlide.style.zIndex = 0;
          currentSlide.style.transform = 'none';
        },
      });

      // Immediately start animation for the next slide with a duration of 0.8s
      nextSlide.classList.add('current');
      nextSlide.style.zIndex = 1;
      gsap.fromTo(nextSlide, { opacity: 0, x: '0', rotationZ: 8 },
      {
        opacity: 1,
        x: '0%',
        rotationZ: 0,
        duration: 0.8 // Different duration for nextSlide animation
      });
    } else {
      console.log(
        'Current slide not found. Make sure there is a slide with class "current" in the HTML.'
      );
    }
  } catch (error) {
    console.error('Error in slideTo function:', error);
  }
}

// Index tracking
let currentIndex = 0;
const slides = document.querySelectorAll('.testimonies-slide');
const slidesArray = Array.from(slides); // Convert NodeList to Array

// Add .current class to the first slide element
slides[0].classList.add('current');

// Navigation Buttons
document.querySelector('.arrow_slider-testimonies-next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slidesArray.length;
  console.log('Next button clicked. New index:', currentIndex);
  slideTo(currentIndex, 'next');
});

document.querySelector('.arrow_slider-testimonies-prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slidesArray.length) % slidesArray.length;
  console.log('Previous button clicked. New index:', currentIndex);
  slideTo(currentIndex, 'prev');
});

//Test animation logo
gsap.registerPlugin(ScrollTrigger);

const logoComponent = document.querySelector('.home-logo_component');
const logoWrapper = document.querySelector('.home-logo_list');

ScrollTrigger.matchMedia({
  // Conditions pour les écrans en dessous de 1500px
  "(max-width: 1500px)": function () {
    gsap.to(logoComponent, {
      x: () => -(logoComponent.scrollWidth - logoWrapper.clientWidth) + 'px',
      ease: 'none',
      scrollTrigger: {
        trigger: '.section_home-logo',
        start: 'top 75%',
        end: 'top 10%',
        scrub: true,
        markers: false, // Optionnel pour le débogage
      }
    });
  }
});

//Stacking card
// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Set initial position for each card without using CSS
gsap.set(".home-cards_card-item.orange", {
  position: "absolute",
  left: "0%",
  right: "0%",
  top: "200%",
  bottom: "auto"
});

gsap.set(".home-cards_card-item.purple", {
  position: "absolute",
  left: "0%",
  right: "0%",
  top: "400%",
  bottom: "auto"
});

// Pin the section independently with pinSpacing enabled
ScrollTrigger.create({
  trigger: ".section_home-cards",
  start: "top top",
  end: "+=150%", // Duration to allow scrolling animations
  pin: true,
  pinSpacing: true // Keeps spacing after pinning ends to prevent overlap
});

// Animate the orange card into view
gsap.to(".home-cards_card-item.orange", {
  top: "22%", // Target position
  ease: "none",
  scrollTrigger: {
    trigger: ".section_home-cards",
    start: "top top",
    end: "bottom center", // Adjust end position as needed
    scrub: true,
  }
});

// Animate the purple card into view
gsap.to(".home-cards_card-item.purple", {
  top: "44%", // Target position
  ease: "none",
  scrollTrigger: {
    trigger: ".section_home-cards",
    start: "top top",
    end: "bottom top", // Adjust end position for desired animation
    scrub: true,
  }
});

//Tab change
//Tab change
// Register GSAP
gsap.registerPlugin(ScrollTrigger);

// Select all tab buttons, tab contents, and text selectors
const tabButtons = document.querySelectorAll('.home-cible_tab-link');
const tabContents = document.querySelectorAll('.tab-content');
const textSelectors = document.querySelectorAll('.text-selecteur');

// Function to set initial visibility based on 'tab-visibility' attribute
function setDefaultTabVisibility() {
  tabContents.forEach(content => {
    if (content.getAttribute('tab-visibility') === 'on') {
      content.style.display = "block"; // Show default content
    } else {
      content.style.display = "none"; // Hide other content
    }
  });

  // Also set the default visibility for text-selecteur elements
  textSelectors.forEach(selector => {
    if (selector.getAttribute('tab-visibility') === 'on') {
      selector.style.display = "block"; // Show default selector
    } else {
      selector.style.display = "none"; // Hide other selectors
    }
  });
}

// Function to animate tab content visibility based on filter
function filterTabs(filter) {
  tabContents.forEach(content => {
    const slides = content.querySelectorAll(
      '.splide__slide'); // Select slides within each tab-content

    if (content.getAttribute('tab-filter') === filter) {
      content.style.display = "block"; // Ensure parent tab-content is visible
      // Animate each slide within the selected tab-content
      gsap.fromTo(slides, { opacity: 0, y: 70 }, {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Faster stagger animation for each slide
        duration: 0.8,
        ease: "cubic-bezier(0.64, 0, 0.25, 1)",
        overwrite: "auto"
      });
    } else {
      // Fade out non-matching slides in non-matching tab-content
      gsap.to(slides, {
        opacity: 0,
        y: -70,
        duration: 0.8,
        ease: "cubic-bezier(0.64, 0, 0.25, 1)",
        overwrite: "auto",
        onComplete: () => {
          content.style.display = "none";
        } // Hide entire tab-content after animation
      });
    }
  });

  // Toggle the visibility of text-selecteur elements based on the filter
  textSelectors.forEach(selector => {
    if (selector.getAttribute('tab-filter') === filter) {
      selector.style.display = "block"; // Show the matching text-selecteur
    } else {
      selector.style.display = "none"; // Hide non-matching selectors
    }
  });
}

// Set default visibility on page load
setDefaultTabVisibility();

// Event listeners for each tab button
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('tab-filter');
    filterTabs(filter); // Call the filter function on click

    // Remove .current class from all buttons and add to the clicked one
    tabButtons.forEach(btn => btn.classList.remove('current'));
    button.classList.add('current');
  });
});
