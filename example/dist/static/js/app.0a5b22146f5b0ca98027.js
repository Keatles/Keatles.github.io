webpackJsonp([2,0],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(83),s=o(i),a=n(79),r=o(a);new s.default({el:"#app",template:"<App/>",components:{App:r.default}})},39:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(44),s=o(i),a=n(23),r=o(a),u=n(41),c=o(u);e.default={name:"app",components:{sortableNav:c.default},data:function(){return{data:[{number:0,name:"动画",pingyin:"DongHua",color:"bg-blue"},{number:1,name:"番剧",pingyin:"FanJu",color:"bg-yellow"},{number:2,name:"游戏",pingyin:"YouXi",color:"bg-green"},{number:3,name:"鬼畜",pingyin:"GuiChu",color:"bg-roseate"},{number:4,name:"音乐",pingyin:"YinYue",color:"bg-light-blue"},{number:5,name:"舞蹈",pingyin:"WuDao",color:"bg-gray"},{number:6,name:"科技",pingyin:"KeJi",color:"bg-brown"},{number:7,name:"生活",pingyin:"ShengHuo",color:"bg-sliver"},{number:8,name:"广告",pingyin:"GuangGao",color:"bg-dark-red"},{number:9,name:"直播",pingyin:"ZhiBo",color:"bg-dark-green"},{number:10,name:"TV剧",pingyin:"TVJu",color:"bg-orange"},{number:11,name:"电影",pingyin:"DianYing",color:"bg-pink"}]}},watch:{data:function(t){var e=(0,r.default)(t,function(t){return t.number});window.localStorage.nav=(0,s.default)(e)}},computed:{options:function t(){var t={offset:150,bindData:this.data,backToTop:0};return t.data=this.data.map(function(t,e){return{name:t.name,target:"section"+e}}),t}},mounted:function(){var t=this,e=window.localStorage.nav;e&&!function(){e=JSON.parse(e);var n=[];(0,r.default)(e,function(e){n.push(t.data[e])}),t.data=n}()}}},40:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(23),s=o(i),a=n(42),r=o(a),u=n(43);e.default={mixins:[r.default],components:{},data:function(){return{mode:"navigation",data:[],isClickScroll:!1,targetValue:0,_screenHeight:0,_left:0,_top:0,time:800,height:32,queueNumber:0,scrollTop:0,isDrag:!1,dragId:0,x:0,y:0,offsetX:0,offsetY:0}},props:{options:{type:Object}},computed:{offset:function(){return this.options.offset||0},active:function t(){if(this.noInScope)return!1;for(var t=null,e=0,n=this.data.length;e<n;e++)this.scrollTop>=this.data[e].offsetTop-this.offset&&(t=e);return t},current:function(){return this.isClickScroll?this.targetValue:this.active},noInScope:function(){return!this.data.length||this.scrollTop<this.data[0].offsetTop-this._screenHeight||this.scrollTop>this.data[this.data.length-1].offsetTop+this.data[this.data.length-1].height},exchangeId:function(){var t=Math.floor(this.y/this.height);return t>this.data.length-1&&(t=this.data.length),t<0&&(t=0),t},dragStyles:function(){return{left:this.x+"px",top:this.y+"px"}}},watch:{options:{deep:!0,handler:function(t,e){this.getData()}}},methods:{init:function(){this.getData(),this.bindEvent(),this._screenHeight=window.screen.availHeight,this._left=this.$refs.ul.getBoundingClientRect().left,this._top=this.$refs.ul.getBoundingClientRect().top},setActive:function(t,e){var n=this;if(t===this.current||!e&&"sortable"===this.mode)return!1;var o=this.data[t].elem;this.isClickScroll=!0,this.targetValue=t,this.queueNumber++,this.scrollToElem(o,this.time,this.offset||0).then(function(){n.queueNumber--,0===n.queueNumber&&(n.isClickScroll=!1)})},bindEvent:function(){document.addEventListener("scroll",this.scroll,!1),document.addEventListener("mousemove",this.dragMove,!1),document.addEventListener("mouseup",this.dragEnd,!1),document.addEventListener("mouseleave",this.dragEnd,!1)},unbindEvent:function(){document.removeEventListener("scroll",this.scroll,!1),document.removeEventListener("mousemove",this.dragMove,!1),document.removeEventListener("mouseup",this.dragEnd,!1),document.removeEventListener("mouseleave",this.dragEnd,!1)},toggleMode:function(){this.mode="navigation"===this.mode?"sortable":"navigation"},getData:function(){this.data=(0,u.sortArr)((0,s.default)(this.options.data,function(t){var e=document.getElementById(t.target);if(!e)return console.error('[vue-sortable-nav]: Unable to find the corresponding elements(Please make sure that there is id for the elements of ["'+t.target+']")');var n=(0,u.getOffsetTop)(e);return{name:t.name,elem:e,offsetTop:n,height:e.offsetHeight}}),"offsetTop")},scroll:function(t){this.scrollTop=document.body.scrollTop},getPos:function(t){this.x=t.clientX-this._left-this.offsetX,this.y=t.clientY-this._top-this.offsetY},dragStart:function(t,e){return"navigation"!==this.mode&&(this.isDrag=!0,this.dragId=e,this.offsetX=t.offsetX,this.offsetY=t.offsetY,void this.getPos(t))},dragMove:function(t){this.isDrag&&this.getPos(t),t.preventDefault()},dragEnd:function(t){this.isDrag&&(this.isDrag=!1,this.exchangeId!==this.dragId?this.options.bindData.splice(this.exchangeId,0,this.options.bindData.splice(this.dragId,1)[0]):this.setActive(this.dragId,!0))}},mounted:function(){this.init()},beforeDestroy:function(){this.unbindEvent()}}},41:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(80),s=o(i);e.default=s.default},42:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(45),s=o(i);window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var a=function(t,e,n,o){return n*((t=t/o-1)*t*t+1)+e},r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:800,n=window.pageYOffset||document.documentElement.scrollTop,o=n,i=t-o,r=e,u=null;return new s.default(function(n,s){function c(s){null===u&&(u=s);var l=s-u;l<e?(document.documentElement.scrollTop?document.documentElement.scrollTop=a(l,o,i,r):document.body.scrollTop=a(l,o,i,r),window.requestAnimationFrame(c)):(document.body.scrollTop=t,n(t))}window.requestAnimationFrame(c)})},u=function(t){return t="number"==typeof t?t:800,r(0,t)},c=function(t,e,n){var o=t.getBoundingClientRect().top+(window.pageYOffset||document.documentElement.scrollTop)-(document.documentElement.clientTop||0);return r(o-(n||0),e)};e.default={methods:{scrollToTop:u,scrollToElem:c,scrollTo:r}}},43:function(t,e){"use strict";function n(t){var e,n,o,i=document.documentElement,s=document.body;return e="undefined"!=typeof t.getBoundingClientRect?t.getBoundingClientRect().top:0,n=i.clientTop||s.clientTop||0,o=window.pageYOffset||i.scrollTop,e+o-n}function o(t,e){for(var n=0;n<t.length-1;n++)for(var o=0;o<t.length-1-n;o++)if(t[o][e]>t[o+1][e]){var i=t[o];t[o]=t[o+1],t[o+1]=i}return t}Object.defineProperty(e,"__esModule",{value:!0}),e.getOffsetTop=n,e.sortArr=o},77:function(t,e){},78:function(t,e){},79:function(t,e,n){var o,i;n(78),o=n(39);var s=n(82);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},80:function(t,e,n){var o,i;n(77),o=n(40);var s=n(81);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},81:function(module,exports){module.exports={render:function(){with(this)return _h("span",{staticClass:"vue-sortable-nav"},[_h("transition",{attrs:{name:"fade"}},["sortable"===mode?_h("span",[_m(0)," ",_m(1)]):_e()])," ",_h("ul",{ref:"ul",class:["sortable-nav",isDrag?"isDraging":"noDraging",{"sortable-mode":"sortable"===mode}]},[_l(data,function(t,e){return[isDrag&&e===exchangeId&&exchangeId<=dragId?_h("li",{class:["sortable-item"]},[_m(2,!0)]):_e()," ",isDrag&&e===dragId?_h("li",{class:["sortable-item","drag-block"],style:dragStyles},[_h("div",{staticClass:"sortable-item-name"},[_s(t.name)])]):_h("li",{class:["sortable-item",{active:"navigation"===mode&&e===current}],on:{click:function(t){setActive(e)},mousedown:function(t){dragStart(t,e)}}},[_h("div",{staticClass:"sortable-item-name"},[_s(t.name)])])," "," ",isDrag&&e===exchangeId&&exchangeId>dragId?_h("li",{class:["sortable-item"]},[_m(3,!0)]):_e()]})," ",isDrag&&exchangeId===data.length?_h("li",{class:["sortable-item"]},[_m(4)]):_e()," ",_h("li",{staticClass:"sortable-btn",on:{click:toggleMode}},[_m(5),_m(6),"\n\t\t\t排序\n\t\t"])," ",noInScope||"navigation"!==mode?_e():_h("li",{staticClass:"pointer-block",style:{top:current*height+"px"}})])," ",scrollTop>=this.options.backToTop?_h("div",{staticClass:"vue-backtotop-btn",on:{click:function(t){scrollToTop(time)}}},[_m(7)]):_e()])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"tip"})},function(){with(this)return _h("div",{staticClass:"custom-bg"})},function(){with(this)return _h("div",{staticClass:"sortable-item-name"})},function(){with(this)return _h("div",{staticClass:"sortable-item-name"})},function(){with(this)return _h("div",{staticClass:"sortable-item-name"})},function(){with(this)return _h("i",{staticClass:"sort-icon"})},function(){with(this)return _h("br")},function(){with(this)return _h("i",{staticClass:"backtotop-icon"})}]}},82:function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"app"}},[_h("ul",{staticClass:"section white"},[_l(data,function(t,e){return _h("li",{class:t.color,attrs:{id:"section"+e}},[_h("h3",[_s(t.name)])," ",_h("p",[_s(t.pingyin)])])})])," ",_m(0)," ",_h("sortable-nav",{attrs:{options:options}})])},staticRenderFns:[function(){with(this)return _h("footer",[_h("a",{attrs:{href:"https://github.com/NightCatSama"}},["NightCat"])])}]}}});
//# sourceMappingURL=app.0a5b22146f5b0ca98027.js.map