(function(t){function e(e){for(var o,s,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)s=r[d],a[s]&&m.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),a=n.n(o);a.a},"0dab":function(t,e,n){t.exports=n.p+"img/cxy_02.f8e9c14c.jpg"},"0db1":function(t,e,n){},1230:function(t,e,n){"use strict";var o=n("0db1"),a=n.n(o);a.a},"1df5":function(t,e,n){t.exports=n.p+"img/zjsj.35817253.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s={name:"app"},r=s,c=(n("034f"),n("2877")),l=Object(c["a"])(r,a,i,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,d=n("8c4f"),m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"index"}},[o("div",{staticClass:"left"}),o("div",{staticClass:"right"}),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],staticClass:"center-btn",on:{click:t.openDoor}},[t._v("认识一下吧")]),o("div",{staticClass:"center"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showMe,expression:"showMe"}],attrs:{id:"me"}},[t._v("我")]),t._m(0),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showImg_01,expression:"showImg_01"}],staticClass:"img zjsj-img"},[o("img",{attrs:{src:n("1df5"),alt:""}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showImg_02,expression:"showImg_02"}],staticClass:"cxy-img"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showText,expression:"showText"}],staticClass:"txt"},[t._v("别犹豫啦，不想做程序猿的土木人不是好攻城狮")]),o("img",{attrs:{src:n("0dab"),alt:""}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showImg_03,expression:"showImg_03"}],staticClass:"img sw-img"},[o("span",{directives:[{name:"show",rawName:"v-show",value:t.showText_01,expression:"showText_01"}]},[t._v("湖南赛维软件技术有限公司")])]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showImg_04,expression:"showImg_04"}],staticClass:"img hp-img"},[o("img",{attrs:{src:n("633b"),alt:""}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showImg_05,expression:"showImg_05"}],staticClass:"img gtja-img"},[o("img",{attrs:{src:n("dca6"),alt:""}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showMoreBtn,expression:"showMoreBtn"}],staticClass:"more-btn"},[t._v("了解更多")]),o("div",{staticClass:"content"},t._l(t.content,function(e,n){return o("p",{key:n},[t._v(t._s(e))])}),0)])])},p=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"img xtu-img"},[o("img",{attrs:{src:n("9103"),alt:""}})])}],g=n("589d"),h=n.n(g),f={name:"index",data:function(){return{showBtn:!0,showMoreBtn:!1,showImg_01:!1,showImg_02:!1,showImg_03:!1,showImg_04:!1,showImg_05:!1,showText:!1,showText_01:!1,showMe:!1,content:[]}},mounted:function(){},methods:{_initAnime:function(){var t=this,e=this.$anime.timeline({easing:"easeInOutQuad",duration:750});e.add({targets:".xtu-img",width:450,height:278,duration:3e3,complete:function(){t.content=["毕业院校：湘潭大学","就读时间：2010-2014","专业：土木工程"]}}).add({targets:".xtu-img",left:"10%",width:170,height:96,duration:2e3,delay:2e3,complete:function(){t.showMe=!0,t.content=[]}}).add({targets:"#me",left:"90%",duration:5e3,complete:function(){t.showImg_01=!0}}).add({targets:".zjsj-img",width:450,height:278,duration:3e3,complete:function(){t.content=["公司名称：中建三局装饰有限公司","在职时间：2014.7 - 2015.5","职位：施工员"]}}).add({targets:".zjsj-img",left:"90%",width:170,height:96,duration:2e3,delay:2e3,complete:function(){t.content=[]}}).add({targets:"#me",left:"47%",duration:3e3,complete:function(){t.showImg_02=!0,t.$anime({targets:"#me",keyframes:[{translateY:-40},{translateX:100},{translateY:40},{translateX:0},{translateX:-100},{translateY:-40},{translateX:0},{translateY:0}],duration:4e3,easing:"easeOutElastic(1, .8)",loop:2,complete:function(){t.showText=!0}})}}).add({targets:"#me",top:"47%",duration:3e3,delay:1e4,complete:function(){t.showText=!1,t.showImg_03=!0}}).add({targets:".sw-img",width:450,height:278,duration:3e3,complete:function(){t.showText_01=!0,t.content=["公司名称：湖南赛维软件","在职时间：2015.10 - 2016.8","职位：web前端开发工程师"]}}).add({targets:".sw-img",top:"43%",left:"10%",width:170,height:96,fontSize:"12px",duration:2e3,delay:2e3,complete:function(){t.content=[]}}).add({targets:"#me",top:"47%",left:"10%",duration:3e3,complete:function(){t.showImg_02=!1,t.showImg_04=!0}}).add({targets:".hp-img",width:450,height:278,duration:3e3,complete:function(){t.content=["公司名称：上海惠普","在职时间：2016.8 - 2018.5","职位：开发工程师"]}}).add({targets:".hp-img",top:"43%",left:"50%",width:170,height:96,duration:2e3,delay:2e3,complete:function(){t.content=[]}}).add({targets:"#me",top:"47%",left:"47%",duration:3e3,complete:function(){t.showImg_05=!0}}).add({targets:".gtja-img",width:450,height:278,duration:3e3,complete:function(){t.content=["公司名称：国泰君安证券","在职时间：2018.5 - 至今","职位：web前端开发工程师"]}}).add({targets:".gtja-img",top:"43%",left:"90%",width:170,height:96,duration:2e3,delay:2e3,complete:function(){t.content=[]}}).add({targets:"#me",top:"47%",left:"90%",duration:3e3,complete:function(){t.showMe=!1,t.showMoreBtn=!0,t.$anime({targets:".xtu-img",keyframes:[{left:"50%",top:"5%"},{left:"90%"},{top:"43%"},{left:"50%"},{left:"10%"},{top:"5%"}],loop:!0,duration:1e4,easing:"easeOutElastic(1, .8)"}),t.$anime({targets:".zjsj-img",keyframes:[{top:"43%"},{left:"50%"},{left:"10%"},{top:"5%"},{left:"50%"},{left:"90%"}],loop:!0,duration:1e4,easing:"easeOutElastic(1, .8)"}),t.$anime({targets:".sw-img",keyframes:[{top:"5%"},{left:"50%"},{left:"90%"},{top:"43%"},{left:"50%"},{left:"10%"}],loop:!0,duration:1e4,easing:"easeOutElastic(1, .8)"}),t.$anime({targets:".hp-img",keyframes:[{left:"10%"},{top:"5%"},{left:"50%"},{left:"90%"},{top:"43%"},{left:"50%"}],loop:!0,duration:1e4,easing:"easeOutElastic(1, .8)"}),t.$anime({targets:".gtja-img",keyframes:[{left:"50%"},{left:"10%"},{top:"5%"},{left:"50%"},{left:"90%"},{top:"43%"}],loop:!0,duration:1e4,easing:"easeOutElastic(1, .8)"})}})},openDoor:function(){var t=this,e=document.getElementsByClassName("left")[0],n=document.getElementsByClassName("right")[0];t.showBtn=!1,this.$anime({targets:".center",backgroundColor:"#FFF",easing:"easeInOutQuad",duration:3e3}),h()(e,{left:"-35%"},{duration:3e3,complete:function(){t._initAnime()}}),h()(n,{right:"-35%"},{duration:3e3})}}},w=f,v=(n("1230"),Object(c["a"])(w,m,p,!1,null,"38224a60",null));v.options.__file="index.vue";var _=v.exports;o["a"].use(d["a"]);var x=new d["a"]({routes:[{path:"/",redirect:"index"},{path:"/index",name:"index",component:_}]}),b=(n("6b47"),n("1209"));o["a"].config.productionTip=!1,o["a"].prototype.$anime=b["a"],new o["a"]({render:function(t){return t(u)},router:x}).$mount("#app")},"633b":function(t,e,n){t.exports=n.p+"img/hp.c0dbcac0.jpg"},"64a9":function(t,e,n){},"6b47":function(t,e,n){},9103:function(t,e,n){t.exports=n.p+"img/xtu.eb512e46.jpg"},dca6:function(t,e,n){t.exports=n.p+"img/gtja.a6de7909.jpg"}});
//# sourceMappingURL=app.c8404c5c.js.map