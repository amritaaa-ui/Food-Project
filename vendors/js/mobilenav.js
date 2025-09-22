const mobileNavIcon = document.querySelector('.mobile-nav-icon');
const mainNav = document.querySelector('.main-nav');

mobileNavIcon.addEventListener('click', () => {
    mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
    mainNav.style.backgroundColor = "#fff";
    
});

