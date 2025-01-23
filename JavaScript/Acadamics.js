const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//Disable Right click
document.addEventListener('contextmenu', event => {
    event.preventDefault();
});