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
// counter animation
const statsSection = document.getElementById("statsSection");
const counters = document.querySelectorAll(".counter");

let started = false;

const animateCounters = () => {
  if (started) return;
  started = true;

  counters.forEach((counter) => {
    const target = +counter.dataset.target;
    let current = 0;

    const increment = target / 100;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.innerText = Math.ceil(current);

        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
      }
    });
  },
  {
    threshold: 0.3,
  },
);

observer.observe(statsSection);
// swiper
const testimonialSwiper = new Swiper(".testimonialSwiper", {
  direction: "horizontal",

  loop: true,

  speed: 1000,
  spaceBetween: 40, // gap between cards

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  allowTouchMove: false,
});
// notification swiper
const newsSwiper = new Swiper(".newsSwiper", {
  direction: "vertical",

  slidesPerView: 3,

  spaceBetween: 20,

  loop: true,

  autoplay: {
    delay: 0,
  },
  speed: 5000,
  
  allowTouchMove: false,

  navigation: {
    nextEl: ".news-next",
    prevEl: ".news-prev",
  },
});
// tc /mpd
const tcTab = document.getElementById("tcTab");
const mpdTab = document.getElementById("mpdTab");

const tcContent = document.getElementById("tcContent");
const mpdContent = document.getElementById("mpdContent");

tcTab.addEventListener("click", () => {

    tcContent.classList.remove("hidden");
    mpdContent.classList.add("hidden");

    tcTab.classList.add("bg-teal", "text-white");
    mpdTab.classList.remove("bg-teal", "text-white");

});

mpdTab.addEventListener("click", () => {

    mpdContent.classList.remove("hidden");
    tcContent.classList.add("hidden");

    mpdTab.classList.add("bg-teal", "text-white");
    tcTab.classList.remove("bg-teal", "text-white");

});
