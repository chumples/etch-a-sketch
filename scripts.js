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
    cell.addEventListener('mouseover', changeColor);
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



/*cell.addEventListener('mouseover',
e => e.target.ClassList.add('my-color-class'))*/

/*cell.addEventListener('mouseover', 
e => e.target.classList.add('my-colour-class')
)*/

/*function makeGrid () {
    for (let i= 0; i < 16; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < 16; j++) {
        let box = document.createElement('div');
        box.className = 'box';
        row.appendChild(box);
    }
    document.querySelector('#container').appendChild(row);
    }
}*/