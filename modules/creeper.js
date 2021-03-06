module.exports = class Creeper{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.time = 15;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 3, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x + 3, this.y - 3],
            [this.x + 3, this.y - 2],
            [this.x + 3, this.y - 1],
            [this.x + 3, this.y],
            [this.x + 3, this.y + 1],
            [this.x + 3, this.y + 2],
            [this.x + 3, this.y + 3],
            [this.x + 2, this.y - 3],
            [this.x + 2, this.y + 3],
            [this.x + 1, this.y - 3],
            [this.x + 1, this.y + 3],
            [this.x, this.y - 3],
            [this.x, this.y + 3],
            [this.x - 2, this.y - 3],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y - 3],
            [this.x - 1, this.y + 3]
        ];
    }

    getBoomCoordinates() {
        this.BoomCoords = [
            [this.x - 11, this.y - 9],
            [this.x - 10, this.y - 9],
            [this.x - 9, this.y - 9],
            [this.x - 8, this.y - 9],
            [this.x - 7, this.y - 9],
            [this.x - 6, this.y - 9],
            [this.x - 5, this.y - 9],
            [this.x - 4, this.y - 9],
            [this.x + 5, this.y - 9],
            [this.x + 6, this.y - 9],
            [this.x + 7, this.y - 9],
            [this.x + 8, this.y - 9],
            [this.x + 9, this.y - 9],
            [this.x + 10, this.y - 9],
            [this.x + 11, this.y - 9],
            [this.x + 12, this.y - 9],
            [this.x - 11, this.y - 8],
            [this.x - 10, this.y - 8],
            [this.x - 9, this.y - 8],
            [this.x - 8, this.y - 8],
            [this.x - 7, this.y - 8],
            [this.x - 6, this.y - 8],
            [this.x - 5, this.y - 8],
            [this.x - 4, this.y - 8],
            [this.x + 5, this.y - 8],
            [this.x + 6, this.y - 8],
            [this.x + 7, this.y - 8],
            [this.x + 8, this.y - 8],
            [this.x + 9, this.y - 8],
            [this.x + 10, this.y - 8],
            [this.x + 11, this.y - 8],
            [this.x + 12, this.y - 8],
            [this.x - 11, this.y - 7],
            [this.x - 9, this.y - 7],
            [this.x - 8, this.y - 7],
            [this.x - 7, this.y - 7],
            [this.x - 6, this.y - 7],
            [this.x - 5, this.y - 7],
            [this.x - 4, this.y - 7],
            [this.x + 5, this.y - 7],
            [this.x + 6, this.y - 7],
            [this.x + 7, this.y - 7],
            [this.x + 8, this.y - 7],
            [this.x + 9, this.y - 7],
            [this.x + 10, this.y - 7],
            [this.x + 11, this.y - 7],
            [this.x + 12, this.y - 7],
            [this.x - 11, this.y - 6],
            [this.x - 10, this.y - 6],
            [this.x - 9, this.y - 6],
            [this.x - 8, this.y - 6],
            [this.x - 7, this.y - 6],
            [this.x - 6, this.y - 6],
            [this.x - 5, this.y - 6],
            [this.x - 4, this.y - 6],
            [this.x + 5, this.y - 6],
            [this.x + 6, this.y - 6],
            [this.x + 7, this.y - 6],
            [this.x + 8, this.y - 6],
            [this.x + 9, this.y - 6],
            [this.x + 10, this.y - 6],
            [this.x + 11, this.y - 6],
            [this.x + 12, this.y - 6],
            [this.x - 11, this.y - 5],
            [this.x - 10, this.y - 5],
            [this.x - 9, this.y - 5],
            [this.x - 8, this.y - 5],
            [this.x - 7, this.y - 5],
            [this.x - 6, this.y - 5],
            [this.x - 5, this.y - 5],
            [this.x - 4, this.y - 5],
            [this.x + 5, this.y - 5],
            [this.x + 6, this.y - 5],
            [this.x + 7, this.y - 5],
            [this.x + 8, this.y - 5],
            [this.x + 9, this.y - 5],
            [this.x + 10, this.y - 5],
            [this.x + 11, this.y - 5],
            [this.x + 12, this.y - 5],
            [this.x - 11, this.y - 4],
            [this.x - 10, this.y - 4],
            [this.x - 9, this.y - 4],
            [this.x - 8, this.y - 4],
            [this.x - 7, this.y - 4],
            [this.x - 6, this.y - 4],
            [this.x - 5, this.y - 4],
            [this.x - 4, this.y - 4],
            [this.x + 5, this.y - 4],
            [this.x + 6, this.y - 4],
            [this.x + 7, this.y - 4],
            [this.x + 8, this.y - 4],
            [this.x + 9, this.y - 4],
            [this.x + 10, this.y - 4],
            [this.x + 11, this.y - 4],
            [this.x + 12, this.y - 4],
            [this.x - 11, this.y - 3],
            [this.x - 10, this.y - 3],
            [this.x - 9, this.y - 3],
            [this.x - 8, this.y - 3],
            [this.x - 7, this.y - 3],
            [this.x - 6, this.y - 3],
            [this.x - 5, this.y - 3],
            [this.x - 4, this.y - 3],
            [this.x + 5, this.y - 3],
            [this.x + 6, this.y - 3],
            [this.x + 7, this.y - 3],
            [this.x + 8, this.y - 3],
            [this.x + 9, this.y - 3],
            [this.x + 10, this.y - 3],
            [this.x + 11, this.y - 3],
            [this.x + 12, this.y - 3],
            [this.x - 11, this.y - 2],
            [this.x - 10, this.y - 2],
            [this.x - 9, this.y - 2],
            [this.x - 8, this.y - 2],
            [this.x - 7, this.y - 2],
            [this.x - 6, this.y - 2],
            [this.x - 5, this.y - 2],
            [this.x - 4, this.y - 2],
            [this.x + 5, this.y - 2],
            [this.x + 6, this.y - 2],
            [this.x + 7, this.y - 2],
            [this.x + 8, this.y - 2],
            [this.x + 9, this.y - 2],
            [this.x + 10, this.y - 2],
            [this.x + 11, this.y - 2],
            [this.x + 12, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x + 4, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x + 4, this.y],
            [this.x - 3, this.y + 1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x + 3, this.y + 1],
            [this.x + 4, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 2],
            [this.x + 4, this.y + 2],
            [this.x - 7, this.y + 3],
            [this.x - 6, this.y + 3],
            [this.x - 5, this.y + 3],
            [this.x - 4, this.y + 3],
            [this.x - 3, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 3],
            [this.x + 4, this.y + 3],
            [this.x + 5, this.y + 3],
            [this.x + 6, this.y + 3],
            [this.x + 7, this.y + 3],
            [this.x + 8, this.y + 3],
            [this.x, this.y + 4],
            [this.x, this.y + 4],
            [this.x - 7, this.y + 4],
            [this.x - 6, this.y + 4],
            [this.x - 5, this.y + 4],
            [this.x - 4, this.y + 4],
            [this.x - 3, this.y + 4],
            [this.x - 2, this.y + 4],
            [this.x - 1, this.y + 4],
            [this.x, this.y + 4],
            [this.x + 1, this.y + 4],
            [this.x + 2, this.y + 4],
            [this.x + 3, this.y + 4],
            [this.x + 4, this.y + 4],
            [this.x + 5, this.y + 4],
            [this.x + 6, this.y + 4],
            [this.x + 7 - 7, this.y + 5],
            [this.x + 8 - 6, this.y + 5],
            [this.x - 5, this.y + 5],
            [this.x - 4, this.y + 5],
            [this.x - 3, this.y + 5],
            [this.x - 2, this.y + 5],
            [this.x - 1, this.y + 5],
            [this.x, this.y + 5],
            [this.x + 1, this.y + 5],
            [this.x + 2, this.y + 5],
            [this.x + 3, this.y + 5],
            [this.x + 4, this.y + 5],
            [this.x + 5, this.y + 5],
            [this.x + 6, this.y + 5],
            [this.x + 7, this.y + 5],
            [this.x + 8, this.y + 5],
            [this.x - 7, this.y + 6],
            [this.x - 6, this.y + 6],
            [this.x - 5, this.y + 6],
            [this.x - 4, this.y + 6],
            [this.x - 3, this.y + 6],
            [this.x - 2, this.y + 6],
            [this.x - 1, this.y + 6],
            [this.x, this.y + 6],
            [this.x + 1, this.y + 6],
            [this.x + 2, this.y + 6],
            [this.x + 3, this.y + 6],
            [this.x + 4, this.y + 6],
            [this.x + 5, this.y + 6],
            [this.x + 6, this.y + 6],
            [this.x + 7, this.y + 6],
            [this.x + 8, this.y + 6],
            [this.x - 7, this.y + 7],
            [this.x - 6, this.y + 7],
            [this.x - 5, this.y + 7],
            [this.x - 4, this.y + 7],
            [this.x + 5, this.y + 7],
            [this.x + 6, this.y + 7],
            [this.x + 7, this.y + 7],
            [this.x + 8, this.y + 7],
            [this.x - 7, this.y + 8],
            [this.x - 6, this.y + 8],
            [this.x - 5, this.y + 8],
            [this.x - 4, this.y + 8],
            [this.x + 5, this.y + 8],
            [this.x + 6, this.y + 8],
            [this.x + 7, this.y + 8],
            [this.x + 8, this.y + 8],
            [this.x - 7, this.y + 9],
            [this.x - 6, this.y + 9],
            [this.x - 5, this.y + 9],
            [this.x - 4, this.y + 9],
            [this.x + 5, this.y + 9],
            [this.x + 6, this.y + 9],
            [this.x + 7, this.y + 9],
            [this.x + 8, this.y + 9],
            [this.x - 7, this.y + 10],
            [this.x - 6, this.y + 10],
            [this.x - 5, this.y + 10],
            [this.x - 4, this.y + 10],
            [this.x + 5, this.y + 10],
            [this.x + 6, this.y + 10],
            [this.x + 7, this.y + 10],
            [this.x + 8, this.y + 10]
        ];
    }

    Boom(grassArr, grassEaterArr, predatorArr, humanArr, snailArr, slimeArr, autoArr, creeperArr, matrix, autoLifeArr, snailLifeArr, predatorLifeArr, humanLifeArr, grassEaterLifeArr, grassLifeArr) {
        this.getBoomCoordinates();

        for (var i in this.BoomCoords) {
            var x = this.BoomCoords[i][0];
            var y = this.BoomCoords[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 1) {
                    for (var i in grassArr) {
                        if (x == grassArr[i].x && y == grassArr[i].y) {
                            grassLifeArr[1]++;
                            matrix[y][x] = 0;
                            grassArr.splice(i, 1);
                            break;
                        }
                    }
                }
                else if (matrix[y][x] == 2) {
                    for (var i in grassEaterArr) {
                        if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                            grassEaterLifeArr[1]++;
                            matrix[y][x] = 0;
                            grassEaterArr.splice(i, 1);
                            break;
                        }
                    }
                }
                else if (matrix[y][x] == 3) {
                    for (var i in predatorArr) {
                        if (x == predatorArr[i].x && y == predatorArr[i].y) {
                            predatorLifeArr[1]++;
                            predatorArr.splice(i, 1);
                            matrix[y][x] = 0;
                            break;
                        }
                    }
                }
                else if (matrix[y][x] == 4) {
                    for (var i in humanArr) {
                        if (x == humanArr[i].x && y == humanArr[i].y) {
                            humanLifeArr[1]++;
                            humanArr.splice(i, 1);
                            matrix[y][x] = 0;
                            break;
                        }
                    }
                }
                else if (matrix[y][x] == 5) {
                    for (var i in snailArr) {
                        if (x == snailArr[i].x && y == snailArr[i].y) {
                            snailLifeArr[1]++;
                            snailArr.splice(i, 1);
                            matrix[y][x] = 0;
                            break;
                        }
                    }
                }
                else if (matrix[y][x] == 6) {
                    for (var i in slimeArr) {
                        if (x == slimeArr[i].x && y == slimeArr[i].y) {
                            slimeArr.splice(i, 1);
                            matrix[y][x] = 0;
                            break;
                        }
                    }
                }
                else if (matrix[y][x] == 7) {
                    for (var i in autoArr) {
                        if (x == autoArr[i].x && y == autoArr[i].y) {
                            autoLifeArr[1]++;
                            autoArr.splice(i, 1);
                            matrix[y][x] = 0;
                            break;
                        }
                    }
                }
                else if (matrix[y][x] == 9) {
                    for (var i in creeperArr) {
                        if (x == creeperArr[i].x && y == creeperArr[i].y) {
                            creeperArr.splice(i, 1);
                            matrix[y][x] = 0;
                            break;
                        }
                    }
                }
            }
        }
    }
    chooseCell(character, matrix) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }

    random(Arr){
        var Item = Arr[Math.floor(Math.random() * Arr.length)];
        return Item;
    }

    move(grassArr, grassEaterArr, predatorArr, humanArr, snailArr, slimeArr, autoArr, creeperArr, matrix, autoLifeArr, snailLifeArr, predatorLifeArr, humanLifeArr, grassEaterLifeArr, grassLifeArr) {
        var emptyCells = this.chooseCell(0, matrix);
        var newCell = this.random(emptyCells);
        
        if (newCell) {

            matrix[this.y][this.x] = 0;

            matrix[newCell[1]][newCell[0]] = 9;
            this.x = newCell[0];
            this.y = newCell[1];

            this.time--;
            if (this.time <= 0) {
                this.Boom(grassArr, grassEaterArr, predatorArr, humanArr, snailArr, slimeArr, autoArr, creeperArr, matrix, autoLifeArr, snailLifeArr, predatorLifeArr, humanLifeArr, grassEaterLifeArr, grassLifeArr);
            }
        }
        else {
            this.time--;
            if (this.time <= 0) {
                this.Boom(grassArr, grassEaterArr, predatorArr, humanArr, snailArr, slimeArr, autoArr, creeperArr, matrix, autoLifeArr, snailLifeArr, predatorLifeArr, humanLifeArr, grassEaterLifeArr, grassLifeArr);
            }
        }
    }
}