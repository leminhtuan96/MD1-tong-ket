class Circle {
    constructor(x, y, radius) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._canvas = document.getElementById("myCanvas");
        this._ctx = this._canvas.getContext("2d");
        this.speed = 10;
        this.velocityX = 10;
        this.velocityY = 10;
    }

    draw() {
        this._ctx.beginPath();
        this._ctx.fillStyle = "#c20b0b";
        this._ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI);
        this._ctx.fill();
        this._ctx.closePath();
    }

    // movedown() {
    //     this.clear();
    //     this._y += this.speed;
    //     this.draw();
    //     this.checkvacham();
    // }

    clear() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    // moveup() {
    //     this.clear();
    //     this._y -= this.speed;
    //     this.draw();
    //     this.checkvacham();
    // }

    checkvacham() {
        if (this._y + this._radius === rec._y) {
        } else if (this._y <= this._radius) {
        }
        // if (this._x + this._radius > this._canvas.width - this._radius) {
        //     this._x -= this._canvas;
        // }
    }

    move() {
        this.clear();
        this._x += this.velocityX;
        this._y += this.velocityY;
        if (this._x + this._radius > this._canvas.width-this._radius) {
             this._x -= this._canvas
        }else if (this._y+this._radius>this._canvas.width){
             this._y += this._canvas
        }
            // else if (this._y+this._radius<this._canvas.width){
        //     this.velocityY = this._y
        // }
    }
}






