webpackJsonp([37],{DS3t:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={name:"",data:function(){return{transferValue:[],available_prop_values:[]}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;setTimeout(function(){t.transferValue=[{id:2132572,sort_order:1,text:"羊毛"},{id:2132573,sort_order:2,text:"腈纶"},{id:2132574,sort_order:3,text:"蚕丝"},{id:2132575,sort_order:4,text:"麻"},{id:2132576,sort_order:5,text:"棉"},{id:2132577,sort_order:6,text:"羊绒"},{id:2132578,sort_order:7,text:"涤纶"},{id:2132579,sort_order:8,text:"锦纶"},{id:2132580,sort_order:9,text:"兔毛"},{id:2132581,sort_order:10,text:"LYCRA莱卡"},{id:2132582,sort_order:11,text:"莫代尔"},{id:2132583,sort_order:12,text:"羊皮"},{id:2132584,sort_order:13,text:"猪皮"},{id:2132585,sort_order:14,text:"氯纶"},{id:2132586,sort_order:15,text:"醋纤"},{id:2132587,sort_order:16,text:"维纶"},{id:2132588,sort_order:17,text:"丙纶"},{id:2132589,sort_order:18,text:"貂皮"},{id:2132590,sort_order:19,text:"粘胶"},{id:2132591,sort_order:20,text:"鹿皮"},{id:2132592,sort_order:21,text:"羊驼毛"},{id:2132593,sort_order:22,text:"貂毛"},{id:2132594,sort_order:23,text:"狐狸毛"},{id:2132595,sort_order:24,text:"头层牛皮"},{id:2132596,sort_order:25,text:"其他"}],t.available_prop_values=[{id:12000089,prop_value_id:2132572,sort_order:1,text:"羊毛"},{id:12000090,prop_value_id:2132573,sort_order:2,text:"腈纶"},{id:12000091,prop_value_id:2132574,sort_order:3,text:"蚕丝"},{id:12000092,prop_value_id:2132575,sort_order:4,text:"麻"},{id:12000093,prop_value_id:2132576,sort_order:5,text:"棉"},{id:12000094,prop_value_id:2132577,sort_order:6,text:"羊绒"},{id:12000095,prop_value_id:2132578,sort_order:7,text:"涤纶"},{id:12000096,prop_value_id:2132579,sort_order:8,text:"锦纶"},{id:12000097,prop_value_id:2132580,sort_order:9,text:"兔毛"},{id:12000098,prop_value_id:2132581,sort_order:10,text:"LYCRA莱卡"},{id:12000099,prop_value_id:2132582,sort_order:11,text:"莫代尔"},{id:12000100,prop_value_id:2132583,sort_order:12,text:"羊皮"},{id:12000101,prop_value_id:2132584,sort_order:13,text:"猪皮"},{id:12000102,prop_value_id:2132585,sort_order:14,text:"氯纶"},{id:12000103,prop_value_id:2132586,sort_order:15,text:"醋纤"},{id:12000104,prop_value_id:2132587,sort_order:16,text:"维纶"},{id:12000105,prop_value_id:2132588,sort_order:17,text:"丙纶"},{id:12000106,prop_value_id:2132589,sort_order:18,text:"貂皮"},{id:12000107,prop_value_id:2132590,sort_order:19,text:"粘胶"},{id:12000108,prop_value_id:2132591,sort_order:20,text:"鹿皮"},{id:12000109,prop_value_id:2132592,sort_order:21,text:"羊驼毛"},{id:12000110,prop_value_id:2132593,sort_order:22,text:"貂毛"},{id:12000111,prop_value_id:2132594,sort_order:23,text:"狐狸毛"},{id:12000112,prop_value_id:2132595,sort_order:24,text:"头层牛皮"},{id:12000113,prop_value_id:2132596,sort_order:25,text:"其他"}]},100)},transferHandleChange:function(t,r,e){var o=this;if(e.length){var d=[];this.available_prop_values.map(function(t){e.map(function(r){t.id===r&&d.push(t)})}),"right"===r||"left"===r&&this.$confirm("此操作将永久删除该属性, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.$message({type:"success",message:"删除成功!"})}).catch(function(){o.transferValue=t.concat(e),o.$message({type:"info",message:"已取消删除"})})}}}},d={render:function(){var t=this,r=t.$createElement;return(t._self._c||r)("el-transfer",{attrs:{props:{key:"id",label:"text"},"button-texts":["删除","添加"],titles:["属性值列表","类目属性值列表"],data:t.available_prop_values},on:{change:t.transferHandleChange},model:{value:t.transferValue,callback:function(r){t.transferValue=r},expression:"transferValue"}})},staticRenderFns:[]};var i=e("VU/8")(o,d,!1,function(t){e("pArN")},"data-v-a5d48458",null);r.default=i.exports},pArN:function(t,r){}});