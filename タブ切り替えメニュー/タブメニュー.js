'use strict'
{
  const tab_ratio = document.getElementById('raitio-tab');
  const tab_mol = document.getElementById('mol-tab');
  const ratio_data = document.getElementById('raitio_content');
  const mol_data = document.getElementById('mol_content');

  // 原料分析値のタブをクリックした時のイベント
  tab_ratio.addEventListener('click', () => {
    ratio_data.classList.add('blue');
    // if (ratio_data.classList.contains('invisiblebody')){
    //   ratio_data.classList.remove('invisiblebody');
    //   mol_data.classList.add('invisiblebody');
    // }
  });

  // 原料mol値のタブをクリックした時のイベント
  tab_mol.addEventListener('click', () => {
    mol_data.classList.add('yellow');
    // if (mol_data.classList.contains('invisiblebody')){
    //   mol_data.classList.remove('invisiblebody');
    //   ratio_data.classList.add('invisiblebody');
    // }
  });
}