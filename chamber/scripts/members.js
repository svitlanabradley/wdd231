

if (!window.membersScriptLoaded) {
    window.membersScriptLoaded = true;



const url = "data/members.json";
const cards = document.querySelector("#cards");
const spotlight = document.querySelector("#spotlight");

// Fetch and display members
async function getMembersData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // const isHomePage = document.body.classList.contains('home-page');
    if (cards) displayMembers(data.members); // Only runs on Directory page
    if (spotlight) displaySpotlights(data.members); // Only runs on Home page
  } catch (error) {
    console.error("Failed to load member data:", error);
  }
}

// Generate a member card
const createMemberCard = (member) => `
  <section class="member-card">
    <h3 class="member-name">${member.name}</h3>
    <div class="divider"></div>
    <div class="info">
      <img src="${member.imageurl}" alt="Logo of ${member.name}" width="100" height="100">
      
      <div>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p>${member.level}</p>     
        <a href="${member.website}" target="_blank">${member.website}</a>
      </div>
    
      </div>
  </section>
    
`;

// Display all members (Directory page)
const displayMembers = (members) => {
  cards.innerHTML = members.map(createMemberCard).join("");
};

// Randomly select spotlight members (Home page)
const displaySpotlights = (members) => {
  const spotlightMembers = members.filter(
    (member) => member.level === "Gold" || member.level === "Silver"
  );

  const shuffled = spotlightMembers.sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 3); // Always select exactly 3 members

  spotlight.innerHTML = selected.map(createMemberCard).join("");
};

// Initialize
getMembersData();

}


