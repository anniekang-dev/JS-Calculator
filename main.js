const display = document.querySelector('input');
const number = document.querySelectorAll('.number');
const clear = document.querySelector('.all-clear');
const del = document.querySelector('.delete');
const decimal = document.querySelector('.decimal');

// number button click event handler
number.forEach(button => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerText;
    display.value += value;
  })
});

// delete button click event handler
del.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});

// display all clear
clear.addEventListener('click', () => {
  display.value = '';
});

decimal.addEventListener('click', () => {
  let value = e.target.innerText;
  display.value += value;
});