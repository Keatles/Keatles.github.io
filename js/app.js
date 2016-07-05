/**
 * Created by kee on 2016-07-04.
 */
var runPage;
runPage = new FullPage({

    id : 'pageContain',                            // id of contain
    slideTime : 800,                               // time of slide
    continuous : false,                            // create an infinite feel with no endpoints
    effect : {                                     // slide effect
        transform : {
            translate : 'Y',				   // 'X'|'Y'|'XY'|'none'
            scale : [.1, 1],				   // [scalefrom, scaleto]
            rotate : [0, 0]				       // [rotatefrom, rotateto]
        },
        opacity : [0, 1]                       // [opacityfrom, opacityto]
    },
    mode : 'wheel,touch,nav:navBar',               // mode of fullpage
    easing : 'ease'                                // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1];
    //  ,onSwipeStart : function(index, thisPage) {   // callback before pageChange
    //    return 'stop';
    //  }
    //  ,beforeChange : function(index, thisPage) {   // callback before pageChange
    //    return 'stop';
    //  }
    //  ,callback : function(index, thisPage) {       // callback when pageChange
    //    alert(index);
    //  };
});

/*
    利用SVG生成pie图
 */
function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}
var arr = ['CSS','JavaScript','HTML','Python'];
(function(){
    $$('.pie').forEach(function(pie) {
        var p = parseFloat(pie.textContent);
        var NS = "http://www.w3.org/2000/svg";
        var svg = document.createElementNS(NS, "svg");
        var circle = document.createElementNS(NS, "circle");
        var title = document.createElementNS(NS, "title");
        circle.setAttribute("r", 16);
        circle.setAttribute("cx", 16);
        circle.setAttribute("cy", 16);
        circle.setAttribute("stroke-dasharray", p + " 100");
        svg.setAttribute("viewBox", "0 0 32 32");
        title.textContent = pie.textContent;
        pie.textContent = title.textContent.slice(3)
        svg.appendChild(title);
        svg.appendChild(circle);
        pie.appendChild(svg);
    })
})();

window.onload=function(event){
    var fLayer = document.getElementsByClassName('float-layer')[0],
        mask = document.getElementsByClassName('mask')[0],
        btn = document.getElementById('btn');
    var e = event||window.event;
    btn.onclick=function(e){
        mask.style.display="block";
        fLayer.style.display="block";
        console.log(fLayer.offsetTop);
        var mousePos = getMousePos(e);
        console.log(mousePos);
//				fLayer
    }
    fLayer.onmousedown=floatLayer;
    mask.onclick=function(){
        console.log(fLayer);
        mask.style.display="none";
        fLayer.style.display="none";
    }

}
//获取鼠标的坐标
function getMousePos(event){
    var e = event||window.event;
    return {x:e.clientX,y:e.clientY}
}
function floatLayer(event) {
    var e = event || window.event;
    var fl = document.getElementsByClassName('float-layer')[0];
    var mousePos = getMousePos(event);
    var x = mousePos.x - fl.offsetLeft;
    var y = mousePos.y - fl.offsetTop;
    document.onmousemove = function (event) {
        fl.style.top = event.clientY - y + "px";
        fl.style.left = event.clientX - x + "px";
    }
    document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}


