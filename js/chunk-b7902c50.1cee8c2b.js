(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7902c50"],{1276:function(e,t,r){"use strict";var n=r("d784"),a=r("44e7"),c=r("825a"),i=r("1d80"),s=r("4840"),o=r("8aa5"),l=r("50c4"),u=r("14c3"),d=r("9263"),p=r("d039"),f=[].push,h=Math.min,b=4294967295,g=!p((function(){return!RegExp(b,"y")}));n("split",2,(function(e,t,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var n=String(i(this)),c=void 0===r?b:r>>>0;if(0===c)return[];if(void 0===e)return[n];if(!a(e))return t.call(n,e,c);var s,o,l,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,g=new RegExp(e.source,p+"g");while(s=d.call(g,n)){if(o=g.lastIndex,o>h&&(u.push(n.slice(h,s.index)),s.length>1&&s.index<n.length&&f.apply(u,s.slice(1)),l=s[0].length,h=o,u.length>=c))break;g.lastIndex===s.index&&g.lastIndex++}return h===n.length?!l&&g.test("")||u.push(""):u.push(n.slice(h)),u.length>c?u.slice(0,c):u}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var a=i(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,a,r):n.call(String(a),t,r)},function(e,a){var i=r(n,e,this,a,n!==t);if(i.done)return i.value;var d=c(e),p=String(this),f=s(d,RegExp),x=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),w=new f(g?d:"^(?:"+d.source+")",v),m=void 0===a?b:a>>>0;if(0===m)return[];if(0===p.length)return null===u(w,p)?[p]:[];var k=0,y=0,R=[];while(y<p.length){w.lastIndex=g?y:0;var E,_=u(w,g?p:p.slice(y));if(null===_||(E=h(l(w.lastIndex+(g?0:y)),p.length))===k)y=o(p,y,x);else{if(R.push(p.slice(k,y)),R.length===m)return R;for(var O=1;O<=_.length-1;O++)if(R.push(_[O]),R.length===m)return R;y=k=E}}return R.push(p.slice(k)),R}]}),!g)},"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var c=r.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},4840:function(e,t,r){var n=r("825a"),a=r("1c0b"),c=r("b622"),i=c("species");e.exports=function(e,t){var r,c=n(e).constructor;return void 0===c||void 0==(r=n(c)[i])?t:a(r)}},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),c=RegExp.prototype.exec,i=String.prototype.replace,s=c,o=function(){var e=/a/,t=/b*/g;return c.call(e,"a"),c.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=o||u||l;d&&(s=function(e){var t,r,a,s,d=this,p=l&&d.sticky,f=n.call(d),h=d.source,b=0,g=e;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),g=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,b++),r=new RegExp("^(?:"+h+")",f)),u&&(r=new RegExp("^"+h+"$(?!\\s)",f)),o&&(t=d.lastIndex),a=c.call(p?r:d,g),p?a?(a.input=a.input.slice(b),a[0]=a[0].slice(b),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:o&&a&&(d.lastIndex=d.global?a.index+a[0].length:t),u&&a&&a.length>1&&i.call(a[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),e.exports=s},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a15b:function(e,t,r){"use strict";var n=r("23e7"),a=r("44ad"),c=r("fc6a"),i=r("a640"),s=[].join,o=a!=Object,l=i("join",",");n({target:"Array",proto:!0,forced:o||!l},{join:function(e){return s.call(c(this),void 0===e?",":e)}})},a928:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"p-0",attrs:{fluid:""}},[r("b-button",{attrs:{pill:"",variant:"outline-primary",size:"sm"},on:{click:e.add}},[e._v("Add Record")]),r("b-table",{ref:e.url,attrs:{hover:"",items:e.records,fields:e.fields,"sticky-header":"true",responsive:"",selectable:"","select-mode":"single","selected-variant":"primary"},on:{"row-selected":e.onRecordSelected},scopedSlots:e._u([{key:"cell(url)",fn:function(e){return[r("b-button",{attrs:{pill:"",variant:"outline-primary",size:"sm"}},[r("a",{attrs:{href:e.item.url,target:"_blank"}},[r("b-icon-link45deg")],1)]),r("b-button",{attrs:{pill:"",variant:"outline-primary",size:"sm"}},[r("a",{attrs:{href:"https://scenaristeur.github.io/spoggy-simple/?source="+e.item.url,target:"_blank"}},[r("b-icon-gear-wide-connected")],1)])]}}])}),r("a",{attrs:{href:e.url,target:"_blank"}},[e._v("table "),r("b-icon-link45deg")],1),e._v(" | "),r("a",{attrs:{href:"https://scenaristeur.github.io/spoggy-simple/?source="+e.url,target:"_blank"}},[e._v("table graphe "),r("b-icon-gear-wide-connected")],1)],1)},a=[],c=(r("4160"),r("a15b"),r("ac1f"),r("3ca3"),r("1276"),r("159b"),r("ddb0"),r("96cf"),r("1da1")),i=r("668b"),s=r("6655"),o=r.n(s),l=r("9b92"),u=r("00e8"),d=r.n(u),p=r("7fed"),f=r.n(p),h=r("11c1"),b=new f.a(d.a),g={name:"TableView",props:["url","fields"],data:function(){return{records:[],special_preds:["label","url","notes","attachments"],default_fields:[{key:"label",sortable:!0,modifiable:!1,stickyColumn:!0,isRowHeader:!0,variant:"primary"},{key:"notes",sortable:!0,modifiable:!1},{key:"attachments",modifiable:!1,variant:"secondary"},{key:"url",modifiable:!1,variant:"secondary"}]}},created:function(){this.getRecords()},methods:{getRecords:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,l,u,d,p,f,h,b,g,x,v,w,m,k,y,R,E,_;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.records=[],console.log("url",e.url),t.next=4,o.a[e.url]["https://www.w3.org/ns/ui#FieldList"];case 4:r=t.sent,console.log("SF",r),n=void 0==r?e.default_fields:JSON.parse(r),console.error(n),a=!0,s=!1,t.prev=10,u=regeneratorRuntime.mark((function t(){var r,n,a,s,l,u,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=f,t.next=3,o.a[r].label;case 3:n=t.sent,a=[],s=[],h=!0,b=!1,t.prev=8,x=Object(i["a"])(o.a[r]["http://www.w3.org/2004/02/skos/core#note"]);case 10:return t.next=12,x.next();case 12:return v=t.sent,h=v.done,t.next=16,v.value;case 16:if(w=t.sent,h){t.next=23;break}l=w,a.push("".concat(l));case 20:h=!0,t.next=10;break;case 23:t.next=29;break;case 25:t.prev=25,t.t0=t["catch"](8),b=!0,g=t.t0;case 29:if(t.prev=29,t.prev=30,h||null==x.return){t.next=34;break}return t.next=34,x.return();case 34:if(t.prev=34,!b){t.next=37;break}throw g;case 37:return t.finish(34);case 38:return t.finish(29);case 39:m=!0,k=!1,t.prev=41,R=Object(i["a"])(o.a[r]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"]);case 43:return t.next=45,R.next();case 45:return E=t.sent,m=E.done,t.next=49,E.value;case 49:if(_=t.sent,m){t.next=56;break}u=_,s.push("".concat(u));case 53:m=!0,t.next=43;break;case 56:t.next=62;break;case 58:t.prev=58,t.t1=t["catch"](41),k=!0,y=t.t1;case 62:if(t.prev=62,t.prev=63,m||null==R.return){t.next=67;break}return t.next=67,R.return();case 67:if(t.prev=67,!k){t.next=70;break}throw y;case 70:return t.finish(67);case 71:return t.finish(62);case 72:d={label:n,url:"".concat(r),notes:a,attachments:s},e.fields.forEach(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,a,c,s,l,u,p,f,h,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("test f",t),"url"==t.key||"label"==t.key||"attachments"==t.key||"notes"==t.key){e.next=47;break}if(n=r+"#"+t.key.split(" ").join("+"),"single_line_text"!=t.type&&"link"!=t.type){e.next=10;break}return e.next=6,o.a[r][n];case 6:a=e.sent,d[t.key]="".concat(a),e.next=46;break;case 10:c=[],s=!0,l=!1,e.prev=13,p=Object(i["a"])(o.a[r][n]);case 15:return e.next=17,p.next();case 17:return f=e.sent,s=f.done,e.next=21,f.value;case 21:if(h=e.sent,s){e.next=29;break}b=h,console.log("KEY",t.key,"".concat(b)),c.push("".concat(b));case 26:s=!0,e.next=15;break;case 29:e.next=35;break;case 31:e.prev=31,e.t0=e["catch"](13),l=!0,u=e.t0;case 35:if(e.prev=35,e.prev=36,s||null==p.return){e.next=40;break}return e.next=40,p.return();case 40:if(e.prev=40,!l){e.next=43;break}throw u;case 43:return e.finish(40);case 44:return e.finish(35);case 45:d[t.key]=c;case 46:console.log(d);case 47:case"end":return e.stop()}}),e,null,[[13,31,35,45],[36,,40,44]])})));return function(t){return e.apply(this,arguments)}}()),console.warn(d),e.records.push(d);case 76:case"end":return t.stop()}}),t,null,[[8,25,29,39],[30,,34,38],[41,58,62,72],[63,,67,71]])})),d=Object(i["a"])(o.a[e.url]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"]);case 13:return t.next=15,d.next();case 15:return p=t.sent,a=p.done,t.next=19,p.value;case 19:if(f=t.sent,a){t.next=25;break}return t.delegateYield(u(),"t0",22);case 22:a=!0,t.next=13;break;case 25:t.next=31;break;case 27:t.prev=27,t.t1=t["catch"](10),s=!0,l=t.t1;case 31:if(t.prev=31,t.prev=32,a||null==d.return){t.next=36;break}return t.next=36,d.return();case 36:if(t.prev=36,!s){t.next=39;break}throw l;case 39:return t.finish(36);case 40:return t.finish(31);case 41:case"end":return t.stop()}}),t,null,[[10,27,31,41],[32,,36,40]])})))()},onRecordSelected:function(e){e.length>0&&(this.record=e[0],console.log(this.record),this.$store.commit("table/setRecord",this.record),this.$bvModal.show("modal-record"))},add:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.storage+e.privacy+"/table/records/"+Object(h["v4"])()+".ttl",n=new Date,a=n.toISOString(),c='@prefix : <#>.\n      @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.\n      @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n      @prefix dct: <http://purl.org/dc/terms/>.\n      @prefix dbo: <http://dbpedia.org/ontology/>.\n\n      <> rdfs:label "__New Record__".\n      <> rdf:type dbo:Record.\n      <> dct:created "'.concat(a,'".'),t.next=6,b.postFile(r,c,"text/turtle");case 6:return console.log(r,e.url),t.next=9,o.a[e.url]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"].add(Object(l["namedNode"])(r));case 9:return t.next=11,o.a[r]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/partOf"].add(Object(l["namedNode"])(e.url));case 11:e.getRecords();case 12:case"end":return t.stop()}}),t)})))()}},watch:{url:function(){console.log("tables URL",this.url)},recordTick:function(){this.getRecords()}},computed:{storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},privacy:{get:function(){return this.$store.state.table.privacy},set:function(){}},recordTick:{get:function(){return this.$store.state.table.recordTick},set:function(){}}}},x=g,v=r("2877"),w=Object(v["a"])(x,n,a,!1,null,null,null);t["default"]=w.exports},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),c=r("b622"),i=r("9263"),s=r("9112"),o=c("species"),l=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=c("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var h=c(e),b=!a((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),g=b&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return t=!0,null},r[h](""),!t}));if(!b||!g||"replace"===e&&(!l||!u||p)||"split"===e&&!f){var x=/./[h],v=r(h,""[e],(function(e,t,r,n,a){return t.exec===i?b&&!a?{done:!0,value:x.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),w=v[0],m=v[1];n(String.prototype,e,w),n(RegExp.prototype,h,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)})}d&&s(RegExp.prototype[h],"sham",!0)}}}]);
//# sourceMappingURL=chunk-b7902c50.1cee8c2b.js.map