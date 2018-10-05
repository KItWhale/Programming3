
class Snail{
	constructor(x,y,index){
		this.x=x;
		this.y=y;
		this.index=index;
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
    move(){
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        
        var grasses = this.chooseCell(1);
        var grass = random(grasses);

        if(newCell){

            matrix[this.y][this.x]=6;
            
            var sli=new Slime(this.x,this.y,6);
            slimeArr.push(sli);
            

            matrix[newCell[1]][newCell[0]] = 5;
            this.x=newCell[0];
            this.y=newCell[1];

        }
        else if(grass){
            matrix[this.y][this.x]=6;

            var sli=new Slime(this.x,this.y,6);
            slimeArr.push(sli);

            matrix[grass[1]][grass[0]] = 5;
            this.x=grass[0];
            this.y=grass[1];

        }
        
    }
}