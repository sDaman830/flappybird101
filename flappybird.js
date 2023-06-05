// board
let board;
let boardWidth = 360;
let boardHeight = 640;
window.onload = function () {
    board = document.getElementById("board");
    board.height = boardHeight;
    boardWidth = boardWidth;
    contect = board.getContext("2d");

    // context.fillStyle = "green";
    //   context.fillRect(bird.x, bird.y, bird.width, bird.height);

    birdImg = new Image();
    birdImg.src = "./flappybird.png";
    birdImg.onload()
    {
        context.drawImage(birdImg, nird.x, bird.y, bird.width, bird.height);
    }
    topPipeImg = new Image();
    topPipeImg.src = "./toppipe.png";
    bottom = new Image();
    bottomPipeImg.src = "./bottompipe.png";
    requestAnimationFrame(update);

    setInterval(placePipes, 1500);
}
// bridie
let birdWidth = 34;// ratio of actal img remains sme
let birdHeight = 24;
let birdx = boardWidth / 8;
let birdy = boardWidth / 2;
let birdImg;

let bird = {
    x: birdx,
    y: birdy,
    width: birdWidth,
    height: birdHeight,
}

function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height)

}
//pipes

let pipeArray = [];
let pipeWIdth = 64;
let pipeHeight = 512; // ratio = 384/3072 = 1/8
let pipex = boardWidth;
let pipey = 0;

let topPipeimg
//drawing birdie


function placePipes() {
    let topPipe = {
        img: topPipeImg,
        x: pipex,
        y: pipey,
        wigth: pipeWidth,
        height: pipeHeight,
        passed: false
    }
    pipeArrat.push(topPipe);
}