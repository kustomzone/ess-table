(function(e){function t(t){for(var r,a,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({about:"about",tablesviews:"tablesviews",templates:"templates"}[e]||e)+"."+{about:"cb4ab99c","chunk-2d210991":"f5291d1b","chunk-2d21a814":"dbb7409e","chunk-2d226c5a":"a677c887","chunk-ce3e6406":"9f9907e2",tablesviews:"729fda1f",templates:"d4498eae","chunk-58c6623a":"bedc5f52","chunk-f0144bea":"c72aab9a","chunk-22813c53":"53cce7d0","chunk-2d20fb75":"03cead3e","chunk-6e6bda6a":"61d1e87f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-58c6623a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",tablesviews:"tablesviews",templates:"templates"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d210991":"31d6cfe0","chunk-2d21a814":"31d6cfe0","chunk-2d226c5a":"31d6cfe0","chunk-ce3e6406":"31d6cfe0",tablesviews:"31d6cfe0",templates:"31d6cfe0","chunk-58c6623a":"5975915a","chunk-f0144bea":"31d6cfe0","chunk-22813c53":"31d6cfe0","chunk-2d20fb75":"31d6cfe0","chunk-6e6bda6a":"31d6cfe0"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/ess-table/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},"2b48":function(e,t,n){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Workspaces")]),e._v(" | "),n("router-link",{attrs:{to:"/templates"}},[e._v("Templates")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view"),n("SolidTrackSession"),e.prompt?n("div",{staticClass:"update-dialog"},[n("div",{staticClass:"update-dialog__content"},[e._v(" A new version is found. Refresh to load it? ")]),n("div",{staticClass:"update-dialog__actions"},[n("button",{staticClass:"update-dialog__button update-dialog__button--confirm",on:{click:e.update}},[e._v(" Update ")]),n("button",{staticClass:"update-dialog__button update-dialog__button--cancel",on:{click:function(t){e.prompt=!1}}},[e._v(" Cancel ")])])]):e._e()],1)},o=[],c=(n("d3b7"),n("96cf"),n("1da1")),s={name:"App",components:{SolidTrackSession:function(){return n.e("chunk-ce3e6406").then(n.bind(null,"c1a7"))}},methods:{update:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.prompt=!1,t.next=3,e.$workbox.messageSW({type:"SKIP_WAITING"});case 3:case"end":return t.stop()}}),t)})))()}},data:function(){return{prompt:!1}},created:function(){var e=this;this.$workbox&&this.$workbox.addEventListener("waiting",(function(){e.prompt=!0}))}},i=s,u=(n("a756"),n("2877")),l=Object(u["a"])(i,a,o,!1,null,"0d3d717a",null),d=l.exports,p=n("9483");Object(p["a"])("".concat("/ess-table/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("New content is available; please close the app & re-open.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("SolidLoginButton"),null!=e.webId?n("Connected"):n("Public")],1)},m=[],h={name:"Home",components:{SolidLoginButton:function(){return n.e("chunk-2d226c5a").then(n.bind(null,"e9a1"))},Connected:function(){return n.e("chunk-2d21a814").then(n.bind(null,"bc96"))},Public:function(){return n.e("chunk-2d210991").then(n.bind(null,"b926"))}},computed:{webId:{get:function(){return this.$store.state.solid.webId},set:function(){}}}},g=h,w=Object(u["a"])(g,b,m,!1,null,null,null),v=w.exports;r["default"].use(f["a"]);var k=[{path:"/",name:"Home",component:v},{path:"/tables",name:"Tables",component:function(){return n.e("tablesviews").then(n.bind(null,"4ce4"))}},{path:"/templates",name:"Templates",component:function(){return n.e("templates").then(n.bind(null,"98ca"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],x=new f["a"]({mode:"history",base:"/ess-table/",routes:k}),y=x,O=n("2f62"),j=function(){return{breadcrumb:[{text:"Workspaces",href:"#"},{text:"Bases",href:"#"},{text:"Tables",href:"#"},{text:"Records"}]}},S={},_={},R={setWebId:function(e,t){console.log(t),e.webId=t}},T={namespaced:!0,state:j,getters:S,actions:_,mutations:R},P=n("6655"),W=n.n(P),A=function(){return{webId:null,storage:null}},B={},C={setWebId:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.commit("setWebId",t),null==t){n.next=9;break}return e.commit("setWebId",t),n.next=5,W.a[t].storage;case 5:r=n.sent,e.commit("setStorage","".concat(r)),n.next=11;break;case 9:e.commit("setWebId",null),e.commit("setStorage",null);case 11:case"end":return n.stop()}}),n)})))()}},E={setWebId:function(e,t){console.log(t),e.webId=t},setStorage:function(e,t){console.log(t),e.storage=t}},I={namespaced:!0,state:A,getters:B,actions:C,mutations:E},N=(n("99af"),n("b0c0"),n("668b")),$=n("00e8"),F=n.n($),L=n("7fed"),M=n.n(L),D=n("11c1"),q=n("9b92"),H=new M.a(F.a),G=function(){return{privacy:"public",workspaces:[],workspace:null,bases:[],base:{},tables:[],table:{},record:{},tick_workspaces:new Date,recordTick:new Date}},J={},K={addWorkspace:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=t.path+Object(D["v4"])()+".ttl",o=new Date,c=o.toISOString(),s='@prefix : <#>.\n    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n    @prefix dct: <http://purl.org/dc/terms/>.\n    @prefix dbo: <http://dbpedia.org/ontology/>.\n\n    <> rdfs:label "'.concat(t.name,'".\n    <> rdf:type dbo:Workspace.\n    <> dct:created "').concat(c,'".'),n.next=7,H.postFile(a,s,"text/turtle");case 7:console.log(a),r("getWorkspaces");case 9:case"end":return n.stop()}}),n)})))()},addBase:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=t.path+Object(D["v4"])()+".ttl",o=new Date,c=o.toISOString(),s='@prefix : <#>.\n    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n    @prefix dct: <http://purl.org/dc/terms/>.\n    @prefix dbo: <http://dbpedia.org/ontology/>.\n\n    <> rdfs:label "'.concat(t.name,'".\n    <> rdf:type dbo:DataBase.\n    <> dct:created "').concat(c,'".'),n.next=7,H.postFile(a,s,"text/turtle");case 7:return n.next=9,W.a[t.workspace]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"].add(Object(q["namedNode"])(a));case 9:return n.next=11,W.a[a]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/partOf"].add(Object(q["namedNode"])(t.workspace));case 11:r("getBases");case 12:case"end":return n.stop()}}),n)})))()},addTable:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=t.path+Object(D["v4"])()+".ttl",o=new Date,c=o.toISOString(),s='@prefix : <#>.\n    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n    @prefix dct: <http://purl.org/dc/terms/>.\n    @prefix dbo: <http://dbpedia.org/ontology/>.\n\n    <> rdfs:label "'.concat(t.name,'".\n    <> rdf:type dbo:Table.\n    <> dct:created "').concat(c,'".'),n.next=7,H.postFile(a,s,"text/turtle");case 7:return console.log(a),n.next=10,W.a[t.base]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"].add(Object(q["namedNode"])(a));case 10:return n.next=12,W.a[a]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/partOf"].add(Object(q["namedNode"])(t.base));case 12:r("getTables");case 13:case"end":return n.stop()}}),n)})))()},getWorkspaces:function(e){var t=arguments;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.length>1&&void 0!==t[1]?t[1]:e.rootState.solid.storage+e.state.privacy+"/table/workspaces/",n.next=3,H.itemExists(r);case 3:if(n.sent){n.next=6;break}return n.next=6,H.createFolder(r);case 6:return n.next=8,H.readFolder(r);case 8:a=n.sent,console.log(a.files),e.commit("setWorkspaces",a.files);case 11:case"end":return n.stop()}}),n)})))()},getBases:function(e){var t=arguments;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s,i,u,l,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.length>1&&void 0!==t[1]?t[1]:e.state.workspace,a=[],o=!0,c=!1,n.prev=4,i=Object(N["a"])(W.a[r]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"]);case 6:return n.next=8,i.next();case 8:return u=n.sent,o=u.done,n.next=12,u.value;case 12:if(l=n.sent,o){n.next=19;break}d=l,a.push("".concat(d));case 16:o=!0,n.next=6;break;case 19:n.next=25;break;case 21:n.prev=21,n.t0=n["catch"](4),c=!0,s=n.t0;case 25:if(n.prev=25,n.prev=26,o||null==i.return){n.next=30;break}return n.next=30,i.return();case 30:if(n.prev=30,!c){n.next=33;break}throw s;case 33:return n.finish(30);case 34:return n.finish(25);case 35:e.commit("setBases",a);case 36:case"end":return n.stop()}}),n,null,[[4,21,25,35],[26,,30,34]])})))()},setBase:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s,i,u,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.commit("setBase",t),r=[],a=!0,o=!1,n.prev=4,s=Object(N["a"])(W.a[t]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"]);case 6:return n.next=8,s.next();case 8:return i=n.sent,a=i.done,n.next=12,i.value;case 12:if(u=n.sent,a){n.next=19;break}l=u,r.push("".concat(l));case 16:a=!0,n.next=6;break;case 19:n.next=25;break;case 21:n.prev=21,n.t0=n["catch"](4),o=!0,c=n.t0;case 25:if(n.prev=25,n.prev=26,a||null==s.return){n.next=30;break}return n.next=30,s.return();case 30:if(n.prev=30,!o){n.next=33;break}throw c;case 33:return n.finish(30);case 34:return n.finish(25);case 35:e.commit("setTables",r);case 36:case"end":return n.stop()}}),n,null,[[4,21,25,35],[26,,30,34]])})))()},getTables:function(e){var t=arguments;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s,i,u,l,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.length>1&&void 0!==t[1]?t[1]:e.state.base,a=[],o=!0,c=!1,n.prev=4,i=Object(N["a"])(W.a[r]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"]);case 6:return n.next=8,i.next();case 8:return u=n.sent,o=u.done,n.next=12,u.value;case 12:if(l=n.sent,o){n.next=19;break}d=l,a.push("".concat(d));case 16:o=!0,n.next=6;break;case 19:n.next=25;break;case 21:n.prev=21,n.t0=n["catch"](4),c=!0,s=n.t0;case 25:if(n.prev=25,n.prev=26,o||null==i.return){n.next=30;break}return n.next=30,i.return();case 30:if(n.prev=30,!c){n.next=33;break}throw s;case 33:return n.finish(30);case 34:return n.finish(25);case 35:e.commit("setTables",a);case 36:case"end":return n.stop()}}),n,null,[[4,21,25,35],[26,,30,34]])})))()}},U={togglePrivacy:function(e){e.privacy="public"==e.privacy?"private":"public"},setWorkspaces:function(e,t){console.log(t),e.workspaces=t},setBases:function(e,t){e.bases=t},setWorkspace:function(e,t){e.workspace=t},setBase:function(e,t){console.log(t),e.base=t},setTables:function(e,t){e.tables=t},setTable:function(e,t){console.log(t),e.table=t},setRecord:function(e,t){e.record=t},setRecordTick:function(e,t){console.log(t),e.recordTick=t}},z={namespaced:!0,state:G,getters:J,actions:K,mutations:U};r["default"].use(O["a"]);var Q=new O["a"].Store({state:{},mutations:{},actions:{},modules:{app:T,solid:I,table:z}}),V=n("5f5b"),X=n("b1e0"),Y=(n("f9e3"),n("2dd8"),n("4160"),n("159b"),n("ddbf")),Z=n("d4ec"),ee=n("bee2"),te=n("257e"),ne=n("262e"),re=n("2caf"),ae=n("ade3"),oe=n("dfab"),ce=n.n(oe),se=function(e){Object(ne["a"])(n,e);var t=Object(re["a"])(n);function n(){var e;Object(Z["a"])(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(ae["a"])(Object(te["a"])(e),"bases",[]),Object(ae["a"])(Object(te["a"])(e),"activeBase",""),e}return Object(ee["a"])(n,[{key:"setActiveBase",value:function(e){this.activeBase=e}}]),n}(oe["SolidModel"]);Object(ae["a"])(se,"ldpContainer",!0),Object(ae["a"])(se,"rdfContexts",{lifecycle:"http://purl.org/vocab/lifecycle/schema#"}),Object(ae["a"])(se,"rdfsClasses",["lifecycle:TaskGroup"]),Object(ae["a"])(se,"fields",{name:{type:Y["FieldType"].String,rdfProperty:"rdfs:label",required:!0}}),Object(ae["a"])(se,"classFields",["Base"]);var ie="https://spoggy-test5.solidcommunity.net/public/table/test/workspaces/";Y["Soukai"].loadModels({Workspace:se});var ue={install:function(e){e.workspaces=[],e.workspace=null,e.mixin({created:function(){this.ws=Q.state.table.workspaces,e.prototype.$myAddedProperty="Example Property",e.prototype.$myAddedMethod=function(){return e.prototype.$myAddedProperty},e.prototype.$createWorkspace=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"ws inconnu",e.next=3,se.at(ie).create({name:t});case 3:return e.next=5,se.from(ie).all();case 5:n=e.sent,console.log("Workspaces",n),n.forEach((function(e){console.log("WS LABEL",e.name)}));case 8:case"end":return e.stop()}}),e)}))),e.prototype.$getWorkspaces=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,se.from(t).all();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})}},le={install:function(e){e.bases=[],e.base=null,e.mixin({created:function(){}})}},de={install:function(e){e.tables=[],e.table=null,e.mixin({created:function(){}})}},pe={install:function(e){e.records=[],e.record=null,e.mixin({created:function(){}})}},fe=function(e){Object(ne["a"])(n,e);var t=Object(re["a"])(n);function n(){return Object(Z["a"])(this,n),t.apply(this,arguments)}return n}(oe["SolidModel"]);Object(ae["a"])(fe,"rdfsClasses",["http://xmlns.com/foaf/0.1/Person"]),Object(ae["a"])(fe,"fields",{name:{type:Y["FieldType"].String,rdfProperty:"http://xmlns.com/foaf/0.1/name"}}),ce.a.loadSolidModels(),Y["Soukai"].loadModels({Person:fe}),Y["Soukai"].useEngine(new oe["SolidEngine"](F.a.fetch.bind(F.a)));var be="https://spoggy-test5.solidcommunity.net/public/table/test/persons/",me={install:function(e){e.bases=[],e.base=null,e.mixin({created:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}),e.prototype.$createPerson=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"inconnu",e.next=3,fe.at(be).create({name:t});case 3:return e.next=5,fe.from(be).all();case 5:n=e.sent,console.log("Persons",n),n.forEach((function(e){console.log("NAme",e.name)}));case 8:case"end":return e.stop()}}),e)})))}},he={install:function(e,t){e.use(ue,t),e.use(le,t),e.use(de,t),e.use(pe,t),e.use(me,t),e.mixin({created:function(){}})}};r["default"].use(V["a"]),r["default"].use(X["a"]),r["default"].config.productionTip=!1,r["default"].use(he),new r["default"]({router:y,store:Q,render:function(e){return e(d)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},a756:function(e,t,n){"use strict";n("2b48")}});
//# sourceMappingURL=app.07a274f2.js.map