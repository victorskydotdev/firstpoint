const burgerBtn = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.navbar');
const navCloseBtn = document.querySelector('.hamburger-close');
const readMore = document.querySelectorAll('.readmore-btn');

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

const expandProfile = () => {
	const readMoreOne = document.querySelector('.readmore-btn1');
	for (let i = 0; i < readMore.length; i++) {
		readMore[0].addEventListener('click', () => {
			const expandedRead1 = document.querySelector('.expanded-read1');

			expandedRead1.classList.add('readmore-active');
			readMore[0].style.display = 'none';

			const active = document.querySelector('.readmore-active');

			if (active) {
				const profileBox = document.querySelectorAll('.profile');

				for (let i = 0; i < profileBox.length; i += 1) {
					profileBox[0].classList.add('height');
				}
			}
		});

		readMore[1].addEventListener('click', () => {
			const expandedRead2 = document.querySelector('.expanded-read2');

			expandedRead2.classList.add('readmore-active');
			readMore[1].style.display = 'none';
		});

		readMore[2].addEventListener('click', () => {
			const expandedRead3 = document.querySelector('.expanded-read3');

			expandedRead3.classList.add('readmore-active');
			readMore[2].style.display = 'none';
		});
	}
};

expandProfile();
