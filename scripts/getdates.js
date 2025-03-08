const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `Last Modification: <span>${new Intl.DateTimeFormat(
    	"en-GB",
    	{
    		month: 'numeric', // Month as a number
            day: 'numeric',   // Day as a number
            year: 'numeric',  // Full year
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
    	}
    ).format(today)}</span>`;