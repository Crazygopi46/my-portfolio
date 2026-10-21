// Portfolio interactive script - Gopinath K
document.addEventListener("DOMContentLoaded", () => {
    // Auto-close mobile navbar when a navigation link is clicked
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navCollapse = document.getElementById("mainNav");
    
    if (navLinks && navCollapse && typeof bootstrap !== "undefined") {
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                if (navCollapse.classList.contains("show")) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse);
                    bsCollapse.hide();
                }
            });
        });
    }

    // Active navigation highlight on scroll
    const sections = document.querySelectorAll("section[id]");
    const updateActiveNav = () => {
        const scrollY = window.pageYOffset + 120;
        sections.forEach((section) => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop;
            const sectionId = section.getAttribute("id");
            const navItem = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`);
            
            if (navItem) {
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLinks.forEach((n) => n.classList.remove("active"));
                    navItem.classList.add("active");
                }
            }
        });
    };

    window.addEventListener("scroll", updateActiveNav, { passive: true });
});
