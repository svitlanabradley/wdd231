const mainNav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
});


const classes = [
    {
        id: "01",
        image: "images/img1.webp",
        className: "Hatha Yoga",
        description: "Gentle and balanced practice that focuses on breath control, basic postures, and mindfulness. It is perfect for beginners and those looking to improve flexibility, strength, and relaxation. This class emphasizes slow movements, deep stretching, and a calm, meditative approach to help you reconnect with your body and mind.",
        level: "Level: Beginner",
        duration: "Duration: 50 minutes",
        instructor: "Instructor: Emily",
        schedule: "Schedule: Mondays & Wednesdays: 7:00 AM"
    },
    {
        id: "02",
        image: "images/img2.webp",
        className: "Kundalini Yoga",
        description: "Powerful practice that combines dynamic movements, breathwork, chanting, and meditation to awaken inner energy. This class focuses on kriyas (specific sequences of postures and breath control) to promote mental clarity, emotional balance, and spiritual awareness. Kundalini Yoga is perfect for those looking to deepen their connection between mind, body, and spirit.",
        level: "Level: Advanced",
        duration: "Duration: 75 minutes",
        instructor: "Instructor: Aaron",
        schedule: "Schedule: Mondays & Thursdays: 8:00 PM"
    },
    {
        id: "03",
        image: "images/img3.webp",
        className: "Yin Yoga",
        description: "Slow, meditative practice that focuses on deep stretching and relaxation. Poses are held for several minutes, allowing the body to gently release tension and improve flexibility. This practice targets the deeper connective tissues, promoting joint mobility and inner stillness. Yin Yoga is perfect for reducing stress, enhancing mindfulness, and restoring balance in both body and mind. Ideal for all levels, it’s a great complement to more dynamic yoga styles.",
        level: "Level: Beginner",
        duration: "Duration: 60 minutes",
        instructor: "Instructor: Olivia",
        schedule: "Schedule: Tuesdays & Fridays: 9:00 AM"
    },
    {
        id: "04",
        image: "images/img4.webp",
        className: "Vinyasa Yoga",
        description: "Dynamic and flowing practice that synchronizes movement with breath. This class focuses on smooth transitions between poses, building strength, flexibility, and endurance. Perfect for those who enjoy a more energetic and creative practice, Vinyasa Yoga helps cultivate mindfulness while improving balance and coordination. Expect a mix of sun salutations, standing poses, and core work, all set to a rhythmic flow.",
        level: "Level: Intermediate",
        duration: "Duration: 45 minutes",
        instructor: "Instructor: Dylan",
        schedule: "Schedule: Tuesdays & Thursdays: 6:30 PM"
    }
];




document.addEventListener("DOMContentLoaded", function() {
    console.log("✅ DOM fully loaded");

    const isHomePage = document.body.classList.contains('home-page');
    const isClassesPage = document.body.classList.contains('classes-page');

    if (isHomePage) {
        
        createSelectOption(classes);
    }

    if (isClassesPage) {
        
        createClassCard(classes);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const selectedClass = localStorage.getItem("selectedClass");
    if (selectedClass && document.getElementById("yogaClassSelect")) {
        document.getElementById("yogaClassSelect").value = selectedClass;
        localStorage.removeItem("selectedClass"); 
    }


    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("book-button")) {
            const classId = event.target.dataset.classId;
            localStorage.setItem("selectedClass", classId);
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const bookButton = document.getElementById("bookSessionButton");
    const formSection = document.getElementById("free-session");

    if (bookButton && formSection) {
        bookButton.addEventListener("click", function (event) {
            event.preventDefault(); 
            formSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const selectedClass = localStorage.getItem("selectedClass");

    if (selectedClass && document.getElementById("yogaClassSelect")) {
        document.getElementById("yogaClassSelect").value = selectedClass;
        localStorage.removeItem("selectedClass");

        document.getElementById("free-session").scrollIntoView({ behavior: "smooth" });
    }
});



createClassCard(classes);

function createClassCard(classes) {
    const container = document.querySelector("#classesContainer");

    if (!container) {
        console.error("❌ Element with ID 'classesContainer' not found!");
        return;
    }

    
    // Clear previous cards before adding new ones
    container.innerHTML = "";

    classes.forEach(yogaClass => {
        const card = document.createElement("section");
        card.classList.add("class-card");

        const image = document.createElement("img");
        image.src = yogaClass.image;
        image.alt = `${yogaClass.className}`;
        image.loading = "lazy";

        const details = document.createElement("div");
        details.classList.add("class-details")
        
        const name = document.createElement("h2");
        name.textContent = yogaClass.className;

        const descr = document.createElement("p");
        descr.textContent = yogaClass.description;

        const level = document.createElement("p");
        level.textContent = yogaClass.level;

        const duration = document.createElement("p");
        duration.textContent = yogaClass.duration; 

        const instructor = document.createElement("p");
        instructor.textContent = yogaClass.instructor;

        const schedule = document.createElement("p");
        schedule.textContent = yogaClass.schedule;

        const button = document.createElement("a");
        button.textContent = "Book Your Free Session";
        button.dataset.classId = yogaClass.id;
        button.classList.add("book-button");
        
        button.addEventListener("click", function() {
            localStorage.setItem("selectedClass", yogaClass.id);
            window.location.href = "index.html#free-session"; 
        });


        card.appendChild(image);
        card.appendChild(details);
        details.appendChild(name);
        details.appendChild(descr);
        details.appendChild(level);
        details.appendChild(duration);
        details.appendChild(instructor);
        details.appendChild(schedule);
        card.appendChild(button);

        document.querySelector("#classesContainer").appendChild(card);

    });

    console.log("✅ Class cards added:", container.innerHTML);
}



function createSelectOption(classes) {
    const yogaClassSelect = document.getElementById("yogaClassSelect");


    if (!yogaClassSelect) {
        console.error("Element with ID 'yogaClassSelect' not found!");
        return;
    }


    // Clear existing options before adding new ones
    yogaClassSelect.innerHTML = '<option value="">Choose a class...</option>';


    classes.forEach(yogaClass => {
        const option = document.createElement("option");
        option.value = yogaClass.id;
        option.textContent = yogaClass.className;
        yogaClassSelect.appendChild(option);
    });

    console.log("✅ Select options added:", yogaClassSelect.innerHTML);
} 

