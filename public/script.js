var Matrix = require("./modules/Matrix.js");
var myMatrix = new Matrix(100,100);
var matrix = myMatrix.mat(); 

var ParentClass = require("./modules/ParentClass.js");
var Auto = require("./modules/auto.js");
var Grass = require("./modules/grass.js");
var GrassEater = require("./modules/grasseater.js");
var Human = require("./modules/human.js");
var Predator = require("./modules/predator.js");
var Slime = require("./modules/slime.js");
var Snail = require("./modules/snail.js");
var Creeper = require("./modules/creeper.js");




var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var humanArr = [];
var snailArr = [];
var slimeArr = [];
var autoArr = [];
var musorArr = [];
var creeperArr = [];

// var weather = "Spring"
// setInterval(function(){ 
//                 if(weather == "Spring"){
//                     weather = "Summer"
//                 }
//                 else if(weather == "Summer"){
//                     weather = "Autumn"
//                 }
//                 else if(weather == "Autumn"){
//                     weather = "Winter"
//                 }
//                 else if(weather == "Winter"){
//                     weather = "Spring"
//                 }
//                 console.log(weather)
//             }, 20000);


var side = 9.8;
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac')

    for (y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gre = new GrassEater(x, y, 2);
                grassEaterArr.push(gre);
            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 3);
                predatorArr.push(pre);
            }
            else if (matrix[y][x] == 4) {
                var hum = new Human(x, y, 4);
                humanArr.push(hum);
            }
            else if (matrix[y][x] == 5) {
                var sna = new Snail(x, y, 5);
                snailArr.push(sna);
            }
            else if (matrix[y][x] == 7) {
                var auto = new Auto(x, y, 7);
                autoArr.push(auto);
            }
        }
    }
}

 


function draw() {
    for (y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                // if(weather == "Spring"){
                //     fill(0, 136, 0);
                //     rect(x * side, y * side, side, side);
                // }
                // else if(weather == "Summer"){
                //     fill(0, 150, 0);
                //     rect(x * side, y * side, side, side);
                // }
                // else if(weather == "Autumn"){
                //     fill(104, 174, 0);
                //     rect(x * side, y * side, side, side);
                // }
                // else if(weather == "Winter"){
                //     fill(239, 241, 253);
                //     rect(x * side, y * side, side, side);
                // }
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

    for (var i in grassArr) {
        grassArr[i].mul(grassArr);
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat(grassEaterArr, grassArr);
    }
    for (var i in predatorArr) {
        predatorArr[i].eat(predatorArr, grassArr, grassEaterArr);
    }
    for (var i in humanArr) {
        humanArr[i].exterminate(humanArr, grassEaterArr, predatorArr);
    }
    for (var i in snailArr) {
        snailArr[i].move(slimeArr);
    }
    for (var i in slimeArr) {
        slimeArr[i].die(slimeArr);
    }
    for (var i in autoArr) {
        autoArr[i].exterminate();
    }
    for (var i in creeperArr) {
        creeperArr[i].move();
    }
    
}


function mousePressed() {
    for (i = 0; i < 100; i++) {
        if(mouseX < side*i){
            var X = i-1;
            break;
        }
    }
    for (p = 0; p < 100; p++) {
        if(mouseY < side*p){
            var Y = p-1;
            break;
        }
    }
    if(X && Y){
        if(matrix[Y][X]==0){
            var creeper = new Creeper(X, Y, 9);
            matrix[Y][X]=9;
            creeperArr.push(creeper);
        }
    }
 }