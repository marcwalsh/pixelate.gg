window.addEventListener('scroll', function() {
    const gif1 = document.querySelector('.gif-layer .gif.active');
    if (window.scrollY > 10) {  // Just a small scroll threshold for testing
        gif1.style.display = 'block';
    }
});