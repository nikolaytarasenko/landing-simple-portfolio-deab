const menuButton = document.querySelector('.hamburger');
const menu = document.querySelector('.header__nav');
const projects = document.querySelectorAll('.project__container');

// Toggle menu function
function toggleMenu(e) {
    e.preventDefault();

    this.classList.toggle('active');

    if (this.classList.contains('active')) {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        menu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

// Show/hide hamburger menu on tablets and mobile
function showMenu() {
    if (document.documentElement.clientWidth <= 751 || window.innerWidth <= 768) {
        menu.classList.add('mainMenu');
    } else {
        menu.classList.remove('mainMenu');
        document.body.style.overflow = 'auto';
    }
}
showMenu();

window.addEventListener('resize', showMenu);
menuButton.addEventListener('click', toggleMenu);

// iOS hover bugfix on projects
window.onload = function () {
    for (let i = 0; i < projects.length; i++) {
        projects[i].addEventListener('click', e => true);
    }
}