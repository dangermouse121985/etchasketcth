let gridContainer = document.querySelector('#grid');
gridContainer.style.display = 'grid';

let gridSize = 16;
// Create our shared stylesheet:
const sheet = new CSSStyleSheet();
sheet.replaceSync(
        '#grid {grid-template-columns: repeat(' + gridSize + ', 1fr);grid-template-rows: repeat(' + gridSize + ', 1fr);}');

// Apply the stylesheet to a document:
document.adoptedStyleSheets = [sheet];

for (let i = 0; i <= gridSize*gridSize - 1; i++) {
    let gridCell = document.createElement('div');
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
});