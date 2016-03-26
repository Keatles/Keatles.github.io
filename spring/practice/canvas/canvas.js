function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
function draw(){
    var canvas = document.getElementById("draw-in-me");
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(120.0,32.0);
        ctx.bezierCurveTo(120.0,36.4,116.4,40.0,112.0,40.0);
        ctx.lineTo(8.0,40.0);
        ctx.bezierCurveTo(3.6,40.0,0.0,36.4,0.0,32.0);
        ctx.lineTo(0.0,8.0);
        ctx.bezierCurveTo(0.0,3.6,3.6,0.0,8.0,0.0)
        ctx.lineTo(112.0,0.0);
        ctx.bezierCurveTo(116.4,0.0,120.0,3.6,120.0,8.0);
        ctx.lineTo(120.0,32.0);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#fff";
        ctx.stroke();
    }
}
addLoadEvent(draw);