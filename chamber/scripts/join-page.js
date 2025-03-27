


const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#modal-content");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#modal-content div");

openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `<h3>NP Membership - Benefits</h3>
            <p>No fee required. Benefits include:
                <ul>
                    <li>Access to free webinars and resources</li>
                    <li>Increased visibility in our Non-Profit Spotlight section</li>
                    <li>Participation in community events</li>
                </ul>
            </p>`
        });
openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `<h3>Bronze Membership - Benefits</h3>
            <p>For just $50/year, you get:
                <ul>
                    <li>Discounts on events and workshops</li>
                    <li>Featured in our "Bronze Partners" section</li>
                    <li>Access to special networking opportunities</li>
                </ul>
            </p>`
        });
openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `<h3>Silver Membership - Benefits</h3>
            <p>For $100/year, you enjoy:
                <ul>
                    <li>Priority event registration</li>
                    <li>Increased exposure on our homepage</li>
                    <li>Free access to premium online training</li>
                </ul>
            </p>`
        });
openButton4.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `<h3>Gold Membership - Benefits</h3>
            <p>For $200/year, Gold Members get:
                <ul>
                    <li>Exclusive event invitations and VIP access</li>
                    <li>Spotlight placement on the homepage</li>
                    <li>Free advertisement in our newsletters</li>
                </ul>
            </p>`
        });

closeButton.addEventListener("click", () => {
    dialogBox.close();
});

