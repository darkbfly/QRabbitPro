/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2023-12-14 22:26:47
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96c97700"],{5085:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("el-card",{attrs:{"body-style":{padding:"5px"}}},[e("el-button",{attrs:{icon:"el-icon-edit",size:"mini",type:"primary"},on:{click:t.handleEdit}},[t._v(" 保存 ")])],1),e("div",{staticClass:"container"},[e("el-row",[e("el-col",{attrs:{lg:12,md:24,sm:24}},[e("el-card",{attrs:{"body-style":{height:"365px"}}},[e("label",{attrs:{for:"html-input"}},[t._v("HTML代码：")]),e("div",{staticClass:"editor"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.htmlCode,expression:"htmlCode"}],attrs:{id:"html-input"},domProps:{value:t.htmlCode},on:{input:[function(e){e.target.composing||(t.htmlCode=e.target.value)},t.renderHtml]}})])])],1),e("el-col",{attrs:{lg:12,md:12,sm:24}},[e("el-card",{attrs:{"body-style":{height:"365px"}}},[e("label",{attrs:{for:"preview-output"}},[t._v("预览：")]),e("div",{staticClass:"preview"},[e(t.dynamicComponent,{tag:"component",attrs:{pin:t.pin,remarks:t.remarks}})],1)])],1)],1)],1)],1)},a=[],i=r("53ab"),s={data(){return{htmlCode:"<h1>标题: {{ pin }}</h1><h1>标题: {{ remarks }}</h1>",pin:"测试pin",remarks:"测试备注",dynamicComponent:"div"}},async created(){await this.handleGet()},mounted(){this.renderHtml()},methods:{async handleGet(){const{data:t,msg:e,code:r}=await Object(i["get_expired_html"])();0==r?(this.htmlCode=t,this.renderHtml()):this.$message.error(e)},async handleEdit(){const{code:t,msg:e}=await Object(i["edit_expired_html"])({expired_html:this.htmlCode});0===t?this.$message.success("保存成功"):this.$message.error(e)},renderHtml(){this.htmlCode.includes("remarks")?this.dynamicComponent={template:this.htmlCode,props:["pin","remarks"]}:this.dynamicComponent={template:this.htmlCode,props:["pin"]}}}},d=s,o=(r("7f36"),r("b473")),l=Object(o["a"])(d,n,a,!1,null,null,null);e["default"]=l.exports},"53ab":function(t,e,r){"use strict";r.r(e),r.d(e,"get_expired_html",(function(){return a})),r.d(e,"edit_expired_html",(function(){return i}));var n=r("b775");async function a(){return Object(n["default"])({url:"/admin/get_expired_html",method:"get"})}async function i(t){return Object(n["default"])({url:"/admin/edit_expired_html",method:"post",data:t})}},"7ba9":function(t,e,r){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#21252b"}},"7f36":function(t,e,r){"use strict";r("7ba9")}}]);