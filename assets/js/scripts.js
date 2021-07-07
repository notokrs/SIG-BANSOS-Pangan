//index.html
let navbar = document.getElementById("navbar-main");

window.onscroll = function () {
	scroll();
};

function scroll() {
	if (
		document.body.scrollTop > 50 ||
		document.documentElement.scrollTop > 50
	) {
		navbar.classList.add("navbar-solid");
	} else {
		navbar.classList.remove("navbar-solid");
	}
}
