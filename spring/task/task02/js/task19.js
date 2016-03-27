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
    if(num.value>=10 && num.value<=100) {
        var elem = document.createElement("div");
        var text = document.createTextNode(num.value);
        elem.setAttribute("class","block");
        elem.appendChild(text);
        show.insertBefore(elem,first);
    }else{
        alert("请输入10-100之间的数字");
    }
    histogram()
}
function rightInput(){
    var num = document.getElementById("input");
    var show = document.getElementById("show");
    if(num.value>=10 && num.value<=100) {
        var elem = document.createElement("div");
        var text = document.createTextNode(num.value);
        elem.setAttribute("class","block");
        elem.appendChild(text);
        show.appendChild(elem);
    }else{
        alert("请输入10-100之间的数字");
    }
    histogram()
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
function histogram(){
    {
        var display = document.getElementsByClassName("block");
        for (var i = 0; i < display.length; i++) {
            display[i].style.width = 20+'px';
            display[i].style.height = (display[i].innerHTML)*5 + 'px';
        }
    }
}
function bubbleSort(){
    var display = document.getElementsByClassName("block");
    for(var i=0;i<display.length;i++){
        for(var j=0;j<display.length-1;j++){
            if(parseInt(display[j].innerHTML)>parseInt(display[j+1].innerHTML)){
                var text = display[j+1].innerHTML;
                display[j+1].innerHTML = display[j].innerHTML;
                display[j].innerHTML = text;
                histogram()
            }
        }
    }
}

/**
 * 绑定按钮
 */

var lib = document.getElementById("input-left");
var rib = document.getElementById("input-right");
var lob = document.getElementById("out-left");
var rob = document.getElementById("out-right");
var bubble = document.getElementById("bubble");
addEvent(lib,"click",leftInput);
addEvent(rib,"click",rightInput);
addEvent(lob,"click",leftOut);
addEvent(rob,"click",rightOut)
addEvent(bubble,"click",bubbleSort)
window.onload = histogram();