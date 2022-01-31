// Shrink Header On Scroll
const header = document.querySelector('.header > .container');
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
// Toggle Navbar
const navbarToggler = document.querySelector('.navbar__toggler');
const navbar = document.querySelector('nav.navbar');
navbarToggler.onclick = e => {
	navbarToggler.classList.toggle('open');
	if (navbarToggler.classList.contains('open')) {
		navbar.classList.add('active');
		document.body.classList.add('overlay');
	} else {
		navbar.classList.remove('active');
		document.body.classList.remove('overlay');
	}
};
