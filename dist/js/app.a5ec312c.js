(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"d160eb3d","chunk-63c0d98d":"f5cfed92"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-63c0d98d":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"31d6cfe0","chunk-63c0d98d":"f4f4a84c"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],d=s.getAttribute("data-href");if(d===r||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],l.parentNode.removeChild(l),n(c)},l.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5ff5":function(e,t,n){},6695:function(e,t,n){},a8ba:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("4160"),n("a630"),n("d81d"),n("b64b"),n("3ca3"),n("159b");var r={data:function(){return{}},computed:{isDark:{set:function(e){this.$store.dispatch("theme/setDark",e)},get:function(){return this.$store.state.theme.isDark}}}}},bd38:function(e,t,n){"use strict";var r=n("7a23");function a(e,t,n,a,o,c){return Object(r["r"])(),Object(r["d"])("div",null,[Object(r["x"])(e.$slots,"default")])}var o=n("4f35"),c=n("08ac"),u=n("9312"),i=n("3e8d"),s=Object(r["f"])({name:"v-card",mixins:[o["a"],o["b"],i["a"],u["a"],c["a"]]});s.render=a;t["a"]=s},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("6695"),n("db6a"),n("2619"),n("c9d2"),n("a4cf");var r=n("7a23");function a(e,t,n,a,o,c){var u=Object(r["y"])("router-view"),i=Object(r["y"])("v-card");return Object(r["r"])(),Object(r["d"])(i,{id:"app-theme",class:[{"theme--dark":e.isDark,"theme--light":!e.isDark},"no-select"],color:"bg"},{default:Object(r["H"])((function(){return[Object(r["e"])(u,{name:"header"},{default:Object(r["H"])((function(e){var t=e.Component;return[Object(r["e"])(r["a"],{mode:"out-in",appear:"","enter-active-class":"fade-in-top","leave-active-class":"fade-out-top"},{default:Object(r["H"])((function(){return[(Object(r["r"])(),Object(r["d"])(Object(r["z"])(t)))]})),_:2},1024)]})),_:1}),Object(r["e"])(u,{name:"contentRefreshed"},{default:Object(r["H"])((function(e){var t=e.Component;return[Object(r["e"])(r["a"],{mode:"out-in","enter-active-class":"fade-in-fwd","leave-active-class":"fade-out-bck"},{default:Object(r["H"])((function(){return[(Object(r["r"])(),Object(r["d"])(Object(r["z"])(t)))]})),_:2},1024)]})),_:1}),Object(r["e"])(u,{name:"footer"},{default:Object(r["H"])((function(e){var t=e.Component;return[Object(r["e"])(r["a"],{mode:"out-in","enter-active-class":"fade-in-fwd","leave-active-class":"fade-out-bck"},{default:Object(r["H"])((function(){return[(Object(r["r"])(),Object(r["d"])(Object(r["z"])(t)))]})),_:2},1024)]})),_:1})]})),_:1},8,["class"])}var o=n("c768"),c=n("bd38"),u=n("a8ba"),i=Object(r["f"])({mixins:[u["a"]],setup:function(){Object(o["a"])({url:"http://localhost:1337/graphql",cachePolicy:"network-only"})},components:{vCard:c["a"]}});n("e320");i.render=a;var s=i,d=n("5502"),f=!!localStorage.getItem("isDark")&&JSON.parse(localStorage.getItem("isDark")),l={namespaced:!0,state:{isDark:f},actions:{setDark:function(e,t){var n=e.commit;n("updateDark",t)}},mutations:{updateDark:function(e,t){e.isDark=t,localStorage.setItem("isDark",JSON.stringify(e.isDark))}}},m=Object(d["a"])({state:{},mutations:{},actions:{},getters:{},modules:{theme:l}}),b=(n("b0c0"),n("d3b7"),n("6c02")),p="lightfront",h=" | ",v=[{path:"/",alias:["/Home"],name:"Home",components:{header:function(){return n.e("chunk-63c0d98d").then(n.bind(null,"603e"))},contentRefreshed:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},meta:{title:p+h+"Services"}},{path:"/Tarifs",name:"Tarifs",components:{header:function(){return n.e("chunk-63c0d98d").then(n.bind(null,"603e"))}},meta:{title:p+h+"Tarifs"}},{path:"/AboutUs",name:"AboutUs",components:{header:function(){return n.e("chunk-63c0d98d").then(n.bind(null,"603e"))}},meta:{title:p+h+"Pourquoi nous?"}}],O=(n("7db0"),n("4160"),n("a630"),n("d81d"),n("fb6a"),n("b64b"),n("3ca3"),n("159b"),function(e,t,n){var r=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.title})),a=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags}));if(r&&(document.title=r.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(e){return e.parentNode.removeChild(e)})),!a)return n();a.meta.metaTags.map((function(e){var t=document.createElement("meta");return Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((function(e){return document.head.appendChild(e)})),n()}),j=Object(b["a"])({history:Object(b["b"])("/"),routes:v,scrollBehavior:function(e){return new Promise((function(e){setTimeout((function(){e({top:0})}),400)}))}});j.beforeEach((function(e,t){if(t.name==e.name){var n=!1;return n}})),j.beforeEach((function(e,t,n){O(e,t,n)}));var g=Object(r["c"])(s);g.use(m),g.use(j),g.mount("#app")},e320:function(e,t,n){"use strict";n("5ff5")}});
//# sourceMappingURL=app.a5ec312c.js.map