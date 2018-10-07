
class Human extends ParentClass{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 100;
        this.musor = 0;
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

            this.musor++;
            if (this.musor >= 33) {
                var mus = new Musor(this.x, this.y, 8);
                musorArr.push(mus);
                matrix[this.y][this.x] = 8;
                this.musor = 0;
            }
            else {
                matrix[this.y][this.x] = 0;
            }


            matrix[newCell[1]][newCell[0]] = 4;
            this.x = newCell[0];
            this.y = newCell[1];

            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }


        }
        if (grass) {
            this.musor++;
            if (this.musor >= 33) {
                var mus = new Musor(this.x, this.y, 8);
                musorArr.push(mus);
                matrix[this.y][this.x] = 8;
                this.musor = 0;
            }
            else {
                matrix[this.y][this.x] = 1;
            }

            matrix[grass[1]][grass[0]] = 4;
            this.x = grass[0];
            this.y = grass[1];

            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }

    }
    exterminate() {
        var grassEaters = this.chooseCell(2);
        var grassEater = random(grassEaters);

        var predators = this.chooseCell(3);
        var predator = random(predators);


        if (grassEater) {

            this.musor++;
            if (this.musor >= 33) {
                var mus = new Musor(this.x, this.y, 8);
                musorArr.push(mus);
                matrix[this.y][this.x] = 8;
                this.musor = 0;
            }
            else {
                matrix[this.y][this.x] = 0;
            }
            matrix[grassEater[1]][grassEater[0]] = 4;
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

            this.musor++;
            if (this.musor >= 33) {
                var mus = new Musor(this.x, this.y, 8);
                musorArr.push(mus);
                matrix[this.y][this.x] = 8;
                this.musor = 0;
            }
            else {
                matrix[this.y][this.x] = 0;
            }
            matrix[predator[1]][predator[0]] = 4;
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
            this.move();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in humanArr) {
            if (this.x == humanArr[i].x && this.y == humanArr[i].y) {
                humanArr.splice(i, 1);
                break;
            }
        }
    }
}