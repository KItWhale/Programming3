var express = require('express');
var path = require('path');
var app = express();


var mat = require("./modules/Matrix.js");
var matrix = mat(100, 100);

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
var creeperArr = [];


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

// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});