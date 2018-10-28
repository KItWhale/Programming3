var matrix;
var socket;
var side = 7;
var Stat;

function setup() {
    frameRate(0);
    socket = io.connect();

    socket.on("receive matrix", function(mtx){

        matrix = mtx;
        createCanvas(matrix[0].length * side + 1000, matrix.length * side);
        noLoop();

        socket.on("redraw", function(mtx){
            matrix = mtx;
            redraw();
        });
        
        socket.on("Right Text", function(Statistics){
            Stat = Statistics;
        });
        
    });

    function click(evt) {
        socket.emit("click", evt.pageX, evt.pageY, side);
    }
    window.onclick = click;

    background('#acacac')
}

function draw() {
    background('#acacac');

    textSize(32);
    fill("black");
    var margin = 35;
    for(var i in Stat){
        text(i + ": " + Stat[i], 750, margin);
        margin += 35;
    }

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
