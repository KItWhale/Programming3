var ParentClass = require("./ParentClass.js");
module.exports = class GrassEater extends ParentClass{
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 5;
    }
    
    chooseCell(character, matrix){
        super.getNewCoordinates();
        return super.chooseCell(character, matrix);
    }

    move(grassEaterArr, matrix, grassEaterLifeArr){
        var emptyCells = this.chooseCell(0, matrix);
        var newCell = this.random(emptyCells);
        
        if(newCell){

            matrix[this.y][this.x]=0;

            matrix[newCell[1]][newCell[0]] = 2;
            this.x=newCell[0];
            this.y=newCell[1];

            this.energy--;
            if(this.energy<=0){
                this.die(grassEaterArr, matrix, grassEaterLifeArr);
            }

        }
        
    }

    eat(grassEaterArr, grassArr, matrix, grassEaterLifeArr, grassLifeArr){
        var grasses = this.chooseCell(1, matrix);
        var grass = this.random(grasses);
        
        if(grass){

            matrix[this.y][this.x]=0;
            matrix[grass[1]][grass[0]] = 2;
            this.x=grass[0];
            this.y=grass[1];
            grassLifeArr[1]++;
            
            for (var i in grassArr) {
                if (grass[0] == grassArr[i].x && grass[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            this.energy++;
            if(this.energy>=10){
                this.mul(grassEaterArr, matrix, grassEaterLifeArr);
            }
            

        }
        else{
            this.move(grassEaterArr, matrix, grassEaterLifeArr);
        }
    }

    mul(grassEaterArr, matrix, grassEaterLifeArr){
        var emptyCells = this.chooseCell(0, matrix);
        var newCell = this.random(emptyCells);
        
        if(newCell){
            matrix[newCell[1]][newCell[0]] = 2;
            var gre=new GrassEater(newCell[0],newCell[1],this.index)
            grassEaterArr.push(gre);
            this.energy=5;
            grassEaterLifeArr[0]++;
        }

    }

    die(grassEaterArr, matrix, grassEaterLifeArr){
        matrix[this.y][this.x]=0;
        grassEaterLifeArr[1]++;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }


}
