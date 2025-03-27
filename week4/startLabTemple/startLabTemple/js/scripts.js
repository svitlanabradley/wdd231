import {temples} from '../data/temples.js'
//console.log(temples)

import {url} from '../data/temples.js'
console.log(url)

//-------- GRAB A REFERENCE TO THE DEVISION WHERE WE DISPLAY THE ITEMS
const showHere = document.querySelector("#showHere")
//GET A REFERENCE TO THE HTML DIALOG ELEMENT 
const myDialog = document.querySelector("#myDialog")
const myTitle = document.querySelector("#myDialog h2")
const myInfo = document.querySelector("#myDialog p")
const myClose = document.querySelector("#myDialog button")
myClose.addEventListener("click", () => myDialog.close())

// ------- LOOP THROUGH THE ARRAY OF JSON ITEMS
function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x);
        const photo = document.createElement("img");
        photo.src = `${url}${x.path}`;
        photo.alt = x.name;

        //Add an event listener to each division on the page
        photo.addEventListener('click', () => showStuff(x));
        showHere.appendChild(photo)
    }) //end loop
} // end function

displayItems(temples)

//POPULATE THE DIALOG WITH INFORMATION WHEN IMAGE IS CLICKED
function showStuff (x) {
    myTitle.innerHTML = x.name
    myInfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`
    myDialog.showModal()
}