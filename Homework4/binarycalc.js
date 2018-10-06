var rs = require('readline-sync');

var ConvertBase = function (num) {
    return {
        from : function (baseFrom) {
            return {
                to : function (baseTo) {
                    return parseInt(parseInt(num, baseFrom).toString(baseTo));
                }
            };
        }
    };
};
    
// binary to decimal
ConvertBase.bin2dec = function (num) {
    return ConvertBase(num).from(2).to(10);
};

main();

function main(){
    var fNum1 = rs.question('1st Number: ');
    var action = rs.question('Enter the action{+,-,*,/,%}');
    if(action == ("<<" || ">>")){
        toOp2(action, fNum1);
        return;
    }
    var fNum2 = rs.question('2nd Number: ');
    

    var int1 = toInt(fNum1);
    var int2 = toInt(fNum2);
    var operator = toOp(action, int1, int2);
}

function toInt(number){
    var num = ConvertBase.bin2dec(number);
    return num;
}

function toOp(operator, number1, number2){
    var result;
    switch(operator){
        case "+":
            result = number1 + number2;
            break;

        case "-":
            result = number1 - number2;
            break;

        case "*":
            result = number1 * number2;
            break;
        
        case "%":
            result = number1 / number2;
            break;
    }
    console.log(result);
}

function toOp2(operator, number){
    var result;
    var num = parseInt(number, 2);
    switch(operator){
        case "<<":
            result = ConvertBase.bin2dec(number) << 1;
            break;
        case ">>":
            result = ConvertBase.bin2dec(number) >> 1;
            break;
    }
    console.log(result.toString(2));
    
}