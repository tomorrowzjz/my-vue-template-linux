webpackJsonp([46],{HhoS:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={format:"image/png",quality:.92,width:void 0,height:void 0,Canvas:void 0},r=function(t,n){return void 0===t&&(t=[]),void 0===n&&(n={}),new Promise(function(e){var r=(n=Object.assign({},a,n)).Canvas?new n.Canvas:window.document.createElement("canvas"),i=n.Canvas?n.Canvas.Image:window.Image;n.Canvas&&(n.quality*=100);var o=t.map(function(t){return new Promise(function(n,e){"Object"!==t.constructor.name&&(t={src:t});var a=new i;a.onerror=function(){return e(new Error("Couldn't load image"))},a.onload=function(){return n(Object.assign({},t,{img:a}))},a.src=t.src})}),c=r.getContext("2d");e(Promise.all(o).then(function(t){var e=function(e){return n[e]||Math.max.apply(Math,t.map(function(t){return t.img[e]}))};return r.width=e("width"),r.height=e("height"),t.forEach(function(t){return c.globalAlpha=t.opacity?t.opacity:1,c.drawImage(t.img,t.x||0,t.y||0)}),n.Canvas&&"image/jpeg"===n.format?new Promise(function(t){r.toDataURL(n.format,{quality:n.quality,progressive:!1},function(n,e){if(n)throw n;t(e)})}):r.toDataURL(n.format,n.quality)}))})},i={name:"",data:function(){return{msg:"Welcome to Your Vue.js App"}},mounted:function(){this.merge()},methods:{merge:function(){var t=this;r([{src:"../static/img/body.png",x:0,y:0},{src:"../static/img/eyes.png",x:32,y:0},{src:"../static/img/mouth.png",x:16,y:0}]).then(function(n){t.$refs.img.src=n})}}},o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("img",{ref:"img",attrs:{src:"",alt:""}})])},staticRenderFns:[]};var c=e("VU/8")(i,o,!1,function(t){e("Kbg3")},"data-v-6f70d79c",null);n.default=c.exports},Kbg3:function(t,n){}});