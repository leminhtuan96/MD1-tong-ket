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

    clear() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    resetBall() {
        this.x = this._canvas.width / 2;
        this.y = rec._y - this._radius;
        this.velocityX = 3 * (Math.random() * 2 - 1);
        this.velocityY = -5;
    }

    move() {
        this.clear();
        this._x += this.velocityX;
        this._y += this.velocityY;
        if (this._x + this._radius > this._canvas.width || this._x - this._radius < 0) {
            this.velocityX = -this.velocityX
        }

        if (this._y - this._radius < 0) {
            this.velocityY = -this.velocityY;
        }
        // if (this._y + this._radius > rec._y) {
        //     this.velocityY = -this.velocityY
        // }
        else   if (this._y + this._radius > this._canvas.height) {
            alert("game Over");
            this.resetBall();
        }
    }
}






