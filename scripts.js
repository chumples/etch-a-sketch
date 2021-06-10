const container = document.getElementById("container");


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.classList = 'grid-element';
    cell.addEventListener('mouseover', changeColor);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(100, 100);

function scaleBasedOnWindow(container, scale=1, fit=true){
    if(!fit){
        container.style.transform='scale('+scale/Math.min(container.clientWidth/window.innerWidth,container.clientHeight/window.innerHeight)+')';
    }else{
        container.style.transform='scale('+scale/Math.max(container.clientWidth/window.innerWidth,container.clientHeight/window.innerHeight)+')';
    }
}

function changeColor(e) {
e.target.style.backgroundColor = 'red';
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