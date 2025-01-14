// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Carousel Slide Functionality
let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    moveSlide(1);
}, 6000); // Auto slide every 3 seconds

//Disable Right click
document.addEventListener('contextmenu', event => {
    event.preventDefault();
});