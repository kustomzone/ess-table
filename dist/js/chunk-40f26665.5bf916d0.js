(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40f26665"],{"03d0":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("h2",[e._v(e._s(e.name))]),n("hr"),e._v(" BAses View "+e._s(e.workspace)+" "),n("br"),n("ul",[e._l(e.bases,(function(t,a){return n("li",{key:a,staticClass:"mb-2",on:{click:function(n){return e.showTables(t)}}},[n("b-button",{attrs:{variant:"outline-info"}},[n("b-icon-pen",{staticClass:"border border-info rounded p-2",attrs:{"font-scale":"4",variant:"info"}}),n("Label",{attrs:{url:t}})],1)],1)})),n("li",[n("b-button",{attrs:{variant:"secondary"}},[n("b-icon-plus",{staticClass:"border border-secondary rounded p-2",attrs:{"font-scale":"4",variant:"secondary"}}),e._v(" Add a base ")],1)],1)],2)])},s=[],r=(n("b0c0"),n("d3b7"),n("96cf"),n("1da1")),o=n("6655"),c=n.n(o),i={name:"BasesView",components:{Label:function(){return n.e("chunk-2d20fb75").then(n.bind(null,"b58d"))}},data:function(){return{name:""}},methods:{showTables:function(e){console.log(e),this.$store.dispatch("table/setBase",e),this.$router.push("Tables")}},watch:{workspace:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("table/getBases",e.workspace),t.next=3,c.a[e.workspace].label;case 3:n=t.sent,e.name="".concat(n),console.log("name",e.name);case 6:case"end":return t.stop()}}),t)})))()}},computed:{workspace:{get:function(){return this.$store.state.table.workspace},set:function(){}},bases:{get:function(){return this.$store.state.table.bases},set:function(){}}}},u=i,l=(n("4ac6"),n("2877")),b=Object(l["a"])(u,a,s,!1,null,null,null);t["default"]=b.exports},"4ac6":function(e,t,n){"use strict";n("6aff")},"6aff":function(e,t,n){}}]);
//# sourceMappingURL=chunk-40f26665.5bf916d0.js.map