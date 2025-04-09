
// Fetch and display yoga classes
async function fetchClasses() {
    try {
      const response = await fetch('data/yoga-classes.json'); // Path to your JSON file
      const data = await response.json();
  
      const container = document.getElementById('classesContainer');
      data.classes.forEach((cls) => {
        const card = document.createElement('div');
        card.classList.add('class-card');
  
        card.innerHTML = `
          <img src="${cls.image}" alt="${cls.className}" loading = "lazy" />
          <h2>${cls.className}</h2>
          <p>${cls.description}</p>
          <p class="details"><strong>${cls.level} <br> ${cls.duration} <br> ${cls.instructor} <br> ${cls.schedule}</strong></p>
          <a>Book Your Free Session</a>
          
        `;
  
        container.appendChild(card);
      });
    } catch (error) {
      console.error('Error fetching class data:', error);
    }
  }
  
  // Call the function to load data
  fetchClasses();