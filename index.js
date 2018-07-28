let coords = document.getElementById('coordinates');
let send_coords = document.getElementById('send_coords');
let grid, rovers;

import {Grid} from './components/grid.js';
import {Rovers} from './components/rover_manipulation.js';

send_coords.addEventListener('click', sendCoords);

function sendCoords(){
    let dimensions, size, coords_list;

    coords_list = coords.value.split('\n');
    size = coords.value.split('\n')[0];
    dimensions = {rows: size.split(' ')[0], cols: size.split(' ')[1]};

    grid = new Grid({
        rows: dimensions.rows,
        cols: dimensions.cols,
        render: {
            placeholder: document.getElementsByClassName("grid")[0]
        }
    });

    rovers = new Rovers({
        coordinates: coords_list.splice(1)
    });

    console.log(rovers);

    rovers.placeRovers(grid);

    this.moveRovers();
}