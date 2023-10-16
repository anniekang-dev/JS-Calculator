const display = document.querySelector('input');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.all-clear');
const del = document.querySelector('.delete');
const decimal = document.querySelector('.decimal');

let operatorOn = '';
let previousNum = '';
let resentNum = '';
let result = null;
let withDot = false;

// number button click event handler
numbers.forEach(number => {
  number.addEventListener('click', (e) => {
    let value = e.target.innerText;
    if (value === '.' && !withDot){
      withDot = true;
    } else if (value === '.' && withDot){
      return;
    }
    resentNum += value;
    display.value = resentNum;
  })
});

// operator button click event handler
operators.forEach(button => {
  button.addEventListener('click', (e) => {
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
  previousNum = '';
  operatorOn = '';
  resentNum = '';
});