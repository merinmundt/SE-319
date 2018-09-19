function checkEmail(email){
    var pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{3}$/;
    if(pattern.test(email)){
        unhide("checkImagee");
        rehide("Ximagee");
    }
    else{
        unhide("Ximagee");
        rehide("checkImagee");
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
        unhide("checkImagep");
        rehide("Ximagep");
    }
    else{
        unhide("Ximagep");
        rehide("checkImagep");
    }
    return isValid;
}

function checkAddress(inputtext){
    var isValid = false;
    var order = /^[A-Za-z ]+(?:,?\s+)[A-Za-z]{2}$/;
    if(inputtext.match(order)){
        isValid = true;
    }
    if(isValid){
        unhide("checkImagea");
        rehide("Ximagea");
    }
    else{
        unhide("Ximagea");
        rehide("checkImagea");
    }
    return isValid;
}

function unhide(id) {
    var img = document.getElementById(id);
    img.style.visibility = 'visible';
}

function rehide(id){
    var img = document.getElementById(id);
    if(img.style.visibility = 'visible'){
    img.style.visibility = 'hidden';
    }

}

function Validate(){
    var email = document.getElementById("email");
        checkEmail(email.value);
     
     var number = document.getElementById("num");
        checkNum(number);
     
    var address = document.getElementById("add");
        checkAddress(address.value);
        
    
}
