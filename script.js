'use strict';
const DEFAULT_SIZE = 16;
const CANVAS_COLOR = '#fff';
const DEFAULT_MODE = 'pen';
let numSquares = Number(prompt("How big do you want this grid? (Eg. 16 = 16x16) \n*MAX: 100 x 100\n**No negative numbers", ""));
numSquares = (numSquares === 0) ? DEFAULT_SIZE : (numSquares > 100) ? 100 : numSquares;

const gridContainer = document.querySelector('.grid-container');

let selectedColor = 'black';
let currMode = DEFAULT_MODE;
createGrid();
const gridItems = document.querySelectorAll('.grid-item');
setSquareSize();


const penBtn = document.querySelector('.pen-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const clearBtn = document.querySelector('.clear-btn');

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;
penBtn.onclick = () => setCurrentMode('pen');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraserBtn.onclick = () => setCurrentMode('eraser');
clearBtn.onclick = () => clearGrid();

setCurrentMode(DEFAULT_MODE);

function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    switch (currMode) {
        case 'pen':
            e.target.style['background-color'] = selectedColor;
            break;
        case 'rainbow':
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            e.target.style['background-color'] = `rgb(${r}, ${g}, ${b})`;
            break;
        case 'eraser':
            e.target.style['background-color'] = CANVAS_COLOR;
            break;
    }
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

function clearGrid(){
    gridItems.forEach(item => item.style['background-color'] = CANVAS_COLOR);
}

function setSquareSize(){
    const gridContainerStyles = window.getComputedStyle(gridContainer); //gets GridContainer Styles
    let gridContainerDim = gridContainerStyles.getPropertyValue('width');
    gridContainerDim = Number(gridContainerDim.slice(0, gridContainerDim.length -2)); // Removes px
    let sqSize = gridContainerDim/numSquares;
    setDimensions(sqSize);
}
function setDimensions(size){
    gridItems.forEach(item => item.style.cssText = `width: ${size}px; height: ${size}px;`);
}

function setCurrentMode(newMode){
    activateButton(newMode);
    currMode = newMode;
}

function activateButton(newMode) {
    if(currMode === 'rainbow'){
        rainbowBtn.classList.remove('active');
    }else if(currMode === 'pen'){
        penBtn.classList.remove('active');
    }else if(currMode === 'eraser'){
        eraserBtn.classList.remove('active');
    }

    if(newMode === 'rainbow') {
        rainbowBtn.classList.add('active');
    }else if(newMode === 'pen'){
        penBtn.classList.add('active');
    }else if(newMode === 'eraser') {
        eraserBtn.classList.add('active');
    }
}
