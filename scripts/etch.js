let gridContainer = document.querySelector('#gridContainer');
let items;
let gridCell;




makeGrid();


function randomColor () {
    cellRaibow.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}


function makeGrid() {
    
    let grid = document.createElement('div');
    grid.id = 'grid';
    grid.style.display = 'grid';
    gridContainer.appendChild(grid);

    let gridSize;

    let checkGridSize = document.querySelector('#gridLength').value;
    if (checkGridSize >= 10 && checkGridSize <= 100) {
        gridSize = document.querySelector('#gridLength').value;
    }
     
    
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
    let cellColor = 'black';
    let blackButton = document.getElementById('cellBlack');
    let rainbowButton = document.getElementById('cellRainbow');
    let gradientButton = document.getElementById('cellGradient');
    //Set cellColor depending on button click
    blackButton.addEventListener('click', () => {
        cellColor = 'black';
    });

    gradientButton.addEventListener('click', () => {
        cellColor = 'gradient';
        
        if (getComputedStyle(gradientButton).opacity === '1'){
            gradientButton.style.background = 'rgb(207, 207, 207)';
            gradientButton.style.opacity = '0.4'
        }
        else {
            gradientButton.style.background = colorGradient(gradientButton);
        }
    });

    rainbowButton.addEventListener('click', () => {
        cellColor = 'rainbow';
        rainbowButton.style.background = colorRainbow(rainbowButton);
    })

    //Based on cellColor value color cells on mouseover
    let gradientCount;
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            if (cellColor === 'rainbow') {
                colorRainbow(item);
            }
            else if (cellColor === 'black') {
                colorBlack(item);
            }
            else if (cellColor === 'gradient') {
                colorGradient(item);
            }

        });
    });  
}

//Clear Grid of all colors when button is clicked, Make new grid
document.querySelector('#clearGrid').addEventListener('click', function validateGrid() {
    grid.remove();
    checkGridSize = document.querySelector('#gridLength').value;
    if (checkGridSize < 10 || checkGridSize > 100) {
        alert('Grid lenght must be between 10 and 100. Please enter a different number!');
        makeGrid();
    }
    else {
        let gridSize = document.querySelector('#gridLength').value;
        makeGrid();
    }
    
});

function colorRainbow(item){
    item.style.opacity = 1;
    item.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    item.style.className = 'rainbow';
    return;
}

function colorBlack(item){
    item.style.backgroundColor = "black";
    item.style.opacity = 1;
    item.style.className = 'black';
}

function colorGradient(item){
    if (item.style.opacity == parseFloat(1) && item.style.className !== 'gradient') {
        item.style.opacity = 0;
    }
    item.style.backgroundColor = "black";
    item.style.opacity = (parseFloat(item.style.opacity) || 0) + 0.1;
    if (item.style.opacity == 1) {
        item.style.className = 'gradient';
    }
}