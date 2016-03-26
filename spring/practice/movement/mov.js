function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
function positionMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.top = "10px";
    elem.style.left = "10px";
    elem.style.position = "absolute";
    moveElement("message",400,200,10);
    var para = document.getElementById("message2");
    para.style.top = "10px";
    para.style.top = "10px";
    para.style.position = "absolute";
    moveElement("message2",300,100,10);
}
addLoadEvent(positionMessage)

function moveMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(xpos == 1000 && ypos == 600){
        return true;
    }
    if(xpos < 1000){
        xpos++;
    }
    if(xpos>1000){
        xpos--;
    }
    if(ypos < 600){
        ypos++;
    }
    if(ypos > 600){
        ypos --;
    }
    elem.style.left = xpos +"px";
    elem.style.top = ypos +"px";
    movement = setTimeout("moveMessage()",10);
}



function moveElement(elementID,final_x,final_y,interval){
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(xpos == final_x && ypos == final_y){
        return true;
    }
    if(xpos<final_x){
        xpos++;
    }
    if(xpos>final_x){
        xpos--;
    }
    if(ypos<final_y){
        ypos++;
    }
    if(ypos>final_y){
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
    movement = setTimeout(repeat,interval);
}