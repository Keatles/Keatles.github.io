class EventEmitter {
    constructor( ){
        this.events = {};
    };
    //事件监听
    on(attr,callback){
        if(this.events[attr]){
            this.events[attr].push(callback);
        }else{
            this.events[attr] = [callback];
        }
    }
    off(attr,callback){
        for(let key in this.events){
            if(this.events.hasOwnProperty(key) && key === attr){
                delete this.events[key];
            }
        }
    }
    emit(attr,...args){
        this.events[attr] && this.events[attr].forEach(item => (item)(...args))
    }
}
class Observer{
    constructor(data){
        this.data = data;
        this.walk(data);
        this.events = new EventEmitter();
    }
    //属性遍历
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
        let _this = this;
        Object.defineProperty(this.data,key,{
            enumerable:true,
            configurable:true,
            get:function(){
                console.log('你访问了 '+ key);
            },
            set:function(newVal){
                if(val === newVal) return;
                console.log('你设置了 ' + key +"," + "值为 " + newVal);
                _this.events.emit(key,val,newVal);
                val = newVal;
                if(typeof val === 'object'){
                    new Observer(val);
                }
            },
        })
    }
    $watch(attr,callback){
    this.events.on(attr,callback);
}
}
let app = new Observer({
    age:21
});
app.$watch('age', function(oldVal, newVal){
    console.log(`我的年龄变了，原来是: ${oldVal}岁，现在是：${newVal}岁了`)
});

app.$watch('age', function(oldVal, newVal){
    if(oldVal > newVal) {
        console.log(`我的年龄真的变了诶，竟然年轻了${oldVal - newVal}岁`)
    }else{
        console.log(`我的年龄真的变了诶，竟然老了${newVal - oldVal}岁`)
    }
});
app.data.age = 100;


