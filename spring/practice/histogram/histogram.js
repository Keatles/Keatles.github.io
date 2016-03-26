/**
 * Created by kee on 2016-03-25.
 */
function makeGraph(container, labels)
{
    container = document.getElementById(container);
    labels = document.getElementById(labels)
    var dnl = container.getElementsByTagName("li");
    for(var i = 0; i < dnl.length; i++)
    {
        var item = dnl.item(i);
        var value = item.innerHTML;
        var color = item.style.background=color;
        var content = value.split(":");
        value = content[0];
        item.style.height=value + "px";
        item.style.top=(199 - value) + "px";
        item.style.left = (i * 50 + 20) + "px";
        item.style.height = value + "px";
        item.innerHTML = value;
        item.style.visibility="visible";
        color = content[2];
        if(color != false) item.style.background=color;
        labels.innerHTML = labels.innerHTML +
            "<span style='margin:8px;background:"+ color+"'>" +
            content[1] + "</span>";
    }
}

window.onload=function () { makeGraph("graph", "labels") }