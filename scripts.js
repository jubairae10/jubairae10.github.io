// =========================================================
// JAE PORTFOLIO — FRONTEND LOGIC PIPELINE
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efficient Header Scroll Tracking
    const navbar = document.querySelector(".navbar");
    
    const handleNavbarScroll = () => {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = "0 16px 40px rgba(0, 0, 0, 0.4)";
            navbar.style.background = "rgba(6, 9, 14, 0.85)";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.background = "rgba(6, 9, 14, 0.7)";
        }
    };

    window.addEventListener("scroll", handleNavbarScroll, { passive: true });
    handleNavbarScroll(); // Initial execution layer on page load


    // 2. Automated Dynamic Copyright Lifecycle
    const footerText = document.querySelector(".footer-container p");
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.textContent = `© ${currentYear} Jubair Ahmed Efty`;
    }


    // 3. Fluid Section Entrance Observer
    const sections = document.querySelectorAll(".section");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop tracking section instantly once rendered
            }
        });
    }, {
        threshold: 0.10,
        rootMargin: "0px 0px -30px 0px"
    });

    sections.forEach(section => {
        revealObserver.observe(section);
    });

});
