digit=
    [
        [
            [0,0,1,1,1,0,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,0,1,1,0],
            [0,0,1,1,1,0,0]

        ],//0
        [
            [0,0,0,1,1,0,0],
            [0,1,1,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [1,1,1,1,1,1,1]
        ],//1
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,1,1,1,1,1]
        ],//2
        [
            [1,1,1,1,1,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//3
        [
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,0],
            [0,0,1,1,1,1,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,1,1,0],
            [1,1,1,1,1,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,1],
        ],//4
        [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,1,1,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//5
        [
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0],
        ],//6
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0]
        ],//7
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//8
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0]
        ],//9
        [
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ]//:
    ];
(function(){
    var canvas=document.getElementById('canvas');
    var context=canvas.getContext('2d');
    var WIDTH=document.body.clientWidth || document.documentElement.clientWidth;
    var HEIGHT=document.body.clientHeight || document.documentElement.clientHeight;
    var LEFT=Math.round(WIDTH/10);
    var TOP=Math.round(HEIGHT/8);
    console.log(TOP);
    var RADIUS=Math.round(WIDTH*4/5/108)-1;
    var balls=[];
    var nowHourse,nowMinuters,nowSeconds,nextHourse,nextMinuteres,nextSeconds=0;
    var colors=["#FF0000","#80FF00","#00FFFF","#0080C0","#8080C0","#800080","#FF00FF","#400040","#C0C0C0","#FF80C0"];

    canvas.width=WIDTH;
    canvas.height=HEIGHT;

    var date=new Date();
    nowHourse=date.getHours();
    nowMinuters=date.getMinutes();
    nowSeconds=date.getSeconds();

    setInterval(function(){
        reading(context);
        update();
    },50);
    


    function reading(cxt){
        cxt.clearRect(0,0,WIDTH,HEIGHT);
        // 时
        readDigit(LEFT,TOP,parseInt(nowHourse/10),cxt);
        readDigit(LEFT+15*(RADIUS+1),TOP,parseInt(nowHourse%10),cxt);
        readDigit(LEFT+30*(RADIUS+1),TOP,10,cxt);
        // 分
        readDigit(LEFT+39*(RADIUS+1),TOP,parseInt(nowMinuters/10),cxt);
        readDigit(LEFT+54*(RADIUS+1),TOP,parseInt(nowMinuters%10),cxt);
        readDigit(LEFT+69*(RADIUS+1),TOP,10,cxt);
        // 秒
        readDigit(LEFT+78*(RADIUS+1),TOP,parseInt(nowSeconds/10),cxt);
        readDigit(LEFT+93*(RADIUS+1),TOP,parseInt(nowSeconds%10),cxt);

    // 绘制会动的小球
            for(var i=0;i<balls.length;i++){
                cxt.fillStyle=balls[i].color;
                cxt.beginPath();
                cxt.arc(balls[i].x,balls[i].y,RADIUS,0,Math.PI*2);
                cxt.closePath();
                cxt.fill();
            }
    };


    function readDigit(x,y,num,cxt){
        cxt.fillStyle="#400040";

        for(var i=0;i<digit[num].length;i++){
            for(var j=0;j<digit[num][i].length;j++){
                if(digit[num][i][j]==1){
                    cxt.beginPath();
                    cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
                    cxt.closePath();
                    cxt.fill();
                }
            }
        }

        
    };


    function update(){
        var date2=new Date();
        nextHourse=date2.getHours();
        nextMinuteres=date2.getMinutes();
        nextSeconds=date2.getSeconds();

        if(nowSeconds!=nextSeconds){
            // 时
            if(parseInt(nowHourse/10) != parseInt(nextHourse/10)){
                addBalls(LEFT,TOP,parseInt(nowHourse/10));
            }
            if(parseInt(nowHourse%10) != parseInt(nextHourse%10)){
                addBalls(LEFT+15*(RADIUS+1),TOP,parseInt(nowHourse%10));
            }
            // 分
            if(parseInt(nowMinuters/10) != parseInt(nextMinuteres/10)){
                addBalls(LEFT+39*(RADIUS+1),TOP,parseInt(nowMinuters/10));
            }
            if(parseInt(nowMinuters%10) != parseInt(nextMinuteres%10)){
                addBalls(LEFT+54*(RADIUS+1),TOP,parseInt(nowMinuters%10));
            }
            // 秒
            if(parseInt(nowSeconds/10) != parseInt(nextSeconds/10)){
                addBalls(LEFT+78*(RADIUS+1),TOP,parseInt(nowSeconds/10));
            }
            if(parseInt(nowSeconds%10) != parseInt(nextSeconds%10)){
                addBalls(LEFT+93*(RADIUS+1),TOP,parseInt(nowSeconds%10));
            }


            nowHourse=nextHourse;
            nowMinuters=nextMinuteres;
            nowSeconds=nextSeconds;
        }

        updateBalls();
    };


    function addBalls(x,y,num){
        for(var i=0;i<digit[num].length;i++){
            for(var j=0;j<digit[num][i].length;j++){
                if(digit[num][i][j]==1){
                    var ball={
                        x:x+j*2*(RADIUS+1)+(RADIUS+1),
                        y:y+i*2*(RADIUS+1)+(RADIUS+1),
                        g:1+Math.random()*10,
                        vx:Math.pow(-1,Math.ceil(Math.random()*1000))*5,
                        vy:-6,
                        color:colors[Math.floor(Math.random()*colors.length)]
                    };
                    balls.push(ball);
                }
            }
        }
    };

    function updateBalls(){
        for(var i=0;i<balls.length;i++){
            balls[i].x+=balls[i].vx;
            balls[i].y+=balls[i].vy;
            balls[i].vy+=balls[i].g;

            if(balls[i].y>=HEIGHT-RADIUS){
                balls[i].y=HEIGHT-RADIUS;
                balls[i].vy=-balls[i].vy*0.5;
            }
        }
        var cnt=0;
        for(var i=0;i<balls.length;i++){
            if(balls[i].x>0 && balls[i].x-RADIUS<WIDTH){
                balls[cnt++]=balls[i];
            }
        }

        while(balls.length>Math.min(300,cnt)){
            balls.pop();
        }
    };
}());
