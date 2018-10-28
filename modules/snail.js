var ParentClass = require("./ParentClass.js");
var Slime = require("./slime");
module.exports = class Snail extends ParentClass {
    chooseCell(character, matrix) {
        super.getNewCoordinates();
        return super.chooseCell(character, matrix);
    }
    move(slimeArr, grassArr, matrix, grassLifeArr) {
        var emptyCells = this.chooseCell(0, matrix);
        var newCell = this.random(emptyCells);

        var grasses = this.chooseCell(1, matrix);
        var grass = this.random(grasses);

        var slimes = this.chooseCell(6, matrix);
        var slime = this.random(slimes);


        
        if (grass) {
            for (var i in grassArr) {
                if (grass[0] == grassArr[i].x && grass[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    grassLifeArr[1]++;
                    break;
                }
            }
            
            matrix[this.y][this.x] = 6;

            var sli = new Slime(this.x, this.y, 6, matrix);
            slimeArr.push(sli);


            matrix[grass[1]][grass[0]] = 5;
            this.x = grass[0];
            this.y = grass[1];

        }
        else if (newCell) {

            matrix[this.y][this.x] = 6;

            var sli = new Slime(this.x, this.y, 6, matrix);
            slimeArr.push(sli);


            matrix[newCell[1]][newCell[0]] = 5;
            this.x = newCell[0];
            this.y = newCell[1];

        }
        else if (slime) {
            matrix[this.y][this.x] = 6;

            var sli = new Slime(this.x, this.y, 6, matrix);
            slimeArr.push(sli);

            matrix[slime[1]][slime[0]] = 5;
            this.x = slime[0];
            this.y = slime[1];

        }
    }
}