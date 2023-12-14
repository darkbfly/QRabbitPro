/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2023-12-14 22:26:47
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e444878"],{"0083":function(e,t,i){"use strict";i("dd3d")},"0d8e":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[t("el-form",{ref:"form",attrs:{"label-width":"80px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"pin",prop:"pin"}},[t("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.form.pin,callback:function(t){e.$set(e.form,"pin","string"===typeof t?t.trim():t)},expression:"form.pin"}})],1),t("el-form-item",{attrs:{label:"备注"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks","string"===typeof t?t.trim():t)},expression:"form.remarks"}})],1),t("el-form-item",{attrs:{label:"uuid"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.uuid,callback:function(t){e.$set(e.form,"uuid","string"===typeof t?t.trim():t)},expression:"form.uuid"}})],1),t("el-form-item",{attrs:{label:"权重"}},[t("el-input-number",{attrs:{min:0},model:{value:e.form.priority,callback:function(t){e.$set(e.form,"priority",t)},expression:"form.priority"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)},a=[],n=i("b923"),r={name:"UserEdit",data(){return{title:"新增",form:{pin:"",priority:"",remarks:"",uuid:""},rules:{pin:[{required:!0,trigger:"blur",message:"请输入pin"}]},dialogFormVisible:!1}},created(){},methods:{showEdit(e){this.title="编辑",this.form=Object.assign({},e),this.dialogFormVisible=!0},close(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1,this.$emit("fetch_data")},save(){this.$refs["form"].validate(async e=>{if(!e)return!1;{const{msg:e}=await Object(n["doEdit"])(this.form);this.$baseMessage(e,"success"),this.$refs["form"].resetFields(),this.$emit("fetch_data"),this.form=this.$options.data().form,this.dialogFormVisible=!1}})}}},l=r,s=i("b473"),c=Object(s["a"])(l,o,a,!1,null,null,null);t["default"]=c.exports},5135:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e._self._c;return t("div",[t("el-card",[t("el-row",[t("el-form",{ref:"form",attrs:{inline:!0,model:e.SearchForm},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:"pin"}},[t("el-input",{attrs:{placeholder:"请输入pin",size:"mini"},model:{value:e.SearchForm.pin,callback:function(t){e.$set(e.SearchForm,"pin",t)},expression:"SearchForm.pin"}})],1),t("el-form-item",{staticStyle:{float:"right"}},[t("el-button",{attrs:{icon:"el-icon-search","native-type":"submit",size:"mini",type:"primary"},on:{click:e.handleSearch}},[e._v(" 查询 ")])],1)],1)],1)],1),t("el-card",[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("容器")]),t("el-select",{staticStyle:{"padding-left":"10px"},attrs:{placeholder:"请选择容器",size:"mini"},model:{value:e.container_id,callback:function(t){e.container_id=t},expression:"container_id"}},e._l(e.container_list,(function(i){return t("el-option",{key:i,attrs:{label:i.name,size:"mini",value:i.id},nativeOn:{click:function(t){return e.fetchData.apply(null,arguments)}}})})),1),t("el-dropdown",{staticStyle:{float:"right",padding:"3px 0"}},[t("span",{staticClass:"el-dropdown-link"},[e._v(" 操作按钮 "),t("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{nativeOn:{click:function(t){return e.handleDelete.apply(null,arguments)}}},[e._v(" 批量删除 ")]),t("el-dropdown-item",{nativeOn:{click:function(t){return e.moveBatchConfirm.apply(null,arguments)}}},[e._v(" 转移容器 ")]),t("el-dropdown-item",{nativeOn:{click:function(t){return e.updateBatch.apply(null,arguments)}}},[e._v(" 批量更新 ")]),t("el-dropdown-item",{nativeOn:{click:function(t){return e.copyBatchConfirm.apply(null,arguments)}}},[e._v(" 批量复制 ")])],1)],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"tableSort",attrs:{data:e.tableData,"element-loading-text":e.elementLoadingText,"header-cell-style":{background:"#eef1f6",color:"#606266"},"row-key":e=>e.id,"row-selection":{type:"checkbox",selected:e.selectedRows},"select-on-indeterminate":!1,"show-overflow-tooltip":"",sortable:e.sortableConfig,"tooltip-effect":"dark",width:"auto"},on:{"selection-change":e.setSelectRows,"sort-change":e.handleSortChange}},[t("el-table-column",{attrs:{align:"center","cell-style":"0 0","header-align":"center","show-overflow-tooltip":"",type:"selection",width:"30px"}}),t("el-table-column",{attrs:{align:"center","header-align":"center",label:"序号",prop:"index","show-overflow-tooltip":"",width:"80px"}}),t("el-table-column",{attrs:{align:"center","header-align":"center",label:"pin",prop:"pin","show-overflow-tooltip":"",sortable:"",width:"120px"}}),t("el-table-column",{attrs:{align:"center","header-align":"center",label:"昵称",prop:"nickname","show-overflow-tooltip":"",sortable:"",width:"120px"}}),t("el-table-column",{attrs:{align:"center","header-align":"center",label:"备注",prop:"remarks","show-overflow-tooltip":"",width:"100px"}}),t("el-table-column",{attrs:{align:"center","header-align":"center",label:"权重",prop:"priority","show-overflow-tooltip":"",sortable:"",width:"80px"}}),t("el-table-column",{attrs:{align:"center","header-align":"center",label:"UUID",prop:"uuid","show-overflow-tooltip":"",width:"120px"}}),t("el-table-column",{attrs:{align:"center","header-align":"center",label:"状态",prop:"expired","show-overflow-tooltip":"",width:"80px"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("div",[e.row.expired?t("i",{staticClass:"el-icon-error",staticStyle:{"font-size":"20px",color:"red"}}):t("i",{staticClass:"el-icon-success",staticStyle:{"font-size":"20px",color:"green"}})])]}}])}),t("el-table-column",{attrs:{align:"center","header-align":"center",label:"Mck",prop:"mck","show-overflow-tooltip":"",width:"180px"}}),t("el-table-column",{attrs:{align:"center","header-align":"center",label:"appck",prop:"appck","show-overflow-tooltip":"",width:"180px"}}),t("el-table-column",{attrs:{align:"center","header-align":"center",label:"wskey",prop:"wskey","show-overflow-tooltip":"",width:"180px"}}),t("el-table-column",{attrs:{align:"center","header-align":"center",label:"Rwskey",prop:"jd_a2","show-overflow-tooltip":"",width:"180px"}}),t("el-table-column",{attrs:{align:"center","header-align":"center",label:"更新时间",prop:"last_login_time","show-overflow-tooltip":"",sortable:"",width:"150px"}}),t("el-table-column",{attrs:{align:"center",fixed:"right","header-align":"center",label:"操作",prob:"action"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-dropdown",{attrs:{size:"mini",trigger:"click"}},[t("span",{staticClass:"el-icon-more"}),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{nativeOn:{click:function(t){return e.handleEdit(i.row)}}},[t("sapn",[e._v("修改")])],1),t("el-dropdown-item",{nativeOn:{click:function(t){return e.handleDelete(i.row)}}},[t("sapn",[e._v("删除")])],1)],1)],1)]}}])})],1),t("el-pagination",{attrs:{background:e.background,"current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1),t("table-edit",{ref:"edit"}),t("el-dialog",{attrs:{title:"迁移",visible:e.moveBatchFormVisible},on:{"update:visible":function(t){e.moveBatchFormVisible=t}}},[t("span",[e._v("容器:")]),t("el-select",{attrs:{placeholder:"请选择容器"},model:{value:e.container_id2,callback:function(t){e.container_id2=t},expression:"container_id2"}},e._l(e.container_list,(function(e){return t("el-option",{key:e,attrs:{label:e.name,size:"mini",value:e.id}})})),1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.moveBatchFormVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.moveBatch(e.container_id2)}}},[e._v(" 确 定 ")])],1)],1),t("el-dialog",{attrs:{title:"复制",visible:e.copyBatchFormVisible},on:{"update:visible":function(t){e.copyBatchFormVisible=t}}},[t("span",[e._v("容器:")]),t("el-select",{attrs:{label:"容器",placeholder:"请选择容器"},model:{value:e.container_id2,callback:function(t){e.container_id2=t},expression:"container_id2"}},e._l(e.container_list,(function(e){return t("el-option",{key:e,attrs:{label:e.name,size:"mini",value:e.id}})})),1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.moveBatchFormVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.copyBatch(e.container_id2)}}},[e._v(" 确 定 ")])],1)],1)],1)},a=[],n=(i("8908"),i("b923")),r=i("0d8e"),l={name:"Env",components:{TableEdit:r["default"]},data(){return{moveBatchFormVisible:!1,copyBatchFormVisible:!1,isMobile:!1,select:"",container_list:[{name:"聚合",id:999999}],container_id2:"",background:!0,selectRows:"",elementLoadingText:"正在加载...",listLoading:!1,layout:"total, sizes, prev, pager, next, jumper",total:0,container_id:999999,SearchForm:{pin:""},queryForm:{pageNo:1,pageSize:20,title:""},tableData:[],selectedRows:[],sortableConfig:{order:"ascending",prop:"id"}}},async created(){await this.fetchContainerList(),await this.fetchData(),this._isMobile()},methods:{_isMobile(){navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)?this.isMobile=!0:this.isMobile=!1,console.log(this.isMobile)},async fetchContainerList(){const{data:e}=await Object(n["getContainerList"])();this.container_list=e,e.length>0&&(this.container_list.push({name:"默认",id:999999}),e.length>1&&(this.container_id=e[1].id))},handleSortChange({column:e,prop:t,order:i}){console.log("排序参数：",e,t,i),this.sortableConfig.order=i,this.sortableConfig.prop=t,this.fetchData()},setSelectRows(e){this.selectRows=e},handleEdit(e){this.$refs["edit"].showEdit(e)},handleDelete(e){if(e.id)this.$baseConfirm("你确定要删除当前项吗",null,async()=>{var t={container_id:this.container_id,ids:[e.id]};const{msg:i}=await Object(n["doDelete"])(t);this.$baseMessage(i,"success"),this.fetchData()});else{if(!(this.selectRows.length>0))return this.$baseMessage("未选中任何行","error"),!1;{const e=this.selectRows.map(e=>e.id).join();this.$baseConfirm("你确定要删除选中项吗",null,async()=>{var t={container_id:this.container_id,ids:e};const{msg:i}=await Object(n["doDelete"])(t);this.$baseMessage(i,"success"),this.fetchData()})}}},async updateBatch(){this.selectRows.length>0&&this.$baseConfirm("你确定要更新选中项吗",null,async()=>{const e=this.selectRows.map(e=>e.id).join();var t={container_id:this.container_id,ids:e};const{msg:i}=await Object(n["update_batch"])(t);this.$baseMessage(i,"success"),this.fetchData()})},copyBatchConfirm(){this.selectRows.length>0&&this.$baseConfirm("你确定要复制所有选中的ck吗?",null,async()=>{this.copyBatchFormVisible=!0})},async copyBatch(e){const t=this.selectRows.map(e=>e.id).join();var i={container_id:this.container_id,ids:t,container_id2:e};try{const{msg:e}=await Object(n["copy_batch"])(i);this.$baseMessage(e,"success"),this.fetchData()}catch(o){this.$baseMessage(o,"error")}this.copyBatchFormVisible=!1},moveBatchConfirm(){this.selectRows.length>0&&this.$baseConfirm("你确定要移动所有选中的ck吗?",null,async()=>{this.moveBatchFormVisible=!0})},async moveBatch(e){const t=this.selectRows.map(e=>e.id).join();var i={container_id:this.container_id,ids:t,container_id2:e};try{const{msg:e}=await Object(n["move_batch"])(i);this.$baseMessage(e,"success"),this.fetchData()}catch(o){this.$baseMessage(o,"error")}this.moveBatchFormVisible=!1},handleSizeChange(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange(e){this.queryForm.pageNo=e,this.fetchData()},async handleQuery(){this.queryForm.pageNo=1,await this.fetchData()},async handleSearch(){this.listLoading=!0;let e={...this.SearchForm,container_id:this.container_id};const{code:t,msg:i,data:o,total:a}=await Object(n["search"])(e);if(0!=t)return this.listLoading=!1,this.$baseMessage(i,"error"),!1;let r=(this.queryForm.pageNo-1)*this.queryForm.pageSize+1;o.forEach((e,t)=>{e.index=r+t}),this.tableData=o,this.total=a,setTimeout(()=>{this.listLoading=!1},500)},async fetchData(){this.listLoading=!0;var e={container_id:this.container_id,...this.queryForm,...this.sortableConfig};const{data:t,total:i}=await Object(n["getList"])(e);let o=(this.queryForm.pageNo-1)*this.queryForm.pageSize+1;t.forEach((e,t)=>{e.index=o+t}),this.tableData=t,this.total=i,this.listLoading=!1,setTimeout(()=>{this.listLoading=!1},500)}}},s=l,c=(i("0083"),i("b473")),d=Object(c["a"])(s,o,a,!1,null,null,null);t["default"]=d.exports},b923:function(e,t,i){"use strict";i.r(t),i.d(t,"getList",(function(){return a})),i.d(t,"doDelete",(function(){return n})),i.d(t,"doEdit",(function(){return r})),i.d(t,"getContainerList",(function(){return l})),i.d(t,"update_batch",(function(){return s})),i.d(t,"move_batch",(function(){return c})),i.d(t,"copy_batch",(function(){return d})),i.d(t,"search",(function(){return h}));var o=i("b775");async function a(e){return Object(o["default"])({url:"/env/list",method:"post",data:e})}async function n(e){return Object(o["default"])({url:"/env/delete",method:"post",data:e})}async function r(e){return Object(o["default"])({url:"/env/edit",method:"post",data:e})}async function l(e){return Object(o["default"])({url:"/env/container_list",method:"post",data:e})}async function s(e){return Object(o["default"])({url:"/env/update_batch",method:"post",data:e})}async function c(e){return Object(o["default"])({url:"/env/move_batch",method:"post",data:e})}async function d(e){return Object(o["default"])({url:"/env/copy_batch",method:"post",data:e})}async function h(e){return Object(o["default"])({url:"/env/search",method:"post",data:e})}},dd3d:function(e,t,i){}}]);