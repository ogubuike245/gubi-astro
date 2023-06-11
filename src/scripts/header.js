const hamburgerWrapper = document.querySelector(".hamburger");
const mobileDisplay = document.querySelector(".mobile-view");

hamburgerWrapper.addEventListener("click", () => {
  mobileDisplay.classList.toggle("visible");
  const lines = hamburgerWrapper.querySelectorAll(".line");

  lines.forEach((line, index) => {
    if (index === 1) {
      line.classList.toggle("vanish");
    } else {
      line.classList.toggle("rotate");
    }
  });
});
