//console.log(nowQuestion);
if (nowQuestion===-1) {
	nowQ = qq1;
	var qTime = new Date();
}else{
	if(nowQuestion>=0){
		nowQ = questionnaire[nowQuestion].question;
		var qTime = questionnaire[nowQuestion].time;
	}else{
		console.log(nowQuestion);
	}
}

//console.log(nowQ);
showContent();
dataTime();

document.getElementById("saveQuestion").onclick = function(){
	if(saveAll(0)){
	//$("#mbody").load("edit.html");
	loadAction("edit.html");
	}
}
document.getElementById("submitQuestion").onclick = function(){
	if(saveAll(1)){
	//$("#mbody").load("list.html");
	loadAction("list.html");
	}
}

// 加载内容
function showContent() {
	//console.log(nowQ);
	document.getElementById("questionType").style.display = "none";
	document.getElementById("inputTitle").value = nowQ[0].title;
	var questionArea = document.getElementById("question");
	questionArea.innerHTML = "";
	if(nowQ.length === 1){
		questionArea.style.display = "none";
	}else{
		questionArea.style.display = "block";
		for (var i = 1; i < nowQ.length; i++) {
			var temphtml;
			temphtml = "<div class='questionDetail question"+ i +"'><div class='questionTitle'>Q"+ i +"<input kind='text' id='q"+ i +"' class='spaceBoth question"+ i +"' value='"+ nowQ[i].title +"'/></div>";
			if(nowQ[i].kind === "one"){
				for(var j=0; j<nowQ[i].content.length; j++){
					temphtml += "<div class='questionOption'><span class='questionAnswerDelete' id='deleteq"+i+"a"+j+"'>×</span><input type='radio' name='"+ i +"'/><input type='text' id='q"+ i +"a"+ j +"' class='inputLength spaceBoth question"+ i +"' value='"+ nowQ[i].content[j] +"'/></div>";
				}
				temphtml += "<div class='questionUp'><span id='nOption"+ i +"' class='spaceBoth pointIt'>新增选项</span><span id='oFirst"+ i +"' class='spaceBoth pointIt'>首字排序</span></div>";
			}else{
				if(nowQ[i].kind === "more"){
					for(var j=0; j<nowQ[i].content.length; j++){
						temphtml += "<div class='questionOption'><span class='questionAnswerDelete' id='deleteq"+i+"a"+j+"'>×</span><input type='checkbox' name='"+ i +"'/><input type='text' id='q"+ i +"a"+ j +"' class='inputLength spaceBoth question"+ i +"' value='"+ nowQ[i].content[j] +"'/></div>";
					}
					temphtml += "<div class='questionUp'><span id='nOption"+ i +"' class='spaceBoth pointIt'>新增选项</span><span id='oFirst"+ i +"' class='spaceBoth pointIt'>首字排序</span></div>";
				}else{
					if(nowQ[i].kind === "abc"){
						temphtml += "<div class='questionOption'><textarea  id='q"+ i +"a' rows='5'></textarea></div>";
						temphtml += "<div class='questionUpRe'><span><input type='checkbox' checked="+ nowQ[i].required +" name='required"+ i +"' id='required"+ i +"' class='spaceBoth pointIt'/><span class='spaceBoth'>此题是否必填</span></span></div>";
					}else{
						console.log(nowQ[i].kind);
					}
				}
			}
			temphtml += "<div class='questionDown'><span id='up"+ i +"' class='spaceBoth pointIt'>上移</span><span id='down"+ i +"' class='spaceBoth pointIt'>下移</span><span id='copy"+ i +"' class='spaceBoth pointIt'>复用</span><span id='delete"+ i +"' class='spaceBoth pointIt'>删除</span></div>"
			temphtml += "</div>";
			$("#question").append(temphtml);
			//questionArea.innerHTML += temphtml;
		}
	}
	inputAction();
	styleContent();
}
// input change
function inputAction() {
	//console.log("inputAction");
	document.getElementById("inputTitle").onchange = function(){
		nowQ[0].title = this.value;
	}
	// 每题题目
	var qu = new Array(nowQ.length);
	for (var i = nowQ.length - 1; i > 0; i--) {
		qu[i] = document.getElementById("q"+i);
		qu[i].i = i;
		qu[i].onchange = function() {
			nowQ[this.i].title = this.value;
			xx = this.value;
		}
	}
	// 每题选项
	var qa = new Array(nowQ.length);
	for (var i = nowQ.length - 1; i > 0; i--) {
		qa[i] = [];
		for (var j = nowQ[i].content.length - 1; j >= 0; j--) {
			qa[i][j] = document.getElementById("q"+i+"a"+j);
			qa[i][j].i = i;
			qa[i][j].j = j;
			qa[i][j].onchange = function() {
				nowQ[this.i].content[this.j] = this.value;
				xx = this.value;
			}
		}
	}
	var qr = new Array(nowQ.length);
	for (var i = nowQ.length - 1; i >= 0; i--) {
		if (nowQ[i].kind==="abc") {
			document.getElementById("q"+i+"a").style.width = document.body.offsetWidth * 0.7 * 0.4 + "px";
			qr[i] = document.getElementById("required"+i);
			qr[i].i = i;
			qr[i].checked = nowQ[i].required;
			qr[i].onchange = function(){
				nowQ[this.i].required = this.checked;
			}
		}
	}
}
// 加样式和事件
function styleContent() {
	var questionI = new Array();
	for (var i = 1 ; i < nowQ.length; i++) {
		//console.log("question"+i);
		questionI[i-1] = getClass("question"+i);
		for (var k = questionI[i-1].length - 1; k >= 0; k--) {
			//console.log(questionI[i-1][k]);
			questionI[i-1][k].i = i;
			questionI[i-1][k].onmouseover = function(){
				var thisI = this.i;
				for (var kk = questionI[thisI-1].length - 1; kk >= 0; kk--) {
					questionI[thisI-1][kk].style.backgroundColor = "#FDF1E6";
				}
				var questionUp = getClass1("questionUp",questionI[thisI-1][0]);
				if(questionUp[0]){
					questionUp[0].style.display = "block";
					newOption(document.getElementById("nOption"+thisI),thisI);
					//orderLength(document.getElementById("oLength"+thisI),thisI);
					orderFirst(document.getElementById("oFirst"+thisI),thisI);
				}
				var questionDown = getClass1("questionDown",questionI[thisI-1][0]);
				questionDown[0].style.display = "block";
				var questionAnswerDelete = getClass1("questionAnswerDelete",questionI[thisI-1][0]);
				if (questionAnswerDelete[0]) {
					for (var j = questionAnswerDelete.length - 1; j >= 0; j--) {
						questionAnswerDelete[j].style.display = "block";
						questionAnswerDelete[j].i = thisI;
						questionAnswerDelete[j].j = j;
						questionAnswerDelete[j].onclick = function(){
							for (var ij = this.j ; ij < nowQ[this.i].content.length - 1; ij++) {
								nowQ[this.i].content[ij] = nowQ[this.i].content[ij+1]; 
							}
							nowQ[this.i].content.length -= 1;
							showContent();
						}

					}
				}
				if(thisI===1){
					document.getElementById("up"+thisI).style.display = "none";
				}else{
					moveUp(document.getElementById("up"+thisI),thisI);
				}
				if(thisI===questionI.length){
					document.getElementById("down"+thisI).style.display = "none";
				}else{
					moveDown(document.getElementById("down"+thisI),thisI);
				}
				copyIt(document.getElementById("copy"+thisI),thisI);
				deleteIt(document.getElementById("delete"+thisI),thisI);
			}
			questionI[i-1][k].onmouseout = function(){
				var thisI = this.i;
				for (var kk = questionI[thisI-1].length - 1; kk >= 0; kk--) {
					questionI[thisI-1][kk].style.backgroundColor = "#FFFFFF";
				}
				var questionUp = getClass1("questionUp",questionI[thisI-1][0]);
				if(questionUp[0]){
					questionUp[0].style.display = "none";
				}
				var questionDown = getClass1("questionDown",questionI[thisI-1][0]);
				questionDown[0].style.display = "none";
				var questionAnswerDelete = getClass1("questionAnswerDelete",questionI[thisI-1][0]);
				if (questionAnswerDelete[0]) {
					for (var i = questionAnswerDelete.length - 1; i >= 0; i--) {
						questionAnswerDelete[i].style.display = "none";
					}
				}
			}
		}
	}
	var questionAdd = document.getElementById("questionAdd");
	questionAdd.onclick = function() {
		document.getElementById("questionType").style.display = "block";
	}
	var oneChoose = document.getElementById("oneChoose");
	var moreChoose = document.getElementById("moreChoose");
	var textWrite = document.getElementById("textWrite");
	oneChoose.onclick = function() {
		addQuestion("one");
	}
	moreChoose.onclick = function() {
		addQuestion("more");
	}
	textWrite.onclick = function() {
		addQuestion("abc");
	}
	var saveButton = document.getElementById("saveButton");
	saveButton.style.position = "absolute";
	saveButton.style.bottom = "40px";
	saveButton.style.right = document.body.offsetWidth * 0.7 * 0.1 + "px";
}

