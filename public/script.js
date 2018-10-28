var matrix;
var socket;
var side = 5;
var stat;

function setup() {
    frameRate(0);
    socket = io.connect();

    socket.on("receive matrix", function (mtx) {

        matrix = mtx;
        createCanvas(matrix[0].length * side + 850, matrix.length * side);
        noLoop();

        socket.on("redraw", function (mtx) {
            matrix = mtx;
            redraw();
        });

        socket.on("Right Statistics", function (Statistics) {
            stat = Statistics;
        });

    });

    function click(evt) {
        socket.emit("click", evt.pageX, evt.pageY, side);
    }
    window.onclick = click;

    background('#acacac')
}

var start = false;
function draw() {
    background('#acacac');

    // textSize(32);
    // fill("black");

    var margin = 110;
    var N = 0;
    var Nx = 600;
    for (var i in stat) {
        textSize(20);
        start = true
        var y = 50;
        for (var c = 1; c <= 12; c++) {
            line(500, y, 1500, y)
            y += 40
        }

        N++
        if (N != 2 && N != 3) {
            if (stat[i] <= 2) {
                fill("red")
            }

            else if (stat[i] <= 5)
                fill("yellow")

            else {
                fill("green")
            }

            text(i + ": " + stat[i], Nx, margin);

        }
        else {
            fill(50)
            text(stat[i], Nx, margin);
        }
        Nx += 300
        if (N == 3) {
            Nx = 600
            N = 0
            margin += 40;
        }
    }

    if (start == true) {
        fill("white");
        text("born", 900, 70);
        text("dead", 1200, 70);
        fill(50)
        line(850, 50, 850, 490)
        line(1150, 50, 1150, 490)
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

    if (start == true) {

        fill('green')
        rect(580, 100, 12, 12);

        fill('yellow');
        rect(580, 140, 12, 12);

        fill('red');
        rect(580, 180-3, 12, 12);

        fill('blue');
        rect(580, 220-3, 12, 12);

        fill('orange');
        rect(580, 260-2, 12, 12);


        fill('black');
        rect(580, 300-2, 12, 12);

    }
    fill("black")
    textSize(30)
    text("Game of life", 850, 30)
}
