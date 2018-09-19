function alphanumericf(inputtext){
    var isValid = false;
    var letternumber = /^[0-9a-zA-Z]+$/;
    if(inputtext.value.match(letternumber)){
        isValid = true;
    }
    if(isValid){
        unhide("checkImagef");
        rehide("Ximagef");
    }
    else{
        unhide("Ximagef");
        rehide("checkImagef");
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
        rehide("Ximagel");
    }
    else{
        unhide("Ximagel");
        rehide("checkImagel");
    }
    return isValid;
}

function dropdowng(inputtext)
{
    var isValid = false
    var isSelected = inputtext.selectedIndex > 0;
    if(!isSelected)
    {
        unhide("Ximageg");
        rehide("checkImageg");
    }
    else{
        unhide("checkImageg");
        rehide("Ximageg");
        isValid = true;
    }
    return isValid;
}

function dropdowns(inputtext)
{
    var isValid = false
    var isSelected = inputtext.selectedIndex > 0;
    if(!isSelected)
    {
            unhide("Ximages");
            rehide("checkImages");
            
    }
    else{
        unhide("checkImages");
        rehide("Ximages");
        isValid = true;
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

function validate(){
    var firstname = document.getElementById("firstname");
        var validf = alphanumericf(firstname); 
    
    var lastname = document.getElementById("lastname");
        var validl = alphanumericl(lastname);
     
    var gender = document.getElementById("gender");
        var validg = dropdowng(gender);
    
    var state = document.getElementById("state");
        var valids = dropdowns(state);

    if(validf&&validl&&validg&&valids){
        window.location = "validation2.html";
    }

}
