(function () {
    function initMobileMenu() {
        const menuBtn = document.getElementById("mobileMenuBtn");
        const mobileMenu = document.getElementById("mobileMenu");
        const mobileClose = document.getElementById("mobileClose");
        const overlay = document.getElementById("mobileOverlay");

        if (!menuBtn || !mobileMenu) return;
        if (menuBtn.dataset.mobileInit === "true" || menuBtn.dataset.mobileMenuBound === "true") return;

        menuBtn.dataset.mobileInit = "true";

        const closeMenu = function () {
            mobileMenu.classList.remove("active");
            if (overlay) overlay.classList.remove("active");
            document.body.style.overflow = "";
        };

        menuBtn.addEventListener("click", function (e) {
            e.preventDefault();
            mobileMenu.classList.add("active");
            if (overlay) overlay.classList.add("active");
            document.body.style.overflow = "hidden";
        });

        if (mobileClose) {
            mobileClose.addEventListener("click", closeMenu);
        }

        if (overlay) {
            overlay.addEventListener("click", closeMenu);
        }

        document.querySelectorAll(".mobile-link").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initMobileMenu, { once: true });
    } else {
        initMobileMenu();
    }
})();