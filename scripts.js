const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

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
}

makeGrid(16, 16);*/