/*
if(questionnaire.length===0){
	console.log(11111);
	$("#mbody").load("new.html");
}
*/
/*
var questionnaire = new Array();

q1 = [12];
questionnaire = [
	{title:"我的问卷",time:new Date(2016,6,8),state:"1",question:q1}
];
*/

var list = document.getElementById("list");
var allCount = 0;
tableAdd();

// 删除表格内容
function tableDelete(nowLength){
	for(var i=0;i<=nowLength;i++){
		list.deleteRow(1);
	}
}
// 添加内容
function tableAdd(){
	//console.log(questionnaire[0].state);
	for(var i=0;i<questionnaire.length;i++){
		var tempdata = "";
		tempdata += "<tr class='trShow'><td> <input type='checkbox' name=" + i + " id='ch" + i + "''> </td>";
		tempdata += "<td>" + questionnaire[i].title + "</td>";
		var iTime = getTimeDetail(questionnaire[i].time);
		tempdata += "<td>" + iTime.year + "-" + (iTime.month<10?("0"+iTime.month):iTime.month) + "-" + (iTime.day<10?("0"+iTime.day):iTime.day) + "</td>";
		if(questionnaire[i].state===0){
			tempdata += "<td class='underPress'> 未发布 </td>";
			tempdata += "<td colspan='2'> <button id='edit"+i+"' class='button'>编辑</button> <button id='delete"+i+"' class='button'>删除</button> <button id='check"+i+"' class='button'>查看问卷</button> </td>";
		}else{
			var now = new Date();
			if(now-questionnaire[i].time<0){
				tempdata += "<td> 已发布 </td>";
			}else{
				tempdata += "<td> 已结束 </td>";
			}
			tempdata += "<td colspan='2'> <button id='data"+i+"' class='button'>查看数据</button> <button id='check"+i+"' class='button'>查看问卷</button> </td>";
		}

		$("#list").append(tempdata+"</tr>");
		//list.innerHTML += tempdata + "</tr>";
	}
	tempdata = "<tr><td><input type='checkbox' name='all' id='all'/></td> <td colspan='5'>  <span class='deleteAll'>全选 <button id='deleteAllButton' class='button'>删除</button></span> </td></tr>";
	$("#list").append(tempdata);
	// list.innerHTML += tempdata; //ie9以下对innerHTML不能作用于table，select元素，可作用于div等元素
	tableShow();
	buttonReady();
}
// 添加样式
function tableShow() {
	// 更改背景颜色
	trShow = getClass('trShow');
	for (var i = trShow.length - 1; i >= 0; i--) {
		trShow[i].onmouseover = function(){
			this.style.background = '#FCF0E5';
		}
		trShow[i].onmouseout = function(){
			this.style.background = '#FFFFFF';
		}
	}
}
// 添加按键事件
function buttonReady() {
	var newButtonList = document.getElementById("newButtonList");
	newButtonList.onclick = function(){
		nowQuestion = -1;
		//$("#mbody").load("edit.html");
		loadAction("edit.html");
	}
	// 复选框
	document.getElementById('all').onclick = function(){
		if(allCount===0){
			for (var i = questionnaire.length - 1; i >= 0; i--) {
				//console.log(document.getElementById('ch'+i));
				document.getElementById('ch'+i).checked = true;
				allCount = 1;
			}
		}else{
			for (var i = questionnaire.length - 1; i >= 0; i--) {
				document.getElementById('ch'+i).checked = false;
				allCount = 0;
			}
		}
	}
	for (var checkedQ = questionnaire.length - 1; checkedQ >= 0; checkedQ--) {
		document.getElementById('ch'+checkedQ).onclick = function(){
			totalCount();
		}
	}
	document.getElementById("cancel").onclick = function(){
		document.getElementById("coverLayer").style.display = "none";
		document.getElementById("floatLayer").style.display = "none";
	}
	document.getElementById("coverLayer").onclick = function(){
		document.getElementById("coverLayer").style.display = "none";
		document.getElementById("floatLayer").style.display = "none";
	}
	// 删除-总
	document.getElementById('deleteAllButton').onclick = function() {
		if(totalCount()>0){
			document.getElementById("coverLayer").style.display = "block";
			document.getElementById("floatLayer").style.display = "block";
			document.getElementById("certain").onclick = function(){
				document.getElementById("coverLayer").style.display = "none";
				document.getElementById("floatLayer").style.display = "none";
				var nowLength = questionnaire.length;
				for (var i = questionnaire.length - 1; i >= 0; i--) {
					if(document.getElementById('ch'+i).checked === true){
						deleteI(i);
					}
				}
				if(questionnaire.length===0){
					//$("#mbody").load("new.html");
					loadAction("new.html");
				}else{
					tableDelete(nowLength);
					tableAdd();
				}
			}
		}
	}
	// 定义每行按键
	for (var i = questionnaire.length - 1; i >= 0; i--) {
		if(questionnaire[i].state === 0){
			document.getElementById('edit'+i).onclick = function() {
				nowQuestion = parseInt(this.id.charAt(this.id.length-1));
				//console.log(nowQuestion);
				//$("#mbody").load("edit.html");
				loadAction("edit.html");
			}
			document.getElementById('delete'+i).onclick = function() {
				document.getElementById("coverLayer").style.display = "block";
				document.getElementById("floatLayer").style.display = "block";
				var tempNum = parseInt(this.id.charAt(this.id.length-1));
				document.getElementById("certain").onclick = function(){
					document.getElementById("coverLayer").style.display = "none";
					document.getElementById("floatLayer").style.display = "none";
					deleteI(tempNum);
					if(questionnaire.length===0){
						//$("#mbody").load("new.html");
						loadAction("new.html");
					}else{
						tableDelete(questionnaire.length+1);
						tableAdd();
					}
				}
			}
			document.getElementById('check'+i).onclick = function() {
				nowQuestion = parseInt(this.id.charAt(this.id.length-1));
				//console.log(nowQuestion);
				//$("#mbody").load("check.html");
				loadAction("check.html");
			}
		}else{
			document.getElementById('data'+i).onclick = function() {
				nowQuestion = parseInt(this.id.charAt(this.id.length-1));
				//console.log(nowQuestion);
				//$("#mbody").load("data.html");
				loadAction("data.html");
			}
			document.getElementById('check'+i).onclick = function() {
				nowQuestion = parseInt(this.id.charAt(this.id.length-1));
				//console.log(nowQuestion);
				//$("#mbody").load("check.html");
				loadAction("check.html");
			}
		}
	}
}
// 判断复选框是否全部选择
function totalCount() {
	var tCount = 0;
	for (var i = questionnaire.length - 1; i >= 0; i--) {
		if (document.getElementById('ch'+i).checked === true) {
			tCount += 1;
		}
	}
	if(tCount===questionnaire.length){
		document.getElementById('all').checked = true;
	}else{
		document.getElementById('all').checked = false;
	}
	return tCount;
}
// 删除第count个数据
function deleteI(count) {
	for (var i = count; i < questionnaire.length; i++) {
		questionnaire[i] = questionnaire[i+1];
		//console.log(i);
	}
	questionnaire.length -= 1;
}

// 获取日期
function getTimeDetail(timeX) {
	var year = timeX.getFullYear();
	var month = timeX.getMonth() + 1;
	var day = timeX.getDate();
	return {year:year,month:month,day:day};
}