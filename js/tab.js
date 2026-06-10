// tab js
const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector(".faq-icon");

    content.classList.toggle("grid-rows-[0fr]");
    content.classList.toggle("grid-rows-[1fr]");
    content.classList.toggle("opacity-0");
    content.classList.toggle("opacity-100");

    icon.classList.toggle("rotate-180");
  });
});
