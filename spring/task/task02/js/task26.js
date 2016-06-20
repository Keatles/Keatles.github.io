/*  main  */
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//存放实例化的飞船对象
var airshipArr = [0,0,0,0]

//行星对象

var planet = {
    x:400,
    y:400,
    r:100,
    //绘制行星
    drawPlanet:function(){
        context.beginPath();
        context.fillStyle = "blue";
        context.arc(this.x,this.y,this.r,0,Math.PI*2,false);
        context.arc(this.x,this.y,this.r,0,Math.PI*2,false);
        context.closePath();
        context.fill();
    },
    //绘制轨道
    drawOrbit:function(){
        for(var i = 0;i < 4;i++){
            context.beginPath();
            context.strokeStyle = "blue";
            context.arc(this.x,this.y,this.r+(i+1)*50,0,Math.PI*2,false)
            context.closePath()
            context.stroke();
        }
    },
    //创建飞船
    createAirship:function(createCommand){
        airshipArr[createCommand.id] = new Airship(createCommand);
        $("<p>"+createCommand.id + "号飞船创建成功</p>").prependTo($(".god-message"));
    }
};

//指挥官对象
var commander = {
    //指挥官记录的飞船(由于存在丢包概率，指挥官记录的情况可能与真实不服)
    message:[false,false,false,false],
    isFlightArr:[false,false,false,false],
    //方法:发送消息(参数:发送的指令)
    send:function(userCommand){
        if(userCommand.command === 'create'){
            planet.createAirship(userCommand);
            this.message[userCommand.id] = true;
            this.isFlightArr[userCommand.id] = false;
        }
        if(userCommand.command === 'boom'){
            this.message[userCommand.id] = false;
            this.isFlightArr[userCommand.id] = false;
        }
        if(userCommand.command === 'flight' && this.message[userCommand.id]){
            this.isFlightArr[userCommand.id] = true;
        }
        if(userCommand.command === 'stop'){
            this.isFlightArr[userCommand.id] = false;
        }
        mediator(userCommand);
    }
};
//Mediator

function mediator(userCommand){
    setTimeout(function(){
        if(Math.random() > 0.3){
            //发送成功
            for(var i = 0,len = airshipArr.length;i<len;i++){
                if(typeof airshipArr[i] == 'object'){
                    airshipArr[i].receive(userCommand);
                }
            }
            $('<p>信息发送成功，指令:{'+userCommand.id+','+userCommand.command +'}</p>').prependTo($(".god-message"));
        }else{
            //发送失败
            $('<p class="warning">信息丢包,指令:{'+userCommand.id+','+userCommand.command+'}</p>').prependTo($(".god-message"));
        }
    },1000)
}

/*************************************
 * 指令形式
 *{
 *  id:0(飞船号，在哪个轨道创建，可选0-3)
 *  command:'create',(指令可选create,flight,stop,boom)
 *  dynamical:1 (速率可选1,2,3)
 *  energy:2 (动力恢复2,3,4)
 *  consume:5(动力消耗5,7,9)
 *  }
 *************************************/

//飞船类
function Airship(createCommand){
    //轨道 速度 能源恢复 能耗
    this.orbit = createCommand.id;
    this.dynamical = createCommand.dynamical;
    this.energy = createCommand.energy;
    this.consume = createCommand.consume;

    //总能源
    this.hp = 100;
    this.weight = 60;
    this.height = 20;

    //矩形中心点:坐标向左上移动自身宽高的一般
    this.x = 550 + this.orbit * 50;
    this.r;
    this.deg = 0;
    this.y = 400;

    this.isFight = false;
    this.isBoom = false;
    this.frameNum = 0;

    //接收信息
    this.receive = function(userCommand){
        var isMe = false;
        for(var i = 0,len = airshipArr.length;i<len;i++){
            //遍历判断自己是不是接受者
            if(this == airshipArr[userCommand.id]){
                isMe = true;
            }
            break;
        }
        if(isMe){
            if(userCommand.command === 'flight'){
                this.flight();
            }else if(userCommand.command === 'stop'){
                this.stop();
            }else if(userCommand.command === 'boom'){
                this.boom();
            }
        }
    }

    //绘制
    this.draw = function(){
        this.frameNum ++;
        context.fillStyle = "blue";
        context.fillRect(this.x-this.weight/2,this.y-this.height/2,this.weight,this.height);
    }

    //飞行
    this.flight = function(){
        this.isFlight = true;
        this.r = 150 + this.orbit*50;
        this.deg += this.dynamical;
        if(this.deg > 360){
            this.deg = 0;
        }
        this.x = 400 + this.r * Math.cos(Math.PI/180 * this.deg);
        this.y = 400 + this.r * Math.sin(Math.PI/180 * this.deg)
    }
}

function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height)
    planet.drawPlanet();
    planet.drawOrbit();
    $('.create-wrap').hide()
}

animate();



