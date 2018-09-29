var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0,300);
var posX = 0;
var posY = 300;
var timer = null;
var direction = "right";//right, left, up, down

function startStop(){
    var button = document.getElementById("startStop");
    if(!timer){
        timer = setInterval(function(){
            draw();
        },1000);
        button.innerHTML = "Stop";
    }
    else{
        clearInterval(timer);
        timer = null;
        button.innerHTML = "Start";
    }
}
function turnLeft(){
    switch(direction){
        case "right":

        case "left":

        case "up":

        case "down":

    }
}


function turnRight(){
    switch(direction){
        case "right":

        case "left":

        case "up":

        case "down":
    
    }
}

function draw(){
    ctx.beginPath();
    ctx.moveTo(posX,posY);
    posX = posX + 50;
    ctx.lineTo(posX,posY);
    ctx.stroke();
}