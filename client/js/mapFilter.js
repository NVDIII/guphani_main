const openButton = document.getElementById("open");
const wholedayButton = document.getElementById("wholeday");
const holydayButton = document.getElementById("holyday");
const everythingButton = document.getElementById("everything");

openButton.addEventListener("click", () => {
  openButton.classList.add("active");
  wholedayButton.classList.remove("active");
  holydayButton.classList.remove("active");
  everythingButton.classList.remove("active");
});

wholedayButton.addEventListener("click", () => {
  openButton.classList.remove("active");
  wholedayButton.classList.add("active");
  holydayButton.classList.remove("active");
  everythingButton.classList.remove("active");
});

holydayButton.addEventListener("click", () => {
  openButton.classList.remove("active");
  wholedayButton.classList.remove("active");
  holydayButton.classList.add("active");
  everythingButton.classList.remove("active");
});

everythingButton.addEventListener("click", () => {
  openButton.classList.remove("active");
  wholedayButton.classList.remove("active");
  holydayButton.classList.remove("active");
  everythingButton.classList.add("active");
});
