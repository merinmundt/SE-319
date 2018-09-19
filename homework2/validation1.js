function alphanumericf(inputtext){
    var isValid = false;
    var letternumber = /^[0-9a-zA-Z]+$/;
    if(inputtext.value.match(letternumber)){
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

function alphanumericl(inputtext){
    var isValid = false;
    var letternumber = /^[0-9a-zA-Z]+$/;
    if(inputtext.value.match(letternumber)){
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

function dropdowng(inputtext){}
{
    var strUser = inputtext.options[inputtext.selectedIndex].value;

    var strUser1 = inputtext.options[inputtext.selectedIndex].text;
    if(strUser==0)
    {
        unhideX();
    }
    else{
        unhideCheck();
    }
}

function dropdowns(inputtext){}
{
    var strUser = inputtext.options[inputtext.selectedIndex].value;

    var strUser1 = inputtext.options[inputtext.selectedIndex].text;
    if(strUser==0)
    {
            unhideX();
    }
    else{
        unhideCheck();
    }
}

function unhideX() {
    var img = Document.getElementById("Ximage");
    img.style.visibility = 'visible';
}

function unhideCheck(){
    var img = Document.getElementById("Checkimage");
    img.style.visibility = 'visible';
    
}

function validate(){
    var firstname = document.getElementById("firstname");
        alphanumericf(firstname.value);
    
    var lastname = document.getElementById("lastname");
        alphanumericl(lastname.value);
    
    var gender = document.getElementById("gender");
        dropdowng(gender.value);
    
    var state = document.getElementById("state");
        dropdowns(state.value);
    
}
