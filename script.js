
// Typed.js Text Animation
// Creates a typing animation inside the element with class "text"
var typed = new Typed(".text", {
    strings: [
        "Full Stack Developer",
        "Frontend Developer",
        "Web Developer"
    ],
    typeSpeed: 100,     // Typing speed
    backSpeed: 100,     // Backspacing speed
    backDelay: 1000,    // Delay before deleting the text
    loop: true          // Repeat the animation infinitely
});


// Scroll to Top on Page Reload
// Ensures the page always starts from the top after refreshing
window.onload = function () {
    window.scrollTo(0, 0);
};

// Active Navigation on Scroll

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});