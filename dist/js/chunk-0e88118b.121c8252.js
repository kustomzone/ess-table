(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e88118b"],{"004a":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add-item"},[s("form",{staticClass:"mb-3",attrs:{action:"#",method:"post"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[s("b-form-input",{attrs:{placeholder:"Add something to the "+t.namespace},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}},model:{value:t.itemText,callback:function(e){t.itemText=e},expression:"itemText"}})],1)])},a=[],n=s("11c1"),o={name:"NewItemForm",props:["namespace"],data:function(){return{itemText:""}},methods:{submitForm:function(){if(this.itemText){var t=this.$store.state.solid.storage+this.$store.state.table.privacy+"/table/workspaces/",e=t+Object(n["v4"])()+".ttl";this.$store.dispatch(this.namespace+"/addItem",{url:e,name:this.itemText,text:this.itemText}),this.itemText=""}}}},r=o,c=(s("f6a2"),s("2877")),m=Object(c["a"])(r,i,a,!1,null,null,null);e["default"]=m.exports},ac5c:function(t,e,s){},f6a2:function(t,e,s){"use strict";s("ac5c")}}]);
//# sourceMappingURL=chunk-0e88118b.121c8252.js.map