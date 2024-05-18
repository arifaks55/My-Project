// script.js
const counterSpan = document.getElementById('counter');
const increaseButton = document.getElementById('increaseButton');
let counter = 0;

increaseButton.addEventListener('click', () => {
    counter++;
    counterSpan.textContent = counter;
});