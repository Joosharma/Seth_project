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