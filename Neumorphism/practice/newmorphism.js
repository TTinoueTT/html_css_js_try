'use strict'
window.onload = () => {
  const tds = document.querySelectorAll('td');
  for (let i = 0; i < tds.length; i++) {
    const td = tds[i];
    td.classList.add('depressed');

    // td.addEventListener('mouseover', e => {
    //   e.target.style.backgroundColor = 'pink';
    // });

    // td.addEventListener('mouseout', e => {
    //   e.target.style.backgroundColor = '';
    // });
  }
};