var ParentClass = require("./ParentClass.js");
var Slime = require("./slime");
module.exports = class Snail extends ParentClass {
    constructor(x, y, index, matrix){
        super(x, y, index, matrix);
    }
    chooseCell(character) {
        super.getNewCoordinates();
        return super.chooseCell(character);
    }
    move(slimeArr, grassArr) {
        var emptyCells = this.chooseCell(0);
        var newCell = this.random(emptyCells);

        var grasses = this.chooseCell(1);
        var grass = this.random(grasses);

        var slimes = this.chooseCell(6);
        var slime = this.random(slimes);


        if (newCell) {

            this.matrix[this.y][this.x] = 6;

            var sli = new Slime(this.x, this.y, 6, this.matrix);
            slimeArr.push(sli);


            this.matrix[newCell[1]][newCell[0]] = 5;
            this.x = newCell[0];
            this.y = newCell[1];

        }
        else if (grass) {
            this.matrix[this.y][this.x] = 6;

            var sli = new Slime(this.x, this.y, 6, this.matrix);
            slimeArr.push(sli);

            for (var i in grassArr) {
                if (grass[0] == grassArr[i].x && grass[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.matrix[grass[1]][grass[0]] = 5;
            this.x = grass[0];
            this.y = grass[1];

        }
        else if (slime) {
            this.matrix[this.y][this.x] = 6;

            var sli = new Slime(this.x, this.y, 6, this.matrix);
            slimeArr.push(sli);

            this.matrix[slime[1]][slime[0]] = 5;
            this.x = slime[0];
            this.y = slime[1];

        }
    }
}