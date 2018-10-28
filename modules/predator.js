var ParentClass = require("./ParentClass");
var Grass = require("./Grass");
module.exports = class Predator extends ParentClass {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 50;
        this.multiply = 0;
    }
    chooseCell(character, matrix) {
        super.getNewCoordinates();
        return super.chooseCell(character, matrix);
    }
    move(predatorArr, grassArr, matrix, predatorLifeArr, grassLifeArr) {
        var emptyCells = this.chooseCell(0, matrix);
        var newCell = this.random(emptyCells);

        var grasses = this.chooseCell(1, matrix);
        var grass = this.random(grasses);

        
        if (grass) {
            for (var i in grassArr) {
                if (grass[0] == grassArr[i].x && grass[1] == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    var gr = new Grass (this.x, this.y, 1);
                    grassArr.push(gr);  
                    matrix[this.y][this.x] = 1;
                    break;
                }
            }

            

            matrix[grass[1]][grass[0]] = 3;
            this.x = grass[0];
            this.y = grass[1];

            this.energy--;
            if (this.energy <= 0) {
                this.die(predatorArr, matrix, predatorLifeArr);
            }
        }
        else if (newCell) {

            matrix[this.y][this.x] = 0;

            matrix[newCell[1]][newCell[0]] = 3;
            this.x = newCell[0];
            this.y = newCell[1];

            this.energy--;
            if (this.energy <= 0) {
                this.die(predatorArr, matrix, predatorLifeArr);
            }

        }

    }
    eat(predatorArr, grassArr, grassEaterArr, matrix, predatorLifeArr, grassEaterLifeArr, grassLifeArr) {
        var grassEaters = this.chooseCell(2, matrix);
        var grassEater = this.random(grassEaters);

        if (grassEater) {

            matrix[this.y][this.x] = 0;
            matrix[grassEater[1]][grassEater[0]] = 3;
            this.x = grassEater[0];
            this.y = grassEater[1];
            grassEaterLifeArr[1]++;

            for (var i in grassEaterArr) {
                if (grassEater[0] == grassEaterArr[i].x && grassEater[1] == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.energy += 2;
            this.multiply++;
            if (this.multiply >= 5) {
                this.mul(predatorArr, matrix, predatorLifeArr);
            }


        }
        else {
            this.move(predatorArr, grassArr, matrix, predatorLifeArr, grassLifeArr);
        }
    }

    mul(predatorArr, matrix, predatorLifeArr) {
        var emptyCells = this.chooseCell(0, matrix);
        var newCell = this.random(emptyCells);
        predatorLifeArr[0]++;

        if (newCell) {
            matrix[newCell[1]][newCell[0]] = 3;
            var pre = new Predator(newCell[0], newCell[1], this.index, matrix)
            predatorArr.push(pre);
            this.multiply = 3;
        }

    }
    die(predatorArr, matrix, predatorLifeArr) {
        matrix[this.y][this.x] = 0;
        predatorLifeArr[1]++;
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }


}

