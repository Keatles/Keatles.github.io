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
    var canvas = document.getElementById("myCanvas"),
        context = canvas.getContext("2d");
    context.font = "38pt Arial";
    context.fillStyle = "cornflowerblue";
    context.strokeStyle = "blue"
    context.fillText("Hello Canvas",canvas.width/2-150,canvas.height/2+15);
    context.strokeText("Hello Canvas",canvas.width/2-150,canvas.height/2+15);
}
addLoadEvent(draw);