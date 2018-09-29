//listen to the keys being pressed
//determine which key is being pressed
var memory;
var oldmemory;
var operator;
var button;
var oldbutton;

function handleButton(button){
    
    var action = button.dataset.action;

    switch(action){
        case "number":
            handleNumber(button.value);

        case "add":

            operator = "add"; 
            break;

        case "subtract":
            operator = "add";

        case "multiply":
            operator = "add";

        case "divide":
            operator = "add";

        case "clear":
        
        case "memorysub":

        case "memoryadd":

        case "memoryclear":

    }


}

function handleNumber(number){
        var answer = document.getElementById("ans");
        answer.value = answer.value + number;

}

