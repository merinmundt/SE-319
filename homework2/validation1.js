function alphanumericf(inputtext){
    var isValid = false;
    var letternumber = /^[0-9a-zA-Z]+$/;
    if(inputtext.value.match(letternumber)){
        isValid = true;
    }
    if(isValid){
        unhideCheck(checkImagef);
    }
    else{
        unhideX(Ximagef);
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
        unhideCheck(checkImagel);
    }
    else{
        unhideX(Ximagel);
    }
    return isValid;
}

function dropdowng(inputtext){}
{
    var strUser = inputtext.options[inputtext.selectedIndex].value;

    var strUser1 = inputtext.options[inputtext.selectedIndex].text;
    if(strUser==0)
    {
        unhideX(Ximageg);
    }
    else{
        unhideCheck(checkImageg);
    }
}

function dropdowns(inputtext){}
{
    var strUser = inputtext.options[inputtext.selectedIndex].value;

    var strUser1 = inputtext.options[inputtext.selectedIndex].text;
    if(strUser==0)
    {
            unhideX(Ximages);
    }
    else{
        unhideCheck(checkImages);
    }
}

function unhideX(id) {
    var img = Document.getElementById(id);
    img.style.visibility = 'visible';
}

function unhideCheck(id){
    var img = Document.getElementById(id);
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
