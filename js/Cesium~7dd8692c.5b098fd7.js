(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~7dd8692c"],{"691b":function(t,n,e){"use strict";var a=e("670c"),i=e("2f63"),o=e("9f1d"),r=e("7d62"),s=e("c8ed"),u=e("93da"),c=e("1863"),l=e("2f48"),d=e("8909");function p(t,n){var e=t;return Object(i["a"])(n)&&(e+="+"+n),e}function v(t,n){a["a"].clone(t.distance.startPosition,n.distance.startPosition),a["a"].clone(t.distance.endPosition,n.distance.endPosition),a["a"].clone(t.angleAndHeight.startPosition,n.angleAndHeight.startPosition),a["a"].clone(t.angleAndHeight.endPosition,n.angleAndHeight.endPosition)}function h(t,n,e){var o=p(d["a"].PINCH,n),r=t._update,s=t._isDown,u=t._eventStartPosition,c=t._pressTime,h=t._releaseTime;r[o]=!0,s[o]=!1,u[o]=new a["a"];var _=t._movement[o];Object(i["a"])(_)||(_=t._movement[o]={}),_.distance={startPosition:new a["a"],endPosition:new a["a"]},_.angleAndHeight={startPosition:new a["a"],endPosition:new a["a"]},_.prevAngle=0,t._eventHandler.setInputAction((function(n){t._buttonsDown++,s[o]=!0,c[o]=new Date,a["a"].lerp(n.position1,n.position2,.5,u[o])}),l["a"].PINCH_START,n),t._eventHandler.setInputAction((function(){t._buttonsDown=Math.max(t._buttonsDown-1,0),s[o]=!1,h[o]=new Date}),l["a"].PINCH_END,n),t._eventHandler.setInputAction((function(t){if(s[o]){r[o]?(v(t,_),r[o]=!1,_.prevAngle=_.angleAndHeight.startPosition.x):(a["a"].clone(t.distance.endPosition,_.distance.endPosition),a["a"].clone(t.angleAndHeight.endPosition,_.angleAndHeight.endPosition));var n=_.angleAndHeight.endPosition.x,i=_.prevAngle,u=2*Math.PI;while(n>=i+Math.PI)n-=u;while(n<i-Math.PI)n+=u;_.angleAndHeight.endPosition.x=-n*e.clientWidth/12,_.angleAndHeight.startPosition.x=-i*e.clientWidth/12}}),l["a"].PINCH_MOVE,n)}function _(t,n){var e=p(d["a"].WHEEL,n),o=t._update;o[e]=!0;var r=t._movement[e];Object(i["a"])(r)||(r=t._movement[e]={}),r.startPosition=new a["a"],r.endPosition=new a["a"],t._eventHandler.setInputAction((function(t){var n=15*u["a"].toRadians(t);o[e]?(a["a"].clone(a["a"].ZERO,r.startPosition),r.endPosition.x=0,r.endPosition.y=n,o[e]=!1):r.endPosition.y=r.endPosition.y+n}),l["a"].WHEEL,n)}function P(t,n,e){var o=p(e,n),r=t._isDown,s=t._eventStartPosition,u=t._pressTime,c=t._releaseTime;r[o]=!1,s[o]=new a["a"];var v,h,_=t._lastMovement[o];Object(i["a"])(_)||(_=t._lastMovement[o]={startPosition:new a["a"],endPosition:new a["a"],valid:!1}),e===d["a"].LEFT_DRAG?(v=l["a"].LEFT_DOWN,h=l["a"].LEFT_UP):e===d["a"].RIGHT_DRAG?(v=l["a"].RIGHT_DOWN,h=l["a"].RIGHT_UP):e===d["a"].MIDDLE_DRAG&&(v=l["a"].MIDDLE_DOWN,h=l["a"].MIDDLE_UP),t._eventHandler.setInputAction((function(n){t._buttonsDown++,_.valid=!1,r[o]=!0,u[o]=new Date,a["a"].clone(n.position,s[o])}),v,n),t._eventHandler.setInputAction((function(){t._buttonsDown=Math.max(t._buttonsDown-1,0),r[o]=!1,c[o]=new Date}),h,n)}function f(t,n){a["a"].clone(t.startPosition,n.startPosition),a["a"].clone(t.endPosition,n.endPosition)}function g(t,n){var e=t._update,o=t._movement,r=t._lastMovement,s=t._isDown;for(var u in d["a"])if(d["a"].hasOwnProperty(u)){var c=d["a"][u];if(Object(i["a"])(c)){var v=p(c,n);e[v]=!0,Object(i["a"])(t._lastMovement[v])||(t._lastMovement[v]={startPosition:new a["a"],endPosition:new a["a"],valid:!1}),Object(i["a"])(t._movement[v])||(t._movement[v]={startPosition:new a["a"],endPosition:new a["a"]})}}t._eventHandler.setInputAction((function(u){for(var c in d["a"])if(d["a"].hasOwnProperty(c)){var l=d["a"][c];if(Object(i["a"])(l)){var v=p(l,n);s[v]&&(e[v]?(f(o[v],r[v]),r[v].valid=!0,f(u,o[v]),e[v]=!1):a["a"].clone(u.endPosition,o[v].endPosition))}}a["a"].clone(u.endPosition,t._currentMousePosition)}),l["a"].MOUSE_MOVE,n)}function m(t){for(var n in this._eventHandler=new c["a"](t),this._update={},this._movement={},this._lastMovement={},this._isDown={},this._eventStartPosition={},this._pressTime={},this._releaseTime={},this._buttonsDown=0,this._currentMousePosition=new a["a"],_(this,void 0),h(this,void 0,t),P(this,void 0,d["a"].LEFT_DRAG),P(this,void 0,d["a"].RIGHT_DRAG),P(this,void 0,d["a"].MIDDLE_DRAG),g(this,void 0),s["a"])if(s["a"].hasOwnProperty(n)){var e=s["a"][n];Object(i["a"])(e)&&(_(this,e),h(this,e,t),P(this,e,d["a"].LEFT_DRAG),P(this,e,d["a"].RIGHT_DRAG),P(this,e,d["a"].MIDDLE_DRAG),g(this,e))}}Object(o["a"])(m.prototype,{currentMousePosition:{get:function(){return this._currentMousePosition}},anyButtonDown:{get:function(){var t=!this._update[p(d["a"].WHEEL)]||!this._update[p(d["a"].WHEEL,s["a"].SHIFT)]||!this._update[p(d["a"].WHEEL,s["a"].CTRL)]||!this._update[p(d["a"].WHEEL,s["a"].ALT)];return this._buttonsDown>0||t}}}),m.prototype.isMoving=function(t,n){var e=p(t,n);return!this._update[e]},m.prototype.getMovement=function(t,n){var e=p(t,n),a=this._movement[e];return a},m.prototype.getLastMovement=function(t,n){var e=p(t,n),a=this._lastMovement[e];if(a.valid)return a},m.prototype.isButtonDown=function(t,n){var e=p(t,n);return this._isDown[e]},m.prototype.getStartMousePosition=function(t,n){if(t===d["a"].WHEEL)return this._currentMousePosition;var e=p(t,n);return this._eventStartPosition[e]},m.prototype.getButtonPressTime=function(t,n){var e=p(t,n);return this._pressTime[e]},m.prototype.getButtonReleaseTime=function(t,n){var e=p(t,n);return this._releaseTime[e]},m.prototype.reset=function(){for(var t in this._update)this._update.hasOwnProperty(t)&&(this._update[t]=!0)},m.prototype.isDestroyed=function(){return!1},m.prototype.destroy=function(){return this._eventHandler=this._eventHandler&&this._eventHandler.destroy(),Object(r["a"])(this)},n["a"]=m},8909:function(t,n,e){"use strict";var a=e("0e25"),i={LEFT_DRAG:0,RIGHT_DRAG:1,MIDDLE_DRAG:2,WHEEL:3,PINCH:4};n["a"]=Object(a["a"])(i)},b137:function(t,n,e){"use strict";var a=e("670c"),i=e("be18"),o=e("bef8"),r=e("535a"),s=e("2f63"),u=e("55f9"),c=e("93da"),l=e("4e1a"),d=e("4dc8"),p=e("a307"),v={};function h(t,n,e){var a,i,o;if(t instanceof l["a"]){var r=Math.tan(.5*t.fovy);return a=t.near,i=t.near*r,o=t.aspectRatio*i,Math.max(n*a/o,e*a/i)}return t instanceof d["a"]?(a=t.near,i=t.top,o=t.right,Math.max(n*a/o,e*a/i)):Math.max(n,e)}var _=new i["a"],P=new i["a"];function f(t,n,e,a){if(Object(s["a"])(a)&&e(.5)>a){var i=e(0),o=e(1),r=e(.5),u=r-i,l=r-o;return function(a){var r=e(a);if(a<=.5){var s=(r-i)/u;return c["a"].lerp(t,-c["a"].PI_OVER_TWO,s)}var d=(r-o)/l;return c["a"].lerp(-c["a"].PI_OVER_TWO,n,1-d)}}return function(e){return c["a"].lerp(t,n,e)}}function g(t,n,e,a,o){var r=o,u=Math.max(e,a);if(!Object(s["a"])(r)){var l=t.position,d=n,p=t.up,v=t.right,f=t.frustum,g=i["a"].subtract(l,d,_),m=i["a"].magnitude(i["a"].multiplyByScalar(p,i["a"].dot(g,p),P)),O=i["a"].magnitude(i["a"].multiplyByScalar(v,i["a"].dot(g,v),P));r=Math.min(.2*h(f,m,O),1e9)}if(u<r){var w=8,E=1e6,T=-Math.pow((r-e)*E,1/w),I=Math.pow((r-a)*E,1/w);return function(t){var n=t*(I-T)+T;return-Math.pow(n,w)/E+r}}return function(t){return c["a"].lerp(e,a,t)}}function m(t,n){return c["a"].equalsEpsilon(t,c["a"].TWO_PI,c["a"].EPSILON11)&&(t=0),n>t+Math.PI?t+=c["a"].TWO_PI:n<t-Math.PI&&(t-=c["a"].TWO_PI),t}var O=new i["a"];function w(t,n,e,o,r,s,u){var l=t.camera,d=i["a"].clone(l.position,O),p=l.pitch,v=m(l.heading,o),h=m(l.roll,s),_=g(l,e,d.z,e.z,u);function P(t){var i=t.time/n;l.setView({orientation:{heading:c["a"].lerp(v,o,i),pitch:c["a"].lerp(p,r,i),roll:c["a"].lerp(h,s,i)}}),a["a"].lerp(d,e,i,l.position),l.position.z=_(i)}return P}function E(t,n){t.longitude<n.longitude?t.longitude+=c["a"].TWO_PI:n.longitude+=c["a"].TWO_PI}function T(t,n){var e=t.longitude-n.longitude;e<-c["a"].PI?t.longitude+=c["a"].TWO_PI:e>c["a"].PI&&(n.longitude+=c["a"].TWO_PI)}var I=new o["a"],D=new o["a"];function M(t,n,e,a,r,u,l,d,p,v){var h=t.camera,_=t.mapProjection,P=_.ellipsoid,O=o["a"].clone(h.positionCartographic,I),w=h.pitch,M=m(h.heading,a),b=m(h.roll,u),H=P.cartesianToCartographic(e,D);O.longitude=c["a"].zeroToTwoPi(O.longitude),H.longitude=c["a"].zeroToTwoPi(H.longitude);var A=!1;if(Object(s["a"])(d)){var L=c["a"].zeroToTwoPi(d),j=Math.min(O.longitude,H.longitude),y=Math.max(O.longitude,H.longitude),R=L>=j&&L<=y;if(Object(s["a"])(p)){var W=Math.abs(O.longitude-H.longitude),C=c["a"].TWO_PI-W,N=R?W:C,S=R?C:W;N<S*p&&!R&&(A=!0)}else R||(A=!0)}A?E(O,H):T(O,H);var G=g(h,e,O.height,H.height,l),x=f(w,r,G,v);function U(){var t=O.longitude,e=H.longitude,o=O.latitude,r=H.latitude;return function(s){var l=s.time/n,d=i["a"].fromRadians(c["a"].lerp(t,e,l),c["a"].lerp(o,r,l),G(l));h.setView({destination:d,orientation:{heading:c["a"].lerp(M,a,l),pitch:x(l),roll:c["a"].lerp(b,u,l)}})}}return U()}function b(t,n,e,o,r,s,u){var l=t.camera,d=i["a"].clone(l.position,O),p=m(l.heading,o),v=l.frustum.right-l.frustum.left,h=g(l,e,v,e.z,u);function _(t){var i=t.time/n;l.setView({orientation:{heading:c["a"].lerp(p,o,i)}}),a["a"].lerp(d,e,i,l.position);var r=h(i),s=l.frustum,u=s.top/s.right,v=.5*(r-(s.right-s.left));s.right+=v,s.left-=v,s.top=u*s.right,s.bottom=-s.top}return _}var H=new o["a"],A=new i["a"];function L(t,n){return{startObject:{},stopObject:{},duration:0,complete:t,cancel:n}}function j(t,n){function e(){"function"===typeof n&&n(),t.enableInputs=!0}return e}v.createTween=function(t,n){n=Object(r["a"])(n,r["a"].EMPTY_OBJECT);var e=n.destination,o=t.mode;if(o===p["a"].MORPHING)return L();var l=Object(r["a"])(n.convert,!0),d=t.mapProjection,v=d.ellipsoid,h=n.maximumHeight,_=n.flyOverLongitude,P=n.flyOverLongitudeWeight,f=n.pitchAdjustHeight,g=n.easingFunction;l&&o!==p["a"].SCENE3D&&(v.cartesianToCartographic(e,H),e=d.project(H,A));var m=t.camera,O=n.endTransform;Object(s["a"])(O)&&m._setTransform(O);var E=n.duration;Object(s["a"])(E)||(E=Math.ceil(i["a"].distance(m.position,e)/1e6)+2,E=Math.min(E,3));var T=Object(r["a"])(n.heading,0),I=Object(r["a"])(n.pitch,-c["a"].PI_OVER_TWO),D=Object(r["a"])(n.roll,0),y=t.screenSpaceCameraController;y.enableInputs=!1;var R=j(y,n.complete),W=j(y,n.cancel),C=m.frustum,N=t.mode===p["a"].SCENE2D;if(N=N&&a["a"].equalsEpsilon(m.position,e,c["a"].EPSILON6),N=N&&c["a"].equalsEpsilon(Math.max(C.right-C.left,C.top-C.bottom),e.z,c["a"].EPSILON6),N=N||t.mode!==p["a"].SCENE2D&&i["a"].equalsEpsilon(e,m.position,c["a"].EPSILON10),N=N&&c["a"].equalsEpsilon(c["a"].negativePiToPi(T),c["a"].negativePiToPi(m.heading),c["a"].EPSILON10)&&c["a"].equalsEpsilon(c["a"].negativePiToPi(I),c["a"].negativePiToPi(m.pitch),c["a"].EPSILON10)&&c["a"].equalsEpsilon(c["a"].negativePiToPi(D),c["a"].negativePiToPi(m.roll),c["a"].EPSILON10),N)return L(R,W);var S=new Array(4);if(S[p["a"].SCENE2D]=b,S[p["a"].SCENE3D]=M,S[p["a"].COLUMBUS_VIEW]=w,E<=0){var G=function(){var n=S[o](t,1,e,T,I,D,h,_,P,f);n({time:1}),"function"===typeof R&&R()};return L(G,W)}var x=S[o](t,E,e,T,I,D,h,_,P,f);if(!Object(s["a"])(g)){var U=m.positionCartographic.height,z=o===p["a"].SCENE3D?v.cartesianToCartographic(e).height:e.z;g=U>z&&U>11500?u["a"].CUBIC_OUT:u["a"].QUINTIC_IN_OUT}return{duration:E,easingFunction:g,startObject:{time:0},stopObject:{time:E},update:x,complete:R,cancel:W}},n["a"]=v}}]);