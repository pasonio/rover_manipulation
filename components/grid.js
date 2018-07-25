import {Cell} from './cell.js';

function Grid( config ) {
    this.grid = [];
    this.cells = [];
    this.rowsCount = config.rows;
    this.colsCount = config.cols;
    this.rows = [];
    this.cols = [];
    if (config.render) {
        this.placeholder = config.render.placeholder;
        this.render();
    }
}
Grid.prototype = {
    createCell: function( config ) {
        return new Cell(config);
    },
    getCellAt: function( x, y ) {
        if (!this.grid[y]) {
            console.warn("No such Y coordinate: %i (grid size is: x[%i], y[%i])", y, this.colsCount, this.rowsCount);
            return false;
        }
        if (!this.grid[y][x]) {
            console.warn("No such X coordinate: %i (grid size is: x[%i], y[%i])", x, this.colsCount, this.rowsCount);
            return false;
        }
        return this.grid[y][x];
    },
    render: function( options ) {
        if (options && options.placeholder) {
            this.placeholder = options.placeholder;
        }
        this.$placeholder = this.placeholder;
        if (!this.placeholder || this.$placeholder.length === 0) {
            console.error('Placeholder is not present');
            return;
        }
        let i, j, $row, $cell, cell, cellId = 0;
        for (i = 0; i < this.rowsCount; i += 1) {
            this.grid[i] = [];
            let row_el = document.createElement('div');
            row_el.className = 'row';
            $row = this.$placeholder.insertBefore(row_el, null);
            for (j = 0; j < this.colsCount; j += 1) {
                let cell_el = document.createElement('div');
                cell_el.className = 'cell';
                $cell = $row.appendChild(cell_el);
                cell = this.createCell({$element: $cell, x: j, y: i});
                this.grid[i].push(cell);
                this.cells.push(cell);
            }
        }
        // rows
        let self = this;
        this.grid.forEach(function( row ) {
            self.rows.push(row);
        });
    }
};
export {Grid};