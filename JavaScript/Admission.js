
// Tabs and Form Sections
const eligibilityTab = document.getElementById('eligibility-tab');
const personalTab = document.getElementById('personal-tab');
const reviewTab = document.getElementById('review-tab');

const eligibilityContent = document.getElementById('eligibility');
const personalContent = document.getElementById('personal');
const reviewContent = document.getElementById('review');

const nextEligibilityBtn = document.getElementById('next-eligibility');
const backPersonalBtn = document.getElementById('back-personal');
const nextPersonalBtn = document.getElementById('next-personal');
const backReviewBtn = document.getElementById('back-review');
const submitFormBtn = document.getElementById('submit-form');
const downloadFormBtn = document.getElementById('download-form');

const eligibilityForm = document.getElementById('eligibility-form');
const personalForm = document.getElementById('personal-form');

// Helper Functions
function showTab(tabElement, contentElement) {
    const tabs = document.getElementsByClassName('tab-btn');
    const contents = document.getElementsByClassName('tab');

    // Remove active class from all tabs and contents
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active-tab');
    }

    // Add active class to the selected tab and content
    tabElement.classList.add('active');
    contentElement.classList.add('active-tab');
}

function validateEligibilityForm() {
    const passed12th = eligibilityForm.querySelector('input[name="passed12th"]:checked');
    const aggregateMarks = eligibilityForm.querySelector('input[name="aggregateMarks"]:checked');
    const ageCriteria = eligibilityForm.querySelector('input[name="ageCriteria"]:checked');

    if (!passed12th || !aggregateMarks || !ageCriteria) {
        alert('Please answer all eligibility questions.');
        return false;
    }

    if (passed12th.value === 'no' || aggregateMarks.value === 'no' || ageCriteria.value === 'no') {
        alert('You do not meet the eligibility criteria.');
        return false;
    }

    return true;
}

function validatePersonalForm() {
    const requiredFields = personalForm.querySelectorAll('[required]');

    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!field.value.trim()) {
            alert(`Please fill out the ${field.previousElementSibling.textContent} field.`);
            return false;
        }
    }

    return true;
}

function populateReviewSection() {
    const reviewSection = reviewContent.querySelector('p');
    const personalData = new FormData(personalForm);

    let reviewHTML = '<h4>Eligibility Criteria</h4><ul>';
    const eligibilityInputs = eligibilityForm.querySelectorAll('input[type="radio"]:checked');

    for (let i = 0; i < eligibilityInputs.length; i++) {
        const input = eligibilityInputs[i];
        reviewHTML += `<li>${input.name}: ${input.value}</li>`;
    }

    reviewHTML += '</ul><h4>Personal Information</h4><ul>';

    personalData.forEach((value, key) => {
        reviewHTML += `<li>${key}: ${value}</li>`;
    });

    reviewHTML += '</ul>';
    reviewSection.innerHTML = reviewHTML;
}

// Event Listeners
eligibilityTab.addEventListener('click', function () {
    showTab(eligibilityTab, eligibilityContent);
});

personalTab.addEventListener('click', function () {
    showTab(personalTab, personalContent);
});

reviewTab.addEventListener('click', function () {
    showTab(reviewTab, reviewContent);
});

nextEligibilityBtn.addEventListener('click', function () {
    if (validateEligibilityForm()) {
        showTab(personalTab, personalContent);
    }
});

backPersonalBtn.addEventListener('click', function () {
    showTab(eligibilityTab, eligibilityContent);
});

nextPersonalBtn.addEventListener('click', function () {
    if (validatePersonalForm()) {
        populateReviewSection();
        showTab(reviewTab, reviewContent);
    }
});

backReviewBtn.addEventListener('click', function () {
    showTab(personalTab, personalContent);
});

submitFormBtn.addEventListener('click', function () {
    if (confirm('Are you sure you want to submit the form?')) {
        alert('Form submitted successfully!');
        eligibilityForm.reset();
        personalForm.reset();
        window.location.href = './Login.html'; 
    }
});

downloadFormBtn.addEventListener('click', function () {
    const elementToDownload = document.createElement('div');

    // Populate content for download
    let downloadHTML = '<h4>Eligibility Criteria</h4><ul>';
    const eligibilityInputs = eligibilityForm.querySelectorAll('input[type="radio"]:checked');

    for (let i = 0; i < eligibilityInputs.length; i++) {
        const input = eligibilityInputs[i];
        downloadHTML += `<li>${input.name}: ${input.value}</li>`;
    }

    downloadHTML += '</ul><h4>Personal Information</h4><ul>';
    const personalData = new FormData(personalForm);

    personalData.forEach((value, key) => {
        downloadHTML += `<li>${key}: ${value}</li>`;
    });

    downloadHTML += '</ul>';

    // Add content to element
    elementToDownload.innerHTML = downloadHTML;
    elementToDownload.style.padding = '20px';
    elementToDownload.style.fontFamily = 'Arial, sans-serif';

    // Use html2pdf to generate and download the PDF
    html2pdf().set({
        margin: 1,
        filename: 'form-details.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    }).from(elementToDownload).save();
});

document.addEventListener('contextmenu', event => {
    event.preventDefault();
});