var Matrix = require("./Matrix.js");
var myMatrix = new Matrix(100, 100);
var matrix = myMatrix.mat();

var ParentClass = require("./ParentClass.js");
var Slime = require("./slime");
module.exports = class Snail extends ParentClass {

    chooseCell(character) {
        super.getNewCoordinates();
        return super.chooseCell(character);
    }
    move(slimeArr) {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        var grasses = this.chooseCell(1);
        var grass = random(grasses);

        var slimes = this.chooseCell(6);
        var slime = random(slimes);


        if (newCell) {

            matrix[this.y][this.x] = 6;

            var sli = new Slime(this.x, this.y, 6);
            slimeArr.push(sli);


            matrix[newCell[1]][newCell[0]] = 5;
            this.x = newCell[0];
            this.y = newCell[1];

        }
        else if (grass) {
            matrix[this.y][this.x] = 6;

            var sli = new Slime(this.x, this.y, 6);
            slimeArr.push(sli);

            for (var i in grassArr) {
                if (grass[0] == grassArr[i].x && grass[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            matrix[grass[1]][grass[0]] = 5;
            this.x = grass[0];
            this.y = grass[1];

        }
        else if (slime) {
            matrix[this.y][this.x] = 6;

            var sli = new Slime(this.x, this.y, 6);
            slimeArr.push(sli);

            matrix[slime[1]][slime[0]] = 5;
            this.x = slime[0];
            this.y = slime[1];

        }

    }
}