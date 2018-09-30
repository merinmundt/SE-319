var c = document.getElementById("snake");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0,300);
var posX = 0;
var posY = 300;
var timer = null;
var direction = "right"; //right, up, left, down

function startStop(){

    var button = document.getElementById("startStop");

    if(!timer){
        timer = setInterval(function(){
            draw();
        }, 1000);
        button.innerHTML = "Stop";
    }else{
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
        case "up":
            direction = "left";
            break;
        case "left":
            direction = "down";
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
        case "up":
            direction = "right";
            break;
        case "left":
            direction = "up";
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
        case "up":
            posY -= 5;
            if(posY < 0) startStop();
            break;
        case "left":
            posX -= 5;
            if(posX < 0) startStop();
            break;
        case "down":
            posY += 5;
            if(posY > 600) startStop();
            break;
    }

    ctx.lineTo(posX,posY);
    ctx.stroke();
}