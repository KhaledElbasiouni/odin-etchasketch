'use strict';

const gridContainer = document.querySelector('.grid-container');
let dim = 16; //dimension
for(let i = 0; i < dim; i++){
    let rowContainer = document.createElement('div');
    rowContainer.classList.add('grid-row');
    for(let j = 0; j < dim; j++){
        let square = document.createElement('div');
        square.classList.add('grid-item');
        rowContainer.appendChild(square);
    }
    gridContainer.appendChild(rowContainer);
}

const gridItems = document.querySelectorAll('.grid-item');
// const gridItems = document.querySelectorAll('div');

gridItems.forEach(item => item.addEventListener('mouseenter', e => {
    console.log(e.target);
    e.target.style['background-color'] = 'black';
}));
