class Grass{
    constructor(x,y,index){
        this.x=x;
        this.y=y;
        this.index=index;
        this.multiply=0;
        this.directions=[
            [this.x-1,this.y-1],
            [this.x,this.y-1],
            [this.x+1,this.y-1],
            [this.x-1,this.y],
            [this.x+1,this.y],
            [this.x-1,this.y+1],
            [this.x,this.y+1],
            [this.x+1,this.y+1]
        ]
    }
    chooseCell(character){
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

    mul() {
    this.multiply++;
    var newCell = random(this.chooseCell(0));
    if (this.multiply >= 5 && newCell) {
        var newGrass = new Grass(newCell[0], newCell[1], this.index);
        grassArr.push(newGrass);
        matrix[newCell[1]][newCell[0]] = 1;
        this.multiply = 0;  
    }
}

}

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


class Human{
    constructor(x,y,index){
        this.x=x;
        this.y=y;
        this.energy=100;
        this.index=index;
        this.musor=0;
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

        	this.musor++;
    		if(this.musor>=33){
    			var mus=new Musor(this.x,this.y,8);
    			musorArr.push(mus);
    			matrix[this.y][this.x]=8;
    			this.musor=0;
    		}
    		else{
    			matrix[this.y][this.x]=0;
    		}
            

            matrix[newCell[1]][newCell[0]] = 4;
            this.x=newCell[0];
            this.y=newCell[1];

            this.energy--;
            if(this.energy<=0){
                this.die();
            }


        }
         if(grass){
            this.musor++;
    		if(this.musor>=33){
    			var mus=new Musor(this.x,this.y,8);
    			musorArr.push(mus);
    			matrix[this.y][this.x]=8;
    			this.musor=0;
    		}
    		else{
    			matrix[this.y][this.x]=1;
    		}

            matrix[grass[1]][grass[0]] = 4;
            this.x=grass[0];
            this.y=grass[1];

            this.energy--;
            if(this.energy<=0){
                this.die();
            }
        }
        
    }
    exterminate(){
        var grassEaters = this.chooseCell(2);
        var grassEater = random(grassEaters);

        var predators = this.chooseCell(3);
        var predator = random(predators);


        if(grassEater){

            this.musor++;
    		if(this.musor>=33){
    			var mus=new Musor(this.x,this.y,8);
    			musorArr.push(mus);
    			matrix[this.y][this.x]=8;
    			this.musor=0;
    		}
    		else{
    			matrix[this.y][this.x]=0;
    		}
            matrix[grassEater[1]][grassEater[0]] = 4;
            this.x=grassEater[0];
            this.y=grassEater[1];
            
            for (var i in grassEaterArr) {
                if (grassEater[0] == grassEaterArr[i].x && grassEater[1] == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
           
        }
        if(predator){

            this.musor++;
    		if(this.musor>=33){
    			var mus=new Musor(this.x,this.y,8);
    			musorArr.push(mus);
    			matrix[this.y][this.x]=8;
    			this.musor=0;
    		}
    		else{
    			matrix[this.y][this.x]=0;
    		}
                matrix[predator[1]][predator[0]] = 4;
                this.x=predator[0];
                this.y=predator[1];
                
                for (var i in predatorArr) {
                    if (predator[0] == predatorArr[i].x && predator[1] == predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                        break;
                    }
                }
           }
        else{
            this.move();
        }
    }
    die(){
    	matrix[this.y][this.x]=0;
        for (var i in humanArr) {
                if (this.x == humanArr[i].x && this.y == humanArr[i].y) {
                    humanArr.splice(i, 1);
                    break;
                }
            }
    }
}
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
class Slime{
	constructor(x,y,index){
		this.x=x;
		this.y=y;
		this.index=index;
		this.energy=35;
	}
	die(){
		this.energy--;
		if(this.energy<=0){
			matrix[this.y][this.x]=0;
			for (var i in slimeArr) {
                if (this.x == slimeArr[i].x && this.y == slimeArr[i].y) {
                    slimeArr.splice(i, 1);
                    break;
                }
            }
		}
	}
}
class Auto{
	constructor(x,y,index){
		this.x=x;
		this.y=y;
		this.index=index;
	}
	getNewCoordinates(){
        this.directions = [
            [this.x-2,this.y-2],
            [this.x-1,this.y-2],
            [this.x,this.y-2],
            [this.x+1,this.y-2],
            [this.x+2,this.y-2],
            [this.x-2,this.y-1],
            [this.x-1,this.y-1],
            [this.x,this.y-1],
            [this.x+1,this.y-1],
            [this.x+2,this.y-1],
            [this.x-2,this.y],
            [this.x-1,this.y],
            [this.x,this.y],
            [this.x+1,this.y],
            [this.x+2,this.y],
            [this.x-2,this.y+1],
            [this.x-1,this.y+1],
            [this.x,this.y+1],
            [this.x+1,this.y+1],
            [this.x+2,this.y+1],
            [this.x-2,this.y+2],
            [this.x-1,this.y+2],
            [this.x,this.y+2],
            [this.x+1,this.y+2],
            [this.x+2,this.y+2]
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
    podMashinu(){

    }
    move(){
    	var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        var grasses = this.chooseCell(1);
        var grass = random(grasses);
        
        if(newCell){

            matrix[this.y][this.x]=0;

            matrix[newCell[1]][newCell[0]] = 7;
            this.x=newCell[0];
            this.y=newCell[1];

        }
        else if(grass){
            matrix[this.y][this.x]=1;

            matrix[grass[1]][grass[0]] = 7;
            this.x=grass[0];
            this.y=grass[1];

        }
    }
    exterminate(){
    	
        var grassEaters = this.chooseCell(2);
        var grassEater = random(grassEaters);

        var predators = this.chooseCell(3);
        var predator = random(predators);

        var snails = this.chooseCell(5);
        var snail = random(snails);

        if(grassEater){

            matrix[this.y][this.x]=0;
            matrix[grassEater[1]][grassEater[0]] = 7;
            this.x=grassEater[0];
            this.y=grassEater[1];
            
            for (var i in grassEaterArr) {
                if (grassEater[0] == grassEaterArr[i].x && grassEater[1] == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
           
        }
        if(predator){

                matrix[this.y][this.x]=0;
                matrix[predator[1]][predator[0]] = 7;
                this.x=predator[0];
                this.y=predator[1];
                
                for (var i in predatorArr) {
                    if (predator[0] == predatorArr[i].x && predator[1] == predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                        break;
                    }
                }
           }
           if(snail){
                matrix[this.y][this.x]=0;
                matrix[snail[1]][snail[0]] = 7;
                this.x=snail[0];
                this.y=snail[1];
                
                for (var i in snailArr) {
                    if (snail[0] == snailArr[i].x && snail[1] == snailArr[i].y) {
                        snailArr.splice(i, 1);
                        break;
                    }
                }
           }
        else{
            this.move();
        }
    }
}
class Musor{
	constructor(x,y,index){
		this.x=x;
		this.y=y;
		this.index=index;
	}
}