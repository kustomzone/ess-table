(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["workspaces"],{"9b19":function(e,s,t){"use strict";t.r(s);var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"container"},[e._v(" Workspaces "),t("b-button",{attrs:{pill:"",variant:"outline-secondary"},on:{click:e.add}},[t("b-icon-plus"),e._v(" Add a workspace")],1),t("b-table",{attrs:{hover:"",items:e.workspaces,selectable:"","select-mode":"single","selected-variant":"primary"},on:{"row-selected":e.onRowSelected},scopedSlots:e._u([{key:"cell(bases)",fn:function(s){return[e._v(" "+e._s(s.item.bases.length)+" ")]}}])})],1)},n=[],a={name:"Workspaces",data:function(){return{}},methods:{add:function(){this.workspaces.unshift({name:"new workspace",bases:[],url:""}),this.$store.commit("table/setWorkspaces",this.workspaces)},onRowSelected:function(e){console.log(e),this.$store.commit("table/setWorkspace",e[0]),this.$router.push("Workspace")}},computed:{workspaces:{get:function(){return this.$store.state.table.workspaces},set:function(){}}}},c=a,r=t("2877"),i=Object(r["a"])(c,o,n,!1,null,null,null);s["default"]=i.exports}}]);
//# sourceMappingURL=workspaces.f29850ad.js.map