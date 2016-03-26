/**
 * Created by kee on 2016-03-24.
 */
//指定服务器上要访问的文件，指定请求类型

function getNewContent(){
    var request = getHTTPObject();
    if(request){
        request.open("GET","example.txt",true);
        request.onreadystatechange = function(){
            if(request.readyState == 4){
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else{
        alert("Sorry,your broswer doesn\'t support XMLHttpRequest");
    }
}

addLoadEvent(getNewContent);