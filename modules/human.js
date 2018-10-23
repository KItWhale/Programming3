

var ParentClass = require("./ParentClass.js");
module.exports = class Human extends ParentClass {
    constructor(x, y, index, matrix){
        super(x, y, index, matrix);
        this.energy = 100;
        this.musor = 0;
    }

    chooseCell(character) {
        super.getNewCoordinates();
        return super.chooseCell(character);
    }
    move(humanArr) {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        var grasses = this.chooseCell(1);
        var grass = random(grasses);

        if (newCell) {
            this.matrix[this.y][this.x] = 0;

            this.matrix[newCell[1]][newCell[0]] = 4;
            this.x = newCell[0];
            this.y = newCell[1];

            this.energy--;
            if (this.energy <= 0) {
                this.die(humanArr);
            }


        }
        if (grass) {
            for (var i in grassArr) {
                if (grass[0] == grassArr[i].x && grass[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    var gr = new Grass(this.x, this.y, 1);
                    grassArr.push(gr)
                    break;
                }
            }

            this.matrix[this.y][this.x] = 1;

            this.matrix[grass[1]][grass[0]] = 4;
            this.x = grass[0];
            this.y = grass[1];

            this.energy--;
            if (this.energy <= 0) {
                this.die(humanArr);
            }
        }

    }
    exterminate(humanArr, grassEaterArr, predatorArr) {
        var grassEaters = this.chooseCell(2);
        var grassEater = random(grassEaters);

        var predators = this.chooseCell(3);
        var predator = random(predators);


        if (grassEater) {

            this.matrix[this.y][this.x] = 0;

            this.matrix[grassEater[1]][grassEater[0]] = 4;
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

            this.matrix[predator[1]][predator[0]] = 4;
            this.x = predator[0];
            this.y = predator[1];

            for (var i in predatorArr) {
                if (predator[0] == predatorArr[i].x && predator[1] == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
        }
        else {
            this.move(humanArr);
        }
    }
    die(humanArr) {
        this.matrix[this.y][this.x] = 0;
        for (var i in humanArr) {
            if (this.x == humanArr[i].x && this.y == humanArr[i].y) {
                humanArr.splice(i, 1);
                break;
            }
        }
    }
}