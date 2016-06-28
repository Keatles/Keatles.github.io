// getElementByClassName
function getClass1(clsName,parent){
	var oParent = parent?parent:document,
		eles = [];
		elements = oParent.getElementsByTagName('*');

	for(var i=0,l=elements.length;i<l;i++){
		classSplit = elements[i].className.split(new RegExp("\\s"));
		for(var j=0;j<classSplit.length;j++){
			if(classSplit[j]===clsName){
				eles.push(elements[i]);
			}
		}
	}
	return eles;
}
// getElementByClassName
function getClass(clsName,parent){
	var oParent = parent?(document.getElementById(parent)):document,
		eles = [];
		elements = oParent.getElementsByTagName('*');

	for(var i=0,l=elements.length;i<l;i++){
		classSplit = elements[i].className.split(new RegExp("\\s"));
		for(var j=0;j<classSplit.length;j++){
			if(classSplit[j]===clsName){
				eles.push(elements[i]);
			}
		}
	}
	return eles;
}

// 复制
function clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        var len = obj.length;
        for (var i = 0; i < len; ++i) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

function loadAction(htmlNow) {
        console.log("正在加载...");
        //$('#load_content').load('http://jqueryui.com/', );  
        $('#mbody').load(htmlNow, function(responseText, textStatus, XMLHttpRequest) {  
            //所有状态成功，执行此函数，显示数据  //textStatus四种状态 success、error、notmodified、timeout  
            if (textStatus == "error") {  
                var msg = "错误: ";  
                console.log(msg + XMLHttpRequest.status + " " + XMLHttpRequest.statusText);
            }  
            else if (textStatus == "timeout") {  
                var msg = "操时: ";  
                console.log(msg + XMLHttpRequest.status + " " + XMLHttpRequest.statusText);
            }  
            else {  
                console.log("加载完成");
                //$(this).fadeIn();  
            }  
        });  
}