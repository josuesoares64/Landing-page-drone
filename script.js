// ===== INICIALIZAÇÃO AOS =====
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-out',
    });
});

// ===== MENU HAMBURGUER =====
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  nav.classList.toggle("active");
});

// Fechar menu ao clicar em um link (mobile)
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Só fecha o menu se estiver no mobile (menu ativo)
    if (nav.classList.contains('active')) {
      menuToggle.classList.remove("open");
      nav.classList.remove("active");
    }
  });
});

// Fechar menu ao redimensionar a janela para desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    menuToggle.classList.remove("open");
    nav.classList.remove("active");
  }
});