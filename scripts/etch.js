let gridContainer = document.querySelector('#gridContainer');
let items;
let gridCell;
makeGrid();

function makeGrid() {
    let grid = document.createElement('div');
    grid.id = 'grid';
    grid.style.display = 'grid';
    gridContainer.appendChild(grid);

    let gridSize = promptGridSize();
    // Create our shared stylesheet:
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(
            '#grid {grid-template-columns: repeat(' + gridSize + ', 1fr);grid-template-rows: repeat(' + gridSize + ', 1fr);}');

    // Apply the stylesheet to a document:
    document.adoptedStyleSheets = [sheet];
    

    for (let i = 0; i <= gridSize*gridSize - 1; i++) {
        gridCell = document.createElement('div'); 
        gridCell.className = 'gridCell';
        grid.appendChild(gridCell);
    }

    //Change color of cell to black with mouseover event
    let items = document.querySelectorAll('.gridCell');

    let cellBlack = document.getElementById('cellBlack');
    let cellRainbow = document.getElementById('cellRainbow');
    let cellGradient = document.getElementById('cellGradient');
    let cellColor;
    



    cellBlack.addEventListener('click', () => {
        cellColor = 'black';
    });

    cellGradient.addEventListener('click', () => {
        cellColor = 'gradient';
    });

    cellRainbow.addEventListener('click', () => {
        cellColor = 'rainbow';
    })

    let gradientCount;
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            if (cellColor === 'rainbow') {
                item.style.opacity = 1;
                item.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                item.style.className = 'rainbow';
            }
            else if (cellColor === 'black') {
                item.style.backgroundColor = "black";
                item.style.opacity = 1;
                item.style.className = 'black';
            }
            else if (cellColor === 'gradient') {
                if (item.style.opacity == parseFloat(1) && item.style.className !== 'gradient') {
                    item.style.opacity = 0;
                }
                item.style.backgroundColor = "black";
                item.style.opacity = (parseFloat(item.style.opacity) || 0) + 0.1;
                if (item.style.opacity == 1) {
                    item.style.className = 'gradient';
                }
            }

        });
    });  
}

document.querySelector('#clearGrid').addEventListener('click', function() {
    grid.remove();
    makeGrid();
});

function promptGridSize () {
    let size = prompt('How big do you want the grid (10-100)?');
    while (size < 10 || size > 100) {
        size = prompt('I\'m sorry that number is not valid. How big do you want the grid (10-100)?');
    }
     return size;   
}