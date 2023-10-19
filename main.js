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
    resentNum += value;
    display.value = resentNum;
  })
});

// // operator button click event handler
// operators.forEach(operator => {
//   operator.addEventListener('click', (e) => {
//     if(!resentNum) result;
//     withDot = false;
//     const operatorName = value;
//     if(resentNum && previousNum && operatorOn) {
//       mathOperator();
//     }else {
//       result = parseFloat(resentNum);
//     }
//   })
// });
 
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
});

// display all clear
clear.addEventListener('click', () => {
  display.value = '0';
  previousNum = '';
  operatorOn = '';
  resentNum = '';
  result = '';
});