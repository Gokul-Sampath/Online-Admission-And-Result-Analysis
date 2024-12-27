// JavaScript for Tab Navigation
document.getElementById('course-tab').addEventListener('click', function() {
    switchTab('course');
});

document.getElementById('personal-tab').addEventListener('click', function() {
    switchTab('personal');
});

document.getElementById('review-tab').addEventListener('click', function() {
    switchTab('review');
});

function switchTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    // Show the selected tab
    document.getElementById(tabId).classList.add('active-tab');

    // Update active tab button
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(tabId + '-tab').classList.add('active');
}

// JavaScript for Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // Toggle the visibility of the nav links
});

// Handle "Next" and "Back" Button Logic for Tabs
document.getElementById('next-course').addEventListener('click', function() {
    switchTab('personal');
});

document.getElementById('next-personal').addEventListener('click', function() {
    switchTab('review');
});

document.getElementById('back-personal').addEventListener('click', function() {
    switchTab('course');
});

document.getElementById('back-review').addEventListener('click', function() {
    switchTab('personal');
});