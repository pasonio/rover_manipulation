let assert = require('assert');
let magick = require('../components/magick.js');

describe('MagickClass -> getRovers', function(){
    it('should give an output of the rovers', function(){
        const magickClass = new magick.MagickClass(['5 5', '1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM'])

        assert.deepEqual(
            magickClass.getRovers(),
            [
                {
                    start: [ '1', '2', 'N' ],
                    move: [ 'L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M' ]
                },
                {
                    start: [ '3', '3', 'E' ],
                    move: [ 'M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M' ]
                }
            ]
        )
    });
});

describe('MagickClass -> getRovers', function(){
    it('should give an output of the rovers', function(){
        const magickClass = new magick.MagickClass(['5 5'])

        assert.deepEqual(
            magickClass.getRovers(),
            []
        )
    });
});


describe('MagickClass -> getRovers', function(){
    it('should give an output of the rovers', function(){
        const magickClass = new magick.MagickClass(['5 5', '1 2 N', 'MM'])

        assert.deepEqual(
            magickClass.getRovers(),
            [
                {
                    start: [ '1', '2', 'N' ],
                    move: [ 'M', 'M' ]
                }
            ]
        )
    });
});

describe('MagickClass -> getGridSize', function() {
    it('should return the grid size and something', function() {
        const magickClass = new magick.MagickClass(['5 5', '1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM']);

        assert.deepEqual(
            magickClass.getGridSize(),
            {
                rows: 5,
                cols: 5,
                render: {
                    placeholder: '#some_grid_container'
                }
            }
        )
    })
});