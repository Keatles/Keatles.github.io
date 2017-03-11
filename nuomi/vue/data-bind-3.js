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
        console.log('触发'+ attr);
        this.events[attr] && this.events[attr].forEach(item => (item)(...args))
    }
}
class Observer{
    constructor(data){
        this.data = data;
        this.walk(data);
        this.eventEmit = new EventEmitter();
        //设置parents属性检测是否含有父类
        this.parents = null;
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
                _this.eventEmit.emit(key,val,newVal);
                val = newVal;
                if(typeof val === 'object'){
                    let newObserver = new Observer(val);
                    newObserver.eventEmit = _this.eventEmit;
                    if(!_this.parents) {
                        newObserver.parents = key;
                    }else{
                        newObserver.parents = _this.parents;
                    }
                }
            },
        })
    }
    $watch(attr,callback) {
        this.eventEmit.on(attr, callback);
    }
}
let app = new Observer({
    name: {
        firstName: 'zhaoting',
        lastName: 'ye'
    },
    age: 25
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
app.$watch('name',function(newValue) {
    console.log('我的姓名发生了变化，可能是姓氏变了，也可能是名字变了')
})

console.log(`需要使用app.data.name:{firstName:'xx'} 形式传入参数`)

app.data.name = {firstName:'somebody'};


