const mainNav = document.querySelector('#animateme');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
});






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

