function alphanumeric(inputtext){
    var bool = false;
    var letternumber = /^[0-9a-zA-Z]+$/;
    if(inputtext.value.match(letternumber)){
        bool = true;
    }
}
function dropdown(){}
{
    var e = document.getElementById("ddlView");
    var strUser = e.options[e.selectedIndex].value;

    var strUser1 = e.options[e.selectedIndex].text;
    if(strUser==0)
    {
        alert("Please select a user");
    }
}
