function MagickClass(){
    this.coordinates = ['5 5', '1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM'];
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
        // console.log(obj);
    },
    getRovers: function() {
        let rovers = [];
        let dataArr = this.coordinates.splice(1);
        for(let i = 0; i<dataArr.length; i+=2){
            let start = dataArr.slice(i, i+1).toString();
            let move = dataArr.slice(i+1, i+2).toString();
            rovers.push({
                start: start.split(' '),
                move: move.split('')
            });
        }

        return rovers;
    }
};
let magick = new MagickClass();
console.log('Grid sizes: '+JSON.stringify(magick.getGridSize()));
console.log('Rovers: '+JSON.stringify(magick.getRovers()));
// export {MagickClass};