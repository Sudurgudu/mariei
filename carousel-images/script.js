const imageContainer = document.querySelector('.image-container');
const images = Array.from(document.querySelectorAll('.image-container img'));
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
let currentIndex = 0;

function showImages(start) {
  const screenWidth = window.innerWidth;
  let visibleCount;

  if (screenWidth <= 480) {
    visibleCount = 1; // Show only one image on phones
  } else if (screenWidth <= 768) {
    visibleCount = 2; // Show two images on tablets
  } else {
    visibleCount = 4; // Show four images on desktops
  }

  images.forEach((img, index) => {
    if (index >= start && index < start + visibleCount) {
      img.parentElement.style.display = 'inline-block';
    } else {
      img.parentElement.style.display = 'none';
    }
  });
}

showImages(0);

leftArrow.addEventListener('click', () => {
  const screenWidth = window.innerWidth;
  let visibleCount;

  if (screenWidth <= 480) {
    visibleCount = 1;
  } else if (screenWidth <= 768) {
    visibleCount = 2;
  } else {
    visibleCount = 4;
  }

  currentIndex = (currentIndex - visibleCount + images.length) % images.length;
  showImages(currentIndex);
});

rightArrow.addEventListener('click', () => {
  const screenWidth = window.innerWidth;
  let visibleCount;

  if (screenWidth <= 480) {
    visibleCount = 1;
  } else if (screenWidth <= 768) {
    visibleCount = 2;
  } else {
    visibleCount = 4;
  }

  currentIndex = (currentIndex + visibleCount) % images.length;
  showImages(currentIndex);
});