(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["workspace"],{"159b":function(e,t,r){var n=r("da84"),a=r("fdbc"),s=r("17c25"),c=r("9112");for(var o in a){var i=n[o],u=i&&i.prototype;if(u&&u.forEach!==s)try{c(u,"forEach",s)}catch(l){u.forEach=s}}},"17c25":function(e,t,r){"use strict";var n=r("b727").forEach,a=r("a640"),s=r("ae40"),c=a("forEach"),o=s("forEach");e.exports=c&&o?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"20b0":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._v(" Workspace : "),r("EditableSpan",{model:{value:e.workspace.name,callback:function(t){e.$set(e.workspace,"name",t)},expression:"workspace.name"}}),e._v(" / "+e._s(e.workspace.bases.length)+" bases "),r("b-button",{attrs:{pill:"",variant:"outline-secondary"},on:{click:e.add}},[r("b-icon-plus"),e._v(" Add a base")],1),e._v(" Privacy: "),r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:e.togglePrivacy}},[e._v(e._s(e.privacy))]),r("br"),r("br"),e._v(" [ start with template, import a spreadsheet, start from scratch] "),r("b-table",{attrs:{hover:"",items:e.bases,selectable:"","select-mode":"single","selected-variant":"primary"},on:{"row-selected":e.onRowSelected},scopedSlots:e._u([{key:"cell(url)",fn:function(e){return[r("b-button",{attrs:{pill:"",variant:"outline-primary",size:"sm"}},[r("a",{attrs:{href:e.item.url,target:"_blank"}},[r("b-icon-link45deg")],1)])]}},{key:"cell(tables)",fn:function(t){return[e._v(" "+e._s(t.item.tables.length)+" ")]}}])}),e._v(" Storage : "+e._s(e.storage)),r("br"),e._v(" Path: "+e._s(e.path)+" ")],1)},a=[],s=(r("4160"),r("d3b7"),r("159b"),r("96cf"),r("1da1")),c=r("668b"),o=r("6655"),i=r.n(o),u=r("9b92"),l=r("00e8"),p=r.n(l),f=r("7fed"),d=r.n(f),b=r("11c1"),h=new d.a(p.a),w={name:"Workspace",components:{EditableSpan:function(){return r.e("chunk-a8305a08").then(r.bind(null,"1cd0"))}},data:function(){return{privacy:null,bases:[]}},created:function(){this.workspace=this.$store.state.table.workspace,console.log(this.workspace),this.privacy="public"},methods:{add:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.path+Object(b["v4"])()+".ttl",n=new Date,a=n.toISOString(),s='@prefix : <#>.\n      @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n      @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n      @prefix dct: <http://purl.org/dc/terms/>.\n      @prefix dbo: <http://dbpedia.org/ontology/>.\n\n      <> rdfs:label "New Database".\n      <> rdf:type dbo:DataBase.\n      <> dct:created "'.concat(a,'".'),t.next=6,h.postFile(r,s,"text/turtle");case 6:return console.log(r),t.next=9,i.a[e.workspace.url]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"].add(Object(u["namedNode"])(r));case 9:return t.next=11,i.a[r]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/partOf"].add(Object(u["namedNode"])(e.workspace.url));case 11:e.update();case 12:case"end":return t.stop()}}),t)})))()},update:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.readFolder(e.path);case 2:e.folder=t.sent,console.log(e.folder.files),e.bases=[],e.folder.files.forEach(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var n,a,s,o,u,l,p,f,d,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a[r.url].label;case 2:n=t.sent,a=[],s=!0,o=!1,t.prev=6,l=Object(c["a"])(i.a[r.url]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"]);case 8:return t.next=10,l.next();case 10:return p=t.sent,s=p.done,t.next=14,p.value;case 14:if(f=t.sent,s){t.next=21;break}d=f,a.push("".concat(d));case 18:s=!0,t.next=8;break;case 21:t.next=27;break;case 23:t.prev=23,t.t0=t["catch"](6),o=!0,u=t.t0;case 27:if(t.prev=27,t.prev=28,s||null==l.return){t.next=32;break}return t.next=32,l.return();case 32:if(t.prev=32,!o){t.next=35;break}throw u;case 35:return t.finish(32);case 36:return t.finish(27);case 37:console.log("t",a),b={name:"".concat(n),tables:a,url:r.url},e.bases.push(b);case 40:case"end":return t.stop()}}),t,null,[[6,23,27,37],[28,,32,36]])})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t)})))()},onRowSelected:function(e){console.log(e),this.$store.commit("table/setBase",e[0]),this.$router.push("Base")},togglePrivacy:function(){this.privacy="public"==this.privacy?"private":"public"}},watch:{path:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null==e.privacy||null==e.storage){t.next=8;break}return t.next=3,h.itemExists(e.path);case 3:if(t.sent){t.next=6;break}return t.next=6,h.createFolder(e.path);case 6:return t.next=8,e.update();case 8:case"end":return t.stop()}}),t)})))()}},computed:{workspaces:{get:function(){return this.$store.state.table.workspaces},set:function(){}},workspace:{get:function(){return this.$store.state.table.workspace},set:function(){}},storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},path:{get:function(){return this.storage+this.privacy+"/table/bases/"},set:function(){}}}},v=w,m=r("2877"),g=Object(m["a"])(v,n,a,!1,null,null,null);t["default"]=g.exports},4160:function(e,t,r){"use strict";var n=r("23e7"),a=r("17c25");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},a640:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,r){var n=r("83ab"),a=r("d039"),s=r("5135"),c=Object.defineProperty,o={},i=function(e){throw e};e.exports=function(e,t){if(s(o,e))return o[e];t||(t={});var r=[][e],u=!!s(t,"ACCESSORS")&&t.ACCESSORS,l=s(t,0)?t[0]:i,p=s(t,1)?t[1]:void 0;return o[e]=!!r&&!a((function(){if(u&&!n)return!0;var e={length:-1};u?c(e,1,{enumerable:!0,get:i}):e[1]=1,r.call(e,l,p)}))}}}]);
//# sourceMappingURL=workspace.66edecf9.js.map