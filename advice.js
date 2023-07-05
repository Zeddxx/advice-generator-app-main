const adviceBtn = document.querySelector(".advice-btn");
const adviceText = document.getElementById("advice");
const adviceNumber = document.getElementById("advice-number");


adviceBtn.addEventListener("click", getAdvice);

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceNumber.textContent = `#${data.slip.id}`;
      adviceText.textContent = `“${data.slip.advice}”`;
    })
    .catch((error) => {
      adviceText.textContent = "“An error occurred while fetching advice.”";
      console.error(error);
    });
}
