(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],l=0,f=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0f4e08aa":"c28dffa3","chunk-76fc8942":"ef4d944a","chunk-8f11a9aa":"05bae3c9","chunk-a2750e12":"07194576"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0f4e08aa":1,"chunk-76fc8942":1,"chunk-8f11a9aa":1,"chunk-a2750e12":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0f4e08aa":"c58c31d5","chunk-76fc8942":"ea8e6524","chunk-8f11a9aa":"9198486b","chunk-a2750e12":"4aa02e16"}[t]+".css",i=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],l=u.getAttribute("data-href");if(l===a||l===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],h.parentNode.removeChild(h),n(s)},h.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(h)}).then(function(){r[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}i[t]=void 0}};var h=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/car/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var h=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f93":function(t,e,n){"use strict";var a=n("4f08"),r=n.n(a);r.a},"45d9":function(t,e,n){},"4f08":function(t,e,n){},5415:function(t,e,n){"use strict";var a=n("b6ff"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("7bc1"),n("dac5"),n("6e26"),n("9604"),n("df67");var a=n("6e6d"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("home")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.is_show?n("div",{attrs:{id:"Home"}},[n("div",{staticClass:"list"},[n("ul",{ref:"car",staticClass:"car"},t._l(t.carList,function(e,a,r){return n("li",{key:r},[n("p",{staticClass:"car_letter"},[t._v(t._s(a))]),t._l(e,function(e,a){return n("p",{key:a,staticClass:"car_name",on:{click:function(n){return t.to_car_detail(e.MasterID)}}},[t._v("\n                    "+t._s(e.Name)+"\n                ")])})],2)}),0),n("ul",{staticClass:"letter",on:{touchstart:t.to_letter,touchmove:t.to_letter,touchend:t.letter_}},[n("li",{attrs:{"data-i":"-1"}},[t._v("#")]),t._l(t.carList,function(e,a,r){return n("li",{key:r,attrs:{"data-i":r}},[t._v(t._s(a))])})],2)]),n("car-series",{attrs:{id:t.id},on:{change_id:t.change_id}}),n("router-view")],1):n("Loading")},o=[],c=(n("f763"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"CarSeries"},on:{touchstart:t.start,touchmove:t.move,touchend:t.end}},[t.isShow?n("ul",t._l(t.seriesCarlist,function(e,a){return n("li",{key:a},[n("div",{staticClass:"header"},[n("p",[t._v(t._s(e.GroupName))])]),t._l(e.GroupList,function(e,a){return n("div",{key:a,staticClass:"body",on:{click:function(n){return t.car_detail(e)}}},[n("div",{staticClass:"img"},[n("img",{attrs:{src:e.Picture,alt:"",srcset:""}})]),n("div",{staticClass:"name"},[n("p",[t._v(t._s(e.AliasName))]),n("p",[t._v(t._s(e.DealerPrice))])])])})],2)}),0):n("Loading")],1)}),u=[],l={name:"CarSeries",props:["id"],data:function(){return{seriesCarlist:new Array,isShow:!1,pageX:0,last_pageX:0,width:0}},mounted:function(){this.width=this.$el.clientWidth},watch:{id:function(){var t=this;"number"==typeof this.id?(this.isShow=!1,this.$el.style.transform="translateX(0)",this.axios.get("/car_api/v2-car-getMakeListByMasterBrandId.html?MasterID="+this.id).then(function(e){200===e.status&&1===e.data.code&&(t.seriesCarlist=e.data.data,t.isShow=!0)})):this.$el.style.transform="translateX(100%)"}},methods:{start:function(){this.pageX=event.changedTouches[0].pageX},move:function(){var t=this.pageX-event.changedTouches[0].pageX;t<=0&&(this.last_pageX=t,this.$el.style.right=this.pageX-event.changedTouches[0].pageX+"px")},end:function(){-this.last_pageX>this.width/3?(this.$el.style.transform="translateX(100%)",this.$emit("change_id","")):this.$el.style.transform="translateX(0)",this.last_pageX=0,this.$el.style.right=0},car_detail:function(t){this.$router.push("/about/"+t.SerialID)}}},f=l,h=(n("9ca0"),n("6691")),d=Object(h["a"])(f,c,u,!1,null,"add03c98",null),p=d.exports,m={name:"Home",data:function(){return{carList:"",offsetTop:new Array,id:-1,is_show:!1}},components:{CarSeries:p},created:function(){var t=this;this.axios.get("/car_api/v2-car-getMasterBrandList.html").then(function(e){console.log(e),200===e.status&&1===e.data.code&&(t.fit(e.data.data),t.is_show=!0)})},mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.getOffsetTop()},1e3)})},methods:{change_id:function(t){this.id=t},getOffsetTop:function(){var t=this;this.$refs.car&&this.$refs.car.childNodes.forEach(function(e){t.offsetTop.push(e.offsetTop)})},fit:function(t){0===this.offsetTop.length&&this.getOffsetTop();var e={};t.forEach(function(t){var n=t.Spelling.slice(0,1);e[n]?e[n].push(t):(e[n]=new Array,e[n].push(t))}),this.carList=e},to_letter:function(){"UL"!=event.target.tagName&&-1!=event.target.dataset.i?this.$refs.car.scrollTop=this.offsetTop[event.target.dataset.i]:this.$refs.car.scrollTop=0},letter_:function(){},to_car_detail:function(t){this.id=parseInt(t)}}},v=m,g=(n("5415"),Object(h["a"])(v,s,o,!1,null,"fbf8d95c",null)),_=g.exports,y={components:{Home:_}},b=y,k=(n("0f93"),Object(h["a"])(b,r,i,!1,null,"a7e601a0",null)),w=k.exports,C=n("8b48"),T={path:"/about/:id",component:function(){return n.e("chunk-0f4e08aa").then(n.bind(null,"f436"))},children:[{name:"pic",path:"pic",props:!0,component:function(){return n.e("chunk-8f11a9aa").then(n.bind(null,"d973"))},children:[{path:"imgList",name:"imgList",props:!0,component:function(){return n.e("chunk-76fc8942").then(n.bind(null,"d116"))}}]},{name:"ask",path:"ask",props:!0,component:function(){return n.e("chunk-a2750e12").then(n.bind(null,"390c"))}}]};a["a"].use(C["a"]);var $=new C["a"]({mode:"history",base:"/car/",routes:[T]}),L=n("591a");a["a"].use(L["a"]);var O=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=n("2427"),x=n.n(S),E=n("27f3"),j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"loading"}},[n("div",{staticClass:"arc"})])}],P={name:"loading"},A=P,N=(n("86c5"),Object(h["a"])(A,j,X,!1,null,"0e7a8201",null)),M=N.exports;a["a"].use(E["a"]),a["a"].prototype.axios=x.a,a["a"].config.productionTip=!1,a["a"].component("Loading",M),a["a"].filter("pic_URL",function(t){var e=t&&t.split("{0}");return e&&1!=e.length?e[0]+1+e[1]:t}),new a["a"]({router:$,store:O,render:function(t){return t(w)}}).$mount("#app")},"86c5":function(t,e,n){"use strict";var a=n("45d9"),r=n.n(a);r.a},"9ca0":function(t,e,n){"use strict";var a=n("d50d"),r=n.n(a);r.a},b6ff:function(t,e,n){},d50d:function(t,e,n){}});
//# sourceMappingURL=app.c5bb8ef4.js.map