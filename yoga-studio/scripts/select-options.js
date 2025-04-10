// Fetch and display yoga classes in select field
async function fetchClasses() {
    try {
      const response = await fetch('data/yoga-classes.json'); // Path to your JSON file
      const data = await response.json();
  
      const yogaClassSelect = document.getElementById("yogaClassSelect");

      if (!yogaClassSelect) {
        console.error("Element with ID 'yogaClassSelect' not found!");
        return;
    }

      // Clear existing options before adding new ones
      yogaClassSelect.innerHTML = '<option value="">Choose a class...</option>';
      data.classes.forEach(yogaClass => {
        const option = document.createElement("option");
        option.value = yogaClass.id;
        option.textContent = yogaClass.className;
        yogaClassSelect.appendChild(option);
    });
  
    } catch (error) {
      console.error('Error fetching class data:', error);
    }
  }
  
  // Call the function to load data
  fetchClasses();


  