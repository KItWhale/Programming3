
class Snail extends ParentClass{

    chooseCell(character){
        super.getNewCoordinates();
        return super.chooseCell(character);
    }
    move(){
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        
        var grasses = this.chooseCell(1);
        var grass = random(grasses);

        if(newCell){

            matrix[this.y][this.x]=6;
            
            var sli=new Slime(this.x,this.y,6);
            slimeArr.push(sli);
            

            matrix[newCell[1]][newCell[0]] = 5;
            this.x=newCell[0];
            this.y=newCell[1];

        }
        else if(grass){
            matrix[this.y][this.x]=6;

            var sli=new Slime(this.x,this.y,6);
            slimeArr.push(sli);

            matrix[grass[1]][grass[0]] = 5;
            this.x=grass[0];
            this.y=grass[1];

        }
        
    }
}