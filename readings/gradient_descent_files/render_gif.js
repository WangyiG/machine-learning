!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=85)}({23:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(38),r=o(i);e.default=r.default},35:function(t,e,n){"use strict";t.exports=function(t){"complete"===document.readyState||"interactive"===document.readyState?t.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&t.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",t)}},36:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){return t.addEventListener?(t.addEventListener(e,n,!1),{remove:function(){t.removeEventListener(e,n,!1)}}):t.attachEvent?(t.attachEvent("on"+e,n),{remove:function(){t.detachEvent("on"+e,n)}}):void 0}},37:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("undefined"!=typeof t&&null!=t){if(!(this instanceof i))return new i(t);var e=t.getAttribute("data-inited");e||(this.options={el:t,container:t.parentNode,prefetch:Boolean(t.getAttribute("prefetch")),previewUrl:t.getAttribute("src"),originUrl:t.getAttribute("data-original-url")},this._fetchUrl=this.options.originUrl,this.init())}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),a=o(r);i.prototype.prefetch=function(t){if(t&&this.options.prefetch){var e=document.createElement("link");e.rel="prefetch",e.href=t;var n=document.getElementsByTagName("link")[0];n.parentNode.insertBefore(e,n)}},i.prototype.play=function(){var t=this.options.el;t.src=this._fetchUrl,this._buttonPlay.style.display="none",this._buttonReload.style.display="none",this._loading.style.display="block"},i.prototype.reload=function(){this._buttonPlay.style.display="none",this._buttonReload.style.display="none",this._loading.style.display="block";var t=this.options.originUrl,e="_r="+Math.random();this._fetchUrl=t.indexOf("?")+1?t+"&"+e:t+"?"+e,this.play()},i.prototype.loaded=function(t){var e=this.options,t=e.el,n=e.container;t.src===this._fetchUrl&&(this._buttonPlay_click.remove(),this._buttonReload_click.remove(),this._img_load_error.remove(),this._img_load.remove(),n.removeChild(this._panel))},i.prototype.notFound=function(){var t=this.options,e=t.el,n=t.previewUrl;e.src=n,this._buttonPlay.style.display="none",this._buttonReload.style.display="block",this._loading.style.display="none"},i.prototype.init=function(){var t=this,e=this.options,n=e.el,o=e.container,i=(e.originUrl,this._panel=document.createElement("div")),r="image-gif-button-play",l="image-gif-loading",s="image-gif-button-reload";i.className="image-gif-panel",i.innerHTML='\n    <div class="image-gif-panel-inner">\n      <a href="javascript:;" class="'+r+'">GIF</a>\n      <a href="javascript:;" class="'+s+'" style="display: none">重新加载</a>\n      <span class="'+l+'" style="display: none;">加载中</span>\n    </div>\n  ',o.appendChild(i),this._buttonPlay=i.getElementsByClassName(r)[0],this._buttonReload=i.getElementsByClassName(s)[0],this._loading=i.getElementsByClassName(l)[0],this.prefetch(this._fetchUrl);var u=function(e){return function(n){n.preventDefault?n.preventDefault():n.returnValue=!1,e.call(t,n.target||n.srcElement,n.loaded?n.loaded/n.total:-1)}};this._buttonPlay_click=(0,a.default)(this._buttonPlay,"click",u(this.play)),this._buttonReload_click=(0,a.default)(this._buttonReload,"click",u(this.reload)),this._img_load=(0,a.default)(n,"load",u(this.loaded)),this._img_load_error=(0,a.default)(n,"error",u(this.notFound)),n.setAttribute("data-inited",!0)},e.default=i},38:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(){r=[];for(var t,e=document.querySelectorAll("img[data-render-type=gif]"),n=0;t=e[n];)r.push((0,c.default)(t)),n++;if("object"===("undefined"==typeof a?"undefined":l(a))&&"preloadNum"in a)for(var o=a.preloadNum;o--;)r[o]&&r[o].play()}Object.defineProperty(e,"__esModule",{value:!0});var r,a,l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=n(35),u=o(s),d=n(37),c=o(d);e.default=function(t){a=t,(0,u.default)(i)}},74:function(t,e){},85:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(23),r=o(i);n(74),window._IMAGE_GIF_RENDER=r.default}});