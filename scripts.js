"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const footerText = document.querySelector(".footer-container p");
    const sections = document.querySelectorAll(".section");

    // Activate reveal animations only after JavaScript is ready.
    document.body.classList.add("js-enabled");

    if (navbar) {
        const handleNavbarScroll = () => {
            const isScrolled = window.scrollY > 20;

            navbar.style.boxShadow = isScrolled
                ? "0 16px 40px rgba(0, 0, 0, 0.4)"
                : "none";

            navbar.style.background = isScrolled
                ? "rgba(6, 9, 14, 0.85)"
                : "rgba(6, 9, 14, 0.7)";
        };

        window.addEventListener("scroll", handleNavbarScroll, {
            passive: true
        });

        handleNavbarScroll();
    }

    if (footerText) {
        footerText.textContent =
            `© ${new Date().getFullYear()} Jubair Ahmed Efty`;
    }

    // Keep all content visible in older browsers without IntersectionObserver.
    if (!("IntersectionObserver" in window)) {
        sections.forEach((section) => {
            section.classList.add("visible");
        });

        return;
    }

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
        sections.forEach((section) => {
            section.classList.add("visible");
        });

        return;
    }

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -30px 0px"
        }
    );

    sections.forEach((section) => {
        revealObserver.observe(section);
    });
});
