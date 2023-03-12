document.addEventListener("DOMContentLoaded", () => {
  const width = window.innerWidth;
  if (width < 768) {
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",
      centeredSlides: false,
      slidesPerView: "auto",

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
      },
    });
  }
});

let repairedBrandContainer = document.querySelector(
  ".repaired-brands__container"
);
let repairedBrandsButton = document.querySelector(".repaired-brands__button");
repairedBrandsButton.addEventListener("click", function () {
  if (repairedBrandsButton.textContent === "Показать все") {
    repairedBrandContainer.classList.add("repaired-brands__container--open");
    repairedBrandsButton.classList.add("repaired-brands__button--reverse");
    repairedBrandsButton.textContent = "Скрыть";
  } else if (repairedBrandsButton.textContent === "Скрыть") {
    repairedBrandContainer.classList.remove("repaired-brands__container--open");
    repairedBrandsButton.classList.remove("repaired-brands__button--reverse");
    repairedBrandsButton.textContent = "Показать все";
  }
});
