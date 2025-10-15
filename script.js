const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

 document.addEventListener("DOMContentLoaded", function() {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-out',
      });
    });