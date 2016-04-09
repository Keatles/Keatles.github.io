var show = document.getElementById("show");
var tag = document.getElementById("tag");

//
/**
 *存储tag的数组
 */
tag_content = [];
intst_content = []
function tagShow(){
    document.onkeydown = function(event){
        e = event?event:(window.event?window.event:null);
        if(e.keyCode == 13 || e.keyCode ==32 || e.keyCode ==188){
            input();
            tag.value = "";
        }
    }
}
function input(){
    checkRepeat();
    var first = show.firstChild;
    if (tag.value.trim()&&tag_content.indexOf(tag.value.trim()) == -1&&tag.value.trim()!=",") {
        var elem = document.createElement("p");
        var text = document.createTextNode(tag.value);
        elem.setAttribute("class", "block");
        elem.setAttribute("tabindex","2");
        elem.setAttribute("onmouseover","removeTag()");
        elem.setAttribute("onmouseout","recoverTag()")
        elem.setAttribute("onclick","removeClickTag()");
        elem.appendChild(text);
        show.insertBefore(elem, first);
    }
    if(show.childNodes.length>11){
        out();
    }
}
function checkRepeat(){
    for(var i=0;i<show.children.length;i++){
        tag_content.push(show.childNodes[i].innerHTML);
    }
    return tag_content;
}
function checkInterestRepeat(){
    var intst = document.getElementById("interest");
    for(var i=0;i<intst.children.length;i++){
        intst_content.push(intst.childNodes[i].innerHTML)
    }
    return intst;
}
function out(){
    show.removeChild(show.lastElementChild);
}
function removeTag(){
    show.childNodes[0].innerHTML = "删除" + show.childNodes[0].innerHTML +"?";
}
function recoverTag(){
    show.childNodes[0].innerHTML = show.childNodes[0].innerHTML.replace("删除","");
    show.childNodes[0].innerHTML = show.childNodes[0].innerHTML.replace("?","");
}
function removeClickTag(){
    show.childNodes[0].innerHTML = "";
}

function leftInput(){
    checkInterestRepeat();
    var text = document.getElementById("interest-input");
    var intst = document.getElementById("interest");
    var reCat = new RegExp("[^0-9A-Za-z\u4e00-\u9fa5]");
    var t = text.value.split(reCat);
    for(var i=0;i< t.length;i++) {
        var first = intst.firstChild;
        if (t[i]) {
            var elem = document.createElement("p");
            var word = document.createTextNode(t[i]);
            elem.setAttribute("class", "block");
            elem.appendChild(word);
            intst.insertBefore(elem, first);
        }
    }
}

/**
 * 绑定事件
 */
var interest = document.getElementById("interest-button");
addEventListener("load",tagShow,false);
interest.addEventListener("click",leftInput,false);

