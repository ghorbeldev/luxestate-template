// Shrink Header On Scroll
const header = document.querySelector('.header');
window.onscroll = () => {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		header.classList.add('shrink');
	} else {
		header.classList.remove('shrink');
	}
};
// Toggle Active Menu
