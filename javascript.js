let inputdisplay= document.getElementById("inputdisplay");
let outputdisplay=document.getElementById("display");
inputdisplay.addEventListener("keypress", function(event) {
    if (event.key == "Enter"|| event.key=="=")
        calculation();
});

function calculation(){
        outputdisplay.innerText=eval(inputdisplay.value);
        inputdisplay.value="";
}
function ce(){
    outputdisplay.innerHTML='';
    inputdisplay.value="";
    inputdisplay.focus();
}
function de(){
    inputdisplay.value=inputdisplay.value.toString().slice(0,-1);
    inputdisplay.focus();
}
function mod(){
    inputdisplay.value+='%';
    inputdisplay.focus();
}
function div(){
    inputdisplay.value+='/';
    inputdisplay.focus();
}
function mul(){
    inputdisplay.value+='*';
    inputdisplay.focus();
}
function add(){
    inputdisplay.value+='+';
    inputdisplay.focus();
}
function sub(){
    inputdisplay.value+='-';
    inputdisplay.focus();
}
function point(){
    inputdisplay.value+='.';
    inputdisplay.focus();
}
function zero(){
    inputdisplay.value+='0';
    inputdisplay.focus();
}
function one(){
    inputdisplay.value+='1';
    inputdisplay.focus();
}
function two(){
    inputdisplay.value+='2';
    inputdisplay.focus();
}
function three(){
    inputdisplay.value+='3';
    inputdisplay.focus();
}
function four(){
    inputdisplay.value+='4';
    inputdisplay.focus();
}
function five(){
    inputdisplay.value+='5';
    inputdisplay.focus();
}
function six(){
    inputdisplay.value+='6';
    inputdisplay.focus();
}
function seven(){
    inputdisplay.value+='7';
    inputdisplay.focus();
}
function eight(){
    inputdisplay.value+='8';
    inputdisplay.focus();
}
function nine(){
    inputdisplay.value+='9';
    inputdisplay.focus();
}
