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
/** 
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

function dropdowng(inputtext)
{
    var isSelected = inputtext.selectedIndex > -1;
    if(!isSelected)
    {
        unhide("Ximageg");
    }
    else{
        unhide("checkImageg");
    }
}

function dropdowns(inputtext)
{
    var isSelected = inputtext.selectedIndex > -1;
    if(!isSelected)
    {
            unhide("Ximages");
    }
    else{
        unhide("checkImages");
    }
}*/

function unhide(id) {
    var img = document.getElementById(id);
    img.style.visibility = 'visible';
}

function validate(){
    var firstname = document.getElementById("firstname");
        alphanumericf(firstname);
    
    /**var lastname = document.getElementById("lastname");
        alphanumericl(lastname);
    
    var gender = document.getElementById("gender");
        dropdowng(gender);
    
    var state = document.getElementById("state");
        dropdowns(state);**/

}
