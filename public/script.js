var ParentClass = require("../modules/ParentClass.js");
var Auto = require("../modules/auto.js");
var Grass = require("../modules/grass.js");
var GrassEater = require("../modules/grasseater.js");
var Human = require("../modules/human.js");
var Predator = require("../modules/predator.js");
var Slime = require("../modules/slime.js");
var Snail = require("../modules/snail.js");
var Creeper = require("../modules/creeper.js");

var side = 9.8;
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac')
}

 


function draw() {
    for (y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill('#acacac');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill(255, 120, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("lime");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 7) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 8) {
                fill(80, 20, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 9) {
                fill(254, 18, 168);
                rect(x * side, y * side, side, side);
            }
        }
    }
}
