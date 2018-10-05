
class GrassEater {
    constructor(x,y,index) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.index = index;
    }
    
    chooseCell(character){
        this.getNewCoordinates();
        var found=[];
        for(var i in this.directions){
            var x=this.directions[i][0];
            var y=this.directions[i][1];
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
                if(matrix[y][x]==character){
                    found.push(this.directions[i]);
                }
            }
            
        }
        return found;
    }

    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
	        [this.x    , this.y - 1],
	        [this.x + 1, this.y - 1],
    	    [this.x - 1, this.y    ],
    	    [this.x + 1, this.y    ],
    	    [this.x - 1, this.y + 1],
    	    [this.x    , this.y + 1],
    	    [this.x + 1, this.y + 1]
        ];
    }

    move(){
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        
        if(newCell){

            matrix[this.y][this.x]=0;

            matrix[newCell[1]][newCell[0]] = 2;
            this.x=newCell[0];
            this.y=newCell[1];

            this.energy--;
            if(this.energy<=0){
                this.die();
            }

        }
        
    }

    eat(){
        var grasses = this.chooseCell(1);
        var grass = random(grasses);
        
        if(grass){

            matrix[this.y][this.x]=0;
            matrix[grass[1]][grass[0]] = 2;
            this.x=grass[0];
            this.y=grass[1];
            
            for (var i in grassArr) {
                if (grass[0] == grassArr[i].x && grass[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            this.energy++;
            if(this.energy>=10){
                this.mul();
            }
            

        }
        else{
            this.move();
        }
    }

    mul(){
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        
        if(newCell){
            matrix[newCell[1]][newCell[0]] = 2;
            var gre=new GrassEater(newCell[0],newCell[1],this.index)
            grassEaterArr.push(gre);
            this.energy=5;
        }

    }

    die(){
        matrix[this.y][this.x]=0;
        for (var i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
    }


}
