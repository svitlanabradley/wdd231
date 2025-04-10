const mainNav = document.querySelector('#animateme');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
});




document.addEventListener("DOMContentLoaded", function () { 
    const selectedClass = localStorage.getItem("selectedClass");
    const select = document.getElementById("yogaClassSelect");

    // Wait until options are populated
    if (selectedClass && select) {
        const interval = setInterval(() => {
            const optionExists = Array.from(select.options).some(opt => opt.value === selectedClass);
            if (optionExists) {
                select.value = selectedClass;
                localStorage.removeItem("selectedClass");
                clearInterval(interval);

                // Optional: scroll to form if coming from another page
                if (window.location.hash === "#free-session") {
                    document.getElementById("free-session")?.scrollIntoView({ behavior: "smooth" });
                }
            }
        }, 100); // check every 100ms
    }

    // Scroll to form when "Book Session" button is clicked
    const bookButton = document.getElementById("bookSessionButton");
    const formSection = document.getElementById("free-session");

    if (bookButton && formSection) {
        bookButton.addEventListener("click", function (event) {
            event.preventDefault();
            formSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Save selected class when a class card's book button is clicked
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("book-button")) {
            const classId = event.target.dataset.classId;
            localStorage.setItem("selectedClass", classId);
        }
    });
});

