
class Predator{
    constructor(x,y,index,ser){
        this.x = x;
        this.y = y;
        this.energy = 50;
        this.index = index;
        this.multiply = 0;
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
        
        var grasses = this.chooseCell(1);
        var grass = random(grasses);

        if(newCell){

            matrix[this.y][this.x]=0;

            matrix[newCell[1]][newCell[0]] = 3;
            this.x=newCell[0];
            this.y=newCell[1];

            this.energy--;
            if(this.energy<=0){
                this.die();
            }

        }
        if(grass){
            matrix[this.y][this.x]=1;

            matrix[grass[1]][grass[0]] = 3;
            this.x=grass[0];
            this.y=grass[1];

            this.energy--;
            if(this.energy<=0){
                this.die();
            }
        }
        
    }
    eat(){
        var grassEaters = this.chooseCell(2);
        var grassEater = random(grassEaters);
        
        if(grassEater){

            matrix[this.y][this.x]=0;
            matrix[grassEater[1]][grassEater[0]] = 3;
            this.x=grassEater[0];
            this.y=grassEater[1];
            
            for (var i in grassEaterArr) {
                if (grassEater[0] == grassEaterArr[i].x && grassEater[1] == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.energy+=2;
            this.multiply++;
            if(this.multiply>=5){
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
        
        
        if(newCell ){
            matrix[newCell[1]][newCell[0]] = 3;
            var pre=new Predator(newCell[0],newCell[1],this.index)
            predatorArr.push(pre);
            this.multiply=3;
        }

    }
    die(){
        matrix[this.y][this.x]=0;
        for (var i in predatorArr) {
                if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
    }


}

