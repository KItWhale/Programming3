class Creeper{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.time = 10;
    }

    getNewCoordinates(){
        this.directions = [
            [this.x-3 , this.y-3],
	        [this.x-3, this.y-2],
	        [this.x-3, this.y-1],
    	    [this.x-3, this.y],
    	    [this.x-3, this.y+1],
    	    [this.x-3, this.y+2],
    	    [this.x-3, this.y+3],
            [this.x+3, this.y-3],
            [this.x+3, this.y-2],
	        [this.x+3, this.y-1],
	        [this.x+3, this.y],
    	    [this.x+3, this.y+1],
    	    [this.x+3, this.y+2],
    	    [this.x+3, this.y+3],
    	    [this.x+2, this.y-3],
            [this.x+2, this.y+3],
            [this.x+1, this.y-3],
	        [this.x+1, this.y+3],
	        [this.x, this.y-3],
    	    [this.x, this.y+3],
    	    [this.x-2, this.y-3],
    	    [this.x-2, this.y+3],
    	    [this.x-1, this.y-3],
    	    [this.x-1, this.y+3]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }

    move(){
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        
        if(newCell){

            matrix[this.y][this.x]=0;

            matrix[newCell[1]][newCell[0]] = 9;
            this.x=newCell[0];
            this.y=newCell[1];

            this.time--;

        }
        
    }
}