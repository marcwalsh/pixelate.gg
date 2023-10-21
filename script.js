window.addEventListener('scroll', function() {
    const gifs = document.querySelectorAll('.gif');
    const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;

    // Hide all GIFs initially
    gifs.forEach(gif => gif.classList.remove('active'));

    // Determine which GIF to show based on scrollPercentage
    if (scrollPercentage <= 0.5) { // First half of the page
        gifs[0].classList.add('active');
    } else if (scrollPercentage > 0.5 && scrollPercentage <= 1) { // Second half of the page
        gifs[1].classList.add('active');
    }
    // Continue with similar conditions for more GIFs
});
