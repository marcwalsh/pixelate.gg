document.addEventListener('DOMContentLoaded', () => {
    let gifs = document.querySelectorAll('.gif-layer .gif');
    let currentGifIndex = 0;

    // Position the GIFs
    let container = document.querySelector('.aspect-ratio-box');
    let gifWidth = container.offsetWidth * (670 / 3000);
    let gifHeight = container.offsetHeight * (600 / 1714);
    let xPos = container.offsetWidth * (1090 / 3000);
    let yPos = container.offsetHeight * (420 / 1714);

    gifs.forEach(gif => {
        gif.style.width = gifWidth + 'px';
        gif.style.height = gifHeight + 'px';
        gif.style.left = xPos + 'px';
        gif.style.top = yPos + 'px';
    });

    // Event listener for scrolling
    window.addEventListener('scroll', () => {
        let scrolled = window.scrollY;
        let windowHeight = window.innerHeight;

        if (scrolled > windowHeight * 0.75 && currentGifIndex < gifs.length - 1) {
            gifs[currentGifIndex].classList.remove('active');
            currentGifIndex++;
            gifs[currentGifIndex].classList.add('active');
        } else if (scrolled < windowHeight * 0.75 && currentGifIndex > 0) {
            gifs[currentGifIndex].classList.remove('active');
            currentGifIndex--;
            gifs[currentGifIndex].classList.add('active');
        }
    });
});
