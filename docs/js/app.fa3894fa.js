(function(e){function t(t){for(var r,s,i=t[0],l=t[1],u=t[2],m=0,p=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/overlay-image/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;a.push(["8c94","chunk-vendors"]),n()})({"046c":function(e,t,n){e.exports=n.p+"img/example_image_3.e8647444.jpg"},8524:function(e,t,n){},"865d":function(e,t,n){e.exports=n.p+"img/example_image_2.672cc637.jpg"},"8c94":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"grid"},e._l(e.examples,(function(t){return n("OverlayImage",{key:t.img,attrs:{image:t.img,text:t.text,to:t.to},on:{click:function(){return e.clickHandler(t)}}})})),1),e._m(0)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"credits"},[n("p",[e._v("Example 1 photo by "),n("a",{attrs:{href:"https://unsplash.com/@jontyson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[e._v("Jon Tyson")]),e._v(" on "),n("a",{attrs:{href:"https://unsplash.com/s/photos/nightclub?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[e._v("Unsplash")])]),n("p",[e._v("Example 2 photo by "),n("a",{attrs:{href:"https://unsplash.com/@antoinejulien?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[e._v("Antoine Julien")]),e._v(" on "),n("a",{attrs:{href:"https://unsplash.com/s/photos/nightclub?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[e._v("Unsplash")])]),n("p",[e._v("Example 3 photo by "),n("a",{attrs:{href:"https://unsplash.com/@modeze?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[e._v("Modesta Žemgulytė")]),e._v(" on "),n("a",{attrs:{href:"https://unsplash.com/s/photos/nightclub?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[e._v("Unsplash")])]),n("p",[e._v("Example 4 photo by "),n("a",{attrs:{href:"https://unsplash.com/@pimmyten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[e._v("Pim Myten")]),e._v(" on "),n("a",{attrs:{href:"https://unsplash.com/s/photos/nightclub?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[e._v("Unsplash")])])])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._g({staticClass:"overlay-image-container",class:[{pointer:e.$listeners.click},e.containerClass],style:e.style,on:{mouseenter:e.mouseenter,mouseleave:e.mouseleave}},e.$listeners),[n("div",{staticClass:"overlay-image-overlay",class:[e.showOverlay?"show-overlay":{"from-top":"top"===e.enterFrom||null===e.enterFrom,"from-left":"left"===e.enterFrom,"from-right":"right"===e.enterFrom,"from-bottom":"bottom"===e.enterFrom},e.overlayClass]},[n("p",{staticClass:"overlay-image-text",class:[e.textClass]},[e._v(" "+e._s(e.text||"")+" ")])])])},i=[],l={name:"OverlayImage",props:["image","to","text","height","containerClass","overlayClass","textClass"],data:function(){return{enterFrom:null,showOverlay:!1}},computed:{style:function(){var e;"number"===typeof this.height?e=this.height+"px":this.height&&(e=this.height);var t={"background-image":"url(".concat(this.image,")")};return e&&(t.height=e),t}},methods:{enteringDirection:function(e){var t=this.$el.getBoundingClientRect(),n=e.clientX-t.x,r=e.clientY-t.y,o=Math.abs(r),a=Math.abs(n),s=Math.abs(t.width-n),i=Math.abs(t.height-r),l=Math.min(o,a,s,i);switch(l){case o:return"top";case a:return"left";case s:return"right";case i:return"bottom";default:throw new Error("Invalid closest value")}},mouseenter:function(e){var t=this;this.enterFrom=this.enteringDirection(e),setTimeout((function(){t.showOverlay=!0}),10)},mouseleave:function(e){this.enterFrom=this.enteringDirection(e),this.showOverlay=!1}}},u=l,c=(n("9211"),n("2877")),m=Object(c["a"])(u,s,i,!1,null,"2094ca28",null),p=m.exports,h=r["a"].extend({name:"ServeDev",components:{OverlayImage:p},data:function(){return{examples:[{img:n("d48a"),text:"Example 1",to:"/example1"},{img:n("865d"),text:"Example 2",to:"/example2"},{img:n("046c"),text:"Example 3",to:"/example3"},{img:n("e479"),text:"Example 4",to:"/example4"}]}},methods:{clickHandler:function(e){console.log(e.text+" clicked")}}}),f=h,d=(n("cf01"),Object(c["a"])(f,o,a,!1,null,null,null)),v=d.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(v)}}).$mount("#app")},9211:function(e,t,n){"use strict";var r=n("d83d"),o=n.n(r);o.a},cf01:function(e,t,n){"use strict";var r=n("8524"),o=n.n(r);o.a},d48a:function(e,t,n){e.exports=n.p+"img/example_image_1.dabedd48.jpg"},d83d:function(e,t,n){},e479:function(e,t,n){e.exports=n.p+"img/example_image_4.ef61921a.jpg"}});
//# sourceMappingURL=app.fa3894fa.js.map