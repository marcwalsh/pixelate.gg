window.onload = function() {
    const setGifDimensions = () => {
        const imageWidthRendered = document.querySelector('.background-layer img').clientWidth;
        const imageHeightRendered = document.querySelector('.background-layer img').clientHeight;

        const widthScaleFactor = imageWidthRendered / 3000;
        const heightScaleFactor = imageHeightRendered / 1714;

        const gifTopPosition = 420 * heightScaleFactor;
        const gifLeftPosition = 1090 * widthScaleFactor;
        const gifWidth = 670 * widthScaleFactor;
        const gifHeight = 600 * heightScaleFactor;

        const gifs = document.querySelectorAll('.gif-layer .gif');
        gifs.forEach(gif => {
            gif.style.top = gifTopPosition + 'px';
            gif.style.left = gifLeftPosition + 'px';
            gif.style.width = gifWidth + 'px';
            gif.style.height = gifHeight + 'px';
        });
    }

    setGifDimensions();
    window.addEventListener('resize', setGifDimensions);
};
