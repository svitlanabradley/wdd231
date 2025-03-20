
const myKey = "4696fa76bbd4107839741b5d884247ec";
const myLat = "49.85"
const myLong = "24.03"

const myDescr = document.querySelector('#descr');
const myTemp = document.querySelector('#temp');
const myIcon = document.querySelector('#icon');
const myHigh = document.querySelector('#high');
const myLow = document.querySelector('#low');
// const myHumidity = document.querySelector('#humidity');
const mySunrise = document.querySelector('#sunrise');
const mySunset = document.querySelector('#sunset');
const forecast = document.querySelector('#forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.85&lon=24.03&units=metric&appid=4696fa76bbd4107839741b5d884247ec'

async function fetchWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
} 

async function fetchForecast() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=49.85&lon=24.03&units=metric&appid=4696fa76bbd4107839741b5d884247ec');
    const data = await response.json();
    const forecastElement = document.getElementById('forecast');

    const dailyData = data.list.filter((reading) => reading.dt_txt.includes('12:00:00')).slice(0, 3);

    dailyData.forEach((day) => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = `${Math.round(day.main.temp)}°C`;
        forecastElement.innerHTML += `
            <div class="forecast-day">
                <span><strong>${dayName}:</strong></span>
                <span>${temp}</span>
            </div>
        `;
    });
}

fetchForecast();
fetchWeather();

function displayResults(data) {
    myDescr.innerHTML = data.weather[0].description;
    myTemp.innerHTML = `${Math.round(data.main.temp)}℃`;   
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myIcon.setAttribute('src', iconsrc);
    myIcon.setAttribute('alt', data.weather[0].description);

    myHigh.innerHTML = `<strong>High:</strong> ${Math.round(data.main.temp_max)}℃`;
    myLow.innerHTML = `<strong>Low:</strong> ${Math.round(data.main.temp_min)}℃`;
    mySunrise.innerHTML = `<strong>Sunrise:</strong> ${formatTime(data.sys.sunrise)}`;
    mySunset.innerHTML = `<strong>Sunset:</strong> ${formatTime(data.sys.sunset)}`;

    const dailyData = data.list.filter((reading) => reading.dt.txt.includes('12:00:00')).slice(0, 3);

    dailyData.forEach((day) => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('de-DE', {weekday: 'short'});
        const temp = `${Math.round(day.main.temp)}°C`;
        forecast.innerHTML += `<div class="forecast-day">
            <span><strong>${dayName}</strong></span>
            <span>${temp}</span>
          </div>
        `;
    });
}

function formatTime(timestamp) {
    return new Date(timestamp * 1000).toLocaleTimeString('de-DE', {hour: 'numeric', minute: 'numeric'});
}