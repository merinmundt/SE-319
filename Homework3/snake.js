var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0,300);
var posX = 0;
var posY = 300;

function startStop(){
    draw();
}
function turnLeft(){

}

function turnRight(){

}

function draw(){
    ctx.beginPath();
    ctx.moveTo(posX,posY);
    posX = posX + 50;
    ctx.lineTo(posX,posY);
    ctx.stroke();
}