const counters = document.querySelectorAll(".counter");
const section = document.querySelector("#stats-section");
let started = false;
const startCounter = () => {
    if (started) return;
    started = true;
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = target / 100;
        const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.innerText = Math.floor(count).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        updateCounter();
    });
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter();
        }
    });
}, {
    threshold: 0.4
});
observer.observe(section);
