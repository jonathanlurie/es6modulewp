!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.es6modulewp=t():e.es6modulewp=t()}(this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.anAttribute=t,this.aSecondAttribute=n,console.log("a foo is constructed")}return o(e,[{key:"setAnAttribute",value:function(e){this.anAttribute=e,console.log("calling setAnAttribute()")}},{key:"printAnAttribute",value:function(){console.log(this.anAttribute)}},{key:"getAnAttribute",value:function(){return this.anAttribute}}]),e}();t.Foo=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);Object.defineProperty(t,"Foo",{enumerable:!0,get:function(){return o.Foo}})}])});