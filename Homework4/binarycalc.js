var rs = require('readline-sync');
main();
//var result = fNum1 + action + fNum2
//var result = eval(result);
//console.log(result);

function main(){
    var fNum1 = rs.question('1st Number: ');
    var fNum2 = rs.question('2nd Number: ');
    var action = rs.question('Enter the action{+,-,*,/,%}');

    var int1 = toInt(fNum1);
    var int2 = toInt(fNum2);
}

function toInt(number){
    var num = ConvertBase.bin2dec(number);
    console.log(num);
}

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