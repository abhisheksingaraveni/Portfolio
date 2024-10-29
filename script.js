// Initialize AOS (Animate On Scroll) Library
AOS.init({
    duration: 1000, // Duration of the animation
    easing: 'ease-in-out', // Easing function for the animation
    once: true, // Whether animation should happen only once - while scrolling down
});

// Example: Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
