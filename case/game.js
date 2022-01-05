let circle = new Circle(150, 100, 10);

let rec = new Rectangle(100, 480, 80, 10);

// let startX = (canvas.width/2) - 20;
// let startY = canvas.height - 60;
//
// let player = new rec(startX,startY);


setInterval(play, 50)

function movePlayer(evt) {
    switch (evt.key) {
        case 37:
            rec.dir = "left";
            break;
        case 39:
            rec.dir = "right";
            break;
    }
}

window.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 37:
            rec.dir = "left";
            break;
        case 39:
            rec.dir = "right";
            break;
    }
});
rec.move(canvas);

// function checkCollision() {
//     let left1 = this._x;
//     let right1 = this._x + this._width;
//     let top1 = this._y;
//     let bottom1 = this._y + this._height;
//
//     let left2 = this._x - this._radius;
//     let right2 = this._x + this._radius;
//     let top2 = this._y - this._radius;
//     let bottom2 = this._y + this._radius;
//
//
//     if(left1 > right2 || right1 < left2 || top1 > bottom2 || bottom1 < top2){
//         return false;
//     }else {
//         return true;
//     }
// }




function play() {
    circle.move();
    rec.draw();
    circle.draw();
    checkCollision();
    drawBricks();
}