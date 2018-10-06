var rs = require('readline-sync');

var ConvertBase = function (num) {
    return {
        from : function (baseFrom) {
            return {
                to : function (baseTo) {
                    return parseInt(num, baseFrom).toString(baseTo);
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
    var fNum2 = rs.question('2nd Number: ');
    var action = rs.question('Enter the action{+,-,*,/,%}');

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
    }
    console.log(result);
}