// 右侧按键事件
// 上移
function moveUp(obj,up) {
	obj.onclick = function(){
		var tempUp = nowQ[up];
		nowQ[up] = nowQ[up-1];
		nowQ[up-1] = tempUp;
		showContent();
	}
}
// 下移
function moveDown(obj,down) {
	obj.onclick = function(){
		var tempDown = nowQ[down];
		nowQ[down] = nowQ[down+1];
		nowQ[down+1] = tempDown;
		showContent();
	}
}
// 复制
function copyIt(obj,it) {
	obj.onclick = function(){
		if(nowQ.length<=10){
			//nowQ.length += 1;
			//nowQ[nowQ.length] = {};
			for (var i = nowQ.length; i > it; i--) {
				nowQ[i] = clone(nowQ[i-1]);
				//$.extend(nowQ[i],nowQ[i-1]);
				//nowQ[i+1] = nowQ[i];
			}
		}else{
			alert("问卷的题目总数应不超过10！");
		}
		showContent();
	}
}
// 删除
function deleteIt(obj,it) {
	obj.onclick = function(){
		for (var i = it; i < nowQ.length-1; i++) {
			nowQ[i] = nowQ[i+1];
		}
		nowQ.length -= 1;
		showContent();
	}
}
// 增加选项
function newOption(obj,option) {
	obj.onclick = function(){
		var tempLength = nowQ[option].content.length;
		nowQ[option].content[tempLength] = "这是新选项";
		showContent();
	}
}
// 根据首字排序
function orderFirst(obj,oFirst) {
	obj.onclick = function(){
		var tempOption = nowQ[oFirst].content;
		if(tempOption.length>1){
			nowQ[oFirst].content = changeOrderFirst(tempOption[0]<tempOption[1],tempOption);
			showContent();
		}
	}
}
function changeOrderFirst(maybe,tempX){
	for(var i=0;i<tempX.length;i++){
		for(var j=i+1;j<tempX.length;j++){
			if(tempX[i]>tempX[j]){
				var temp = tempX[i];
				tempX[i] = maybe?tempX[i]:tempX[j];
				tempX[j] = maybe?tempX[j]:temp;
			}else{
				var temp = tempX[j];
				tempX[j] = maybe?tempX[i]:tempX[j];
				tempX[i] = maybe?temp:tempX[i];
			}
		}
	}
	return tempX;
}
/*
// 根据长度排序
function orderLength(obj,oLength) {
	obj.onclick = function(){
		var tempOption = nowQ[oLength].content;
		if(tempOption.length>1){
			nowQ[oLength].content = changeOrderLength(tempOption[0].length>tempOption[1].length,tempOption);
			showContent();
		}
	}
}
function changeOrderLength(maybe,tempX){
	console.log(maybe);
	for(var i=0;i<tempX.length;i++){
		for(var j=i+1;j<tempX.length;j++){
			if(tempX[i].length>tempX[j].length){
				var temp = tempX[i];
				tempX[i] = maybe?tempX[i]:tempX[j];
				tempX[j] = maybe?tempX[j]:temp;
			}else{
				var temp = tempX[j];
				tempX[j] = maybe?tempX[i]:tempX[j];
				tempX[i] = maybe?temp:tempX[i];
			}
		}
	}
	return tempX;
}
*/

