function Rovers(config) {
    this.rovers = [];
    this.coordinates = config.coordinates;
    this.getRoversPosition();
}

Rovers.prototype = {
    getRoversPosition: function(){
        for(let i = 0; i<=this.coordinates.length; i+=2){
            let start = this.coordinates.slice(i, i+1).toString();
            let move = this.coordinates.slice(i+1, i+2).toString();
            this.rovers.push({
                start: start.split(' '),
                move: move.split('')
            });
        }
        this.rovers.pop();
    },
    placeRovers: function(grid){
        this.rovers.forEach(function(rover){
            grid.getCellAt(rover.start[0], rover.start[1]).$el.style.background = 'red';
        });
    },
    moveRovers: function(){
        this.rovers.forEach(function(rover){

        });
        // move.forEach(function(direction){
        //     switch(direction){
        //         case 'L':
        //
        //     }
        //
        // })
    }
};

export{Rovers};