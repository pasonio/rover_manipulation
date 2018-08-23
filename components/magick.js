class MagickClass {
    constructor(coordinates) {
        this.coordinates = coordinates;
        this.rovers = [];
    }

    getGridSize() {
        let size = this.getGridColumns();
        if(size.length >= 2 ) {
            return {
                rows: size[0],
                cols: size[1],
                render:
                    {
                        placeholder: '#some_grid_container'
                    }
            }
        } else {
            return [];
        }
    }

    getGridColumns(){
        return this.coordinates[0].split(' ');

    }

    getStart(dataArr, i) {
        return dataArr.slice(i, i+1).toString().split(' ')
    }

    getMove(dataArr, i) {
        return dataArr.slice(i+1, i+2).toString().split('')
    }

    getRovers() {
        let positionToSplit = 1;
        let dataArr = this.coordinates.splice(positionToSplit);
        for(let i = 0; i<dataArr.length; i+=2){
            this.rovers.push({
                start: this.getStart(dataArr, i),
                move: this.getMove(dataArr, i)
            });
        }
        return this.rovers;
    }
}

module.exports =  {MagickClass};