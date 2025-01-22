// Menu toggle bar
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
        import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyC-7Cjq5NGHIZkC_aNTOxjTVLtIQb-NXVI",
            authDomain: "oaara-fy-project-2025.firebaseapp.com",
            databaseURL: "https://oaara-fy-project-2025-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "oaara-fy-project-2025",
            storageBucket: "oaara-fy-project-2025.appspot.com",
            messagingSenderId: "991601225781",
            appId: "1:991601225781:web:08d6c8b07ae6e1a86e417c",
            measurementId: "G-CQL83CNEJ2"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

        // Form Tabs
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

            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
            }

            for (let i = 0; i < contents.length; i++) {
                contents[i].classList.remove('active-tab');
            }

            tabElement.classList.add('active');
            contentElement.classList.add('active-tab');
        }

        function populateReviewSection() {
            const reviewSection = reviewContent.querySelector('p');
            const personalData = new FormData(personalForm);

            let reviewHTML = '<h4>Eligibility Criteria</h4><ul>';
            const eligibilityInputs = eligibilityForm.querySelectorAll('input[type="radio"]:checked');

            eligibilityInputs.forEach(input => {
                reviewHTML += `<li>${input.name}: ${input.value}</li>`;
            });

            reviewHTML += '</ul><h4>Personal Information</h4><ul>';

            personalData.forEach((value, key) => {
                reviewHTML += `<li>${key}: ${value}</li>`;
            });

            reviewHTML += '</ul>';
            reviewSection.innerHTML = reviewHTML;
        }

        // Event Listeners
        nextEligibilityBtn.addEventListener('click', () => {
    const passed12th = document.querySelector('input[name="passed12th"]:checked');
    const aggregateMarks = document.querySelector('input[name="aggregateMarks"]:checked');
    const ageCriteria = document.querySelector('input[name="ageCriteria"]:checked');

    // Check if all the eligibility fields are answered
    if (!passed12th || !aggregateMarks || !ageCriteria) {
        alert("Fill all the fields");
    } else if (passed12th.value === 'yes' &&
               aggregateMarks.value === 'yes' &&
               ageCriteria.value === 'yes') {
        showTab(personalTab, personalContent);
    } else {
        alert("You are not Eligible");
    }
});

        backPersonalBtn.addEventListener('click', () => {
            showTab(eligibilityTab, eligibilityContent);
        });

        nextPersonalBtn.addEventListener('click', () => {
            populateReviewSection();
            showTab(reviewTab, reviewContent);
        });

        backReviewBtn.addEventListener('click', () => {
            showTab(personalTab, personalContent);
        });

        downloadFormBtn.addEventListener('click', () => {
            const eligibilityData = new FormData(eligibilityForm);
            const personalData = new FormData(personalForm);
            const dataToSave = {};

            eligibilityData.forEach((value, key) => {
                dataToSave[key] = value;
            });

            personalData.forEach((value, key) => {
                dataToSave[key] = value;
            });

            // Save data to Firebase
            const dbRef = ref(database, 'form-submissions');
            push(dbRef, dataToSave).then(() => {
                alert('Data saved successfully to Firebase!');
            }).catch(err => {
                alert('Error saving data to Firebase.');
                console.error(err);
            });

            // Generate PDF
            const elementToDownload = document.createElement('div');
            elementToDownload.innerHTML = reviewContent.innerHTML;

            html2pdf().set({
                margin: 1,
                filename: 'GSTech Admission-form.pdf',
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            }).from(elementToDownload).save();
        });

//Disable Right click
document.addEventListener('contextmenu', event => {
    event.preventDefault();
});