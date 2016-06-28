// 测试nowQuestion 
var questionnaire = new Array();
var nowQuestion;
nowQuestion = 0;

qq1 = [{title:"请添加标题"}]
q1 = [{title:"调查问卷1"},{kind:"one",title:"单选题",content:["选项一","选项二"]},{kind:"more",title:"多选题",content:["选项一","选项二","选项三"]},{kind:"abc",title:"文本题",required:false,content:[]},{kind:"one",title:"单选题",content:["选项一","选项二"]},{kind:"more",title:"多选题",content:["选项一","选项二","选项三"]},{kind:"abc",title:"文本题",required:true,content:[]}];
q2 = [{title:"调查问卷2"},{kind:"one",title:"单选题",content:["选项一","选项二"]},{kind:"more",title:"多选题",content:["选项一","选项二","选项三"]},{kind:"abc",title:"文本题",content:[]}];
q3 = [{title:"调查问卷3"},{kind:"one",title:"单选题",content:["选项一","选项二"]},{kind:"more",title:"多选题",content:["选项一","选项二","选项三"]},{kind:"abc",title:"文本题",content:[],required:true}];

a1 = [[{kind:"one",answer:[0]},{kind:"more",answer:[0,2]},{kind:"abc",answer:["xty"]},{kind:"one",answer:[0]},{kind:"more",answer:[0,2]},{kind:"abc",answer:["xty"]}],[{kind:"one",answer:[0]},{kind:"more",answer:[0,2]},{kind:"abc",answer:["xty"]},{kind:"one",answer:[0]},{kind:"more",answer:[0,2]},{kind:"abc",answer:["xty"]}]];
d1 = null;
d2 = null;
d3 = [];
questionnaire = [
	{title:"我的问卷1",time:new Date(2015,8,8),state:1,question:q1,data:d1},
	{title:"我的问卷2",time:new Date(2016,5,8),state:0,question:q2,data:d2},
	{title:"我的问卷3",time:new Date(2016,8,8),state:1,question:q3,data:d3}
];


if(nowQuestion>=0){
	nowQ = questionnaire[nowQuestion].question;
}else{
	console.log(nowQuestion);
}

var nowD = new Array(nowQ.length);
var color = ["#0DA068","#194E9C","#ED9C13","#ED5713","#057249","#5F91DC","#F88E5D"];

var questionArea = document.getElementById("question");

questionArea.innerHTML = "<div id=cssDetectFoo height='10px'></div>";
var cssDetect = setInterval("startAll()",50);

// 检测是否加载成功
function startAll() {
	//console.log(cssDetectFoo.offsetWidth);
	if (1===cssDetectFoo.offsetWidth) {
		questionArea.innerHTML = "";

		getDate();
		showContent();
		document.getElementById("returnButton").onclick = function(){
			//$("#mbody").load("list.html");
			loadAction("list.html");
		}
		clearInterval(cssDetect);
	}
}

// 产生随机数据
function getDate() {
	nowD = clone(nowQ);
	for (var i = nowQ.length - 1; i > 0; i--) {
		nowD[i].answer = [];
		switch(nowD[i].kind){
			case "one"  : 
				var temptotal = 100;
				for (var j = nowQ[i].content.length - 1; j > 0; j--) {
					nowD[i].answer[j] = Math.floor(Math.random()*temptotal);
					temptotal -= nowD[i].answer[j];
				}
				nowD[i].answer[0] = temptotal;
				break;
			case "more" :
				for (var j = nowQ[i].content.length - 1; j >= 0; j--) {
					nowD[i].answer[j] = Math.floor(Math.random()*100);
				}
				break;
			case "abc"  :
				if (nowD[i].required) {
					nowD[i].answer[0] = 100;
				}else{
					nowD[i].answer[0] = Math.floor(Math.random()*100);
				}
				break;
			default : console.log(nowD[i].kind);
		}
	}
}

