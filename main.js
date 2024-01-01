const display = document.querySelector('input');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.all-clear');
const del = document.querySelector('.delete');
const decimal = document.querySelector('.decimal');

let operatorOn = '';
let previousNum = '';
let resentNum = '';
let pendingNum;
let result = null;
let withDot = false;
display.value='0';

// number button click event handler
numbers.forEach(number => {
  number.addEventListener('click', (e) => {
    let value = e.target.innerText;
    if (value === '.' && !withDot){
      withDot = true;
    } else if (value === '.' && withDot){
      return;
    }
    if (display.value === '0') { 
    }
    resentNum += value;
    display.value = resentNum;
  })
});

// delete button click event handler
del.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
  if (display.value === '') {
    display.value = '0';
  } else {
    previousNum = '';
    operatorOn = '';
    resentNum = '';
    result = '';
  }
  if (display.value === '0') {
    window.location.reload();
  }
});

// display all clear
clear.addEventListener('click', () => {
  window.location.reload();
  display.value = '0';
  previousNum = '';
  operatorOn = '';
  resentNum = '';
  result = '';
});