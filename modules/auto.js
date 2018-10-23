var ParentClass = require("./ParentClass.js");
var Grass = require("./Grass");
module.exports = class Auto extends ParentClass{
    constructor(x, y, index, matrix){
        super(x, y, index, matrix);
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    move(grassArr) {
        var emptyCells = this.chooseCell(0);
        var newCell = this.random(emptyCells);

        var grasses = this.chooseCell(1);
        var grass = this.random(grasses);

        if (newCell) {

            this.matrix[this.y][this.x] = 0;

            this.matrix[newCell[1]][newCell[0]] = 7;
            this.x = newCell[0];
            this.y = newCell[1];

        }
        else if (grass) {
            for(var i in grassArr){
                if (grass[0] == grassArr[i].x && grass[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    var gr = new Grass (this.x, this.y, 1);
                    grassArr.push(gr)
                    break;
                }
            }
            
             this.matrix[this.y][this.x] = 1;

            this.matrix[grass[1]][grass[0]] = 7;
            this.x = grass[0];
            this.y = grass[1];

        }
    }
    exterminate(grassEaterArr, grassArr, predatorArr, snailArr) {

        var grassEaters = this.chooseCell(2);
        var grassEater = this.random(grassEaters);

        var predators = this.chooseCell(3);
        var predator = this.random(predators);

        var snails = this.chooseCell(5);
        var snail = this.random(snails);

        if (grassEater) {

            this.matrix[this.y][this.x] = 0;
            this.matrix[grassEater[1]][grassEater[0]] = 7;
            this.x = grassEater[0];
            this.y = grassEater[1];

            for (var i in grassEaterArr) {
                if (grassEater[0] == grassEaterArr[i].x && grassEater[1] == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

        }
        if (predator) {

            this.matrix[this.y][this.x] = 0;
            this.matrix[predator[1]][predator[0]] = 7;
            this.x = predator[0];
            this.y = predator[1];

            for (var i in predatorArr) {
                if (predator[0] == predatorArr[i].x && predator[1] == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
        }
        if (snail) {
            this.matrix[this.y][this.x] = 0;
            this.matrix[snail[1]][snail[0]] = 7;
            this.x = snail[0];
            this.y = snail[1];

            for (var i in snailArr) {
                if (snail[0] == snailArr[i].x && snail[1] == snailArr[i].y) {
                    snailArr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this.move(grassArr);
        }
    }
}