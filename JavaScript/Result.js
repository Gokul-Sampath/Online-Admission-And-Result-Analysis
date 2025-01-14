
    // JavaScript for Hamburger Menu and Dropdown Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // Toggle the visibility of the nav links
});;

    // Sample student data
    const students = [
        {
            regNo: "1u22cs039",
            password: "1u22cs039",
            name: "Gokul S",
            sem1mark: 0,
            sem2mark: 0,
            sem3mark: 0,
            sem4mark: 0,
            sem5mark: 0,
            sem6mark: 0,
            cgpamark: 0,
            attendance: 87,
            photo: "../image/Student_Photos/1u22cs039.jpg"
        }
    ];

    // Login Function
    function login() {
        const regNo = document.getElementById('regNo').value.trim().toLowerCase();
        const password = document.getElementById('password').value.trim().toLowerCase();

        const student = students.find(s => s.regNo === regNo && s.password === password);

        if (student) {
            // Hide login and show dashboard
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('dashboard-container').style.display = 'block';
            loadDashboard(student);
        } else {
            alert('Invalid Registration Number or Password');
        }
    }

    // Function to Load Student Data into Dashboard
    function loadDashboard(student) {
        // Fill in student info
        document.getElementById('studentName').textContent = student.name;
        document.getElementById('studentRegNo').textContent = student.regNo;
        document.getElementById('attendance').textContent = student.attendance + '%';
        document.getElementById('cgpamark').textContent = student.cgpamark;

        // Set student photo
        document.getElementById('studentPhoto').src = student.photo;

        // Fill in subject marks
        document.getElementById('sem1mark').textContent = student.sem1mark;
        document.getElementById('sem2mark').textContent = student.sem2mark;
        document.getElementById('sem3mark').textContent = student.sem3mark;
        document.getElementById('sem4mark').textContent = student.sem4mark;
        document.getElementById('sem5mark').textContent = student.sem5mark;
        document.getElementById('sem6mark').textContent = student.sem6mark;
    }

    //Disable Right click
document.addEventListener('contextmenu', event => {
    event.preventDefault();
});