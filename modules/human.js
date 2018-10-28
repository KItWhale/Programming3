

var ParentClass = require("./ParentClass.js");
var Grass = require("./Grass");
module.exports = class Human extends ParentClass {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 100;
        this.musor = 0;
    }

    chooseCell(character, matrix) {
        super.getNewCoordinates();
        return super.chooseCell(character, matrix);
    }
    move(humanArr, grassArr, matrix, humanLifeArr, grassLifeArr) {
        var emptyCells = this.chooseCell(0, matrix);
        var newCell = this.random(emptyCells);

        var grasses = this.chooseCell(1, matrix);
        var grass = this.random(grasses);

        
        if (grass) {
            for (var i in grassArr) {
                if (grass[0] == grassArr[i].x && grass[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    var gr = new Grass (this.x, this.y, 1);
                    grassArr.push(gr);
                    matrix[this.y][this.x] = 1;
                    break;
                }
            }

            

            matrix[grass[1]][grass[0]] = 4;
            this.x = grass[0];
            this.y = grass[1];

            this.energy--;
            if (this.energy <= 0) {
                this.die(humanArr, matrix, humanLifeArr);
            }
        }
        else if (newCell) {
            matrix[this.y][this.x] = 0;

            matrix[newCell[1]][newCell[0]] = 4;
            this.x = newCell[0];
            this.y = newCell[1];

            this.energy--;
            if (this.energy <= 0) {
                this.die(humanArr, matrix, humanLifeArr);
            }


        }

    }
    exterminate(humanArr, grassEaterArr, predatorArr, grassArr, matrix, humanLifeArr, predatorLifeArr, grassEaterLifeArr, grassLifeArr) {
        var grassEaters = this.chooseCell(2, matrix);
        var grassEater = this.random(grassEaters);

        var predators = this.chooseCell(3, matrix);
        var predator = this.random(predators);


        if (grassEater) {

            matrix[this.y][this.x] = 0;

            matrix[grassEater[1]][grassEater[0]] = 4;
            this.x = grassEater[0];
            this.y = grassEater[1];
            grassEaterLifeArr[1]++;

            for (var i in grassEaterArr) {
                if (grassEater[0] == grassEaterArr[i].x && grassEater[1] == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

        }
        if (predator) {
            matrix[this.y][this.x] = 0;

            matrix[predator[1]][predator[0]] = 4;
            this.x = predator[0];
            this.y = predator[1];
            predatorLifeArr[1]++;

            for (var i in predatorArr) {
                if (predator[0] == predatorArr[i].x && predator[1] == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this.move(humanArr, grassArr, matrix, humanLifeArr, grassLifeArr);
        }
    }
    die(humanArr, matrix, humanLifeArr) {
        matrix[this.y][this.x] = 0;
        humanLifeArr[1]++;
        for (var i in humanArr) {
            if (this.x == humanArr[i].x && this.y == humanArr[i].y) {
                humanArr.splice(i, 1);
                break;
            }
        }
    }
}