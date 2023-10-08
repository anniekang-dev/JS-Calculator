const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');
const clear = document.querySelector('.all-clear');
const equal = document.querySelector('.equals');

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      let value = e.target.dataset.number;
      input.value += value;
    })
  });