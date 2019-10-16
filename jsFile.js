function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';

    // loop over each row in the grid
    for (let i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        // loop for each cell
        for (let p = 0; p < width; p++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + p + '"></td>';
        }
        grid += '</tr>';
    }
    // add the grid into table element
    table.innerHTML = grid;

    // add click event to grid cells after the table grid has been created
    addClickEventToCells();
}

// gets values for height and width from form to call makeGrid()
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

// add click events to all the cells
function addClickEventToCells() {
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}


// when form is submitted #sizeSelector:
document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};

// Build a default 12x12 grid.
makeGrid(12, 12);
