document.addEventListener("DOMContentLoaded", function () {
    // Global JavaScript for Your Website

    // Navigation Menu
    const navMenu = document.querySelector(".nav-menu");
    const menuToggle = document.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("open");
    });

    // Contact Form
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);

            // You can add code here to handle form submission, like sending data to a server or displaying a thank-you message.

            // For now, let's just log the form data to the console.
            console.log("Form Data:", formData);
        });
    }

    // Social Media Links
    const socialMediaLinks = document.querySelectorAll(".social-link");

    socialMediaLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const url = this.getAttribute("href");

            // Open social media links in a new tab
            window.open(url, "_blank");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const overlay = document.getElementById("overlay");

    menuButton.addEventListener("click", function () {
        toggleMenu();
    });

    overlay.addEventListener("click", function () {
        toggleMenu();
    });

    function toggleMenu() {
        overlay.style.width = overlay.style.width === "100%" ? "0" : "100%";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const popularVideos = document.getElementById("popular-videos");
    const recentVideos = document.getElementById("recent-videos");
    const likedVideos = document.getElementById("liked-videos");

    popularVideos.addEventListener("mouseenter", function () {
        showDropdown(popularVideos);
    });

    recentVideos.addEventListener("mouseenter", function () {
        showDropdown(recentVideos);
    });

    likedVideos.addEventListener("mouseenter", function () {
        showDropdown(likedVideos);
    });

    function showDropdown(element) {
        const dropdown = element.querySelector(".submenu");
        if (dropdown) {
            dropdown.style.display = "block";
        }
    }
});
