(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~3b98e4aa"],{"0e25":function(e,t,r){"use strict";var a=r("2f63"),n=Object.freeze;Object(a["a"])(n)||(n=function(e){return e}),t["a"]=n},1262:function(e,t,r){"use strict";var a=r("670c"),n=r("be18"),c=r("2f63"),u=r("93da"),o=new n["a"],i=new n["a"],s=new n["a"];function f(e,t,r,f,l){var b,d,x,O,j,v,p,w;if(Object(c["a"])(l)||(l=new n["a"]),Object(c["a"])(t.z)){if(n["a"].equalsEpsilon(e,t,u["a"].EPSILON14))return n["a"].clone(n["a"].UNIT_X,l);if(n["a"].equalsEpsilon(e,r,u["a"].EPSILON14))return n["a"].clone(n["a"].UNIT_Y,l);if(n["a"].equalsEpsilon(e,f,u["a"].EPSILON14))return n["a"].clone(n["a"].UNIT_Z,l);b=n["a"].subtract(r,t,o),d=n["a"].subtract(f,t,i),x=n["a"].subtract(e,t,s),O=n["a"].dot(b,b),j=n["a"].dot(b,d),v=n["a"].dot(b,x),p=n["a"].dot(d,d),w=n["a"].dot(d,x)}else{if(a["a"].equalsEpsilon(e,t,u["a"].EPSILON14))return n["a"].clone(n["a"].UNIT_X,l);if(a["a"].equalsEpsilon(e,r,u["a"].EPSILON14))return n["a"].clone(n["a"].UNIT_Y,l);if(a["a"].equalsEpsilon(e,f,u["a"].EPSILON14))return n["a"].clone(n["a"].UNIT_Z,l);b=a["a"].subtract(r,t,o),d=a["a"].subtract(f,t,i),x=a["a"].subtract(e,t,s),O=a["a"].dot(b,b),j=a["a"].dot(b,d),v=a["a"].dot(b,x),p=a["a"].dot(d,d),w=a["a"].dot(d,x)}l.y=p*v-j*w,l.z=O*w-j*v;var y=O*p-j*j;return 0!==l.y&&(l.y/=y),0!==l.z&&(l.z/=y),l.x=1-l.y-l.z,l}t["a"]=f},"2bb9":function(e,t,r){"use strict";var a=r("535a"),n=r("2f63");function c(e,t,r){r=Object(a["a"])(r,!1);var u,o,i,s={},f=Object(n["a"])(e),l=Object(n["a"])(t);if(f)for(u in e)e.hasOwnProperty(u)&&(o=e[u],l&&r&&"object"===typeof o&&t.hasOwnProperty(u)?(i=t[u],s[u]="object"===typeof i?c(o,i,r):o):s[u]=o);if(l)for(u in t)t.hasOwnProperty(u)&&!s.hasOwnProperty(u)&&(i=t[u],s[u]=i);return s}t["a"]=c},"2f63":function(e,t,r){"use strict";function a(e){return void 0!==e&&null!==e}t["a"]=a},"45c5":function(e,t,r){"use strict";var a=r("b639");function n(e,t){Object(a["a"])(e,t)}t["a"]=n},"535a":function(e,t,r){"use strict";var a=r("0e25");function n(e,t){return void 0!==e&&null!==e?e:t}n.EMPTY_OBJECT=Object(a["a"])({}),t["a"]=n},"71ce":function(e,t,r){"use strict";function a(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,r="x"===e?t:3&t|8;return r.toString(16)}))}t["a"]=a},7229:function(e,t,r){"use strict";var a,n,c,u=r("2f63"),o=r("d4ed"),i=/((?:.*\/)|^)Cesium\.js$/;function s(e){return"undefined"===typeof document?e:(Object(u["a"])(a)||(a=document.createElement("a")),a.href=e,a.href=a.href,a.href)}function f(){return Object(u["a"])(n)?n:(e="",n=new o["a"]({url:s(e)}),n.appendForwardSlash(),n);var e}function l(e){return s(r("429a").toUrl("../"+e))}function b(e){var t=f().getDerivedResource({url:e});return t.url}function d(e){Object(u["a"])(c)||(c="object"===typeof define&&Object(u["a"])(r("3c35"))&&!r("3c35").toUrlUndefined&&Object(u["a"])(r("429a").toUrl)?l:b);var t=c(e);return t}d._cesiumScriptRegex=i,d._buildModuleUrlFromBaseUrl=b,d._clearBaseResource=function(){n=void 0},d.setBaseUrl=function(e){n=o["a"].DEFAULT.getDerivedResource({url:e})},d.getCesiumBaseUrl=f,t["a"]=d},"7d62":function(e,t,r){"use strict";var a=r("535a");function n(){return!0}function c(e,t){function r(){}for(var c in t=Object(a["a"])(t,"This object was destroyed, i.e., destroy() was called."),e)"function"===typeof e[c]&&(e[c]=r);e.isDestroyed=n}t["a"]=c},"9f1d":function(e,t,r){"use strict";var a=r("2f63"),n=function(){try{return"x"in Object.defineProperty({},"x",{})}catch(e){return!1}}(),c=Object.defineProperties;n&&Object(a["a"])(c)||(c=function(e){return e}),t["a"]=c},a795:function(e,t,r){"use strict";var a=r("2f63");function n(e){var t,r=e.name,n=e.message;t=Object(a["a"])(r)&&Object(a["a"])(n)?r+": "+n:e.toString();var c=e.stack;return Object(a["a"])(c)&&(t+="\n"+c),t}t["a"]=n},b383:function(e,t,r){"use strict";var a=r("b725"),n=r("535a"),c=r("b195");function u(e){return e=Object(n["a"])(e,n["a"].EMPTY_OBJECT),new a["a"]({url:c["a"].fromAssetId(1),requestVertexNormals:Object(n["a"])(e.requestVertexNormals,!1),requestWaterMask:Object(n["a"])(e.requestWaterMask,!1)})}t["a"]=u},dc1c:function(e,t,r){"use strict";var a=r("535a");function n(e,t){if(null===e||"object"!==typeof e)return e;t=Object(a["a"])(t,!1);var r=new e.constructor;for(var c in e)if(e.hasOwnProperty(c)){var u=e[c];t&&(u=n(u,t)),r[c]=u}return r}t["a"]=n},e438:function(e,t,r){"use strict";function a(e,t,r){var a,n,c=0,u=e.length-1;while(c<=u)if(a=~~((c+u)/2),n=r(e[a],t),n<0)c=a+1;else{if(!(n>0))return a;u=a-1}return~(u+1)}t["a"]=a}}]);