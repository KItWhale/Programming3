module.exports = class Slime{
	constructor(x, y, index, matrix){
		this.matrix = matrix;
		this.x=x;
		this.y=y;
		this.index=index;
		this.energy=35;
	}
	die(slimeArr){
		this.energy--;
		if(this.energy<=0){
			this.matrix[this.y][this.x]=0;
			for (var i in slimeArr) {
                if (this.x == slimeArr[i].x && this.y == slimeArr[i].y) {
                    slimeArr.splice(i, 1);
                    break;
                }
            }
		}
	}
}