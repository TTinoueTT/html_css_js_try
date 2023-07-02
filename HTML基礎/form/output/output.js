'use strict'

{
  console.log('hello');
  const input = document.querySelectorAll('.form__control_molratio');
  const log = document.getElementById('sum_value');

  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('input', updateValue);
    function updateValue(e) {
    log.textContent = e.target.value;
    }
  }
  // input.addEventListener('input', updateValue);
  // function updateValue(e) {
  //   log.textContent = e.target.value;
  // }
}