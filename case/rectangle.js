class Rectangle {
    constructor(x, y, width, height) {
        this._x = x;
        this._y = y;
        this.speed = 5
        this._width = width;
        this._height = height;
        this._canvas = document.getElementById("myCanvas");
        this._ctx = this._canvas.getContext("2d");
        this.dir = "";
    }

    draw() {
        this._ctx.beginPath();
        this._ctx.fillStyle = "#c42020";
        this._ctx.rect(this._x, this._y, this._width, this._height);
        this._ctx.fill();
        this._ctx.closePath();
        this._ctx.lineWidth = 2;
        this._ctx.strokeStyle = "#0147f1";
        this._ctx.strokeRect(this._x, this._y, this._width, this._height);

    }

    move(canvas) {
        switch (this.dir) {
            case "left":
                if (this._x > 0)
                    this._x -= this.speed;
                    break;

            case "right":
                if (this._x + this._width < this._canvas.width)
                    this._x += this.speed;
                break;
        }
    }
}

