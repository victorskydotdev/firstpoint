const burgerBtn = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.navbar');
const navCloseBtn = document.querySelector('.hamburger-close');

burgerBtn.addEventListener('click', () => {
	nav.style.display = 'flex';
	burgerBtn.classList.add('hidden');
	navCloseBtn.style.display = 'block';
});

navCloseBtn.addEventListener('click', () => {
	nav.style.display = 'none';
	burgerBtn.classList.remove('hidden');
	navCloseBtn.style.display = 'none';
});
