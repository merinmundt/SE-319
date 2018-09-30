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
            direction = "up";
            break;
        case "left":
            direction = "down";
            break;
        case "up":
            direction = "left";
            break;
        case "down":
            direction = "right";
            break;
    }
}


function turnRight(){
    switch(direction){
        case "right":
            direction = "down";
            break;
        case "left":
            direction = "up";
        case "up":
            direction = "right";
            break;
        case "down":
            direction = "left";
            break;
    }
}

function draw(){
    switch(direction){
        case "right":
            posX += 5;
            if(posX > 600) startStop();
            break;
        case "left":
            posY -= 5;
            if(posY < 0) startStop();
            break;
        case "up":
            posY -= 5;
            if(posY < 0) startStop();
            break;
        case "down":
            posX += 5;
            if(posX > 600) startStop();
            break;
    }

    ctx.lineTo(posX, posY);
    ctx.stroke();
}