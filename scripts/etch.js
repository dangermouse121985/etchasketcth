let gridContainer = document.querySelector('#grid');
gridContainer.style.display = 'grid';

let gridSize = promptGridSize();
// Create our shared stylesheet:
const sheet = new CSSStyleSheet();
sheet.replaceSync(
        '#grid {grid-template-columns: repeat(' + gridSize + ', 1fr);grid-template-rows: repeat(' + gridSize + ', 1fr);}');

// Apply the stylesheet to a document:
document.adoptedStyleSheets = [sheet];
let gridCell;

for (let i = 0; i <= gridSize*gridSize - 1; i++) {
    gridCell = document.createElement('div'); 
    gridCell.className = 'gridCell';
    gridContainer.appendChild(gridCell);
}

let items = document.querySelectorAll('.gridCell');
items.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'black';
    });
});

document.querySelector('.gridCell').addEventListener('mouseover', function () {
    document.querySelector('.gridCell').style.backgroundColor = 'black';
});

document.querySelector('#clearGrid').addEventListener('click', function() {
    for (let i=0; i < items.length; i++) {
        items[i].style.backgroundColor ='white';
    }
    gridCell.remove();
    gridSize = promptGridSize();
    sheet.replaceSync(
        '#grid {grid-template-columns: repeat(' + gridSize + ', 1fr);grid-template-rows: repeat(' + gridSize + ', 1fr);}');
    
    for (let i = 0; i <= gridSize*gridSize - 1; i++) {
        gridCell = document.createElement('div');
        gridCell.className = 'gridCell';
        gridContainer.appendChild(gridCell);
    }
});

function promptGridSize () {
    let size = prompt('How big do you want the grid (10-100)?');
    if (size >= 10 || size <= 100) {
        return size;
    }
    else{
        size = prompt('How big do you want the grid (10-100)?');
    }
}