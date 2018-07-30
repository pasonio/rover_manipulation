let grid, rovers;

let magick = new MagickClass("5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM");

import {Grid} from './components/grid.js';
import {Rovers} from './components/rover_manipulation.js';
import {MagickClass} from "./components/magick.js";

// send_coords.addEventListener('click', new MagickClass(coords));

let sizes = magick.getGridSize();

// grid = new Grid(magick.getGridSize());

magick.getRovers();

// rovers = new Rovers(magick.getRovers());

// rovers.placeRovers(grid);


// function sendCoords(){
//     let dimensions, size, coords_list;
//
//     // coords_list = coords.value.split('\n');
//     // size = coords.value.split('\n')[0];
//     // dimensions = {rows: size.split(' ')[0], cols: size.split(' ')[1]};
//
//     grid = new Grid({
//         rows: dimensions.rows,
//         cols: dimensions.cols,
//         render: {
//             placeholder: document.getElementById("grid")
//         }
//     });
//
//     rovers = new Rovers({
//         coordinates: coords_list.splice(1)
//     });
//
//     rovers.placeRovers(grid);
//
// }