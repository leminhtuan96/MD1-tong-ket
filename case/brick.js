const brick = {
    row: 3,
    column: 5,
    width: 55,
    height: 20,
    offsetLeft: 20,
    offsetTop: 20,
    marginTop: 40,
    fillColor: "#0147f1",
    strokeColor: "#c91111",
}

let bricks = [];
// for (let r = 0; r < brick.row; r++) {
//     bricks[r] = [];
//     for (let c = 0; c < brick.column; c++) {
//         bricks[c][r] = {
//             x: c * (brick.width + brick.offsetLeft) + brick.offsetLeft,
//             y: r * (brick.height + brick.offsetTop) + brick.offsetTop + brick.marginTop,
//             status: true
//         }
//     }
//}

function drawBricks() {
    for (let r = 0; r < brick.row; r++) {
        for (let c = 0; c < brick.column; c++) {
            if (bricks[r][c].status == 1) {
                let x1 = c * (brick.width + brick.marginTop) + brick.offsetLeft;
                let y1 = r * (brick.height + brick.marginTop) + brick.offsetTop;
                bricks[r][c].x = x1;
                bricks[r][c].y = y1;
                ctx.beginPath();
                ctx.rect(x1, y1,brick.width, brick.height);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}


