// ================================
// JAE PORTFOLIO - JAVASCRIPT
// ================================


// 1. Add a shadow to the navbar when scrolling

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.25)";
    } else {
        navbar.style.boxShadow = "none";
    }
});


// 2. Highlight the current year automatically

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent = `© ${year} Jubair Ahmed Efty`;
}


// 3. Reveal sections as they enter the screen

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});
