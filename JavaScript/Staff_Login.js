// JavaScript for Hamburger Menu and Dropdown Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // Toggle the visibility of the nav links
});

// Hardcoded email/password for demo purposes
const correctEmail = "gstech iot";
const correctPassword = "success";

// Generate a random 6-digit OTP
let randomNumber = Math.floor(100000 + Math.random() * 900000);
var correctOtp = randomNumber;  // Simulated OTP

// Login form submission handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate email and password
    if (email === correctEmail && password === correctPassword) {
        alert("Login successful! You are now logged in.");
        // Redirect to another page (e.g., dashboard)
        window.location.href = "../HTML/Staff_Login_Interface.html";
    } else {
        alert("Invalid email or password!");
    }
});