function showContent() {
	document.getElementById("qTitle").innerHTML = nowQ[0].title;
	if(nowQ.length === 1){
		questionArea.style.display = "none";
	}else{
		questionArea.style.display = "block";
		for (var i = 1; i < nowQ.length; i++) {
			var temphtml;
			temphtml = "<div class='questionZone'><div><span>Q"+ i +"</span><span class='spaceBoth'>"+ nowQ[i].title + ((nowQ[i].kind==='abc' && nowQ[i].required)?("（此题必填）"):'') +"</span></div>";
			if(nowQ[i].kind === "one"){
				temphtml += "<div id='questionDetail"+ i +"' class='questionDetail'><table id='chartData"+ i +"' class='chartData' width='300px'>";
				for (var j = 0 ; j < nowD[i].content.length ; j++) {
					temphtml += "<tr style='color:"+ color[j%color.length] +"'><td class='answerNum' width='10px'>A"+ j +"</td><td>"+ nowD[i].content[j] +"</td><td>"+ nowD[i].answer[j] +"</td></tr>";
				}
				temphtml += "</table>	<canvas id='chart"+ i +"' width='500px' height='400px' class='chart'></canvas></div>"
	
			}else{
				if(nowQ[i].kind === "more"){
					temphtml += "<div id='questionDetail"+ i +"'><table id='chartData"+ i +"' class='chartData' width='100%'>";
					for (var j = 0 ; j < nowD[i].content.length ; j++) {
						temphtml += "<tr style='color:"+ color[j%color.length] +"'><td class='answerNum' width='10px'>A"+ j +"</td><td width='200px'>"+ nowD[i].content[j] +"</td><td width='60px'>"+ nowD[i].answer[j] +"</td><td><div class='chartBgSpan' id='mq"+i+"a"+j+"b' width='100%'><div class='chartBgSpan' id='mq"+i+"a"+j+"'></div></div></td></tr>";
					}
					temphtml += "</table></div>"
				}else{
					if(nowQ[i].kind === "abc"){
						temphtml += "<div id='questionDetail"+ i +"'><table id='chartData"+ i +"' class='chartData' width='100%'>";
						temphtml += "<tr style='color:#ed5713'><td class='answerNum' width='150px'>本题有效回答为</td><td width='145px'>"+ nowD[i].answer[0] +"</td><td><div class='chartBgSpan' id='aq"+i+"b' width='100%'><div class='chartBgSpan' id='aq"+i+"'></div></div></td></tr>";
						temphtml += "</table></div>"
					}else{
						console.log(nowQ[i].kind);
					}
				}
			}
			temphtml += "</div>";
			$("#question").append(temphtml);
			//questionArea.innerHTML += temphtml;
		}
	}
	showChart();
}

function showChart() {
	for (var i = 1 ; i < nowD.length; i++) {
		if (nowD[i].kind==="one") {
			chartI = document.getElementById("chart"+i);
			var questionDetailI = document.getElementById("questionDetail"+i);
			var qdIp = questionDetailI.offsetWidth;
			console.log(qdIp);
			if (parseInt(qdIp)>800) {
				chartI.style.left = "300px";
				chartI.style.top = "0";
			}else{
				chartI.style.left = (qdIp-500)/2 + "px";
				chartI.style.top = "80px";
				document.getElementById("questionDetail"+i).style.height = "480px";
			}
			pieChart(i);
			//document.getElementById("questionDetail"+i).style.height = "500px";//document.getElementById("chart"+i).style.offsetHeight;
			//document.getElementById("questionDetail"+i).style.position = "relative";
		}else{
			if (nowD[i].kind==="more") {
				var moreTotal = 0;
				for (var j = nowD[i].answer.length - 1; j >= 0; j--) {
					moreTotal += nowD[i].answer[j];
				}
				for (var j = nowD[i].answer.length - 1; j >= 0; j--) {
					var mqaj = document.getElementById('mq'+i+'a'+j);
					mqaj.style.width = (nowD[i].answer[j]/moreTotal*100)+'%';
					mqaj.style.backgroundColor = color[j%color.length];
					mqaj.style.border = "none";
					mqaj.style.borderRight = "2px solid #333";
					document.getElementById('mq'+i+'a'+j+'b').title = mqaj.style.width;
				}
			}else{
				if (nowD[i].kind==="abc") {
					var aqi = document.getElementById('aq'+i);
					aqi.style.width = nowD[i].answer[0]+'%';
					aqi.style.backgroundColor = "#ed5713";
					aqi.style.border = "none";
					aqi.style.borderRight = "2px solid #333";
					document.getElementById('aq'+i+'b').title = aqi.style.width;
				}else{
					console.log(nowD[i].kind);
				}
			}
		}
	}
}
