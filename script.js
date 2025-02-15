document.addEventListener("DOMContentLoaded", function () {
    function toggleMobileElements() {
        const screenWidth = window.innerWidth;
        const navbar = document.querySelector(".sticky-header");
        const scrollArrows = document.querySelector(".scroll-arrows");

        if (screenWidth <= 768) { // Adjust breakpoint as needed
            if (navbar) navbar.style.display = "none";
            if (scrollArrows) scrollArrows.style.display = "none";
        } else {
            if (navbar) navbar.style.display = "flex"; // Restore navbar
            if (scrollArrows) scrollArrows.style.display = "flex"; // Restore arrows
        }
    }

    // Run function on page load and window resize
    toggleMobileElements();
    window.addEventListener("resize", toggleMobileElements);
});

// Toggle Menu for Mobile View
function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('active');
}

// Parallax Scrolling Effect
window.addEventListener('scroll', function () {
    const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach((section) => {
        let scrollPosition = window.scrollY;
        section.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
});

function scrollDown() {
    let sections = document.querySelectorAll("section");
    let currentPos = window.scrollY;
    
    for (let section of sections) {
        if (section.offsetTop > currentPos) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
            break;
        }
    }
}

function scrollUp() {
    let sections = document.querySelectorAll("section");
    let currentPos = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop < currentPos) {
            window.scrollTo({
                top: sections[i].offsetTop,
                behavior: "smooth"
            });
            break;
        }
    }
}

