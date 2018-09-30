
var memory;
var Memory = 0;


var operator = null;
var oldOp = null;
var oldbutton;
var button1;

function handleButton(button){
    var button1 = null;
    var action = button.dataset.action;
    var answer = document.getElementById("ans");

    switch(action){
        case "number":
            handleNumber(button.value);
            highlight(button);
            break;

        case "add":
            operator = "add";
            changeColor(button);
            break;

        case "subtract":
            operator = "sub";
            changeColor(button);
            break;

        case "multiply":
            operator = "mul";
            changeColor(button);

            break;

        case "divide":
            operator = "div";
            changeColor(button);
            break;

        case "calculate":
            operator = "equals"
            calculate();
            break;

        case "negate":
            if(isNaN(answer.value)){
                return;
            }
            answer.value = -Number(answer.value);
            changeColor(button);
            break;

        case "clear":
            answer.value = "";
            changeColor(button);
            break;

        case "memorysub":
            Memory = Memory - Number(answer.value);
            changeColor(button);
            break;

        case "memoryadd":
            Memory = Memory + Number(answer.value);
            changeColor(button);
            break;

        case "memoryclear":
            Memory = 0;
            changeColor(button);
            break;

        case "memory":
            answer.value = Memory;
            changeColor(button);
            break;

    }


}

function handleNumber(number){
    var answer = document.getElementById("ans");

    if(operator != null){
        memory = answer.value;
        answer.value = number;
        oldOp = operator;
        operator = null;
    }
    else if(operator == null){
        answer.value = answer.value + number;
    }


}

function calculate(){
    var answer = document.getElementById("ans");
    var ans;
    switch(oldOp){
        case "add":
            ans = Number(answer.value) + Number(memory);
            break;

        case "sub":
            ans = Number(memory) - Number(answer.value);
            break;
        
        case "div":
            ans = Number(memory) / Number(answer.value);
            break;

        case "mul":
            ans = Number(memory) * Number(answer.value);
            break;

        case null:
            return;
            

    }

    answer.value = ans;
    memory = ans;
    oldbutton.className = "";
    oldbutton = null;
    button1.className = "";
    button1 = null;

}

function changeColor(button){
        if(oldbutton){
            oldbutton.className = "";
        }
        
        button.className = "redbutton";
        oldbutton = button;
}

function highlight(button){
    if(button1){
        button1.className = "";
    }    
    button.className = "highlight";
    button1 = button;
}

