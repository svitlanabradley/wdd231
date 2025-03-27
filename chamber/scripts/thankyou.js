let currentDate = document.getElementById('#timestamp');
currentDate = new Date().toISOString();

const getString = window.location.search;
console.log(getString);
const myInfo = new URLSearchParams(getString);
console.log(myInfo);

document.querySelector("#info").innerHTML = `
<h2>Thank You ${myInfo.get('fname')} ${myInfo.get('lname')} for Registering!</h2><br><p>Below is the information you submitted:</p> 
<p>Your Business Name: ${myInfo.get('organization-name')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Mobile Number: ${myInfo.get('mobile')}</p>
<p>Submitted On: ${currentDate}</p>`