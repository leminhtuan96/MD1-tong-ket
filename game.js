let circle = new Circle(150, 0, 10);

let rec = new Rectangle(100, 480, 80, 10);

function play() {
    circle.move();
    rec.draw();
    circle.draw();
     // circle.movedown();
     // circle.moveup();

}

setInterval(play, 50)

window.addEventListener("keyup", function (event) {
    switch (event.keyCode) {
        case 37:
            rec.moveLeft();
            break;
        case 39:
            rec.moveRight();
            break;
    }
})



window.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 37:
            rec.moveLeft();
            break;
        case 39:
            rec.moveRight();
            break;
    }
})