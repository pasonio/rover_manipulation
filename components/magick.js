function MagickClass(request){
    this.coordinates = request.split('\n');
}

MagickClass.prototype = {
    getGridSize: function(){
        let size = this.coordinates[0].split(' ');
        console.log({rows: size[0], cols: size[1],render: {placeholder: document.getElementById('grid')}});
    },
    getRovers: function() {
        let rovers = [];
        for(let i = 0; i<=this.coordinates.length; i+=2){
            let start = this.coordinates.slice(i, i+1).toString();
            let move = this.coordinates.slice(i+1, i+2).toString();
            rovers.push({
                start: start.split(' '),
                move: move.split('')
            });
        }
        rovers.pop();

        console.log(rovers);
    }
};

export {MagickClass};