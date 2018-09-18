function checkEmail(email){
    var pattern = /^[a-zA-Z0-9]{3}+@[a-zA-Z0-9]{3}+\.[a-z]{3}$/;
    return pattern.test(email);
}

function checkNum(inputtext){
    var bool = false;
    var Number = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    if(inputtext.value.match(Number)){
        bool = true;
    }
    return bool;
}

function checkAddress(inputtext){
    var bool = false;
    var order = /^[A-Za-z ]+(?:,?\s+)[A-Za-z]{2,}$/;
    if(inputtext.test(order)){
        bool = true;
    }
    return bool;
}

function Validate(){
    if(email){
        checkEmail();
    }
    if(phonenumber)[
        checkNum();
    ]
    if(address){
        checkAddress();
    }
}
