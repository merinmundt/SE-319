function checkEmail(email){
    var pattern = /^[a-zA-Z0-9]{3}+@[a-zA-Z0-9]{3}+\.[a-z]{3}$/;
    if(pattern.test(email)){
        unhideCheck();
    }
    else{
        unhideX();
    }
    return pattern.test(email);
}

function checkNum(inputtext){
    var isValid = false;
    var Number = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    if(inputtext.value.match(Number)){
        isValid = true;
    }
    if(isValid){
        unhideCheck();
    }
    else{
        unhideX();
    }
    return isValid;
}

function checkAddress(inputtext){
    var isValid = false;
    var order = /^[A-Za-z ]+(?:,?\s+)[A-Za-z]{2,}$/;
    if(inputtext.test(order)){
        isValid = true;
    }
    if(isValid){
        unhideCheck();
    }
    else{
        unhideX();
    }
    return isValid;
}

function Validate(){
    var email = document.getElementById("email");
        checkEmail(email.value);
    
    var number = document.getElementById("num");
        checkNum(number.value);
    
    var address = document.getElementById("add");
        checkAddress(address.value);
    
}
