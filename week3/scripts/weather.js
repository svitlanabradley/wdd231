const myCity = document.querySelector('#city');
const myDescr = document.querySelector('#descr');
const myTemp = document.querySelector('#temp');
const myIcon = document.querySelector('#icon');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=4696fa76bbd4107839741b5d884247ec'

async function apiFetch() {
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

apiFetch();

function displayResults(data) {
    myCity.innerHTML = data.name;
    myDescr.innerHTML = data.weather[0].description;
    myTemp.innerHTML = `${data.main.temp}℃`;   
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myIcon.setAttribute('src', iconsrc);
    myIcon.setAttribute('alt', data.weather[0].description);
}