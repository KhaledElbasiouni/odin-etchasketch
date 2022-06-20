'use strict';
const DEFAULT_SIZE = 16;
const CANVAS_COLOR = '#fff';
let numSquares = Number(prompt("How big do you want this grid? (Eg. 16 = 16x16) \n*MAX: 100 x 100\n**No negative numbers", ""));
numSquares = (numSquares === 0) ? DEFAULT_SIZE : (numSquares > 100) ? 100 : numSquares;

const gridContainer = document.querySelector('.grid-container');

let selectedColor = 'black';
createGrid();
setSquareSize();


const gridItems = document.querySelectorAll('.grid-item');
let mouseDown = false;
gridContainer.onmousedown = () => mouseDown = true;
gridContainer.onmouseup = () => mouseDown = false;


function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return;
        e.target.style['background-color'] = selectedColor;
}

function createGrid(){
    for(let i = 0; i < numSquares; i++){
        let rowContainer = document.createElement('div');
        rowContainer.classList.add('grid-row');
        for(let j = 0; j < numSquares; j++){
            let square = document.createElement('div');
            square.classList.add('grid-item');
            square.addEventListener('mouseover', changeColor);
            square.addEventListener('mousedown', changeColor);
            rowContainer.appendChild(square);
        }
        gridContainer.appendChild(rowContainer);
    }
}

function setSquareSize(){
    const gridContainerStyles = window.getComputedStyle(gridContainer); //gets GridContainer Styles
    let gridContainerDim = gridContainerStyles.getPropertyValue('width');
    gridContainerDim = Number(gridContainerDim.slice(0, gridContainerDim.length -2)); // Removes px
    let sqSize = gridContainerDim/numSquares;
    setDimensions(sqSize);
}
function setDimensions(size){
    const ss = document.styleSheets[0]; // ss -> styleSheets
    for(let i = 0; i < ss.cssRules.length; i++){
        if(ss.cssRules[i].selectorText === '.grid-item'){
            ss.cssRules[i].style.width = `${size}px`;
            ss.cssRules[i].style.height = `${size}px`;
        }
    }
}