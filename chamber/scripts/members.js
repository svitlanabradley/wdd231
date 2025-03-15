const url = 'data/members.json';

const cards = document.querySelector('#cards');

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        card.classList.add("member-card");

        let logo = document.createElement("img");
        let name = document.createElement("p");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");

        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('width', "150");
        logo.setAttribute('height', "150");

        name.textContent = `${member.name}`;
        name.classList.add("member-name");
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);


    });

}


const gridbtn = document.querySelector("#grid");
const listbtn = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbtn.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbtn.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});
