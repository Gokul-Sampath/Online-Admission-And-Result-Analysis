// JavaScript for Hamburger Menu and Dropdown Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Hardcoded email/password for demo purposes
const correctEmail = "gokul@gmail.com";
const correctPassword = "123456";

// Login form submission handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate email and password
    if (email === correctEmail && password === correctPassword) {
        alert("You are now logged in.");
        // Redirect to Admission Form
        window.location.href = "../HTML/Admission.html";
    } else {
        alert("Invalid email or password!");
    }
});

//Disable Right click
document.addEventListener('contextmenu', event => {
    event.preventDefault();
});