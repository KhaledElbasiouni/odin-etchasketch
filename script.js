'use strict';

let numSquares = Number(prompt("How big do you want this grid? (Eg. 16 = 16x16) \n*MAX: 100 x 100\n**No negative numbers", ""));
numSquares = (numSquares === 0) ? 16 : (numSquares > 100) ? 100 : numSquares;
const sqSize = Math.floor(1000/numSquares) + 1;
console.log(sqSize);
const gridContainer = document.querySelector('.grid-container');
for(let i = 0; i < numSquares; i++){
    let rowContainer = document.createElement('div');
    rowContainer.classList.add('grid-row');
    for(let j = 0; j < numSquares; j++){
        let square = document.createElement('div');
        square.classList.add('grid-item');
        rowContainer.appendChild(square);
    }
    gridContainer.appendChild(rowContainer);
}
setDimensions(sqSize);



const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => item.addEventListener('mouseenter', e => {
    e.target.style['background-color'] = 'black';
}));


function setDimensions(size){
    const ss = document.styleSheets[0]; // ss -> styleSheets
    for(let i = 0; i < ss.cssRules.length; i++){
        if(ss.cssRules[i].selectorText === '.grid-item'){
            ss.cssRules[i].style.width = `${size}px`;
            ss.cssRules[i].style.height = `${size}px`;
        }
    }
}