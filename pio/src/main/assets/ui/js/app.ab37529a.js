(function(e){function t(t){for(var o,a,r=t[0],c=t[1],l=t[2],d=0,f=[];d<r.length;d++)a=r[d],n[a]&&f.push(n[a][0]),n[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],o=!0,r=1;r<i.length;r++){var c=i[r];0!==n[c]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=i[0]))}return e}var o={},n={app:0},s=[];function a(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=o,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(i,o,function(t){return e[t]}.bind(null,o));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0747":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var o=i("2b0e"),n=(i("df49"),i("e7bd")),s=i("0c29"),a=i("ae0c"),r=i("7ced");o["a"].use(n["a"]),o["a"].use(s["a"]),o["a"].use(a["a"]),o["a"].use(r["a"]);var c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("keep-alive",[i("router-view")],1)},l=[],u=i("2877"),d={},f=Object(u["a"])(d,c,l,!1,null,null,null),p=f.exports,h=(i("5cfb"),i("8c4f")),v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("cube-button",{on:{click:e.syncRunTest}},[e._v("同步执行脚本")]),i("cube-button",{on:{click:e.asyncRunTest}},[e._v("异步执行脚本")]),i("div",{staticClass:"shell-log-view"},e._l(e.logs,function(t,o){return i("div",{key:o,domProps:{innerHTML:e._s(t)}})}),0)],1)},m=[],b={data:function(){return{logs:["# 脚本执行器"]}},methods:{syncRunTest:function(){if(confirm("确定要用 KrScriptCore 执行脚本代码吗？"))try{var e=KrScriptEngine.executeShell("echo 'hello world！'");alert("执行结果："+e)}catch(t){alert("KrScriptEngine 异常："+t.message)}},asyncRunTest:function(){var e=this;try{var t=KrScriptEngine.executeShellAsync("echo 'hello world！'",function(t){e.logs.push('<b style="color: #555">'+t+"</b>")},function(t){e.logs.push('<b style="color: #d00">'+t+"</b>")},function(t){e.logs.push('<b style="color: #5d5">完成：'+t+"</b>")});this.logs.push("开始运行："+t)}catch(i){alert("KrScriptEngine 异常："+i.message)}}}},g=b,w=(i("89f1"),Object(u["a"])(g,v,m,!1,null,null,null)),y=w.exports,_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-official"},[i("div",{staticClass:"top-background",style:e.backgroundColor()}),i("div",{staticClass:"author"},[e._m(0),i("br"),i("div",[e._v("作者: ETO(底层) | SKI(UI)")]),e._m(1),i("div",{on:{click:e.refreshRatetest}},[e._v("【帧率测试，点这里】")])]),i("label",{staticClass:"file-picker",on:{click:e.chooseFile}}),i("div",{staticClass:"header"},[i("h2",[e._v("屏幕刷新率切换")]),i("h5",[e._v("当前设备："+e._s(e.deviceName)+"("+e._s(e.deviceModel)+") "+e._s(e.currentRefreshRate)+"Hz")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.customImageFile,expression:"customImageFile"}],staticClass:"custom-file-info"},[i("div",{staticClass:"custom-file-title"},[e._v("已选择自定义文件")]),i("div",{staticClass:"custom-file-path"},[e._v("镜像路径："+e._s(e.customImageFile))]),i("div",{staticClass:"custom-file-path"},[e._v("目标分区：/dev/block/by-name/dtbo")]),i("div",{staticClass:"custom-file-warning"},[e._v("注意：本应用无法校验所选文件的有效性，如果你选择了无效的文件，刷入后会无法开机！")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.customImageFile,expression:"!customImageFile"}],class:"options"+(e.options.length%2==1?" options-odd":"")},e._l(e.options,function(t,o){return i("div",{key:o,class:{selected:e.isSelected(t.value)},on:{touchend:e.touchUp,touchstart:function(i){return e.chooseOption(t)}}},[i("div",{style:{backgroundColor:t.color}},[i("div",{staticClass:"option-info"},[i("div",[e._v(e._s(t.title))]),i("div")]),i("div",[i("span",{staticClass:"freq-number"},[e._v(e._s(t.value))]),i("span",[e._v("Hz")])])])])}),0),i("div",{staticStyle:{display:"inline-block"}},[i("cube-checkbox",{model:{value:e.autoReboot,callback:function(t){e.autoReboot=t},expression:"autoReboot"}},[e._v("\n      自动重启\n    ")])],1),i("div",{staticClass:"desc"},[e.autoReboot?i("div",[e._v("切换完成后，自动重启手机")]):i("div",[e._v("切换完成后需要手动重启")])]),i("cube-button",{staticClass:"button-applay",style:e.backgroundColor(),attrs:{light:!1},on:{click:e.applyRefreshRate}},[e._v("应用")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading-mask"},[i("cube-loading",{attrs:{size:40}})],1)],1)},k=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("small",[e._v("如果调高刷新率后，出现以下状况")]),i("br"),i("small",[e._v("【卡顿、黑屏、偏色、闪烁】")]),i("br"),i("small",[e._v("请降低刷新率")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("small",[e._v("未经允许不得擅自搬运和转载~")])])}],S=(i("a481"),i("aef6"),{data:function(){return{deviceName:"",deviceModel:"",sdkInt:0,currentRefreshRate:60,customImageFile:"",loading:!1,officialSupported:!1,options:[{title:"默认",desc:"",value:60,color:"#00d5d9"},{title:"稳定",desc:"",value:72,color:"#87cb00"},{title:"发烧",desc:"",value:84,color:"#fc8a1b"},{title:"极限",desc:"",value:90,color:"#f9592f"}],selectedOption:null,autoReboot:!0}},created:function(){var e=this;if(window.ExtendedInterface&&window.ExtendedInterface){this.deviceName=window.ExtendedInterface.deviceName(),this.deviceModel=window.ExtendedInterface.deviceModel(),this.currentRefreshRate=window.ExtendedInterface.currentRefreshRate(),this.sdkInt=window.ExtendedInterface.sdkInt();var t=window.ExtendedInterface.getOptions();t?(this.officialSupported=!0,this.options="string"==typeof t?JSON.parse(t):t):this.officialSupported=!1,this.selectedOption=this.options.filter(function(t){return t.value==e.currentRefreshRate})[0]}else alert("异常，无法获取当前屏幕刷新率~")},methods:{refreshRatetest:function(){window.open("https://testufo.com")},chooseFile:function(){var e=this;window.chooseFileCallback=function(t){var i=t&&t.absPath;i&&(e.customImageFile=i,e.autoReboot=!1)},window.ExtendedInterface.chooseFile("window.chooseFileCallback")},touchUp:function(){navigator.vibrate?navigator.vibrate(20):navigator.webkitVibrate&&navigator.webkitVibrate(20)},chooseOption:function(e){this.customImageFile="",this.selectedOption=e,navigator.vibrate?navigator.vibrate(40):navigator.webkitVibrate&&navigator.webkitVibrate(40)},applyRefreshRate:function(){if(this.customImageFile)this.applyCustomDtImage();else try{if(this.loading=!0,this.touchUp(),this.deviceModel)if(this.selectedOption&&this.selectedOption.value){var e=this.selectedOption.value,t=this.deviceModel,i=this.sdkInt,o=this.selectedOption.resource,n=KrScriptEngine.extractAssets(o||"file:///android_asset/eto/".concat(t,"/sdk").concat(i,"/").concat(e,".img"));n?this.flashImage(n):this.officialSupported?alert("所需的资源文件已丢失或不支持当前设备~"):alert("本应用还未适配你的手机，如需刷入自定义的dtbo分区镜像，请点击左上角的图标选择文件~")}else alert("请先选择要切换的刷新率！");else alert("当前设备型号未知，无法进行切换~")}finally{this.loading=!1}},applyCustomDtImage:function(){if(this.customImageFile&&this.customImageFile.endsWith(".img"))if(confirm("本应用无法确保你所选的文件是否有效，刷入无效的文件，会导致手机无法开机，确定继续刷入吗？")){this.loading=!0;try{this.flashImage(this.customImageFile)}catch(e){}finally{this.loading=!1}}else this.customImageFile="";else alert("你需要选择一个有效的镜像文件，以.img结尾的文件名~")},flashImage:function(e){if(KrScriptEngine.rootCheck()){var t="dd if='".concat(e.replace(/'/g,"\\'"),"' of=/dev/block/by-name/dtbo");KrScriptEngine.executeShell(t),this.autoReboot?(setTimeout(function(){alert("操作完成，即将自动重启~")},10),setTimeout(function(){KrScriptEngine.executeShell("sync\nsleep 2\nreboot")},200)):alert("操作完成，请手动重启手机~")}else alert("没有ROOT还想玩机，做梦吧你！")},isSelected:function(e){return!(!this.selectedOption||!this.selectedOption.value)&&e==this.selectedOption.value},backgroundColor:function(){if(this.selectedOption&&this.selectedOption.color)return{backgroundColor:this.selectedOption.color}}}}),C=S,O=(i("9793"),Object(u["a"])(C,_,k,!1,null,null,null)),x=O.exports,I=[{path:"/",component:x,name:"OfficialPage"},{path:"/home",component:y,name:"home"}];o["a"].config.productionTip=!1,o["a"].use(h["a"]),window.KrScriptEngine={executeShell:function(e){return"string"==typeof e?window.KrScriptCore.executeShell(e):"boolean"==typeof e?!!e:""},executeShellAsync:function(e,t,i,o){return window.TaskSupervisorCallback=function(e){if(e)switch(e.type){case 2:t&&t instanceof Function&&t(e.message);break;case 4:i&&i instanceof Function&&i(e.message);break;case-2:o&&o instanceof Function&&o(e.message);break;default:alert("未知输出："+JSON.stringify(e));break}},"string"==typeof e?window.KrScriptCore.executeShellAsync(e,"window.TaskSupervisorCallback"):"boolean"==typeof e?!!e:""},extractAssets:function(e){return e&&"string"==typeof e&&window.KrScriptCore.extractAssets(e)||null},rootCheck:function(){return window.KrScriptCore.rootCheck()}};var R=new h["a"]({routes:I});new o["a"]({router:R,render:function(e){return e(p)}}).$mount("#app")},"89f1":function(e,t,i){"use strict";var o=i("0747"),n=i.n(o);n.a},9793:function(e,t,i){"use strict";var o=i("e97e"),n=i.n(o);n.a},e97e:function(e,t,i){}});