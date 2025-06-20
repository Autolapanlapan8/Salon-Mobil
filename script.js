function scrollToServices() {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

// Animasi saat elemen masuk viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));