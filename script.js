

const image01 = "https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
const image02 = "https://media.istockphoto.com/id/1173733636/photo/three-zebras.jpg?s=612x612&w=0&k=20&c=lhYWP5XkeiCWeOlG6lDHa37amGrG7W_fZFvmhV-kIyU="
const image03 = "https://media.istockphoto.com/id/893392506/photo/capturing-all-the-beauty-of-nature.jpg?s=170667a&w=0&k=20&c=NfVx2rIl17TszybLhDC2OWgaCJFXDh4wUqZLCNssZ-0="
const image04 = "https://media.istockphoto.com/id/671331140/photo/woman-photographing-outdoor.jpg?s=170667a&w=0&k=20&c=aU4kB2FFm-J27_tgQD_OP-4wr_sYm17_WFfM-AufP38="
const imageSources = [image01, image02, image03, image04];


const imageElement = document.getElementById("image");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;


function displayImage() {
    imageElement.src = imageSources[currentIndex];
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    displayImage();
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    displayImage();
}

previousBtn.addEventListener("click", showPreviousImage);
nextBtn.addEventListener("click", showNextImage);

setInterval(showNextImage, 1500);
