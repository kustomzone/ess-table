(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bac0830"],{6734:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-item"},[n("form",{staticClass:"mb-3",attrs:{action:"#",method:"post"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[n("b-form-input",{attrs:{placeholder:"Add something to the backlog"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}},model:{value:t.itemText,callback:function(e){t.itemText=e},expression:"itemText"}})],1)])},o=[],s={name:"NewItemForm",data:function(){return{itemText:""}},methods:{submitForm:function(){this.itemText&&(this.$store.commit("kanban/addItem",{text:this.itemText}),this.itemText="")}}},m=s,u=(n("75d9"),n("2877")),a=Object(u["a"])(m,i,o,!1,null,null,null);e["default"]=a.exports},"75d9":function(t,e,n){"use strict";n("8f4b")},"8f4b":function(t,e,n){}}]);
//# sourceMappingURL=chunk-0bac0830.154ecd8c.js.map