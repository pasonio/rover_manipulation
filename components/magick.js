function MagickClass(){
    this.coordinates = ['5 5', '1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM'];
    // this.directions = [
    //     {name: 'N', value: 0},
    //     {name: 'W', value: 90},
    //     {name: 'S', value: 180},
    //     {name: 'E', value: 270},
    // ];
    this.rovers = [];
}

MagickClass.prototype = {
    getGridSize: function(){
        let size = this.coordinates[0].split(' ');
        return {
            rows: size[0],
            cols: size[1],
            render:
                {
                    placeholder: '#some_grid_container'
                }
        };
    },
    getRovers: function() {
        let dataArr = this.coordinates.splice(1);
        for(let i = 0; i<dataArr.length; i+=2){
            let start = dataArr.slice(i, i+1).toString();
            let move = dataArr.slice(i+1, i+2).toString();
            this.rovers.push({
                start: start.split(' '),
                move: move.split('')
            });
        }

        return this.rovers;
    }
};
// let magick = new MagickClass();
// console.log('Grid sizes: '+JSON.stringify(magick.getGridSize()));
// console.log('Rovers: '+JSON.stringify(magick.getRovers()));
// console.log('Rovers position: '+JSON.stringify(magick.getPosition()));
module.exports =  {MagickClass};