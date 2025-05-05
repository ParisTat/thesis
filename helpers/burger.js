document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.overlay');

    if (menuToggle && nav && overlay) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
        });
        overlay.addEventListener('click', () => {
            nav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
});