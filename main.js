const display = document.querySelector('input');
const numberBtn = document.querySelectorAll('.number');
const clear = document.querySelector('.all-clear');

// number button click event handler
numberBtn.forEach(button => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerText;
    display.value += value;
  })
});

// display all clear
clear.addEventListener('click', () => {
  display.value = '';
})