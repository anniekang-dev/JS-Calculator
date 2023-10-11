const display = document.querySelector('input');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.all-clear');
const del = document.querySelector('.delete');
const decimal = document.querySelector('.decimal');

// number button click event handler
numbers.forEach(button => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerText;
    display.value += value;
  })
});

// operator button click event handler
operators.forEach(button => {
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
  display.value = value;
});

