let gridContainer = document.querySelector('#gridContainer');
gridContainer.style.display = 'grid';

let gridSize = 16;
// Create our shared stylesheet:
const sheet = new CSSStyleSheet();
sheet.replaceSync(
        '#gridContainer {grid-template-columns: repeat(' + gridSize + ', 1fr);grid-template-rows: repeat(' + gridSize + ', 1fr);}');

// Apply the stylesheet to a document:
document.adoptedStyleSheets = [sheet];

for (let i = 0; i <= gridSize*gridSize; i++) {
    let gridCell = document.createElement('div');
    gridCell.className = 'gridCell';
    gridContainer.appendChild(gridCell);
}