const originalTitle = document.title;

document.addEventListener('visibilitychange', () => {
  document.title = document.hidden ? "😢 Komm wieder!" : originalTitle;
});

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in-section');
  const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});


// Initialisiere den IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  // Wenn das Element im Viewport sichtbar ist
  if (entry.isIntersecting) {
    entry.target.classList.add('visible'); // 'visible' Klasse hinzufügen, um das Element einzublenden
  } else {
    entry.target.classList.remove('visible'); // 'visible' Klasse entfernen, wenn es wieder aus dem Viewport heraus scrollt
  }
});
}, { threshold: 0.5 }); // 50% des Elements müssen sichtbar sein, um die Animation zu starten

// Beobachte jedes Element mit der Klasse '.fade-in-section'
const fadeInElements = document.querySelectorAll('.fade-in-section');
fadeInElements.forEach(element => {
observer.observe(element);
});






