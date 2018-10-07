
class Predator extends ParentClass{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 50;
        this.multiply = 0;
    }
    chooseCell(character) {
        super.getNewCoordinates();
        return super.chooseCell(character);
    }
    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        var grasses = this.chooseCell(1);
        var grass = random(grasses);

        if (newCell) {

            matrix[this.y][this.x] = 0;

            matrix[newCell[1]][newCell[0]] = 3;
            this.x = newCell[0];
            this.y = newCell[1];

            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }

        }
        if (grass) {
            matrix[this.y][this.x] = 1;

            matrix[grass[1]][grass[0]] = 3;
            this.x = grass[0];
            this.y = grass[1];

            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }

    }
    eat() {
        var grassEaters = this.chooseCell(2);
        var grassEater = random(grassEaters);

        if (grassEater) {

            matrix[this.y][this.x] = 0;
            matrix[grassEater[1]][grassEater[0]] = 3;
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
                this.mul();
            }


        }
        else {
            this.move();
        }
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


        if (newCell) {
            matrix[newCell[1]][newCell[0]] = 3;
            var pre = new Predator(newCell[0], newCell[1], this.index)
            predatorArr.push(pre);
            this.multiply = 3;
        }

    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }


}

