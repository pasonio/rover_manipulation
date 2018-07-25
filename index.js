let coords = document.getElementById('coordinates');
let send_coords = document.getElementById('send_coords');
let grid;

import {Grid} from './components/grid.js';

send_coords.addEventListener('click', sendCoords);

function sendCoords(){
    let rows, cols, size;

    size = coords.value.split('\n')[0];
    rows = size.split(' ')[0];
    cols = size.split(' ')[1];

    grid = new Grid({
        rows: rows,
        cols: cols,
        render: {
            placeholder: document.getElementsByClassName("grid")[0]
        }
    });
}

// grid.getCellAt(2,1).$el.style.background = 'red';