class Observer{
    constructor(data){
        this.data = data;
        this.walk(data);
    }
    walk(obj){
        let val;
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                val = obj[key];
                if(typeof(val) === 'object'){
                    this.walk(val);
                }
                this.convert(key,val);
            }
        }
    }
    convert(key,val){
        Object.defineProperty(this.data,key,{
            enumerable:true,
            configurable:true,
            get:function(){
                console.log('你访问了 '+ key);
            },
            set:function(newVal){
                if(val === newVal) return;
                console.log('你设置了 ' + key +"," + "值为" + newVal);
                val = newVal;
            }
        })
    }
}
let app = new Observer({
    user : {
        name : "haha",
        age : "111"
    }
});
app.data.user;
app.data.name = "jiang";