// 添加问题
function addQuestion(qType) {
	if(nowQ.length<=10){
		switch(qType){
			case "one" : var qTitle = "单选题", qContent = ["选项一","选项二","选项三","选项四"]; break;
			case "more": var qTitle = "多选题", qContent = ["选项一","选项二","选项三","选项四"]; break;
			case "abc" : var qTitle = "文本题", qContent = [], qRequired = false; break;
			default : console.log(qTitle);
		}
		nowQ[nowQ.length] = {
			kind: qType,
			title: qTitle,
			content: qContent
		};
		if(qType==="abc"){
			nowQ[nowQ.length-1].required = qRequired;
		}
		showContent();
	}else{
		alert("问卷的题目总数应不超过10！");
	}
}

// 保存与提交
function saveAll(ss) {
	if(nowQ.length>1){
		if (nowQuestion===-1) {
			qq = questionnaire.length;
		}else{
			qq = nowQuestion;
		}
		questionnaire[qq] = {
			title   : nowQ[0].title,
			time    : qTime,
			state   : ss,
			question: nowQ,
			data    : []
		};
		return true;
	}else{
		alert("问卷的题目总数应不小于1！");
		return false;
	}
}

function dataTime(){
	// 初始设定为今天
	var today = qTime;
	// 年月日
	var year = today.getFullYear();
	var month = today.getMonth();
	var day = today.getDate();
	var selectMonth = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
	var calHeight = 0;
	// 获得元素
	var	calTable = document.getElementById("calTable");
	var hidePart = document.getElementById("hidePart");
	var inputMonth = document.getElementById("inputMonth");
	var inputYear = document.getElementById("inputYear");
	hidePart.style.display = "none";
	document.getElementById("dateInput").value = year + "-" + (month<9?"0"+(month+1):month+1) + "-" + (day<10?"0"+day:day);

	hideCalendar();
	function hideCalendar(){
		var hidePart = document.getElementById("hidePart");
		document.getElementById("dateInput").onclick = function(e){
			e = e || window.event;
			if(e.stopPropagation){
				e.stopPropagation();
			}else{
				e.cancelBubble=true;
			}
			if(hidePart.style.display === "none"){
				hidePart.style.display = "block";
				document.getElementById("timeDiv").style.paddingBottom = "345px";
				document.getElementById("saveButton").style.bottom = "310px";
				calendar();
			}else{
				hidePart.style.display = "none";
				document.getElementById("timeDiv").style.paddingBottom = "75px";
				document.getElementById("saveButton").style.bottom = "40px";
			}
		}
	}

	// 日历
	function calendar(){
		calendarClear();
		var html = "";
		// 该月初始日期是星期几
		var startDay = new Date(year, month, 1).getDay();
		startDay = (startDay===0)?7:startDay;
		// 该月的天数
		var numDay = new Date(year, month+1, 0).getDate();
		// 上月的天数
		var lastnDay = new Date(year, month, 0).getDate();
		//console.log(numDay);
		//console.log(lastnDay);

		//var chooseDay = document.getElementById("chooseDay");
		//chooseDay.innerHTML = selectMonth[month] + "   " + year;
		document.getElementById("cMonth").innerHTML = selectMonth[month];
		document.getElementById("cYear").innerHTML = year;

		calHeight = 1;
		html = "<tr class = 'tableDay'>";
		lastCount = startDay-2;
		for(var i=0;i<startDay-1;i++){
			html += "<td class = 'last point'>" + (lastnDay-lastCount) + "</td>";
			lastCount--;
		}
		numCount = startDay - 1;
		for(var i=1;i<numDay+1;i++){
			if(i===day){
				html += "<td class = 'now point cDay'>" + i + "</td>";
			}else{
				html += "<td class = 'now point'>" + i + "</td>";
			}
			numCount++;
			if(numCount === 7){
				numCount = 0;
				html += "</tr><tr class = 'tableDay'>";
				calHeight++;
			}
		}
		if(numCount>0){
			for(var i=numCount; i<7; i++){
				html += "<td class = 'next point'>" + (i-numCount+1) + "</td>";
			}
		}
		html += "</tr>";
		// console.log(html);
		calTable.innerHTML += html;
		calDom();
	}
	// 清除日历
	function calendarClear(){
		for(var i=0;i<calHeight;i++){
			calTable.deleteRow(2);
		}
	}
	// 日历事件
	function calDom(){
		// 选择年月
		var choMonth = document.getElementById("chooseMonth");
		var choYear = document.getElementById("chooseYear");
		var inputMonth = document.getElementById("inputMonth");
		var inputYear = document.getElementById("inputYear");
		choMonth.onmouseover = function(){
			this.style.cursor = "pointer";
		}
		choMonth.onmouseout = function(){
			this.style.cursor = "default";
		}
		choMonth.onclick = function(e){
			e = e || window.event;
			if(e.stopPropagation){
				e.stopPropagation();
			}else{
				e.cancelBubble=true;
			}
			inputYear.style.display = "none";
			inputMonth.style.display = "block";
			(month<9) ? inputMonth.style.width="12px" : inputMonth.style.width="30px";
			inputMonth.value = month+1;
		}
		inputMonth.onfocus = function(){
			inputMonth.onkeyup = function(event){
				event = event || window.event;
				//console.log(event.keyCode);
				if(event.keyCode===13 || event.keyCode===32){
					month = inputMonth.value - 1;
					inputMonth.style.display = "none";
					calendar();
				}
			}
		}
		choYear.onmouseover = function(){
			this.style.cursor = "pointer";
		}
		choYear.onmouseout = function(){
			this.style.cursor = "default";
		}
		choYear.onclick = function(e){
			e = e || window.event;
			if(e.stopPropagation){
				e.stopPropagation();
			}else{
				e.cancelBubble=true;
			}
			inputMonth.style.display = "none";
			inputYear.style.display = "block";
			inputYear.value = year;
		}
		inputYear.onfocus = function(){
			inputYear.onkeyup = function(event){
				event = event || window.event;
				if(event.keyCode===13 || event.keyCode===32){
					year = inputYear.value;
					inputYear.style.display = "none";
					calendar();
				}
			}
		}
		calTable.onclick = function(e){
			e = e || window.event;
			if(e.stopPropagation){
				e.stopPropagation();
			}else{
				e.cancelBubble=true;
			}
			inputMonth.style.display = "none";
			inputYear.style.display = "none";
		}
		document.onclick = function(){
			inputMonth.style.display = "none";
			inputYear.style.display = "none";
			hidePart.style.display = "none";
			document.getElementById("timeDiv").style.paddingBottom = "75px";
			document.getElementById("saveButton").style.bottom = "40px";
			// document.getElementById("dateInput").value = year + "-" + (month<9?"0"+(month+1):month+1) + "-" + (day<10?"0"+day:day);
		}
		// 左右箭头
		var thLeft = document.getElementById("thLeft");
		thLeft.onclick = function(){
			if(month===0){
				month = 11;
				year--;
			}else{
				month--;
			}
			calendar();
		}
		thLeft.onmouseover = function(){
			this.style.cursor = "pointer";
		}
		thLeft.onmouseout = function(){
			this.style.cursor = "default";
		}
		var thRight = document.getElementById("thRight");
		thRight.onclick = function(){
			if(month === 11){
				month = 0;
				year++;
			}else{
				month++;
			}
			calendar();
		}
		thRight.onmouseover = function(){
			this.style.cursor = "pointer";
		}
		thRight.onmouseout = function(){
			this.style.cursor = "default";
		}
		// 选择日期
		var last = getClass("last","calTable");
		var now = getClass("now","calTable");
		var next = getClass("next","calTable");
		for(var i=0;i<last.length;i++){
			last[i].onclick = function(){
				if(month===0){
					month = 11;
					year--;
				}else{
					month--;
				}
				calendar();
			}
			last[i].onmouseover = function(){
				this.style.cursor = "pointer";
			}
			last[i].onmouseout = function(){
				this.style.cursor = "default";
			}
		}
		for(var i=0;i<now.length;i++){
			now[i].i = i+1;
			now[i].onclick = function(){
				day = this.i;
				//calendar();
				hidePart.style.display = "none";
				document.getElementById("timeDiv").style.paddingBottom = "75px";
				document.getElementById("saveButton").style.bottom = "40px";
				var tempTime = new Date(year,month,day);
				if (tempTime<new Date()) {
					alert("请选择正确的结束时间！");
				}else{
					qTime = new Date(year,month,day);
					document.getElementById("dateInput").value = year + "-" + (month<9?"0"+(month+1):month+1) + "-" + (day<10?"0"+day:day);
				}
			}
			now[i].onmouseover = function(){
				this.style.cursor = "pointer";
			}
			now[i].onmouseout = function(){
				this.style.cursor = "default";
			}
		}
		for(var i=0;i<next.length;i++){
			next[i].onclick = function(){
				if(month === 11){
					month = 0;
					year++;
				}else{
					month++;
				}
				calendar();
			}
			next[i].onmouseover = function(){
				this.style.cursor = "pointer";
			}
			next[i].onmouseout = function(){
				this.style.cursor = "default";
			}
		}
	}

}
