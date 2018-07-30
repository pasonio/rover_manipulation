function Rovers(config) {
    this.rovers = config.rovers;
}

Rovers.prototype = {
    placeRovers: function(grid){
        this.rovers.forEach(function(rover){
            grid.getCellAt(rover.start[0], rover.start[1]).$el.style.background = 'red';
        });
    }
};

export{Rovers};