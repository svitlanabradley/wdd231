

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]



const allLink = document.querySelector("#all");
const cseLink = document.querySelector("#cse");
const wddLink = document.querySelector("#wdd");

allLink.addEventListener("click", () => {
    createCourseList(courses);
});

cseLink.addEventListener("click", () => {
    createCourseList(courses.filter(course => course.subject === 'CSE'))
});

wddLink.addEventListener("click", () => {
    createCourseList(courses.filter(course => course.subject === 'WDD'))
});


function createCourseList(filteredCourses) {
    document.querySelector("#courseList").innerHTML = "";
    filteredCourses.forEach(course => {

        const li = document.createElement("li");
        li.innerHTML = `${course.subject} ${course.number}`;
        li.classList.add("course", course.completed ? "completed" : "incompleted");
        li.addEventListener('click', () => showInfo(course))
        document.querySelector("#courseList").appendChild(li);
    });

    const totalCredits = filteredCourses.filter(course => course.completed).reduce((sum, course) => sum + course.credits, 0);

    document.getElementById("totalCredits").textContent = `Total Credits: ${totalCredits}`;
    
}

const creditsContainer = document.getElementById("totalCredits");
creditsContainer.textContent = "Total Credits: 0";

createCourseList(courses);



const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove "active" class from the currently active item
        document.querySelector('.nav-item.active')?.classList.remove('active');

        // Add "active" class to the clicked item
        item.classList.add('active');
    });
});


//-------DIALOG--------
const courseDetails = document.querySelector("#course-details");
const subject = document.querySelector("#course-details h2");
const title = document.querySelector("#course-details h3");
const info = document.querySelector("#course-details p");
const close = document.querySelector("#course-details button");
close.addEventListener("click", () => courseDetails.close());

// ------- LOOP THROUGH THE ARRAY OF JSON ITEMS
function showInfo(course) {
   subject.innerHTML = `${course.subject} ${course.number}`
   title.innerHTML = course.title
   info.innerHTML = `<br>${course.credits}credits<br><br>Certificate: ${course.certificate}<br><br>${course.description}<br><br>Technology: ${course.technology}`
   courseDetails.showModal()
}

// displayItems(courses)