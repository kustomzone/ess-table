(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e6bda6a"],{3835:function(e,t,r){"use strict";function n(e){if(Array.isArray(e))return e}r.d(t,"a",(function(){return i}));r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");function a(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)if(r.push(o.value),t&&r.length===t)break}catch(i){a=!0,c=i}finally{try{n||null==s["return"]||s["return"]()}finally{if(a)throw c}}return r}}r("a630"),r("fb6a"),r("b0c0"),r("25f0");function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){if(e){if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){return n(e)||a(e,t)||o(e,t)||s()}},"4df4":function(e,t,r){"use strict";var n=r("0366"),a=r("7b0b"),c=r("9bdd"),o=r("e95a"),s=r("50c4"),i=r("8418"),u=r("35a1");e.exports=function(e){var t,r,l,d,f,b,p=a(e),h="function"==typeof this?this:Array,v=arguments.length,w=v>1?arguments[1]:void 0,m=void 0!==w,g=u(p),y=0;if(m&&(w=n(w,v>2?arguments[2]:void 0,2)),void 0==g||h==Array&&o(g))for(t=s(p.length),r=new h(t);t>y;y++)b=m?w(p[y],y):p[y],i(r,y,b);else for(d=g.call(p),f=d.next,r=new h;!(l=f.call(d)).done;y++)b=m?c(d,w,[l.value,y],!0):l.value,i(r,y,b);return r.length=y,r}},"4fad":function(e,t,r){var n=r("23e7"),a=r("6f53").entries;n({target:"Object",stat:!0},{entries:function(e){return a(e)}})},"6f53":function(e,t,r){var n=r("83ab"),a=r("df75"),c=r("fc6a"),o=r("d1e79").f,s=function(e){return function(t){var r,s=c(t),i=a(s),u=i.length,l=0,d=[];while(u>l)r=i[l++],n&&!o.call(s,r)||d.push(e?[r,s[r]]:s[r]);return d}};e.exports={entries:s(!0),values:s(!1)}},"9bdd":function(e,t,r){var n=r("825a"),a=r("2a62");e.exports=function(e,t,r,c){try{return c?t(n(r)[0],r[1]):t(r)}catch(o){throw a(e),o}}},a630:function(e,t,r){var n=r("23e7"),a=r("4df4"),c=r("1c7e"),o=!c((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:o},{from:a})},a928:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"p-0",attrs:{fluid:""}},[r("b-button",{attrs:{pill:"",variant:"outline-primary",size:"sm"},on:{click:e.add}},[e._v("Add Record")]),r("b-table",{ref:e.url,attrs:{hover:"",items:e.records,fields:e.fields,"sticky-header":"true",responsive:"",selectable:"","select-mode":"single","selected-variant":"primary"},on:{"row-selected":e.onRecordSelected},scopedSlots:e._u([{key:"cell(url)",fn:function(e){return[r("b-button",{attrs:{pill:"",variant:"outline-primary",size:"sm"}},[r("a",{attrs:{href:e.item.url,target:"_blank"}},[r("b-icon-link45deg")],1)])]}}])}),r("a",{attrs:{href:e.url,target:"_blank"}},[e._v("table "),r("b-icon-link45deg")],1)],1)},a=[],c=(r("4160"),r("4fad"),r("159b"),r("3835")),o=(r("96cf"),r("1da1")),s=r("668b"),i=r("6655"),u=r.n(i),l=r("9b92"),d=r("00e8"),f=r.n(d),b=r("7fed"),p=r.n(b),h=r("11c1"),v=new p.a(f.a),w={name:"TableView",props:["url","fields"],data:function(){return{records:[],special_preds:["label","url","notes","attachments"],default_fields:[{key:"label",sortable:!0,modifiable:!1,stickyColumn:!0,isRowHeader:!0,variant:"primary"},{key:"notes",sortable:!0,modifiable:!1},{key:"attachments",modifiable:!1,variant:"secondary"},{key:"url",modifiable:!1,variant:"secondary"}]}},created:function(){this.getRecords()},methods:{getRecords:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a,i,l,d,f,b,p,h,v,w,m,g,y,x,k,O,R,j,A,S,_,$,C,E,T;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.records=[],console.log("url",e.url),t.next=4,u.a[e.url]["https://www.w3.org/ns/ui#FieldList"];case 4:r=t.sent,console.log("SF",r),n=void 0==r?e.default_fields:JSON.parse(r),console.error(n),a=!0,i=!1,t.prev=10,d=Object(s["a"])(u.a[e.url]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"]);case 12:return t.next=14,d.next();case 14:return f=t.sent,a=f.done,t.next=18,f.value;case 18:if(b=t.sent,a){t.next=99;break}return p=b,t.next=23,u.a[p].label;case 23:h=t.sent,v=[],w=[],m=!0,g=!1,t.prev=28,x=Object(s["a"])(u.a[p]["http://www.w3.org/2004/02/skos/core#note"]);case 30:return t.next=32,x.next();case 32:return k=t.sent,m=k.done,t.next=36,k.value;case 36:if(O=t.sent,m){t.next=43;break}R=O,v.push("".concat(R));case 40:m=!0,t.next=30;break;case 43:t.next=49;break;case 45:t.prev=45,t.t0=t["catch"](28),g=!0,y=t.t0;case 49:if(t.prev=49,t.prev=50,m||null==x.return){t.next=54;break}return t.next=54,x.return();case 54:if(t.prev=54,!g){t.next=57;break}throw y;case 57:return t.finish(54);case 58:return t.finish(49);case 59:j=!0,A=!1,t.prev=61,_=Object(s["a"])(u.a[p]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"]);case 63:return t.next=65,_.next();case 65:return $=t.sent,j=$.done,t.next=69,$.value;case 69:if(C=t.sent,j){t.next=76;break}E=C,w.push("".concat(E));case 73:j=!0,t.next=63;break;case 76:t.next=82;break;case 78:t.prev=78,t.t1=t["catch"](61),A=!0,S=t.t1;case 82:if(t.prev=82,t.prev=83,j||null==_.return){t.next=87;break}return t.next=87,_.return();case 87:if(t.prev=87,!A){t.next=90;break}throw S;case 90:return t.finish(87);case 91:return t.finish(82);case 92:T={label:h,url:"".concat(p),notes:v,attachments:w},e.fields.forEach(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(console.warn("KEY",t.key),r=0,n=Object.entries(t);r<n.length;r++)a=Object(c["a"])(n[r],2),o=a[0],s=a[1],console.log(o,s);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.warn(T),e.records.push(T);case 96:a=!0,t.next=12;break;case 99:t.next=105;break;case 101:t.prev=101,t.t2=t["catch"](10),i=!0,l=t.t2;case 105:if(t.prev=105,t.prev=106,a||null==d.return){t.next=110;break}return t.next=110,d.return();case 110:if(t.prev=110,!i){t.next=113;break}throw l;case 113:return t.finish(110);case 114:return t.finish(105);case 115:case"end":return t.stop()}}),t,null,[[10,101,105,115],[28,45,49,59],[50,,54,58],[61,78,82,92],[83,,87,91],[106,,110,114]])})))()},onRecordSelected:function(e){e.length>0&&(this.record=e[0],console.log(this.record),this.$store.commit("table/setRecord",this.record),this.$bvModal.show("modal-record"))},add:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.storage+e.privacy+"/table/records/"+Object(h["v4"])()+".ttl",n=new Date,a=n.toISOString(),c='@prefix : <#>.\n      @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n      @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n      @prefix dct: <http://purl.org/dc/terms/>.\n      @prefix dbo: <http://dbpedia.org/ontology/>.\n\n      <> rdfs:label "__New Record__".\n      <> rdf:type dbo:Record.\n      <> dct:created "'.concat(a,'".'),t.next=6,v.postFile(r,c,"text/turtle");case 6:return console.log(r,e.url),t.next=9,u.a[e.url]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"].add(Object(l["namedNode"])(r));case 9:return t.next=11,u.a[r]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/partOf"].add(Object(l["namedNode"])(e.url));case 11:e.getRecords();case 12:case"end":return t.stop()}}),t)})))()}},watch:{url:function(){console.log("tables URL",this.url)},recordTick:function(){this.getRecords()}},computed:{storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},privacy:{get:function(){return this.$store.state.table.privacy},set:function(){}},recordTick:{get:function(){return this.$store.state.table.recordTick},set:function(){}}}},m=w,g=r("2877"),y=Object(g["a"])(m,n,a,!1,null,null,null);t["default"]=y.exports},fb6a:function(e,t,r){"use strict";var n=r("23e7"),a=r("861d"),c=r("e8b5"),o=r("23cb"),s=r("50c4"),i=r("fc6a"),u=r("8418"),l=r("b622"),d=r("1dde"),f=r("ae40"),b=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),h=l("species"),v=[].slice,w=Math.max;n({target:"Array",proto:!0,forced:!b||!p},{slice:function(e,t){var r,n,l,d=i(this),f=s(d.length),b=o(e,f),p=o(void 0===t?f:t,f);if(c(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!c(r.prototype)?a(r)&&(r=r[h],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(d,b,p);for(n=new(void 0===r?Array:r)(w(p-b,0)),l=0;b<p;b++,l++)b in d&&u(n,l,d[b]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-6e6bda6a.61d1e87f.js.map