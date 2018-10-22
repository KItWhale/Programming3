
module.exports = class Matrix{
    constructor(m, n){
        this.m = m;
        this.n = n;
        this.y = 0;
        this.x = 0;
    }
    mat() {
        var matrix = [];
        for (this.y = 0; this.y < this.m; this.y++) {
            matrix[this.y] = [];
            for (this.x = 0; this.x < this.n; this.x++) {
                matrix[this.y][this.x] = Math.round(Math.random());
            }
        }

        matrix[10][50] = 2;
        matrix[24][30] = 2;
        matrix[76][76] = 2;
        matrix[34][97] = 2;
        matrix[34][72] = 2;
        matrix[32][33] = 2;
        matrix[82][54] = 2;
        matrix[94][2] = 2;
        matrix[12][14] = 2;
        matrix[72][14] = 2;
        matrix[34][83] = 2;
        matrix[63][22] = 2;
        matrix[87][54] = 2;
        matrix[52][12] = 2;
        matrix[45][12] = 2;
        matrix[52][4] = 2;
        matrix[99][36] = 2;
    
        matrix[38][36] = 3;
        matrix[95][23] = 3;
        matrix[53][23] = 3;
        matrix[34][83] = 3;
        matrix[93][34] = 3;
        matrix[83][85] = 3;
        matrix[14][23] = 3;
        matrix[4][64] = 3;
        matrix[42][57] = 3;
        matrix[14][34] = 3;
        matrix[78][23] = 3;
        matrix[53][84] = 3;
        matrix[14][63] = 3;
        matrix[75][3] = 3;
        matrix[25][94] = 3;
        matrix[84][23] = 3;
        matrix[73][54] = 3;
        matrix[45][23] = 3;
        matrix[92][24] = 3;
    
        matrix[2][45] = 4;
        matrix[35][23] = 4;
        matrix[23][63] = 4;
        matrix[84][93] = 4;
        matrix[52][45] = 4;
        matrix[83][45] = 4;
        matrix[43][5] = 4;
        matrix[73][2] = 4;
        matrix[94][45] = 4;
        matrix[41][23] = 4;
        matrix[84][45] = 4;
        matrix[52][82] = 4;
        matrix[63][45] = 4;
        matrix[74][31] = 4;
        matrix[23][4] = 4;
        matrix[52][95] = 4;
    
        matrix[64][19] = 5;
        matrix[9][19] = 5;
        matrix[74][85] = 5;
        matrix[85][12] = 5;
        matrix[53][23] = 5;
        matrix[64][19] = 5;
        matrix[23][85] = 5;
        matrix[14][75] = 5;
        matrix[24][98] = 5;
        matrix[53][23] = 5;
        matrix[31][45] = 5;
        matrix[24][19] = 5;
        matrix[85][43] = 5;
        matrix[64][12] = 5;
        matrix[4][75] = 5;
        matrix[97][2] = 5;
        matrix[14][22] = 5;
        matrix[66][48] = 5;
    
        matrix[34][24] = 7;
        matrix[58][83] = 7;
        matrix[53][12] = 7;
        matrix[85][24] = 7;
        matrix[64][25] = 7;
    
        return matrix;
    }
}