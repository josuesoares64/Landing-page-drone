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

// Abrir/fechar menu
menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
    menuToggle.classList.toggle("open");
});

// Fechar menu ao clicar nos links OU fora do menu
document.addEventListener('click', (e) => {
    const isClickInsideNav = nav.contains(e.target);
    const isClickOnMenuToggle = menuToggle.contains(e.target);
    const isClickOnNavLink = e.target.matches('#nav a');
    
    // Se clicou fora do menu E o menu está aberto
    if (!isClickInsideNav && !isClickOnMenuToggle && nav.classList.contains('active')) {
        nav.classList.remove("active");
        menuToggle.classList.remove("open");
    }
    
    // Se clicou em um link do menu (seu comportamento atual)
    if (isClickOnNavLink) {
        nav.classList.remove("active");
        menuToggle.classList.remove("open");
    }
});

// Fechar menu ao redimensionar para desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove("active");
        menuToggle.classList.remove("open");
    }
});