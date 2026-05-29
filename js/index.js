const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-y-full");
    overlay.classList.remove("hidden");
});

function closeMenu() {
    mobileMenu.classList.add("-translate-y-full");
    overlay.classList.add("hidden");
}

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);