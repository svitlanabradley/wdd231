
const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#modal-content");
const closeButton = document.querySelector("#closeButton");

const myKey = "4696fa76bbd4107839741b5d884247ec";
const myLat = "49.85";
const myLong = "24.03";

const myDescr = document.querySelector('#descr');
const myTemp = document.querySelector('#temp');
const myIcon = document.querySelector('#icon');
const myHigh = document.querySelector('#high');
const myLow = document.querySelector('#low');
const mySunrise = document.querySelector('#sunrise');
const mySunset = document.querySelector('#sunset');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=metric&appid=${myKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // Set the icon and other weather details
            const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            myIcon.setAttribute('src', iconSrc);  // Update the src of the icon
            myIcon.setAttribute('alt', data.weather[0].description);  // Update alt text
            return data; // Return the data for use in the button event
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display the weather data
function displayResults(data) {
    myDescr.innerHTML = data.weather[0].description;
    myTemp.innerHTML = `${data.main.temp.toFixed(0)}℃`;  
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myIcon.setAttribute('src', iconsrc);
    myIcon.setAttribute('alt', data.weather[0].description);

    myHigh.innerHTML = `<strong>High:</strong> ${Math.round(data.main.temp_max)}℃`;
    myLow.innerHTML = `<strong>Low:</strong> ${Math.round(data.main.temp_min)}℃`;
    mySunrise.innerHTML = `<strong>Sunrise:</strong> ${formatTime(data.sys.sunrise)}`;
    mySunset.innerHTML = `<strong>Sunset:</strong> ${formatTime(data.sys.sunset)}`;
}

// Format time in a readable way
function formatTime(timestamp) {
    return new Date(timestamp * 1000).toLocaleTimeString('de-DE', { hour: 'numeric', minute: 'numeric' });
}

// Open the modal and fetch weather data when button is clicked
openButton.addEventListener("click", async () => {
    const data = await fetchWeather(); // Fetch the weather data
    if (data) {
        displayResults(data); // Display the data in the modal
        dialogBox.showModal(); // Show the modal
    }
});

// Close the modal when the close button is clicked
closeButton.addEventListener("click", () => {
    dialogBox.close();
});



function formatTime(timestamp) {
    return timestamp ? new Date(timestamp * 1000).toLocaleTimeString('de-DE', {hour: 'numeric', minute: 'numeric'}) : "N/A";
}

fetchWeather();
