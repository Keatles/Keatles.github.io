/**
 * Created by kee on 2016-03-24.
 */
//检测XMLHttpRequest
function getHTTPObject(){
    if(typeof XMLHttpRequest == "undefined")
        XMLHttpRequest = function () {
            try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
                catch(e){}
            try{return new ActiveXObject("Msxml2.XMLHTTP.3.3");}
                catch(e){}
            try{return new ActiveXObject("Msxml2.XMLHTTP");}
                catch(e){}
            return false;
        }
    return new XMLHttpRequest();

}