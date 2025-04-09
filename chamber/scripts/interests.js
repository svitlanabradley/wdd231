
import {interests} from "../data/interests.mjs"
console.log(interests)

const cards = document.querySelector("#interests");


// Generate a member card
function displayItems(interests) {
  interests.forEach(interest => {
    //build the card element
    const theCard = document.createElement('div')
    //build the photo element
    const thePhoto =  document.createElement('img')
    thePhoto.src = `${interest.image}`
    thePhoto.alt = interest.name
    thePhoto.loading = "lazy"
    theCard.appendChild(thePhoto)
    //build the title element
    const theTitle = document.createElement('h2')
    theTitle.innerText = interest.name
    theCard.appendChild(theTitle)
    //build the address element
    const theAddress = document.createElement('address')
    theAddress.innerText = interest.address
    theCard.appendChild(theAddress)
    //build the description element
    const theDescr = document.createElement('p')
    theDescr.innerText = interest.description
    theCard.appendChild(theDescr)
    //build the button element
    const theButton = document.createElement('button')
    theButton.innerText = `Learn More`
    theCard.appendChild(theButton)

    cards.appendChild(theCard)
  })
}

  
//start displaying all items in the JSON fole
displayItems(interests);


