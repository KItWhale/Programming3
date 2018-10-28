var ParentClass = require("./ParentClass.js");
module.exports = class Grass extends ParentClass{
    mul(grassArr, matrix, grassLifeArr) {
        this.multiply++;
        var newCell = this.random(this.chooseCell(0, matrix));
        if (this.multiply >= 5 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
            grassLifeArr[0]++;
        }
    }
}