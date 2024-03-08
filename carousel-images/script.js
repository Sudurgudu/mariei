const imageContainer = document.querySelector('.image-container');
    const images = Array.from(document.querySelectorAll('.image-container img'));
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    let currentIndex = 0;

    function showImages(start) {
      images.forEach((img, index) => {
        if (index >= start && index < start + 4) {
          img.parentElement.style.display = 'inline-block';
        } else {
          img.parentElement.style.display = 'none';
        }
      });
    }

    showImages(0);

    leftArrow.addEventListener('click', () => {
      currentIndex = (currentIndex - 4 + images.length) % images.length;
      showImages(currentIndex);
    });

    rightArrow.addEventListener('click', () => {
      currentIndex = (currentIndex + 4) % images.length;
      showImages(currentIndex);
    });
