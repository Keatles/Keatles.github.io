function addEvent(element,action,func){
    if(element.addEventListener){
        element.addEventListener(action,func,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+action,func);
    }else{
        element["on"+action]=func;
    }
}

//
function leftInput(){
    var num = document.getElementById("input");
    var show = document.getElementById("show");
    var first = show.firstChild;
    if(num.value) {
        var elem = document.createElement("div");
        var text = document.createTextNode(num.value);
        elem.setAttribute("class","block");
        elem.appendChild(text);
        show.insertBefore(elem,first);
    }
}
function rightInput(){
    var num = document.getElementById("input");
    var show = document.getElementById("show");
    if(num.value) {
        var elem = document.createElement("div");
        var text = document.createTextNode(num.value);
        elem.setAttribute("class","block");
        elem.appendChild(text);
        show.appendChild(elem);
    }
}
function leftOut() {
    var show = document.getElementById("show");
    var first = show.firstElementChild.textContent;
    alert(first);
    show.removeChild(show.firstElementChild);
}
function rightOut(){
    var show = document.getElementById("show");
    var last = show.lastElementChild.textContent;
    alert(last);
    show.removeChild(show.lastElementChild);
}

/**
 * 绑定按钮
 */

var lib = document.getElementById("input-left");
var rib = document.getElementById("input-right");
var lob = document.getElementById("out-left");
var rob = document.getElementById("out-right");
addEvent(lib,"click",leftInput);
addEvent(rib,"click",rightInput);
addEvent(lob,"click",leftOut);
addEvent(rob,"click",rightOut)