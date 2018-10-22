var ParentClass = require("./ParentClass.js");
module.exports = class Grass extends ParentClass{
    
    mul(grassArr) {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 5 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            this.matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }

}
