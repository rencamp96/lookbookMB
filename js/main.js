function init() {
	var imgWidth = window.innerWidth / 100 * 23;
	var imgHeight = (imgWidth / 864) * 1296;
	var imgWidthMedium = window.innerWidth / 100 * 35;
	var imgHeightMedium = (imgWidthMedium / 864) * 1296;
	var imgWidthMovil = window.innerWidth / 100 * 55;
	var imgHeightMovil = (imgWidthMovil / 864) * 1296;

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

function myFunction() {
	document.getElementById('creditos').style.display = 'inline-block';
	document.getElementById('backlight').style.display = 'inline-block';
};

function myFunction2() {
	document.getElementById('backlight2').style.display = 'inline-block';
	document.getElementById('fashionfilm').style.display = 'inline-block';
	document.getElementById('closebtn_fashionfilm').style.display = 'inline-block';
};

window.addEventListener("load", () => {
	init();
});

window.addEventListener('resize', () => {
	init();
})
