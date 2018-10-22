var ParentClass = require("./ParentClass");
module.exports = class Predator extends ParentClass {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 50;
        this.multiply = 0;
    }
    chooseCell(character) {
        super.getNewCoordinates();
        return super.chooseCell(character);
    }
    move(predatorArr, grassArr) {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        var grasses = this.chooseCell(1);
        var grass = random(grasses);

        if (newCell) {

            this.matrix[this.y][this.x] = 0;

            this.matrix[newCell[1]][newCell[0]] = 3;
            this.x = newCell[0];
            this.y = newCell[1];

            this.energy--;
            if (this.energy <= 0) {
                this.die(predatorArr);
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

            this.matrix[grass[1]][grass[0]] = 3;
            this.x = grass[0];
            this.y = grass[1];

            this.energy--;
            if (this.energy <= 0) {
                this.die(predatorArr);
            }
        }

    }
    eat(predatorArr, grassArr, grassEaterArr) {
        var grassEaters = this.chooseCell(2);
        var grassEater = random(grassEaters);

        if (grassEater) {

            this.matrix[this.y][this.x] = 0;
            this.matrix[grassEater[1]][grassEater[0]] = 3;
            this.x = grassEater[0];
            this.y = grassEater[1];

            for (var i in grassEaterArr) {
                if (grassEater[0] == grassEaterArr[i].x && grassEater[1] == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.energy += 2;
            this.multiply++;
            if (this.multiply >= 5) {
                this.mul(predatorArr);
            }


        }
        else {
            this.move(predatorArr, grassArr);
        }
    }

    mul(predatorArr) {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


        if (newCell) {
            this.matrix[newCell[1]][newCell[0]] = 3;
            var pre = new Predator(newCell[0], newCell[1], this.index)
            predatorArr.push(pre);
            this.multiply = 3;
        }

    }
    die(predatorArr) {
        this.matrix[this.y][this.x] = 0;
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }


}

