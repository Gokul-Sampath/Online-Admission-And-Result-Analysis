// JavaScript for Hamburger Menu and Dropdown Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // Toggle the visibility of the nav links
});

// Student mark Analysis
const students = [
    {
        regNo: "1u22cs001",
        password: "1u22cs001",
        name: "AATHIKA BEGUM A",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 1,
        photo: "../image/Student_Photos/1u22cs001.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs002",
        password: "1u22cs002",
        name: "ABINANTHANA R",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 2,
        photo: "../image/Student_Photos/1u22cs002.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs003",
        password: "1u22cs003",
        name: "ABINAYA S",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 3,
        photo: "../image/Student_Photos/1u22cs003.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs004",
        password: "1u22cs004",
        name: "ABINAYASRI T",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 4,
        photo: "../image/Student_Photos/1u22cs004.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs005",
        password: "1u22cs005",
        name: "ABISHEK M",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 5,
        photo: "../image/Student_Photos/1u22cs005.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs006",
        password: "1u22cs006",
        name: "AGARSHAN C",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 6,
        photo: "../image/Student_Photos/1u22cs006.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs007",
        password: "1u22cs007",
        name: "AJITH KUMAR B",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 7,
        photo: "../image/Student_Photos/1u22cs007.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs008",
        password: "1u22cs008",
        name: "ALAGARRAJA S",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 8,
        photo: "../image/Student_Photos/1u22cs008.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs009",
        password: "1u22cs009",
        name: "ALAGUPANDI M",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 9,
        photo: "../image/Student_Photos/1u22cs009.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs010",
        password: "1u22cs010",
        name: "ANBU CHARLES A",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 10,
        photo: "../image/Student_Photos/1u22cs010.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs011",
        password: "1u22cs011",
        name: "ANBUCHEZHIYAN K",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 11,
        photo: "../image/Student_Photos/1u22cs011.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs012",
        password: "1u22cs012",
        name: "ANGEL J",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 12,
        photo: "../image/Student_Photos/1u22cs012.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs013",
        password: "1u22cs013",
        name: "ANUSUYA S",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 13,
        photo: "../image/Student_Photos/1u22cs013.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs014",
        password: "1u22cs014",
        name: "ARAVIND G",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 14,
        photo: "../image/Student_Photos/1u22cs014.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs015",
        password: "1u22cs015",
        name: "ARCHANA S",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 0,
        photo: "../image/Student_Photos/1u22cs015.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs016",
        password: "1u22cs016",
        name: "ARUNPRASATH S",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 16,
        photo: "../image/Student_Photos/1u22cs016.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs017",
        password: "1u22cs017",
        name: "ARVIN DANNY Y M",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 18,
        photo: "../image/Student_Photos/1u22cs018.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs019",
        password: "1u22cs019",
        name: "ASWIN R",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 18,
        photo: "../image/Student_Photos/1u22cs019.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs020",
        password: "1u22cs020",
        name: "ASWIN RAJA R",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 20,
        photo: "../image/Student_Photos/1u22cs020.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs021",
        password: "1u22cs021",
        name: "AVANTHISH R",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 21,
        photo: "../image/Student_Photos/1u22cs021.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs022",
        password: "1u22cs022",
        name: "BALAJI S",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 22,
        photo: "../image/Student_Photos/1u22cs022.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs023",
        password: "1u22cs023",
        name: "BHARATH P",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 23,
        photo: "../image/Student_Photos/1u22cs023.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs024",
        password: "1u22cs024",
        name: "BHUVANESHWAR S",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 24,
        photo: "../image/Student_Photos/1u22cs0024.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs025",
        password: "1u22cs025",
        name: "BOOMIKA S",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 25,
        photo: "../image/Student_Photos/1u22cs025.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs026",
        password: "1u22cs026",
        name: "BOOSHAN R",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 25,
        photo: "../image/Student_Photos/1u22cs026.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs028",
        password: "1u22cs028",
        name: "DAYANITHI A",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 28,
        photo: "../image/Student_Photos/1u22cs028.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs030",
        password: "1u22cs030",
        name: "DEVA M",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 30,
        photo: "../image/Student_Photos/1u22cs030.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs031",
        password: "1u22cs031",
        name: " DHANUSH S",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 31,
        photo: "../image/Student_Photos/1u22cs031.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs032",
        password: "1u22cs032",
        name: "DHARANI B",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 32,
        photo: "../image/Student_Photos/1u22cs032.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs033",
        password: "1u22cs033",
        name: "DHARANI S",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 33,
        photo: "../image/Student_Photos/1u22cs033.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs034",
        password: "1u22cs034",
        name: "AATHIKA BEGUM A",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 34,
        photo: "../image/Student_Photos/1u22cs034.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs034",
        password: "1u22cs034",
        name: "DHARUN R",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 34,
        photo: "../image/Student_Photos/1u22cs034.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs035",
        password: "1u22cs035",
        name: "DINESH KUMAR K",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 35,
        photo: "../image/Student_Photos/1u22cs035.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs036",
        password: "1u22cs036",
        name: "DIVYADEVI M",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 36,
        photo: "../image/Student_Photos/1u22cs036.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs037",
        password: "1u22cs037",
        name: "GANESHWARI A",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 37,
        photo: "../image/Student_Photos/1u22cs037.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs038",
        password: "1u22cs038",
        name: "GAURAV K K",
        sem1mark: 0,
        sem2mark: 0,
        sem3mark: 0,
        sem4mark: 0,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 0,
        attendance: 38,
        photo: "../image/Student_Photos/1u22cs038.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs039",
        password: "1u22cs039",
        name: "GOKUL S",
        sem1mark: 8.63,
        sem2mark: 7.68,
        sem3mark: 8.18,
        sem4mark: 8.35,
        sem5mark: 0,
        sem6mark: 0,
        cgpamark: 8.21,
        attendance: 87,
        photo: "../image/Student_Photos/1u22cs039.jpg",
        mark1: 95,
        mark2: 86,
        mark3: 70,
        mark4: 73,
        mark5: 0
    },
    {
        regNo: "1u22cs040",
        password: "1u22cs040",
        name: "GOKUL SANKAR P",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 40,
        photo: "../image/Student_Photos/1u22cs040.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs041",
        password: "1u22cs041",
        name: "GOWTHAM P",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 41,
        photo: "../image/Student_Photos/1u22cs041.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs042",
        password: "1u22cs042",
        name: "HARIHARAN B",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 42,
        photo: "../image/Student_Photos/1u22cs042.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs043",
        password: "1u22cs043",
        name: "HARIHARAN S",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 43,
        photo: "../image/Student_Photos/1u22cs043.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs044",
        password: "1u22cs044",
        name: "HARINI P",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 44,
        photo: "../image/Student_Photos/1u22cs044.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs045",
        password: "1u22cs045",
        name: "HARSHAPRATHA M",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 45,
        photo: "../image/Student_Photos/1u22cs045.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs046",
        password: "1u22cs046",
        name: "HEMANDH KRISHNAN R",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 46,
        photo: "../image/Student_Photos/1u22cs046.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs047",
        password: "1u22cs047",
        name: "HEYDEN K",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 47,
        photo: "../image/Student_Photos/1u22cs047.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs048",
        password: "1u22cs048",
        name: "IBATHUR RAHMAN M",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 48,
        photo: "../image/Student_Photos/1u22cs048.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs049",
        password: "1u22cs049",
        name: "JAGADEESH S",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 49,
        photo: "../image/Student_Photos/1u22cs049.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs050",
        password: "1u22cs050",
        name: "JEEVANANTHAN T",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 50,
        photo: "../image/Student_Photos/1u22cs050.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs052",
        password: "1u22cs052",
        name: "JOTHIMANI S",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 52,
        photo: "../image/Student_Photos/1u22cs052.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs053",
        password: "1u22cs053",
        name: "KAJENDRAN G",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 53,
        photo: "../image/Student_Photos/1u22cs053.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs054",
        password: "1u22cs054",
        name: "KALAIVANI S",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 54,
        photo: "../image/Student_Photos/1u22cs054.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs055",
        password: "1u22cs055",
        name: "KALPANA M",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 55,
        photo: "../image/Student_Photos/1u22cs055.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs056",
        password: "1u22cs056",
        name: "KARTHIKEYAN V",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 56,
        photo: "../image/Student_Photos/1u22cs056.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs057",
        password: "1u22cs057",
        name: "KATHIRVEL K",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 57,
        photo: "../image/Student_Photos/1u22cs057.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs058",
        password: "1u22cs058",
        name: "KAVIVARMA C",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 58,
        photo: "../image/Student_Photos/1u22cs058.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs059",
        password: "1u22cs059",
        name: "KESAVAN P",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 59,
        photo: "../image/Student_Photos/1u22cs059.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs060",
        password: "1u22cs060",
        name: "KISHORE KUMAR L",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 60,
        photo: "../image/Student_Photos/1u22cs060.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs061",
        password: "1u22cs061",
        name: "KOWSIKA K M",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 61,
        photo: "../image/Student_Photos/1u22cs061.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs062",
        password: "1u22cs062",
        name: "LOGESH K",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 62,
        photo: "../image/Student_Photos/1u22cs062.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs063",
        password: "1u22cs063",
        name: "MAHAVINITHA R",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 63,
        photo: "../image/Student_Photos/1u22cs063.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs064",
        password: "1u22cs064",
        name: "MAHESWARI S",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 64,
        photo: "../image/Student_Photos/1u22cs064.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs096",
        password: "1u22cs096",
        name: "SANDHYA S",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 96,
        photo: "../image/Student_Photos/1u22cs096.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs102",
        password: "1u22cs102",
        name: "SASI KUMAR M",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 2,
        photo: "../image/Student_Photos/1u22cs102.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
    {
        regNo: "1u22cs112",
        password: "1u22cs112",
        name: "SIVASANKAR R",
        sem1mark: 1,
        sem2mark: 2,
        sem3mark: 3,
        sem4mark: 4,
        sem5mark: 5,
        sem6mark: 6,
        cgpamark: 7,
        attendance: 12,
        photo: "../image/Student_Photos/1u22cs112.jpg",
        mark1: 0,
        mark2: 0,
        mark3: 0,
        mark4: 0,
        mark5: 0
    },
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
        document.getElementById('attendance').textContent = student.attendance + '%';
        document.getElementById('cgpamark').textContent = student.cgpamark;

        // Set student photo
        document.getElementById('studentPhoto').src = student.photo;

        // Fill in subject marks
        document.getElementById('mark1').textContent = student.mark1;
        document.getElementById('mark2').textContent = student.mark2;
        document.getElementById('mark3').textContent = student.mark3;
        document.getElementById('mark4').textContent = student.mark4;
        document.getElementById('mark5').textContent = student.mark5;
        document.getElementById('mark6').textContent = student.mark6;
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
        <p>Registration No: ${loggedInStudent.regNo}</p>
        <p>CGPA: ${loggedInStudent.cgpamark}</p>
        <h3>Attendance</h3>
        <div class="bar-container">
            <div class="progress-bar attendance-bar" style="width: ${loggedInStudent.attendance}%">${loggedInStudent.attendance}%</div>
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
