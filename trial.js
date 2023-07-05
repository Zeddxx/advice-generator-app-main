const adviceBtn = document.getElementById('adviceBtn');
const adviceText = document.getElementById('advice');

adviceBtn.addEventListener('click', getAdvice);

function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      adviceText.textContent = data.slip.advice;
    })
    .catch(error => {
      adviceText.textContent = 'An error occurred while fetching advice.';
      console.error(error);
    });
}
