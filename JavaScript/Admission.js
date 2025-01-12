        // JavaScript for Tab Navigation
        function switchTab(tabId) {
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => tab.classList.remove('active-tab'));

            document.getElementById(tabId).classList.add('active-tab');

            const buttons = document.querySelectorAll('.tab-btn');
            buttons.forEach(button => button.classList.remove('active'));

            document.getElementById(tabId + '-tab').classList.add('active');
        }

        // Form Validation for Required Fields
        function validateForm(formId) {
            const form = document.getElementById(formId);
            const inputs = form.querySelectorAll('input, select');

            for (let input of inputs) {
                if (!input.value.trim()) {
                    alert(`Please fill out the field: ${input.name}`);
                    return false;
                }
            }

            return true;
        }

        // Event Listeners for Buttons
        document.getElementById('next-course').addEventListener('click', function () {
            if (validateForm('course-form')) {
                switchTab('personal');
            }
        });

        document.getElementById('next-personal').addEventListener('click', function () {
            if (validateForm('personal-form')) {
                switchTab('review');
            }
        });

        document.getElementById('back-personal').addEventListener('click', function () {
            switchTab('course');
        });

        document.getElementById('back-review').addEventListener('click', function () {
            switchTab('personal');
        });

        document.getElementById('submit-form').addEventListener('click', function () {
    if (validateForm('personal-form')) {
        alert('Form submitted successfully!');
        window.location.href = '../HTML/OAS_Project.html'; // Redirect to the specified page
    }
});

//Disable Right click
document.addEventListener('contextmenu', event => {
    event.preventDefault();
});