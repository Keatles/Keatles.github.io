// 测试 nowQuestion
if(nowQuestion>=0){
	nowQ = questionnaire[nowQuestion].question;
}else{
	console.log(nowQuestion);
}

var nowA = new Array();
nowA = clone(nowQ);
for (var i = nowA.length - 1; i > 0; i--) {
	nowA[i].answer = new Array(nowA[i].content.length);
}
showContent();
if (questionnaire[nowQuestion].state===1 && questionnaire[nowQuestion].time>=new Date()) {
	document.getElementById("restartAnswer").onclick = function(){
		//$("#mbody").load("check.html");
		loadAction("check.html");
	}
	document.getElementById("submitAnswer").onclick = function(){
		if (checkAll()) {
			//$("#mbody").load("list.html");
			loadAction("list.html");
		}else{
			alert("请合理填写问卷！");
		}
	}
}else{
	document.getElementById("back").onclick = function(){
		//$("#mbody").load("list.html");
		loadAction("list.html");
	}
}

// 加载内容
function showContent() {
	document.getElementById("qTitle").innerHTML = nowQ[0].title;
	var questionArea = document.getElementById("question");
	if(nowQ.length === 1){
		questionArea.style.display = "none";
	}else{
		questionArea.style.display = "block";
		for (var i = 1; i < nowQ.length; i++) {
			var temphtml;
			temphtml = "<div class='questionDetail'><span>Q"+ i +"</span><span class='spaceBoth'>"+ nowQ[i].title + ((nowQ[i].kind==='abc' && nowQ[i].required)?("（此题必填）"):'') + "</span>";
			if(nowQ[i].kind === "one"){
				for(var j in nowQ[i].content){
					temphtml += "<div class='questionOption'><input type='radio' name='"+ i +"' id='q"+ i +"a"+ j +"' class='pointIt'/><span class='spaceBoth'>"+ nowQ[i].content[j] +"</span></div>";
				}
			}else{
				if(nowQ[i].kind === "more"){
					for(var j in nowQ[i].content){
						temphtml += "<div class='questionOption'><input type='checkbox' name='"+ i +"' id='q"+ i +"a"+ j +"' class='pointIt'/><span class='spaceBoth'>"+ nowQ[i].content[j] +"</span></div>";
					}
				}else{
					if(nowQ[i].kind === "abc"){
						temphtml += "<div class='questionOption'><textarea id='a"+ i +"' rows='5'></textarea></div>";
					}else{
						console.log(nowQ[i].kind);
					}
				}
			}
			temphtml += "</div>";
			$("#question").append(temphtml);
			//questionArea.innerHTML += temphtml;
		}
		if (questionnaire[nowQuestion].state===1 && questionnaire[nowQuestion].time>=new Date()) {
			document.getElementById("saveButton").innerHTML = "<span class='spaceBoth'><button id='restartAnswer' class='button big'>重置</button></span><span class='spaceBoth'><button id='submitAnswer' class='button big'>提交问卷</button></span>";
		}else{
			document.getElementById("saveButton").innerHTML = "<button id='back' class='button big'>返回</button>";
		}
	}
	inputAction();
}

// 收集每题答案
function inputAction() {
	// 每题选项
	var qa = new Array(nowA.length);
	for (var i = nowA.length - 1; i > 0; i--) {
		if (nowA[i].kind==="abc") {
			document.getElementById("a"+i).style.width = document.body.offsetWidth * 0.7 * 0.4 + "px";
			qa[i] = document.getElementById("a"+i);
			qa[i].i = i;
			qa[i].onchange = function(){
				nowA[this.i].content = this.value;
			}
		}else{
			qa[i] = [];
			if (nowA[i].kind==="more") {
				for (var j = nowA[i].content.length - 1; j >= 0; j--) {
					qa[i][j] = document.getElementById("q"+i+"a"+j);
					qa[i][j].i = i;
					qa[i][j].j = j;
					qa[i][j].onchange = function() {
						nowA[this.i].answer[this.j] = this.checked?1:0;
					}
				}
			}else{
				for (var j = nowA[i].content.length - 1; j >= 0; j--) {
					qa[i][j] = document.getElementById("q"+i+"a"+j);
					qa[i][j].i = i;
					qa[i][j].j = j;
					qa[i][j].onchange = function() {
						nowA[this.i].answer = this.j;
					}
				}				
			}
		}
	}
}

// 检查是否全部填写
function checkAll() {
	var checkEvery = 0;
	var qa = new Array(nowA.length);
	for (var i = nowA.length - 1; i > 0; i--) {
		if (nowA[i].kind==="abc") {
			checkEvery += 1;
			if (nowA[i].required) {
				var tempcontent = nowA[i].content;
				if (null != tempcontent && "" != tempcontent) {
					var spl = "\\s\\,\\.\\。\\，\\/\\、\\\\";
					var reSpace=new RegExp("^["+spl+"]*(.*?)["+spl+"]*$");
					var textem = tempcontent.replace(reSpace,"$1");
					if (null === textem || "" === textem) {checkEvery -= 1;}
				}else{
					checkEvery -= 1;
				}
			}
		}else{
			if (nowA[i].kind==="more") {
				var tempcount = 0;
				for (var j = nowA[i].content.length - 1; j >= 0; j--) {
					if (1===nowA[i].answer[j]) {
						tempcount += 1;
					}
				}
				if (tempcount > 0) {checkEvery += 1;}
			}else{
				if (null != nowA[i].answer) {checkEvery += 1;}
			}
		}
	}
	if (checkEvery===nowA.length-1) {
		return true;
	}else{
		return false;
	}
}