function alphanumericf(inputtext){
    var isValid = false;
    var letternumber = /^[0-9a-zA-Z]+$/;
    if(inputtext.value.match(letternumber)){
        isValid = true;
    }
    if(isValid){
        unhide("checkImagef");
    }
    else{
        unhide("Ximagef");
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
        unhide("checkImagel");
    }
    else{
        unhide("Ximagel");
    }
    return isValid;
}

function dropdowng(inputtext){}
{
    var strUser = inputtext.options[inputtext.selectedIndex].value;

    var strUser1 = inputtext.options[inputtext.selectedIndex].text;
    if(strUser==0)
    {
        unhide("Ximageg");
    }
    else{
        unhide("checkImageg");
    }
}

function dropdowns(inputtext){}
{
    var strUser = inputtext.options[inputtext.selectedIndex].value;

    var strUser1 = inputtext.options[inputtext.selectedIndex].text;
    if(strUser==0)
    {
            unhide("Ximages");
    }
    else{
        unhide("checkImages");
    }
}

function unhide(id) {
    var img = Document.getElementById(id);
    img.style.visibility = 'visible';
}

function allGood(){

}
function validate(){
    var firstname = document.getElementById("firstname");
        alphanumericf(firstname);
    
    var lastname = document.getElementById("lastname");
        alphanumericl(lastname);
    
    var gender = document.getElementById("gender");
        dropdowng(gender.value);
    
    var state = document.getElementById("state");
        dropdowns(state.value);

    window.location = validation2.html;
}
