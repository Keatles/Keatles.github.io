/**
 * Created by kee on 2016-03-20.
 */
function showTable1(){
    var table = document.getElementById("tab");
    for(var i=0;i<6;i++){
        var x =table.rows[i].cells;
        for(var j=0;j<4;j++){
            x[j].innerHTML="购买材料一"
        }
    }
    document.getElementById("btn1").style.background="white";
    document.getElementById("btn2").style.background="#eee";
    document.getElementById("btn3").style.background="#eee"
    document.getElementById("btn4").style.background="#eee"
    document.getElementById("btn5").style.background="#eee"
}
function showTable2(){
    var table = document.getElementById("tab");
    for(var i=0;i<6;i++){
        var x =table.rows[i].cells;
        for(var j=0;j<4;j++){
            x[j].innerHTML="购买材料二"
        }
    }
    document.getElementById("btn1").style.background="#eee";
    document.getElementById("btn2").style.background="white";
    document.getElementById("btn3").style.background="#eee"
    document.getElementById("btn4").style.background="#eee"
    document.getElementById("btn5").style.background="#eee"
}
function showTable3(){
    var table = document.getElementById("tab");
    for(var i=0;i<6;i++){
        var x =table.rows[i].cells;
        for(var j=0;j<4;j++){
            x[j].innerHTML="购买材料三"
        }
    }
    document.getElementById("btn1").style.background="#eee";
    document.getElementById("btn2").style.background="#eee";
    document.getElementById("btn3").style.background="white"
    document.getElementById("btn4").style.background="#eee"
    document.getElementById("btn5").style.background="#eee"
}
function showTable4(){
    var table = document.getElementById("tab");
    for(var i=0;i<6;i++){
        var x =table.rows[i].cells;
        for(var j=0;j<4;j++){
            x[j].innerHTML="购买材料四"
        }
    }
    document.getElementById("btn1").style.background="#eee";
    document.getElementById("btn2").style.background="#eee";
    document.getElementById("btn3").style.background="#eee"
    document.getElementById("btn4").style.background="white"
    document.getElementById("btn5").style.background="#eee"
}
function showTable5(){
    var table = document.getElementById("tab");
    for(var i=0;i<6;i++){
        var x =table.rows[i].cells;
        for(var j=0;j<4;j++){
            x[j].innerHTML="购买材料五"
        }
    }
    document.getElementById("btn1").style.background="#eee";
    document.getElementById("btn2").style.background="#eee";
    document.getElementById("btn3").style.background="#eee"
    document.getElementById("btn4").style.background="#eee"
    document.getElementById("btn5").style.background="white"
}
