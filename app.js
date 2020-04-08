const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  let correctAns = ["A", "A", "A", "A"];

  let score = 0;
  answers.forEach((answer, index) => {
    if (answer === correctAns[index]) {
      /* incrementing a score for each correct answer */
      score += 25;
    }
    if (score === 75) {
      document.querySelector(".message").textContent = "Almost  there :)";
      document.querySelector(".message").style.color = "white";
    }
    if (score > 75 || score <= 50) {
      document.querySelector(".message").textContent = "";
    }
    if (score === 100) {
      document.querySelector(".message").textContent = "Winner!";
      document.querySelector(".message").style.color = "green";
    }
  });

  form.reset();
  document.querySelector("span").textContent = score;
});
/* Clear button to reset score and message - Almost there! */
document.querySelector(".clear").addEventListener("click", () => {
  document.querySelector("span").textContent = 0;
  document.querySelector(".message").textContent = "";
  scrollTo(0, 0);
});
