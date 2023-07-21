const burgerBtn = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.navbar');
const navCloseBtn = document.querySelector('.hamburger-close');
const readMore = document.querySelectorAll('.readmore-btn');
const teamBox = document.querySelectorAll('.team-member-wrap');
const expandedRead1 = document.querySelector('.expanded-read1');
const expandedRead2 = document.querySelector('.expanded-read2');
const expandedRead3 = document.querySelector('.expanded-read3');

const closeBtn = document.querySelectorAll('.collapse');

for (let i = 0; i < closeBtn.length; i += 1) {
	closeBtn[i].addEventListener('click', () => {
		console.log('closeButton clicked');

		expandedRead1.classList.remove('readmore-active');
		expandedRead2.classList.remove('readmore-active');
		expandedRead3.classList.remove('readmore-active');

		for (let j = 0; j < readMore.length; j++) {
			readMore[j].style.display = 'block';
		}
	});
}
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
	// const readMoreOne = document.querySelector('.readmore-btn1');
	for (let i = 0; i < readMore.length; i++) {
		readMore[0].addEventListener('click', () => {
			expandedRead1.classList.add('readmore-active');
			readMore[0].style.display = 'none';

			const active = document.querySelector('.readmore-active');

			if (active) {
				for (let i = 0; i < teamBox.length; i += 1) {
					teamBox[i].classList.add('height');
				}
			}
		});

		readMore[1].addEventListener('click', () => {
			expandedRead2.classList.add('readmore-active');
			readMore[1].style.display = 'none';

			const active = document.querySelector('.readmore-active');

			if (active) {
				for (let i = 0; i < teamBox.length; i += 1) {
					teamBox[i].classList.add('height');
				}
			}
		});

		readMore[2].addEventListener('click', () => {
			expandedRead3.classList.add('readmore-active');
			readMore[2].style.display = 'none';

			const active = document.querySelector('.readmore-active');

			if (active) {
				for (let i = 0; i < teamBox.length; i += 1) {
					teamBox[i].classList.add('height');
				}
			}
		});
	}
};

expandProfile();
