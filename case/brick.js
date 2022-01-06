class Viengach {
    constructor(x,y,width,height) {
            this.row = x;
            this.column = y;
            this.width = width;
            this.height = height;
            this.offsetLeft = 20;
            this.offsetTop = 20;
            this.marginTop = 40;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
    }
    draw() {
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.column; c++) {
                if (bricks[r][c].status == 1) {
                    let x1 = c * (this.width + this.marginTop) + this.offsetLeft;
                    let y1 = r * (this.height + this.marginTop) + this.offsetTop;
                    bricks[r][c].x = x1;
                    bricks[r][c].y = y1;
                    this.ctx.beginPath();
                    this.ctx.rect(x1, y1,this.width, this.height);
                    this.ctx.fillStyle = "#0095DD";
                    this.ctx.fill();
                    this.ctx.closePath();
                }
            }
        }
    }
}
let bricks = [];
for(let c=0; c<this.column; c++) {
    bricks[c] = [];
    for(let r=0; r<this.row; r++) {
        bricks[r][c] = { x: 0, y: 0, status: 1 };
    }
}

