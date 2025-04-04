

document.addEventListener("DOMContentLoaded", function() {
    const messageBox = document.getElementById("messageBox");
    const messageContent = document.getElementById("messageContent");
    const closeBtn = document.getElementById("closeBtn");

    let lastVisit = localStorage.getItem("lastVisit");
    const currentTime = Date.now();

    if (!lastVisit) {
        messageContent.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = parseInt(lastVisit, 10);
        const timeDifference = currentTime - lastVisitTime;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            messageContent.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysDifference === 1 ? "day" : "days";
            messageContent.textContent = `You last visited ${daysDifference} ${dayText} ago.`;
        }
    }

    // Update last visit time
    localStorage.setItem("lastVisit", currentTime);

    // Close message on button click
    closeBtn.addEventListener("click", function() {
        messageBox.style.opacity = "0"; // Fade out effect
        setTimeout(() => messageBox.style.display = "none", 500); // Hide after animation
    });
});