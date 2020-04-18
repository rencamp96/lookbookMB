var imgWidth = window.innerWidth / 100 * 23;
var imgHeight = (imgWidth / 864) * 1296;
var imgWidthMedium = window.innerWidth / 100 * 35;
var imgHeightMedium = (imgWidthMedium / 864) * 1296;
var imgWidthMovil = window.innerWidth / 100 * 55;
var imgHeightMovil = (imgWidthMovil / 864) * 1296;

function preload() {}

function setup() {
	// --------- Center Landing Page Horizontally -----------
	var contentHeight = document.getElementById("cuadroRojo1").offsetHeight;
	var totalHeight = document.documentElement.scrollHeight;
	margin = (totalHeight - (contentHeight / 5 * 6.5)) / 2;
	marginMedium = (totalHeight - (contentHeight / 5 * 9)) / 2;
	marginMovil = (totalHeight - (contentHeight / 5 * 12)) / 2;

	// --------- Center Content Media Queries -----------
	if (window.innerWidth >= 1060) {
		document.getElementById('center').style.top = margin + 'px';
	}
	if (window.innerWidth <= 1060 && window.innerWidth >= 600) {
		document.getElementById('center').style.top = marginMedium + 'px';
	}
	if (window.innerWidth <= 600) {
		document.getElementById('center').style.top = 10 + 'vw';
	}

}

function windowResized() {

	// --------- Center Landing Page Horizontally -----------

	var contentHeight = document.getElementById("cuadroRojo1").offsetHeight;
	var totalHeight = document.documentElement.scrollHeight;
	margin = (totalHeight - (contentHeight / 5 * 6.5)) / 2;
	marginMedium = (totalHeight - (contentHeight / 5 * 9)) / 2;
	marginMovil = (totalHeight - (contentHeight / 5 * 12)) / 2;

	// --------- Center Content Media Queries -----------

	if (window.innerWidth >= 1060) {
		document.getElementById('center').style.top = margin + 'px';
	}
	if (window.innerWidth <= 1060 && window.innerWidth >= 600) {
		document.getElementById('center').style.top = marginMedium + 'px';
	}
	if (window.innerWidth <= 600) {
		document.getElementById('center').style.top = 10 + 'vw';
	}
}