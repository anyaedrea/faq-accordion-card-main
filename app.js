const answers = document.querySelectorAll(".answer");
const faqItems = document.querySelectorAll(".faq-item");
for (let answer of answers) {
  answer.style.display = "none";
}

for (let item of faqItems) {
  item.addEventListener("click", function () {
    const prevSelected = document.querySelector(".selected");
    if (prevSelected) {
      prevSelected.classList.remove("selected");
      prevSelected.querySelector(".answer").style.display = "none";
    }
    if (this !== prevSelected) {
      this.classList.add("selected");
      this.querySelector(".answer").style.display = "block";
    }
  });
}
