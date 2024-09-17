document.addEventListener('DOMContentLoaded', function () {
  const heroContent = document.querySelector('.hero-content');

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset;
    const opacity = Math.max(0, 1 - (scrollTop / 500));
    heroContent.style.opacity = opacity;
  });
});
