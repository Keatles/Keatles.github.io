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
    var text = document.getElementById("input");
    var show = document.getElementById("show");
    var reCat = new RegExp("[^0-9A-Za-z\u4e00-\u9fa5]");
    var t = text.value.split(reCat);
    for(var i=0;i< t.length;i++) {
        var first = show.firstChild;
        if (t[i]) {
            var elem = document.createElement("div");
            var word = document.createTextNode(t[i]);
            elem.setAttribute("class", "block");
            elem.appendChild(word);
            show.insertBefore(elem, first);
        }
    }
}
function rightInput(){
    var text = document.getElementById("input");
    var show = document.getElementById("show");
    var reCat = new RegExp("[^0-9A-Za-z\u4e00-\u9fa5]");
    var t = text.value.split(reCat);
    for(var i=0;i< t.length;i++) {
        if (t[i]) {
            var elem = document.createElement("div");
            var word = document.createTextNode(t[i]);
            elem.setAttribute("class", "block");
            elem.appendChild(word);
            show.appendChild(elem);
        }
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
function search(){
    initBackgroundColor()
    var show = document.getElementById("show");
    var content = document.getElementById("search");
    var reg = new RegExp(content.value);
   for(var i=0;i<show.children.length;i++){
    if(show.children[i].textContent.match(reg)){
        show.children[i].style.background = "deepskyblue";
    }else{
        show.children[i].style.backgroundColor = "#cc8091"
    }
   }
}
function initBackgroundColor(){
    var show = document.getElementById("show");
    for(var i=0;i<show.children.length;i++){
        show.children[i].style.backgroundColor = "#cc8091"
    }
}

/**
 * 绑定按钮
 */

var lib = document.getElementById("input-left");
var rib = document.getElementById("input-right");
var lob = document.getElementById("out-left");
var rob = document.getElementById("out-right");
var sea = document.getElementById("search-btn");
addEvent(lib,"click",leftInput);
addEvent(rib,"click",rightInput);
addEvent(lob,"click",leftOut);
addEvent(rob,"click",rightOut);
addEvent(sea,"click",search);