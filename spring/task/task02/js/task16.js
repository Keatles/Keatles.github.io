/**
 * Created by kee on 2016-03-23.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData ={};

/**
* 从用户输入中获取数据，向aqiData中增加一条数据
* 然后渲染aqi-list列表，增加新增的数据
*/

function addAqiData() {
    //^[\u4E00-\u9FFF]  比较接近的汉字编码范围
    var city = document.getElementById("aqi-city-input").value.trim();
    var aqi = document.getElementById("aqi-value-input").value.trim();;
    var re1 = new RegExp("^[\u4E00-\u9FFF]+$");
    if(re1.test(city)&&(aqi>=0&&aqi<=999)){
        aqiData[city] = aqi;
    }else{
        alert("请输入正确城市名或空气质量");
    }
    return aqiData;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var items = "<tr><th>城市</th><th>空气质量</th><th>操作</th></tr>";
    for(var city in aqiData){
        items += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city='"+city+"'>删除</button></td></tr>"
    }
    document.getElementById("aqi-table").innerHTML = city ? items : "";
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    // do sth.
    delete aqiData[city];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    function addEvent(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{
            element["on"+type]=handler;
        }
    }
    var btn = document.getElementById("add-btn");
    addEvent(btn,"click",addBtnHandle);
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    document.getElementById("aqi-table").addEventListener("click", function(event){
        if(event.target.nodeName.toLowerCase() === 'button') delBtnHandle.call(null, event.target.dataset.city);
    })



}

init();