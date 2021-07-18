let gridContainer = document.querySelector('#gridContainer');
let items;
let gridCell;

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

makeGrid();


function randomColor () {
    cellRaibow.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}


function makeGrid() {
    
    let grid = document.createElement('div');
    grid.id = 'grid';
    grid.style.display = 'grid';
    gridContainer.appendChild(grid);

    let gridSize = slider.value  
    
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

    let items = document.querySelectorAll('.gridCell');
    let cellColor;
    
    //Set cellColor depending on button click
    document.getElementById('cellBlack').addEventListener('click', () => {
        cellColor = 'black';
    });

    document.getElementById('cellGradient').addEventListener('click', () => {
        cellColor = 'gradient';
    });

    document.getElementById('cellRainbow').addEventListener('click', () => {
        cellColor = 'rainbow';
    })

    //Based on cellColor value color cells on mouseover
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

//Clear Grid of all colors when button is clicked, Make new grid
document.querySelector('#clearGrid').addEventListener('click', function() {
    grid.remove();
    makeGrid();
});