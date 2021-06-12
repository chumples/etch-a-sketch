const container = document.getElementById('container');
const changeSizeBtn = document.getElementById('changeSizeBtn');
const clearBtn = document.getElementById('clearBtn');

changeSizeBtn.addEventListener('click', changeSize);
clearBtn.addEventListener('click', reset);


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    //cell.classList = 'grid-element';
    cell.style.backgroundColor = 'white';
    cell.addEventListener('mouseover', changeColor);
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    container.appendChild(cell).className = 'grid-item';
    
  };
};

makeRows(16, 16);

function scaleBasedOnWindow(container, scale=1, fit=true){
    if(!fit) {
        container.style.transform='scale('+scale/Math.min(container.clientWidth/window.innerWidth,container.clientHeight/window.innerHeight)+')';
    } else {
        container.style.transform='scale('+scale/Math.max(container.clientWidth/window.innerWidth,container.clientHeight/window.innerHeight)+')';
    }
}
scaleBasedOnWindow();

function changeColor(e) {
e.target.style.backgroundColor = 'red';
}

function changeSize() {
    let newSize = prompt('How many squares per side? 1-100')
    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 100 || Number.isNaN(newSize)) {
            alert('Enter a number from 1-100');
            changeSize();
        } else {
            clearGrid();
            makeRows(newSize, newSize);
        }
        }
    }

function reset() {
    const cell = container.querySelectorAll('div');
    cell.forEach(cell => cell.style.backgroundColor = '#ffffff');
}

function clearGrid() {
    const gridArray = Array.from(container.childNodes)
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}