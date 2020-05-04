let carouselWidth = 700; 

let prevButton = document.getElementById('button-previous');
let nextButton = document.getElementById('button-next');
let imageRow = document.getElementById('carousel-image-row');

let imageNum = 0;
checkControls();

function showNextImage() {
	imageNum = imageNum + 1;
	let pixels = "-700";
	imageRow.style.left = pixels * imageNum;
	checkControls();
}


nextButton.onclick = function (){
showNextImage();
}

function showPrevImage() {
	imageNum = imageNum - 1;
	let pixels = "-700";
	imageRow.style.left = pixels * imageNum;
	checkControls();
}

prevButton.onclick = function (){
showPrevImage();
}

let totalImages = document.getElementsByClassName("carousel-image").length;


function checkControls() {
	if (imageNum == 0) {
		prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove("hidden");
	}
	if (imageNum == 8) {
		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove("hidden");
	}
}