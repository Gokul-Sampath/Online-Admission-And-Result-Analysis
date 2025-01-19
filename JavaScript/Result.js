const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Student mark Analysis
const students = [
    {
        regNo: "1u22cs039",
        password: "1u22cs039",
        name: "GOKUL S",
        sem1mark: 8.63,
        sem2mark: 7.68,
        sem3mark: 8.18,
        sem4mark: 8.35,
        sem5mark: 8.64,
        sem6mark: 0,
        cgpamark: 8.3,
        percentage: 78.85,
        photo: "../image/Student_Photos/1u22cs039.jpg",
        mark1: 79,
        mark2: 81,
        mark3: 90,
        mark4: 91,

        mark5: 71,
        mark6: 67,
        mark7: 78,
        mark8: 86,
        mark9: 88,
        mark10: 61,
        mark11: 96,

        mark12: 66,
        mark13: 69,
        mark14: 87,
        mark15: 90,
        mark16: 78,
        mark17: "GOOD",

        mark18: 79,
        mark19: 68,
        mark20: 90,
        mark21: 87,
        mark22: 80,
        mark23: "DISTINCTION",
        mark24: 72,
        mark25: 83,
        mark26: 56,

        mark27: 95,
        mark28: 86,
        mark29: 70,
        mark30: 44,
        mark31: 32,
        mark32: "OUTSTANDING",
        mark33: 73
    }
];

// Login Function
function login() {
    const regNo = document.getElementById('regNo').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim().toLowerCase();

    const student = students.find(s => s.regNo === regNo && s.password === password);

    if (student) {
        // Store student data in localStorage
        localStorage.setItem('loggedInStudent', JSON.stringify(student));

        // Hide login and show dashboard
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('dashboard-container').style.display = 'block';
        loadDashboard();
    } else {
        alert('Invalid Registration Number or Password');
    }
}

// Function to Load Student Data into Dashboard
function loadDashboard() {
    const student = JSON.parse(localStorage.getItem('loggedInStudent'));

    if (student) {
        // Fill in student info
        document.getElementById('studentName').textContent = student.name;
        document.getElementById('studentRegNo').textContent = student.regNo;
        document.getElementById('percentage').textContent = student.percentage + '%';
        document.getElementById('cgpamark').textContent = student.cgpamark;

        // Set student photo
        document.getElementById('studentPhoto').src = student.photo;

        // Fill in subject marks
        document.getElementById('11F').textContent = student.mark1;
        document.getElementById('12E').textContent = student.mark2;
        document.getElementById('13A').textContent = student.mark3;
        document.getElementById('13B').textContent = student.mark4;

        document.getElementById('21F').textContent = student.mark5;
        document.getElementById('22E').textContent = student.mark6;
        document.getElementById('23A').textContent = student.mark7;
        document.getElementById('23B').textContent = student.mark8;
        document.getElementById('24E').textContent = student.mark9;
        document.getElementById('25P').textContent = student.mark10;
        document.getElementById('25Q').textContent = student.mark11;

        document.getElementById('31F').textContent = student.mark12;
        document.getElementById('32E').textContent = student.mark13;
        document.getElementById('33A').textContent = student.mark14;
        document.getElementById('33B').textContent = student.mark15;
        document.getElementById('33C').textContent = student.mark16;
        document.getElementById('34D').textContent = student.mark17;

        document.getElementById('41F').textContent = student.mark18;
        document.getElementById('42E').textContent = student.mark19;
        document.getElementById('43A').textContent = student.mark20;
        document.getElementById('43B').textContent = student.mark21;
        document.getElementById('43E').textContent = student.mark22;
        document.getElementById('44D').textContent = student.mark23;
        document.getElementById('44F').textContent = student.mark24;
        document.getElementById('45P').textContent = student.mark25;
        document.getElementById('45Q').textContent = student.mark26;

        document.getElementById('53A').textContent = student.mark27;
        document.getElementById('53B').textContent = student.mark28;
        document.getElementById('53E').textContent = student.mark29;
        document.getElementById('54A').textContent = student.mark30;
        document.getElementById('54B').textContent = student.mark31;
        document.getElementById('54G').textContent = student.mark32;
        document.getElementById('5EK').textContent = student.mark33;
    } else {
        // Redirect to login if no student data exists
        window.location.href = 'login.html';
    }
}

// Disable Right Click
document.addEventListener('contextmenu', event => {
    event.preventDefault();
});

// Result Analysis Page: Display Chart and Student Data
const ctx = document.getElementById('resultChart').getContext('2d');
const student = JSON.parse(localStorage.getItem('loggedInStudent'));

if (student) {
    const labels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'];
    const marks = [student.sem1mark, student.sem2mark, student.sem3mark, student.sem4mark, student.sem5mark, student.sem6mark];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: `${student.name}'s Marks`,
                data: marks,
                backgroundColor: 'rgba(255, 165, 0, 0.7)',
                borderColor: 'rgba(255, 165, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#ffa500'
                    }
                },
                title: {
                    display: true,
                    text: 'Semester-wise Analysis',
                    color: '#ffa500'
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ffa500'
                    },
                    grid: {
                        color: 'rgba(255, 165, 0, 0.2)'
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#ffa500'
                    },
                    grid: {
                        color: 'rgba(255, 165, 0, 0.2)'
                    }
                }
            }
        }
    });
} else {
    // Redirect to login if no student data exists
    window.location.href = 'login.html';
}

// Student Logout (Clear localStorage and redirect to login page)
function logout() {
    localStorage.removeItem('loggedInStudent');
    window.location.href = 'login.html';
}

// Modify student card display for logged-in user only (can be used for a separate page to show student info)
const studentsContainer = document.getElementById('students');
const loggedInStudent = JSON.parse(localStorage.getItem('loggedInStudent'));

if (loggedInStudent) {
    const studentCard = document.createElement('div');
    studentCard.classList.add('student-card');

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('student-info');

    const photoDiv = document.createElement('div');
    photoDiv.classList.add('student-photo');
    photoDiv.style.backgroundImage = `url(${loggedInStudent.photo})`;

    infoDiv.innerHTML = `
        <h2>${loggedInStudent.name}</h2>
        <div class="student-photo" style="background-image: url('${loggedInStudent.photo}')"></div>
        <h3>Registration No: ${loggedInStudent.regNo}</h3>
        <h2>CGPA: ${loggedInStudent.cgpamark}</h2>
        <h3>percentage</h3>
        <div class="bar-container">
            <div class="progress-bar percentage-bar" style="width: ${loggedInStudent.percentage}%">${loggedInStudent.percentage}%</div>
        </div>
        <table class="responsive-table">
            <thead>
                <tr>
                    <th>Semester</th>
                    <th>Marks</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1st Semester GPA</td><td>${loggedInStudent.sem1mark}</td></tr>
                <tr><td>2nd Semester GPA</td><td>${loggedInStudent.sem2mark}</td></tr>
                <tr><td>3rd Semester GPA</td><td>${loggedInStudent.sem3mark}</td></tr>
                <tr><td>4th Semester GPA</td><td>${loggedInStudent.sem4mark}</td></tr>
                <tr><td>5th Semester GPA</td><td>${loggedInStudent.sem5mark}</td></tr>
                <tr><td>6th Semester GPA</td><td>${loggedInStudent.sem6mark}</td></tr>
            </tbody>
        </table>
    `;

    studentCard.appendChild(infoDiv);
    studentsContainer.appendChild(studentCard);
}
