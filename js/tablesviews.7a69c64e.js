(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tablesviews"],{"4ce4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("h2",[e._v(e._s(e.name)+" "),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-base",modifiers:{"modal-base":!0}}],attrs:{variant:"outline-info",size:"sm"}},[a("b-icon-pen")],1)],1),a("a",{attrs:{href:e.base,target:"_blank"}},[e._v("base "),a("b-icon-link45deg")],1),a("hr"),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-fields",modifiers:{"modal-fields":!0}}],attrs:{pill:"",variant:"outline-primary",size:"sm"}},[e._v("Edit Fields")]),a("hr"),e._v(" Fields : "+e._s(e.fields)+" "),a("hr"),a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:""},scopedSlots:e._u([{key:"tabs-end",fn:function(){return[a("b-nav-item",{attrs:{role:"presentation",href:"#"},on:{click:function(t){return t.preventDefault(),e.addTable(t)}}},[a("b",[e._v("+")])])]},proxy:!0},{key:"empty",fn:function(){return[a("div",{staticClass:"text-center text-muted"},[e._v(" There is no Table for this Base"),a("br"),e._v(" Add a new one with the "),a("b",[e._v("+")]),e._v(" button. ")])]},proxy:!0}])},e._l(e.tables,(function(t,n){return a("b-tab",{key:"dyn-tab-"+n,scopedSlots:e._u([{key:"title",fn:function(){return[a("small",[a("Label",{attrs:{url:t,tick:e.tick}}),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-table",modifiers:{"modal-table":!0}}],staticClass:"ml-2",attrs:{variant:"outline-info",size:"sm"},on:{click:function(a){return e.setTableName(t)}}},[a("b-icon-pen",{attrs:{btn:""}})],1)],1)]},proxy:!0}],null,!0)},[a("TableView",{attrs:{url:t,fields:e.fields}})],1)})),1)],1),a("hr"),a("b-modal",{attrs:{id:"modal-base",title:"Rename"},on:{ok:e.edit_base_name}},[a("b-form-input",{attrs:{placeholder:"Enter the name of the base"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("b-modal",{attrs:{id:"modal-table",title:"Rename"},on:{ok:e.edit_table_name}},[a("b-form-input",{attrs:{placeholder:"Enter the name of the table"},model:{value:e.table_name,callback:function(t){e.table_name=t},expression:"table_name"}})],1),a("b-modal",{attrs:{id:"modal-fields",title:"Fields"},on:{ok:e.edit_fields}},[e._v(" Fields : "+e._s(e.fields)+" ")]),a("RecordModal")],1)},r=[],i=(a("b0c0"),a("d3b7"),a("96cf"),a("1da1")),s=a("6655"),l=a.n(s),o={name:"TablesView",components:{TableView:function(){return a.e("chunk-2d209534").then(a.bind(null,"a928"))},Label:function(){return a.e("chunk-2d20fb75").then(a.bind(null,"b58d"))},RecordModal:function(){return a.e("chunk-44706ec3").then(a.bind(null,"0ab4"))}},data:function(){return{name:"",table_name:"",tick:new Date,fields:[{key:"label",sortable:!0,modifiable:!1,stickyColumn:!0,isRowHeader:!0,variant:"primary"},{key:"notes",sortable:!0,modifiable:!1},{key:"attachments",modifiable:!1,variant:"secondary"},{key:"+",modifiable:!1},{key:"url",modifiable:!1,variant:"secondary"},{key:"fill"},{key:"fille"},{key:"filld"},{key:"fillz"},{key:"filla"},{key:"fille"},{key:"filly"},{key:"fillqwsx"},{key:"filltry"},{key:"fillsd"},{key:"fillth"},{key:"fillt"},{key:"fillf"},{key:"fillu"},{key:"fillo"}]}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a[e.base].label;case 2:a=t.sent,e.name="".concat(a);case 4:case"end":return t.stop()}}),t)})))()},methods:{edit_fields:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("fields",e.fields);case 1:case"end":return t.stop()}}),t)})))()},edit_base_name:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a[e.base].label.set(e.name);case 2:case"end":return t.stop()}}),t)})))()},edit_table_name:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a[e.table].label.set(e.table_name);case 2:e.$store.dispatch("table/getTables");case 3:case"end":return t.stop()}}),t)})))()},setTableName:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.table=e,a.next=3,l.a[e].label;case 3:n=a.sent,t.table_name="".concat(n);case 5:case"end":return a.stop()}}),a)})))()},addTable:function(){var e={path:this.storage+this.privacy+"/table/tables/",name:"___table name___",base:this.base};this.$store.dispatch("table/addTable",e)}},watch:{base:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a[e.base].label;case 2:a=t.sent,e.name="".concat(a);case 4:case"end":return t.stop()}}),t)})))()},tables:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.tick=new Date;case 1:case"end":return t.stop()}}),t)})))()}},computed:{tables:{get:function(){return this.$store.state.table.tables},set:function(){}},base:{get:function(){return this.$store.state.table.base},set:function(){}},storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},privacy:{get:function(){return this.$store.state.table.privacy},set:function(){}}}},c=o,u=a("2877"),b=Object(u["a"])(c,n,r,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=tablesviews.7a69c64e.js.map