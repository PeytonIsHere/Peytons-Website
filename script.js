// script.js
var scrollTimer; // Declare a variable to store the scroll timer

// Function to handle scroll events
function handleScroll() {
    var navbar = document.querySelector(".navbar");

    // Change background color and opacity when scrolling
    if (window.scrollY > 20) {
        navbar.style.opacity = "0.3";
    } else {
        navbar.style.opacity = "0.9";
    }

    // Clear the previous scroll timer and start a new one
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function() {
        navbar.style.opacity = "0.9";
    }, 500); // Adjust the delay (in milliseconds) as needed
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
