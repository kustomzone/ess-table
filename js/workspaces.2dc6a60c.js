(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["workspaces"],{2532:function(t,e,n){"use strict";var r=n("23e7"),s=n("5a34"),o=n("1d80"),a=n("ab13");r({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(o(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},"9b19":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"backlog-view container"},[n("p",[t._v("Workspaces / "),n("small",{staticStyle:{color:"white"}},[t._v("Privacy : "),n("b-button",{attrs:{pill:"",size:"sm",variant:"primary"},on:{click:t.togglePrivacy}},[t._v(t._s(t.privacy))])],1)]),n("NewItemForm",{attrs:{namespace:"workspace"}}),t._l(t.workspaces,(function(e){return n("div",{key:e.url,staticClass:"card"},[n("b-button",{staticClass:"card-block",staticStyle:{"text-align":"left"},on:{click:function(n){return n.target!==n.currentTarget?null:t.open(e)}}},[n("h5",{staticClass:"card-title",on:{click:function(n){return n.target!==n.currentTarget?null:t.open(e)}}},[n("span",{staticClass:"text-muted"},[t._v("#")]),n("span",{on:{click:function(n){return t.open(e)}}},[n("Label",{attrs:{url:e.url,tick:t.tick}})],1),n("button",{staticClass:"close-button pull-right",attrs:{type:"button"},on:{click:function(n){return t.removeItem(e)}}},[n("span",[t._v("×")])])])])],1)}))],2)},s=[],o=(n("caad6"),n("d81d"),n("b0c0"),n("d3b7"),n("2532"),n("96cf"),n("1da1")),a={name:"Workspaces",components:{NewItemForm:function(){return n.e("chunk-0e88118b").then(n.bind(null,"004a"))},Label:function(){return n.e("chunk-2d20fb75").then(n.bind(null,"b58d"))}},data:function(){return{tick:new Date,souk_ws:[]}},created:function(){this.getWorkspaces()},watch:{privacy:function(){console.log(this.storage+this.privacy,this.storage),this.getWorkspaces()},storage:function(){console.log(this.storage+this.privacy),this.getWorkspaces()},workspaces:function(){console.log("must update workspaces in table",this.workspaces),this.tick=new Date}},methods:{open:function(t){console.log(t),this.$router.push({name:"Bases",query:{url:t.url}})},openWorkspace:function(t){this.$store.commit("table/setWorkspace",t)},togglePrivacy:function(){this.$store.commit("table/togglePrivacy")},getWorkspaces:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.dispatch("table/getWorkspaces",t.storage+t.privacy+"/table/workspaces/"),e.next=3,t.$getWorkspaces(t.storage+t.privacy+"/table/test/workspaces/");case 3:n=e.sent,t.souk_ws=n.map((function(t){return{name:t.name,createdAt:t.createdAt,updatedAt:t.updatedAt,url:t.url}})).sort((function(t,e){return new Date(t.updatedAt)-new Date(e.updatedAt)})),console.log(t.souk_ws);case 6:case"end":return e.stop()}}),e)})))()},itemLane:function(t){return this.$store.state.workspace.items.todo.includes(t)?"todo":this.$store.state.workspace.items.inProgress.includes(t)?"inProgress":"done"},removeItem:function(t){this.$store.commit("workspace/removeItem",t)}},computed:{workspaces:{get:function(){return this.$store.state.table.workspaces},set:function(){}},storage:{get:function(){return this.$store.state.solid.storage},set:function(){}},path:{get:function(){return this.storage+this.privacy+"/table/workspaces/"},set:function(){}},privacy:{get:function(){return this.$store.state.table.privacy},set:function(){}}}},c=a,i=n("2877"),u=Object(i["a"])(c,r,s,!1,null,null,null);e["default"]=u.exports},caad6:function(t,e,n){"use strict";var r=n("23e7"),s=n("4d64").includes,o=n("44d2"),a=n("ae40"),c=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!c},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d81d:function(t,e,n){"use strict";var r=n("23e7"),s=n("b727").map,o=n("1dde"),a=n("ae40"),c=o("map"),i=a("map");r({target:"Array",proto:!0,forced:!c||!i},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=workspaces.2dc6a60c.js.map