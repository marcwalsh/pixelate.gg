window.onload = function() {
    // Function to set GIFs' positions and sizes
    const setGifDimensions = () => {
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
    }

    // Set the dimensions upon initial load
    setGifDimensions();

    // Update GIF dimensions upon window resize
    window.addEventListener('resize', setGifDimensions);

    // Check if the page isn't scrollable
    if(document.body.clientHeight <= window.innerHeight) {
        document.body.style.height = '200vh'; // Setting a dummy height for testing purposes
    }

    // Handle scroll behavior to determine which GIF to show
    window.addEventListener('scroll', function() {
        const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
        const gifs = document.querySelectorAll('.gif-layer .gif');

        // Hide all GIFs initially
        gifs.forEach(gif => gif.classList.remove('active'));

        // Determine which GIF to show based on scrollPercentage
        if (scrollPercentage <= 0.5) { // First half of the page
            gifs[0].classList.add('active');
        } else if (scrollPercentage > 0.5) { // Second half of the page
            gifs[1].classList.add('active');
        }
    });
};

function adjustAspectRatio() {
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    let backgroundImg = document.querySelector('.background-layer img');
    let tvImg = document.querySelector('.tv-layer img');

    if (viewportHeight > viewportWidth) {
        // In portrait mode
        backgroundImg.style.width = 'auto';
        backgroundImg.style.height = '100%';

        tvImg.style.width = 'auto';
        tvImg.style.height = '100%';
    } else {
        // In landscape mode
        backgroundImg.style.width = '100%';
        backgroundImg.style.height = '100%';

        tvImg.style.width = '100%';
        tvImg.style.height = '100%';
    }
}

window.addEventListener('resize', adjustAspectRatio);
document.addEventListener('DOMContentLoaded', adjustAspectRatio);