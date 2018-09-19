function checkEmail(email){
    var pattern = /^[a-zA-Z0-9]{3}+@[a-zA-Z0-9]{3}+\.[a-z]{3}$/;
    if(pattern.test(email)){
        unhide("checkImagee");
    }
    else{
        unhide("Ximagee");
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
        unhide("checkImagen");
    }
    else{
        unhide("Ximagen");
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
        unhide("checkImagea");
    }
    else{
        unhide("Ximagea");
    }
    return isValid;
}

function unhideX(id) {
    var img = Document.getElementById(id);
    img.style.visibility = 'visible';
}

function Validate(){
    var email = document.getElementById("email");
        checkEmail(email.value);
    
    var number = document.getElementById("num");
        checkNum(number.value);
    
    var address = document.getElementById("add");
        checkAddress(address.value);
    
}
