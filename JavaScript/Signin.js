// JavaScript for Hamburger Menu and Dropdown Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // Toggle the visibility of the nav links
});;

// Generate a random 6-digit OTP
let randomNumber = Math.floor(100000 + Math.random() * 900000);
var correctOtp = randomNumber;  // Simulated OTP

// Login form submission handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (password.length !== 6) {
        alert("Password must be exactly 6 characters long.");
        return; // Stop further execution if password is not valid
    }

    alert("OTP Sent Successfully! Please enter the OTP.");
        
    // Show OTP input box
    document.getElementById('otpBox').style.display = 'block';
    alert("Generated OTP: " + randomNumber);
    console.log("Generated OTP: " + randomNumber);

});

// OTP verification handler
document.getElementById('verifyOtp').addEventListener('click', function() {
    const enteredOtp = document.getElementById('otp').value;

    // Validate OTP
    if (enteredOtp === correctOtp.toString()) {
        alert("OTP verified successfully! You are Registered.");
        // Redirect to another page (e.g., dashboard)
        window.location.href = "../HTML/Login.html"; // Example redirect
    } else {
        alert("Invalid OTP! Please try again.");
    }
});

//Disable Right click
document.addEventListener('contextmenu', event => {
    event.preventDefault();
});