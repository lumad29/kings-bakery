(function(e){function n(n){for(var r,a,u=n[0],i=n[1],s=n[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-032a27c0":"ece63849","chunk-23c5e20e":"49d08280","chunk-4cc99f48":"b2d1bb79","chunk-cdfa864c":"e8bd8932","chunk-242528e8":"f2be2f1b","chunk-44c60b59":"dde9e7f3","chunk-678f3222":"2eabe38c","chunk-769b340f":"ed43eb0e"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-032a27c0":1,"chunk-4cc99f48":1,"chunk-242528e8":1,"chunk-44c60b59":1,"chunk-678f3222":1,"chunk-769b340f":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-032a27c0":"01213618","chunk-23c5e20e":"31d6cfe0","chunk-4cc99f48":"8b48c04a","chunk-cdfa864c":"31d6cfe0","chunk-242528e8":"8b9ef13b","chunk-44c60b59":"b7216c88","chunk-678f3222":"68e6a77c","chunk-769b340f":"6781946e"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),t(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/kings-bakery/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"4d6a":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"app",(function(){return j}));t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-fade-transition",{attrs:{mode:"out-in"}},[t("router-view")],1)},c=[],u={name:"App"},i=u,s=(t("034f"),t("2877")),l=t("6544"),f=t.n(l),d=t("0789"),p=Object(s["a"])(i,o,c,!1,null,null,null),h=p.exports;f()(p,{VFadeTransition:d["b"]});t("d3b7"),t("3ca3"),t("ddb0");var m=t("8c4f");a["a"].use(m["a"]);var b=new m["a"]({mode:"history",base:"/kings-bakery/",scrollBehavior:function(e,n,t){return e.hash?{selector:e.hash}:t||{x:0,y:0}},routes:[{path:"/",component:function(){return t.e("chunk-242528e8").then(t.bind(null,"d1da"))},children:[{path:"",name:"Default",component:function(){return t.e("chunk-44c60b59").then(t.bind(null,"2757"))}},{path:"contact",name:"Contact",component:function(){return Promise.all([t.e("chunk-032a27c0"),t.e("chunk-cdfa864c")]).then(t.bind(null,"3908"))}},{path:"breads",name:"Breads",component:function(){return Promise.all([t.e("chunk-032a27c0"),t.e("chunk-4cc99f48")]).then(t.bind(null,"87b3"))}},{path:"pastries",name:"Pastries",component:function(){return Promise.all([t.e("chunk-032a27c0"),t.e("chunk-23c5e20e")]).then(t.bind(null,"2040"))}}]}]}),v=(t("dca8"),t("2f62")),g=t("7ffd");g["a"].options.mapping="simple",g["a"].options.strict=!0;var k=g["a"],y={drawer:null,navItemsAppBar:[{name:"Our products",routenpath:"",isMenuDropDown:!0,menuDropDownItems:[{name:"Breads",routeName:"Breads"},{name:"Pastries",routeName:"Pastries"}]},{name:"Contact",routeName:"Contact",isMenuDropDown:!1,menuDropDownItems:[]}]},w=g["b"].mutations(y),O=g["b"].actions(y),_={},j={namespaced:!0,state:y,mutations:w,actions:O,getters:_};a["a"].use(v["a"]);var P=new v["a"].Store({modules:r,plugins:[k.plugin]}),D=(Object.freeze({root:!0}),t("f309")),E=t("fcf4");a["a"].use(D["a"]);var x,C=new D["a"]({theme:{themes:{light:{primary:E["a"].indigo.base}}}}),B=t("b85c"),S=(t("b0c0"),t("ffe0")),N=Object(B["a"])(S.keys());try{for(N.s();!(x=N.n()).done;){var T=x.value,A=S(T);a["a"].component(A.default.name,A.default||A)}}catch($){N.e($)}finally{N.f()}var M=t("27d6"),L=t.n(M);L.a.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]},custom:{urls:["https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css"],timeout:2e3}}),a["a"].config.productionTip=!1,new a["a"]({router:b,store:P,vuetify:C,render:function(e){return e(h)}}).$mount("#app")},"5a74":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-btn",e._g(e._b({staticClass:"v-btn--app",attrs:{color:e.color}},"v-btn",e.$attrs,!1),e.$listeners),[e._t("default")],2)},a=[],o={name:"AppBtn",props:{color:{type:String,default:"primary"}}},c=o,u=(t("d59b"),t("2877")),i=t("6544"),s=t.n(i),l=t("8336"),f=Object(u["a"])(c,r,a,!1,null,null,null);n["default"]=f.exports;s()(f,{VBtn:l["a"]})},"85ec":function(e,n,t){},d59b:function(e,n,t){"use strict";t("4d6a")},ffe0:function(e,n,t){var r={"./app/Btn.vue":"5a74"};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="ffe0"}});
//# sourceMappingURL=app.dd67c282.js.map