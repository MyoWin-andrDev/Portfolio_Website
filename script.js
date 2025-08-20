document.addEventListener("DOMContentLoaded", () => {
    // Initialize Vanta.js
    VANTA.GLOBE({
        el: "#bg-VantaJS",
        color: 0x17191F,
        color2 : 0x565656,
        backgroundColor: 0xffffff,
        points: 12.0,
        maxDistance: 22.0,
        spacing: 19.0,
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });
});