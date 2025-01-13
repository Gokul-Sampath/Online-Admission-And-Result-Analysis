const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');

        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

//Disable Right click
document.addEventListener('contextmenu', event => {
    event.preventDefault();
});