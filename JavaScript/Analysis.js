// Student mark Analysis
        const students = [
            {
                regNo: "1u22cs039",
                password: "1u22cs039",
                name: "Gokul S",
                sem1mark: 8.63,
                sem2mark: 7.68,
                sem3mark: 8.18,
                sem4mark: 8.35,
                sem5mark: 0,
                sem6mark: 0,
                cgpamark: 8.21,
                attendance: 87,
                photo: "../image/Student_Photos/1u22cs039.jpg"
            }
        ];

        const studentsContainer = document.getElementById('students');

        students.forEach(student => {
            const studentCard = document.createElement('div');
            studentCard.classList.add('student-card');

            const infoDiv = document.createElement('div');
            infoDiv.classList.add('student-info');

            const photoDiv = document.createElement('div');
            photoDiv.classList.add('student-photo');
            photoDiv.style.backgroundImage = `url(${student.photo})`;

            infoDiv.innerHTML = `
                <h2>${student.name}</h2>
                <div class="student-photo" style="background-image: url('${student.photo}')"></div>
                <p>Registration No: ${student.regNo}</p>
                <p>CGPA: ${student.cgpamark}</p>
                <h3>Attendance</h3>
                <div class="bar-container">
                    <div class="progress-bar attendance-bar" style="width: ${student.attendance}%">${student.attendance}%</div>
                </div>
                <table class="responsive-table">
                    <thead>
                        <tr>
                            <th>Semester</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1st Semester GPA</td><td>${student.sem1mark}</td></tr>
                        <tr><td>2nd Semester GPA</td><td>${student.sem2mark}</td></tr>
                        <tr><td>3rd Semester GPA</td><td>${student.sem3mark}</td></tr>
                        <tr><td>4th Semester GPA</td><td>${student.sem4mark}</td></tr>
                        <tr><td>5th Semester GPA</td><td>${student.sem5mark}</td></tr>
                        <tr><td>6th  Semester GPA</td><td>${student.sem6mark}</td></tr>
                    </tbody>
                </table>
            `;

            studentCard.appendChild(infoDiv);
            studentsContainer.appendChild(studentCard);
        });

        const ctx = document.getElementById('resultChart').getContext('2d');
        const labels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'];
        const data = students[0];
        const marks = [data.sem1mark, data.sem2mark, data.sem3mark, data.sem4mark, data.sem5mark, data.sem6mark];

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: `${data.name}'s Marks`,
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
