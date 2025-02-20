document.addEventListener("DOMContentLoaded", function () {
    // Toggle menu functionality
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Hover effect for project images
    document.querySelectorAll(".project").forEach((project) => {
        project.addEventListener("mouseenter", function () {
            this.querySelector(".project-overlay").classList.add("visible");
        });

        project.addEventListener("mouseleave", function () {
            this.querySelector(".project-overlay").classList.remove("visible");
        });
    });
});
