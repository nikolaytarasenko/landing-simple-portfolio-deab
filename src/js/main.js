const menuButton = document.querySelector('.hamburger');
const menu = document.querySelector('.header__nav');

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