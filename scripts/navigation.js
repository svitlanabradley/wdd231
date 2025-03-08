const mainNav = document.querySelector('.navigation')
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
	
	mainNav.classList.toggle('show');
	hamButton.classList.toggle('show');
});