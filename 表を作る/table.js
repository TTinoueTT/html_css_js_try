'use strict'
{
  console.log('connect js');
  // const tds = document.getElementsByTagName('td');
  // // console.log(Array(tds));

  // Array.prototype.forEach.call(tds, function(el) {
  //   console.log(el);
  //   // el.addEventLisner('mouseover', e => {
  //   //   e.classList.add('.pink');
  //   // });
  // });

  const tds = document.querySelectorAll('td');

  for (let i = 0; i < tds.length; i++) {
    const td = tds[i];
    // td.style.backgroundColor = 'pink';

    td.addEventListener('mouseover', e => {
      e.target.style.backgroundColor = 'pink';
    });

    td.addEventListener('mouseout', e => {
      e.target.style.backgroundColor = '';
    });
  }
  // console.log(tds);
  // Array.prototype.forEach.call(tds, (td) => {
  //   console.log(td);
  // });
  // tds.addEventListener('mouseover', (e) => {
  //   console.log(e);
  // });
}