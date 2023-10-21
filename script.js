document.addEventListener('DOMContentLoaded', function() {

    // Calculate scale factors based on the rendered image size
    const imageWidthRendered = document.querySelector('.background-layer img').clientWidth;
    const imageHeightRendered = document.querySelector('.background-layer img').clientHeight;

    const widthScaleFactor = imageWidthRendered / 3000;
    const heightScaleFactor = imageHeightRendered / 1714;

    // Calculate the GIFs' position and dimensions
    const gifTopPosition = 420 * heightScaleFactor;
    const gifLeftPosition = 1090 * widthScaleFactor;
    const gifWidth = 670 * widthScaleFactor;
    const gifHeight = 600 * heightScaleFactor;

    // Set GIFs' CSS properties based on calculations
    const gifs = document.querySelectorAll('.gif-layer .gif');
    gifs.forEach(gif => {
        gif.style.top = gifTopPosition + 'px';
        gif.style.left = gifLeftPosition + 'px';
        gif.style.width = gifWidth + 'px';
        gif.style.height = gifHeight + 'px';
    });

    // Handle scroll behavior to determine which GIF to show
    window.addEventListener('scroll', function() {
        const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;

        // Hide all GIFs initially
        gifs.forEach(gif => gif.classList.remove('active'));

        // Determine which GIF to show based on scrollPercentage
        if (scrollPercentage <= 0.5) { // First half of the page
            gifs[0].classList.add('active');
        } else if (scrollPercentage > 0.5 && scrollPercentage <= 1) { // Second half of the page
            gifs[1].classList.add('active');
        }
        // Continue with similar conditions for more GIFs if needed
    });
});
