// Function to toggle content visibility
function toggleContent(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.content-section');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');
}

// Initially display the first page
document.addEventListener('DOMContentLoaded', () => {
    toggleContent('page1');
});

// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

    // Add the 'active' class to the first link by default when the page loads
document.addEventListener("DOMContentLoaded", function() {
    // Get the first link in the sidebar and add the 'active' class
    const firstLink = document.querySelector('.sidebar a');
    firstLink.classList.add('active');
});
