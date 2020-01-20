(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~70550b55"],{"0123":function(e,t,a){"use strict";var n=a("2f63"),r=a("0e25"),i=a("93da"),s=a("daa2"),o={UNSIGNED_BYTE:s["a"].UNSIGNED_BYTE,UNSIGNED_SHORT:s["a"].UNSIGNED_SHORT,UNSIGNED_INT:s["a"].UNSIGNED_INT,getSizeInBytes:function(e){switch(e){case o.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case o.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case o.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT}},fromSizeInBytes:function(e){switch(e){case 2:return o.UNSIGNED_SHORT;case 4:return o.UNSIGNED_INT;case 1:return o.UNSIGNED_BYTE}},validate:function(e){return Object(n["a"])(e)&&(e===o.UNSIGNED_BYTE||e===o.UNSIGNED_SHORT||e===o.UNSIGNED_INT)},createTypedArray:function(e,t){return e>=i["a"].SIXTY_FOUR_KILOBYTES?new Uint32Array(t):new Uint16Array(t)},createTypedArrayFromArrayBuffer:function(e,t,a,n){return e>=i["a"].SIXTY_FOUR_KILOBYTES?new Uint32Array(t,a,n):new Uint16Array(t,a,n)}};t["a"]=Object(r["a"])(o)},"017a":function(e,t,a){"use strict";var n=a("535a");function r(e,t){this.start=Object(n["a"])(e,0),this.stop=Object(n["a"])(t,0)}t["a"]=r},"43a7":function(e,t,a){"use strict";function n(e,t,a){this.x=e,this.y=t,this.s=a}t["a"]=n},"452d":function(e,t,a){"use strict";var n=a("0e25"),r=a("5ed2"),i=a("ea72"),s=Object(n["a"])(r["a"].fromIso8601("0000-01-01T00:00:00Z")),o=Object(n["a"])(r["a"].fromIso8601("9999-12-31T24:00:00Z")),c=Object(n["a"])(new i["a"]({start:s,stop:o})),u={MINIMUM_VALUE:s,MAXIMUM_VALUE:o,MAXIMUM_INTERVAL:c};t["a"]=u},"47a6":function(e,t,a){"use strict";var n=a("be18"),r=a("2f63");function i(e,t,a,n){this.rightAscension=e,this.declination=t,this.rotation=a,this.rotationRate=n}var s=i,o=a("5ed2"),c=a("93da"),u=a("dd17"),h={},d=32.184,l=2451545,f=-.0529921,p=-.1059842,m=13.0120009,_=13.3407154,g=.9856003,E=26.4057084,O=13.064993,v=.3287146,T=1.7484877,w=-.1589763,b=.0036096,S=.1643573,y=12.9590088,I=new o["a"];h.ComputeMoon=function(e,t){Object(r["a"])(e)||(e=o["a"].now()),I=o["a"].addSeconds(e,d,I);var a=o["a"].totalDays(I)-l,n=a/u["a"].DAYS_PER_JULIAN_CENTURY,i=(125.045+f*a)*c["a"].RADIANS_PER_DEGREE,h=(250.089+p*a)*c["a"].RADIANS_PER_DEGREE,N=(260.008+m*a)*c["a"].RADIANS_PER_DEGREE,D=(176.625+_*a)*c["a"].RADIANS_PER_DEGREE,R=(357.529+g*a)*c["a"].RADIANS_PER_DEGREE,A=(311.589+E*a)*c["a"].RADIANS_PER_DEGREE,j=(134.963+O*a)*c["a"].RADIANS_PER_DEGREE,M=(276.617+v*a)*c["a"].RADIANS_PER_DEGREE,P=(34.226+T*a)*c["a"].RADIANS_PER_DEGREE,U=(15.134+w*a)*c["a"].RADIANS_PER_DEGREE,C=(119.743+b*a)*c["a"].RADIANS_PER_DEGREE,L=(239.961+S*a)*c["a"].RADIANS_PER_DEGREE,k=(25.053+y*a)*c["a"].RADIANS_PER_DEGREE,x=Math.sin(i),G=Math.sin(h),H=Math.sin(N),B=Math.sin(D),Y=Math.sin(R),F=Math.sin(A),z=Math.sin(j),q=Math.sin(M),W=Math.sin(P),X=Math.sin(U),V=Math.sin(C),J=Math.sin(L),Z=Math.sin(k),$=Math.cos(i),K=Math.cos(h),Q=Math.cos(N),ee=Math.cos(D),te=Math.cos(R),ae=Math.cos(A),ne=Math.cos(j),re=Math.cos(M),ie=Math.cos(P),se=Math.cos(U),oe=Math.cos(C),ce=Math.cos(L),ue=Math.cos(k),he=(269.9949+.0031*n-3.8787*x-.1204*G+.07*H-.0172*B+.0072*F-.0052*X+.0043*Z)*c["a"].RADIANS_PER_DEGREE,de=(66.5392+.013*n+1.5419*$+.0239*K-.0278*Q+.0068*ee-.0029*ae+9e-4*ne+8e-4*se-9e-4*ue)*c["a"].RADIANS_PER_DEGREE,le=(38.3213+13.17635815*a-14e-13*a*a+3.561*x+.1208*G-.0642*H+.0158*B+.0252*Y-.0066*F-.0047*z-.0046*q+.0028*W+.0052*X+.004*V+.0019*J-.0044*Z)*c["a"].RADIANS_PER_DEGREE,fe=(13.17635815-2*a*14e-13+3.561*$*f+.1208*K*p-.0642*Q*m+.0158*ee*_+.0252*te*g-.0066*ae*E-.0047*ne*O-.0046*re*v+.0028*ie*T+.0052*se*w+.004*oe*b+.0019*ce*S-.0044*ue*y)/86400*c["a"].RADIANS_PER_DEGREE;return Object(r["a"])(t)||(t=new s),t.rightAscension=he,t.declination=de,t.rotation=le,t.rotationRate=fe,t};var N=h,D=a("df07"),R=a("0260");function A(e){Object(r["a"])(e)&&"function"===typeof e||(e=N.ComputeMoon),this._computeFunction=e}var j=new n["a"],M=new n["a"],P=new n["a"];function U(e,t,a){var i=j;i.x=Math.cos(e+c["a"].PI_OVER_TWO),i.y=Math.sin(e+c["a"].PI_OVER_TWO),i.z=0;var s=Math.cos(t),o=P;o.x=s*Math.cos(e),o.y=s*Math.sin(e),o.z=Math.sin(t);var u=n["a"].cross(o,i,M);return Object(r["a"])(a)||(a=new D["a"]),a[0]=i.x,a[1]=u.x,a[2]=o.x,a[3]=i.y,a[4]=u.y,a[5]=o.y,a[6]=i.z,a[7]=u.z,a[8]=o.z,a}var C=new D["a"],L=new R["a"];A.prototype.evaluate=function(e,t){Object(r["a"])(e)||(e=o["a"].now());var a=this._computeFunction(e),i=U(a.rightAscension,a.declination,t),s=c["a"].zeroToTwoPi(a.rotation),u=R["a"].fromAxisAngle(n["a"].UNIT_Z,s,L),h=D["a"].fromQuaternion(R["a"].conjugate(u,u),C),d=D["a"].multiply(h,i,i);return d};t["a"]=A},"4be2":function(e,t,a){"use strict";var n=a("a58e"),r=a("7229"),i=a("535a"),s=a("2f63"),o=a("43a7"),c=a("5ed2"),u=a("d4ed"),h=a("2b8c");function d(e){e=Object(i["a"])(e,i["a"].EMPTY_OBJECT),this._xysFileUrlTemplate=u["a"].createIfNeeded(e.xysFileUrlTemplate),this._interpolationOrder=Object(i["a"])(e.interpolationOrder,9),this._sampleZeroJulianEphemerisDate=Object(i["a"])(e.sampleZeroJulianEphemerisDate,2442396.5),this._sampleZeroDateTT=new c["a"](this._sampleZeroJulianEphemerisDate,0,h["a"].TAI),this._stepSizeDays=Object(i["a"])(e.stepSizeDays,1),this._samplesPerXysFile=Object(i["a"])(e.samplesPerXysFile,1e3),this._totalSamples=Object(i["a"])(e.totalSamples,27426),this._samples=new Array(3*this._totalSamples),this._chunkDownloadsInProgress=[];for(var t=this._interpolationOrder,a=this._denominators=new Array(t+1),n=this._xTable=new Array(t+1),r=Math.pow(this._stepSizeDays,t),s=0;s<=t;++s){a[s]=r,n[s]=s*this._stepSizeDays;for(var o=0;o<=t;++o)o!==s&&(a[s]*=s-o);a[s]=1/a[s]}this._work=new Array(t+1),this._coef=new Array(t+1)}var l=new c["a"](0,0,h["a"].TAI);function f(e,t,a){var n=l;return n.dayNumber=t,n.secondsOfDay=a,c["a"].daysDifference(n,e._sampleZeroDateTT)}function p(e,t){if(e._chunkDownloadsInProgress[t])return e._chunkDownloadsInProgress[t];var a,i=n["a"].defer();e._chunkDownloadsInProgress[t]=i;var o=e._xysFileUrlTemplate;return a=Object(s["a"])(o)?o.getDerivedResource({templateValues:{0:t}}):new u["a"]({url:Object(r["a"])("Assets/IAU2006_XYS/IAU2006_XYS_"+t+".json")}),Object(n["a"])(a.fetchJson(),(function(a){e._chunkDownloadsInProgress[t]=!1;for(var n=e._samples,r=a.samples,s=t*e._samplesPerXysFile*3,o=0,c=r.length;o<c;++o)n[s+o]=r[o];i.resolve()})),i.promise}d.prototype.preload=function(e,t,a,r){var i=f(this,e,t),s=f(this,a,r),o=i/this._stepSizeDays-this._interpolationOrder/2|0;o<0&&(o=0);var c=s/this._stepSizeDays-this._interpolationOrder/2|0+this._interpolationOrder;c>=this._totalSamples&&(c=this._totalSamples-1);for(var u=o/this._samplesPerXysFile|0,h=c/this._samplesPerXysFile|0,d=[],l=u;l<=h;++l)d.push(p(this,l));return n["a"].all(d)},d.prototype.computeXysRadians=function(e,t,a){var n=f(this,e,t);if(!(n<0)){var r=n/this._stepSizeDays|0;if(!(r>=this._totalSamples)){var i=this._interpolationOrder,c=r-(i/2|0);c<0&&(c=0);var u=c+i;u>=this._totalSamples&&(u=this._totalSamples-1,c=u-i,c<0&&(c=0));var h=!1,d=this._samples;if(Object(s["a"])(d[3*c])||(p(this,c/this._samplesPerXysFile|0),h=!0),Object(s["a"])(d[3*u])||(p(this,u/this._samplesPerXysFile|0),h=!0),!h){Object(s["a"])(a)?(a.x=0,a.y=0,a.s=0):a=new o["a"](0,0,0);var l,m,_=n-c*this._stepSizeDays,g=this._work,E=this._denominators,O=this._coef,v=this._xTable;for(l=0;l<=i;++l)g[l]=_-v[l];for(l=0;l<=i;++l){for(O[l]=1,m=0;m<=i;++m)m!==l&&(O[l]*=g[m]);O[l]*=E[l];var T=3*(c+l);a.x+=O[l]*d[T++],a.y+=O[l]*d[T++],a.s+=O[l]*d[T]}return a}}}},t["a"]=d},5410:function(e,t,a){"use strict";var n=a("be18"),r=a("bef8"),i=a("535a"),s=a("2f63"),o=a("017a"),c=a("93da"),u=a("df07"),h=a("b071"),d=a("0646"),l=a("2ac3"),f={rayPlane:function(e,t,a){Object(s["a"])(a)||(a=new n["a"]);var r=e.origin,i=e.direction,o=t.normal,u=n["a"].dot(o,i);if(!(Math.abs(u)<c["a"].EPSILON15)){var h=(-t.distance-n["a"].dot(o,r))/u;if(!(h<0))return a=n["a"].multiplyByScalar(i,h,a),n["a"].add(r,a,a)}}},p=new n["a"],m=new n["a"],_=new n["a"],g=new n["a"],E=new n["a"];f.rayTriangleParametric=function(e,t,a,r,s){s=Object(i["a"])(s,!1);var o,u,h,d,l,f=e.origin,O=e.direction,v=n["a"].subtract(a,t,p),T=n["a"].subtract(r,t,m),w=n["a"].cross(O,T,_),b=n["a"].dot(v,w);if(s){if(b<c["a"].EPSILON6)return;if(o=n["a"].subtract(f,t,g),h=n["a"].dot(o,w),h<0||h>b)return;if(u=n["a"].cross(o,v,E),d=n["a"].dot(O,u),d<0||h+d>b)return;l=n["a"].dot(T,u)/b}else{if(Math.abs(b)<c["a"].EPSILON6)return;var S=1/b;if(o=n["a"].subtract(f,t,g),h=n["a"].dot(o,w)*S,h<0||h>1)return;if(u=n["a"].cross(o,v,E),d=n["a"].dot(O,u)*S,d<0||h+d>1)return;l=n["a"].dot(T,u)*S}return l},f.rayTriangle=function(e,t,a,r,i,o){var c=f.rayTriangleParametric(e,t,a,r,i);if(Object(s["a"])(c)&&!(c<0))return Object(s["a"])(o)||(o=new n["a"]),n["a"].multiplyByScalar(e.direction,c,o),n["a"].add(e.origin,o,o)};var O=new l["a"];function v(e,t,a,n){var r=t*t-4*e*a;if(!(r<0)){if(r>0){var i=1/(2*e),s=Math.sqrt(r),o=(-t+s)*i,c=(-t-s)*i;return o<c?(n.root0=o,n.root1=c):(n.root0=c,n.root1=o),n}var u=-t/(2*e);if(0!==u)return n.root0=n.root1=u,n}}f.lineSegmentTriangle=function(e,t,a,r,i,o,c){var u=O;n["a"].clone(e,u.origin),n["a"].subtract(t,e,u.direction),n["a"].normalize(u.direction,u.direction);var h=f.rayTriangleParametric(u,a,r,i,o);if(!(!Object(s["a"])(h)||h<0||h>n["a"].distance(e,t)))return Object(s["a"])(c)||(c=new n["a"]),n["a"].multiplyByScalar(u.direction,h,c),n["a"].add(u.origin,c,c)};var T={root0:0,root1:0};function w(e,t,a){Object(s["a"])(a)||(a=new o["a"]);var r=e.origin,i=e.direction,c=t.center,u=t.radius*t.radius,h=n["a"].subtract(r,c,_),d=n["a"].dot(i,i),l=2*n["a"].dot(i,h),f=n["a"].magnitudeSquared(h)-u,p=v(d,l,f,T);if(Object(s["a"])(p))return a.start=p.root0,a.stop=p.root1,a}f.raySphere=function(e,t,a){if(a=w(e,t,a),Object(s["a"])(a)&&!(a.stop<0))return a.start=Math.max(a.start,0),a};var b=new l["a"];f.lineSegmentSphere=function(e,t,a,r){var i=b;n["a"].clone(e,i.origin);var o=n["a"].subtract(t,e,i.direction),c=n["a"].magnitude(o);if(n["a"].normalize(o,o),r=w(i,a,r),!(!Object(s["a"])(r)||r.stop<0||r.start>c))return r.start=Math.max(r.start,0),r.stop=Math.min(r.stop,c),r};var S=new n["a"],y=new n["a"];function I(e,t,a){var n=e+t;return c["a"].sign(e)!==c["a"].sign(t)&&Math.abs(n/Math.max(Math.abs(e),Math.abs(t)))<a?0:n}function N(e,t,a,r,i){var s,o=r*r,l=i*i,f=(e[u["a"].COLUMN1ROW1]-e[u["a"].COLUMN2ROW2])*l,p=i*(r*I(e[u["a"].COLUMN1ROW0],e[u["a"].COLUMN0ROW1],c["a"].EPSILON15)+t.y),m=e[u["a"].COLUMN0ROW0]*o+e[u["a"].COLUMN2ROW2]*l+r*t.x+a,_=l*I(e[u["a"].COLUMN2ROW1],e[u["a"].COLUMN1ROW2],c["a"].EPSILON15),g=i*(r*I(e[u["a"].COLUMN2ROW0],e[u["a"].COLUMN0ROW2])+t.z),E=[];if(0===g&&0===_){if(s=h["a"].computeRealRoots(f,p,m),0===s.length)return E;var O=s[0],v=Math.sqrt(Math.max(1-O*O,0));if(E.push(new n["a"](r,i*O,i*-v)),E.push(new n["a"](r,i*O,i*v)),2===s.length){var T=s[1],w=Math.sqrt(Math.max(1-T*T,0));E.push(new n["a"](r,i*T,i*-w)),E.push(new n["a"](r,i*T,i*w))}return E}var b=g*g,S=_*_,y=f*f,N=g*_,D=y+S,R=2*(p*f+N),A=2*m*f+p*p-S+b,j=2*(m*p-N),M=m*m-b;if(0===D&&0===R&&0===A&&0===j)return E;s=d["a"].computeRealRoots(D,R,A,j,M);var P=s.length;if(0===P)return E;for(var U=0;U<P;++U){var C,L=s[U],k=L*L,x=Math.max(1-k,0),G=Math.sqrt(x);C=c["a"].sign(f)===c["a"].sign(m)?I(f*k+m,p*L,c["a"].EPSILON12):c["a"].sign(m)===c["a"].sign(p*L)?I(f*k,p*L+m,c["a"].EPSILON12):I(f*k+p*L,m,c["a"].EPSILON12);var H=I(_*L,g,c["a"].EPSILON15),B=C*H;B<0?E.push(new n["a"](r,i*L,i*G)):B>0?E.push(new n["a"](r,i*L,i*-G)):0!==G?(E.push(new n["a"](r,i*L,i*-G)),E.push(new n["a"](r,i*L,i*G)),++U):E.push(new n["a"](r,i*L,i*G))}return E}f.rayEllipsoid=function(e,t){var a,r,i,s,c,u=t.oneOverRadii,h=n["a"].multiplyComponents(u,e.origin,S),d=n["a"].multiplyComponents(u,e.direction,y),l=n["a"].magnitudeSquared(h),f=n["a"].dot(h,d);if(l>1){if(f>=0)return;var p=f*f;if(a=l-1,r=n["a"].magnitudeSquared(d),i=r*a,p<i)return;if(p>i){s=f*f-i,c=-f+Math.sqrt(s);var m=c/r,_=a/c;return m<_?new o["a"](m,_):{start:_,stop:m}}var g=Math.sqrt(a/r);return new o["a"](g,g)}return l<1?(a=l-1,r=n["a"].magnitudeSquared(d),i=r*a,s=f*f-i,c=-f+Math.sqrt(s),new o["a"](0,c/r)):f<0?(r=n["a"].magnitudeSquared(d),new o["a"](0,-f/r)):void 0};var D=new n["a"],R=new n["a"],A=new n["a"],j=new n["a"],M=new n["a"],P=new u["a"],U=new u["a"],C=new u["a"],L=new u["a"],k=new u["a"],x=new u["a"],G=new u["a"],H=new n["a"],B=new n["a"],Y=new r["a"];f.grazingAltitudeLocation=function(e,t){var a=e.origin,r=e.direction;if(!n["a"].equals(a,n["a"].ZERO)){var i=t.geodeticSurfaceNormal(a,D);if(n["a"].dot(r,i)>=0)return a}var o=Object(s["a"])(this.rayEllipsoid(e,t)),h=t.transformPositionToScaledSpace(r,D),d=n["a"].normalize(h,h),l=n["a"].mostOrthogonalAxis(h,j),f=n["a"].normalize(n["a"].cross(l,d,R),R),p=n["a"].normalize(n["a"].cross(d,f,A),A),m=P;m[0]=d.x,m[1]=d.y,m[2]=d.z,m[3]=f.x,m[4]=f.y,m[5]=f.z,m[6]=p.x,m[7]=p.y,m[8]=p.z;var _=u["a"].transpose(m,U),g=u["a"].fromScale(t.radii,C),E=u["a"].fromScale(t.oneOverRadii,L),O=k;O[0]=0,O[1]=-r.z,O[2]=r.y,O[3]=r.z,O[4]=0,O[5]=-r.x,O[6]=-r.y,O[7]=r.x,O[8]=0;var v,T,w=u["a"].multiply(u["a"].multiply(_,E,x),O,x),b=u["a"].multiply(u["a"].multiply(w,g,G),m,G),S=u["a"].multiplyByVector(w,a,M),y=N(b,n["a"].negate(S,D),0,0,1),I=y.length;if(I>0){for(var F=n["a"].clone(n["a"].ZERO,B),z=Number.NEGATIVE_INFINITY,q=0;q<I;++q){v=u["a"].multiplyByVector(g,u["a"].multiplyByVector(m,y[q],H),H);var W=n["a"].normalize(n["a"].subtract(v,a,j),j),X=n["a"].dot(W,r);X>z&&(z=X,F=n["a"].clone(v,F))}var V=t.cartesianToCartographic(F,Y);return z=c["a"].clamp(z,0,1),T=n["a"].magnitude(n["a"].subtract(F,a,j))*Math.sqrt(1-z*z),T=o?-T:T,V.height=T,t.cartographicToCartesian(V,new n["a"])}};var F=new n["a"];f.lineSegmentPlane=function(e,t,a,r){Object(s["a"])(r)||(r=new n["a"]);var i=n["a"].subtract(t,e,F),o=a.normal,u=n["a"].dot(o,i);if(!(Math.abs(u)<c["a"].EPSILON6)){var h=n["a"].dot(o,e),d=-(a.distance+h)/u;if(!(d<0||d>1))return n["a"].multiplyByScalar(i,d,r),n["a"].add(e,r,r),r}},f.trianglePlaneIntersection=function(e,t,a,r){var i,s,o=r.normal,c=r.distance,u=n["a"].dot(o,e)+c<0,h=n["a"].dot(o,t)+c<0,d=n["a"].dot(o,a)+c<0,l=0;if(l+=u?1:0,l+=h?1:0,l+=d?1:0,1!==l&&2!==l||(i=new n["a"],s=new n["a"]),1===l){if(u)return f.lineSegmentPlane(e,t,r,i),f.lineSegmentPlane(e,a,r,s),{positions:[e,t,a,i,s],indices:[0,3,4,1,2,4,1,4,3]};if(h)return f.lineSegmentPlane(t,a,r,i),f.lineSegmentPlane(t,e,r,s),{positions:[e,t,a,i,s],indices:[1,3,4,2,0,4,2,4,3]};if(d)return f.lineSegmentPlane(a,e,r,i),f.lineSegmentPlane(a,t,r,s),{positions:[e,t,a,i,s],indices:[2,3,4,0,1,4,0,4,3]}}else if(2===l){if(!u)return f.lineSegmentPlane(t,e,r,i),f.lineSegmentPlane(a,e,r,s),{positions:[e,t,a,i,s],indices:[1,2,4,1,4,3,0,3,4]};if(!h)return f.lineSegmentPlane(a,t,r,i),f.lineSegmentPlane(e,t,r,s),{positions:[e,t,a,i,s],indices:[2,0,4,2,4,3,1,3,4]};if(!d)return f.lineSegmentPlane(e,a,r,i),f.lineSegmentPlane(t,a,r,s),{positions:[e,t,a,i,s],indices:[0,1,4,0,4,3,2,3,4]}}},t["a"]=f},"5ed2":function(e,t,a){"use strict";var n=a("ab99"),r=a("e438"),i=a("535a"),s=a("2f63"),o=a("6ce2"),c=a("7601"),u=a("a4d9"),h=a("dd17"),d=a("2b8c"),l=new o["a"],f=[31,28,31,30,31,30,31,31,30,31,30,31],p=29;function m(e,t){return A.compare(e.julianDate,t.julianDate)}var _=new u["a"];function g(e){_.julianDate=e;var t=A.leapSeconds,a=Object(r["a"])(t,_,m);a<0&&(a=~a),a>=t.length&&(a=t.length-1);var n=t[a].offset;if(a>0){var i=A.secondsDifference(t[a].julianDate,e);i>n&&(a--,n=t[a].offset)}A.addSeconds(e,n,e)}function E(e,t){_.julianDate=e;var a=A.leapSeconds,n=Object(r["a"])(a,_,m);if(n<0&&(n=~n),0===n)return A.addSeconds(e,-a[0].offset,t);if(n>=a.length)return A.addSeconds(e,-a[n-1].offset,t);var i=A.secondsDifference(a[n].julianDate,e);return 0===i?A.addSeconds(e,-a[n].offset,t):i<=1?void 0:A.addSeconds(e,-a[--n].offset,t)}function O(e,t,a){var n=t/h["a"].SECONDS_PER_DAY|0;return e+=n,t-=h["a"].SECONDS_PER_DAY*n,t<0&&(e--,t+=h["a"].SECONDS_PER_DAY),a.dayNumber=e,a.secondsOfDay=t,a}function v(e,t,a,n,r,i,s){var o=(t-14)/12|0,c=e+4800+o,u=(1461*c/4|0)+(367*(t-2-12*o)/12|0)-(3*((c+100)/100|0)/4|0)+a-32075;n-=12,n<0&&(n+=24);var d=i+(n*h["a"].SECONDS_PER_HOUR+r*h["a"].SECONDS_PER_MINUTE+s*h["a"].SECONDS_PER_MILLISECOND);return d>=43200&&(u-=1),[u,d]}var T=/^(\d{4})$/,w=/^(\d{4})-(\d{2})$/,b=/^(\d{4})-?(\d{3})$/,S=/^(\d{4})-?W(\d{2})-?(\d{1})?$/,y=/^(\d{4})-?(\d{2})-?(\d{2})$/,I=/([Z+\-])?(\d{2})?:?(\d{2})?$/,N=/^(\d{2})(\.\d+)?/.source+I.source,D=/^(\d{2}):?(\d{2})(\.\d+)?/.source+I.source,R=/^(\d{2}):?(\d{2}):?(\d{2})(\.\d+)?/.source+I.source;function A(e,t,a){this.dayNumber=void 0,this.secondsOfDay=void 0,e=Object(i["a"])(e,0),t=Object(i["a"])(t,0),a=Object(i["a"])(a,d["a"].UTC);var n=0|e;t+=(e-n)*h["a"].SECONDS_PER_DAY,O(n,t,this),a===d["a"].UTC&&g(this)}A.fromGregorianDate=function(e,t){var a=v(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond);return Object(s["a"])(t)?(O(a[0],a[1],t),g(t),t):new A(a[0],a[1],d["a"].UTC)},A.fromDate=function(e,t){var a=v(e.getUTCFullYear(),e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds());return Object(s["a"])(t)?(O(a[0],a[1],t),g(t),t):new A(a[0],a[1],d["a"].UTC)},A.fromIso8601=function(e,t){e=e.replace(",",".");var a,n,r,i,o=e.split("T"),u=1,h=1,l=0,m=0,_=0,E=0,I=o[0],j=o[1];if(o=I.match(y),null!==o)a=+o[1],u=+o[2],h=+o[3];else if(o=I.match(w),null!==o)a=+o[1],u=+o[2];else if(o=I.match(T),null!==o)a=+o[1];else{var M;if(o=I.match(b),null!==o)a=+o[1],M=+o[2],r=Object(c["a"])(a);else if(o=I.match(S),null!==o){a=+o[1];var P=+o[2],U=+o[3]||0,C=new Date(Date.UTC(a,0,4));M=7*P+U-C.getUTCDay()-3}n=new Date(Date.UTC(a,0,1)),n.setUTCDate(M),u=n.getUTCMonth()+1,h=n.getUTCDate()}if(r=Object(c["a"])(a),Object(s["a"])(j)){o=j.match(R),null!==o?(l=+o[1],m=+o[2],_=+o[3],E=1e3*+(o[4]||0),i=5):(o=j.match(D),null!==o?(l=+o[1],m=+o[2],_=60*+(o[3]||0),i=4):(o=j.match(N),null!==o&&(l=+o[1],m=60*+(o[2]||0),i=3)));var L=o[i],k=+o[i+1],x=+(o[i+2]||0);switch(L){case"+":l-=k,m-=x;break;case"-":l+=k,m+=x;break;case"Z":break;default:m+=new Date(Date.UTC(a,u-1,h,l,m)).getTimezoneOffset();break}}var G=60===_;G&&_--;while(m>=60)m-=60,l++;while(l>=24)l-=24,h++;n=r&&2===u?p:f[u-1];while(h>n)h-=n,u++,u>12&&(u-=12,a++),n=r&&2===u?p:f[u-1];while(m<0)m+=60,l--;while(l<0)l+=24,h--;while(h<1)u--,u<1&&(u+=12,a--),n=r&&2===u?p:f[u-1],h+=n;var H=v(a,u,h,l,m,_,E);return Object(s["a"])(t)?(O(H[0],H[1],t),g(t)):t=new A(H[0],H[1],d["a"].UTC),G&&A.addSeconds(t,1,t),t},A.now=function(e){return A.fromDate(new Date,e)};var j=new A(0,0,d["a"].TAI);A.toGregorianDate=function(e,t){var a=!1,n=E(e,j);Object(s["a"])(n)||(A.addSeconds(e,-1,j),n=E(j,j),a=!0);var r=n.dayNumber,i=n.secondsOfDay;i>=43200&&(r+=1);var c=r+68569|0,u=4*c/146097|0;c=c-((146097*u+3)/4|0)|0;var d=4e3*(c+1)/1461001|0;c=c-(1461*d/4|0)+31|0;var l=80*c/2447|0,f=c-(2447*l/80|0)|0;c=l/11|0;var p=l+2-12*c|0,m=100*(u-49)+d+c|0,_=i/h["a"].SECONDS_PER_HOUR|0,g=i-_*h["a"].SECONDS_PER_HOUR,O=g/h["a"].SECONDS_PER_MINUTE|0;g-=O*h["a"].SECONDS_PER_MINUTE;var v=0|g,T=(g-v)/h["a"].SECONDS_PER_MILLISECOND;return _+=12,_>23&&(_-=24),a&&(v+=1),Object(s["a"])(t)?(t.year=m,t.month=p,t.day=f,t.hour=_,t.minute=O,t.second=v,t.millisecond=T,t.isLeapSecond=a,t):new o["a"](m,p,f,_,O,v,T,a)},A.toDate=function(e){var t=A.toGregorianDate(e,l),a=t.second;return t.isLeapSecond&&(a-=1),new Date(Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,a,t.millisecond))},A.toIso8601=function(e,t){var a,r=A.toGregorianDate(e,l),i=r.year,o=r.month,c=r.day,u=r.hour,h=r.minute,d=r.second,f=r.millisecond;return 1e4===i&&1===o&&1===c&&0===u&&0===h&&0===d&&0===f&&(i=9999,o=12,c=31,u=24),Object(s["a"])(t)||0===f?Object(s["a"])(t)&&0!==t?(a=(.01*f).toFixed(t).replace(".","").slice(0,t),Object(n["a"])("%04d-%02d-%02dT%02d:%02d:%02d.%sZ",i,o,c,u,h,d,a)):Object(n["a"])("%04d-%02d-%02dT%02d:%02d:%02dZ",i,o,c,u,h,d):(a=(.01*f).toString().replace(".",""),Object(n["a"])("%04d-%02d-%02dT%02d:%02d:%02d.%sZ",i,o,c,u,h,d,a))},A.clone=function(e,t){if(Object(s["a"])(e))return Object(s["a"])(t)?(t.dayNumber=e.dayNumber,t.secondsOfDay=e.secondsOfDay,t):new A(e.dayNumber,e.secondsOfDay,d["a"].TAI)},A.compare=function(e,t){var a=e.dayNumber-t.dayNumber;return 0!==a?a:e.secondsOfDay-t.secondsOfDay},A.equals=function(e,t){return e===t||Object(s["a"])(e)&&Object(s["a"])(t)&&e.dayNumber===t.dayNumber&&e.secondsOfDay===t.secondsOfDay},A.equalsEpsilon=function(e,t,a){return e===t||Object(s["a"])(e)&&Object(s["a"])(t)&&Math.abs(A.secondsDifference(e,t))<=a},A.totalDays=function(e){return e.dayNumber+e.secondsOfDay/h["a"].SECONDS_PER_DAY},A.secondsDifference=function(e,t){var a=(e.dayNumber-t.dayNumber)*h["a"].SECONDS_PER_DAY;return a+(e.secondsOfDay-t.secondsOfDay)},A.daysDifference=function(e,t){var a=e.dayNumber-t.dayNumber,n=(e.secondsOfDay-t.secondsOfDay)/h["a"].SECONDS_PER_DAY;return a+n},A.computeTaiMinusUtc=function(e){_.julianDate=e;var t=A.leapSeconds,a=Object(r["a"])(t,_,m);return a<0&&(a=~a,--a,a<0&&(a=0)),t[a].offset},A.addSeconds=function(e,t,a){return O(e.dayNumber,e.secondsOfDay+t,a)},A.addMinutes=function(e,t,a){var n=e.secondsOfDay+t*h["a"].SECONDS_PER_MINUTE;return O(e.dayNumber,n,a)},A.addHours=function(e,t,a){var n=e.secondsOfDay+t*h["a"].SECONDS_PER_HOUR;return O(e.dayNumber,n,a)},A.addDays=function(e,t,a){var n=e.dayNumber+t;return O(n,e.secondsOfDay,a)},A.lessThan=function(e,t){return A.compare(e,t)<0},A.lessThanOrEquals=function(e,t){return A.compare(e,t)<=0},A.greaterThan=function(e,t){return A.compare(e,t)>0},A.greaterThanOrEquals=function(e,t){return A.compare(e,t)>=0},A.prototype.clone=function(e){return A.clone(this,e)},A.prototype.equals=function(e){return A.equals(this,e)},A.prototype.equalsEpsilon=function(e,t){return A.equalsEpsilon(this,e,t)},A.prototype.toString=function(){return A.toIso8601(this)},A.leapSeconds=[new u["a"](new A(2441317,43210,d["a"].TAI),10),new u["a"](new A(2441499,43211,d["a"].TAI),11),new u["a"](new A(2441683,43212,d["a"].TAI),12),new u["a"](new A(2442048,43213,d["a"].TAI),13),new u["a"](new A(2442413,43214,d["a"].TAI),14),new u["a"](new A(2442778,43215,d["a"].TAI),15),new u["a"](new A(2443144,43216,d["a"].TAI),16),new u["a"](new A(2443509,43217,d["a"].TAI),17),new u["a"](new A(2443874,43218,d["a"].TAI),18),new u["a"](new A(2444239,43219,d["a"].TAI),19),new u["a"](new A(2444786,43220,d["a"].TAI),20),new u["a"](new A(2445151,43221,d["a"].TAI),21),new u["a"](new A(2445516,43222,d["a"].TAI),22),new u["a"](new A(2446247,43223,d["a"].TAI),23),new u["a"](new A(2447161,43224,d["a"].TAI),24),new u["a"](new A(2447892,43225,d["a"].TAI),25),new u["a"](new A(2448257,43226,d["a"].TAI),26),new u["a"](new A(2448804,43227,d["a"].TAI),27),new u["a"](new A(2449169,43228,d["a"].TAI),28),new u["a"](new A(2449534,43229,d["a"].TAI),29),new u["a"](new A(2450083,43230,d["a"].TAI),30),new u["a"](new A(2450630,43231,d["a"].TAI),31),new u["a"](new A(2451179,43232,d["a"].TAI),32),new u["a"](new A(2453736,43233,d["a"].TAI),33),new u["a"](new A(2454832,43234,d["a"].TAI),34),new u["a"](new A(2456109,43235,d["a"].TAI),35),new u["a"](new A(2457204,43236,d["a"].TAI),36),new u["a"](new A(2457754,43237,d["a"].TAI),37)],t["a"]=A},"66bf":function(e,t,a){"use strict";var n=a("0e25"),r={OUTSIDE:-1,INTERSECTING:0,INSIDE:1};t["a"]=Object(n["a"])(r)},9421:function(e,t,a){"use strict";var n=a("8dfe"),r=a("535a"),i=a("2f63"),s=a("a9a8"),o=a("c630"),c=a("d4ed");function u(e){e=Object(r["a"])(e,r["a"].EMPTY_OBJECT);var t=Object(r["a"])(e.accessToken,s["a"].defaultAccessToken),a=c["a"].createIfNeeded(Object(r["a"])(e.server,s["a"].defaultServer));a.appendForwardSlash();var u=s["a"].getDefaultTokenCredit(t);Object(i["a"])(u)&&e.scene.frameState.creditDisplay.addDefaultCredit(n["a"].clone(u));var h=a.getDerivedResource({url:"v1/geocode"});Object(i["a"])(t)&&h.appendQueryParameters({access_token:t}),this._accessToken=t,this._server=a,this._pelias=new o["a"](h)}u.prototype.geocode=function(e,t){return this._pelias.geocode(e,t)},t["a"]=u},a4d9:function(e,t,a){"use strict";function n(e,t){this.julianDate=e,this.offset=t}t["a"]=n},a9a8:function(e,t,a){"use strict";var n,r=a("8dfe"),i=a("2f63"),s=a("d4ed"),o="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMThlZGJlYi04OGJjLTRhZjMtYWU5Yy0zNTE3N2E2MzFiOTgiLCJpZCI6MjU5LCJzY29wZXMiOlsiYXNyIiwiZ2MiXSwiaWF0IjoxNTc1MjkzODg2fQ.9pV-L1TWD9wv-6XKiVXCR1LIGb-RSD-Ezs7JJkL_Lj0",c={};c.defaultAccessToken=o,c.defaultServer=new s["a"]({url:"https://api.cesium.com/"}),c.getDefaultTokenCredit=function(e){if(e===o){if(!Object(i["a"])(n)){var t='<b>             This application is using Cesium\'s default ion access token. Please assign <i>Cesium.Ion.defaultAccessToken</i>             with an access token from your ion account before making any Cesium API calls.             You can sign up for a free ion account at <a href="https://cesium.com">https://cesium.com</a>.</b>';n=new r["a"](t,!0)}return n}},t["a"]=c},af23:function(e,t,a){"use strict";var n=a("a58e"),r=a("cef5"),i=a("be18"),s=a("535a"),o=a("2f63"),c=a("9f1d"),u=a("3d7f"),h=a("0e25"),d={NONE:0,LERC:1},l=Object(h["a"])(d),f=a("7f9b"),p=a("670c"),m=a("c52f"),_=a("82d9"),g=a("93da"),E=a("52f0"),O=a("78e5"),v=a("eace"),T=a("0769"),w=a("f806"),b=a("1184"),S={};S.DEFAULT_STRUCTURE=Object(h["a"])({heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1});var y=new i["a"],I=new E["a"],N=new i["a"],D=new i["a"];S.computeVertices=function(e){var t,a,n,c,u=Math.cos,h=Math.sin,d=Math.sqrt,l=Math.atan,R=Math.exp,A=g["a"].PI_OVER_TWO,j=g["a"].toRadians,M=e.heightmap,P=e.width,U=e.height,C=e.skirtHeight,L=Object(s["a"])(e.isGeographic,!0),k=Object(s["a"])(e.ellipsoid,m["a"].WGS84),x=1/k.maximumRadius,G=e.nativeRectangle,H=e.rectangle;Object(o["a"])(H)?(t=H.west,a=H.south,n=H.east,c=H.north):L?(t=j(G.west),a=j(G.south),n=j(G.east),c=j(G.north)):(t=G.west*x,a=A-2*l(R(-G.south*x)),n=G.east*x,c=A-2*l(R(-G.north*x)));var B=e.relativeToCenter,Y=Object(o["a"])(B);B=Y?B:i["a"].ZERO;var F=Object(s["a"])(e.exaggeration,1),z=Object(s["a"])(e.includeWebMercatorT,!1),q=Object(s["a"])(e.structure,S.DEFAULT_STRUCTURE),W=Object(s["a"])(q.heightScale,S.DEFAULT_STRUCTURE.heightScale),X=Object(s["a"])(q.heightOffset,S.DEFAULT_STRUCTURE.heightOffset),V=Object(s["a"])(q.elementsPerHeight,S.DEFAULT_STRUCTURE.elementsPerHeight),J=Object(s["a"])(q.stride,S.DEFAULT_STRUCTURE.stride),Z=Object(s["a"])(q.elementMultiplier,S.DEFAULT_STRUCTURE.elementMultiplier),$=Object(s["a"])(q.isBigEndian,S.DEFAULT_STRUCTURE.isBigEndian),K=v["a"].computeWidth(G),Q=v["a"].computeHeight(G),ee=K/(P-1),te=Q/(U-1);L||(K*=x,Q*=x);var ae,ne,re=k.radiiSquared,ie=re.x,se=re.y,oe=re.z,ce=65536,ue=-65536,he=w["a"].eastNorthUpToFixedFrame(B,k),de=E["a"].inverseTransformation(he,I);z&&(ae=b["a"].geodeticLatitudeToMercatorAngle(a),ne=1/(b["a"].geodeticLatitudeToMercatorAngle(c)-ae));var le=N;le.x=Number.POSITIVE_INFINITY,le.y=Number.POSITIVE_INFINITY,le.z=Number.POSITIVE_INFINITY;var fe=D;fe.x=Number.NEGATIVE_INFINITY,fe.y=Number.NEGATIVE_INFINITY,fe.z=Number.NEGATIVE_INFINITY;var pe=Number.POSITIVE_INFINITY,me=P+(C>0?2:0),_e=U+(C>0?2:0),ge=me*_e,Ee=new Array(ge),Oe=new Array(ge),ve=new Array(ge),Te=z?new Array(ge):[],we=0,be=U,Se=0,ye=P;C>0&&(--we,++be,--Se,++ye);for(var Ie=0,Ne=we;Ne<be;++Ne){var De=Ne;De<0&&(De=0),De>=U&&(De=U-1);var Re=G.north-te*De;Re=L?j(Re):A-2*l(R(-Re*x));var Ae,je=u(Re),Me=h(Re),Pe=oe*Me,Ue=(Re-a)/(c-a);Ue=g["a"].clamp(Ue,0,1),z&&(Ae=(b["a"].geodeticLatitudeToMercatorAngle(Re)-ae)*ne);for(var Ce=Se;Ce<ye;++Ce){var Le=Ce;Le<0&&(Le=0),Le>=P&&(Le=P-1);var ke=G.west+ee*Le;L?ke=j(ke):ke*=x;var xe,Ge,He=De*(P*J)+Le*J;if(1===V)xe=M[He];else if(xe=0,$)for(Ge=0;Ge<V;++Ge)xe=xe*Z+M[He+Ge];else for(Ge=V-1;Ge>=0;--Ge)xe=xe*Z+M[He+Ge];xe=(xe*W+X)*F;var Be=(ke-t)/(n-t);if(Be=g["a"].clamp(Be,0,1),ve[Ie]=new p["a"](Be,Ue),ue=Math.max(ue,xe),ce=Math.min(ce,xe),Ce!==Le||Ne!==De){var Ye=1e-5;Ce<0?ke-=Ye*K:ke+=Ye*K,Ne<0?Re+=Ye*Q:Re-=Ye*Q,je=u(Re),Me=h(Re),Pe=oe*Me,xe-=C}var Fe=je*u(ke),ze=je*h(ke),qe=ie*Fe,We=se*ze,Xe=d(qe*Fe+We*ze+Pe*Me),Ve=1/Xe,Je=qe*Ve,Ze=We*Ve,$e=Pe*Ve,Ke=new i["a"];Ke.x=Je+Fe*xe,Ke.y=Ze+ze*xe,Ke.z=$e+Me*xe,Ee[Ie]=Ke,Oe[Ie]=xe,z&&(Te[Ie]=Ae),Ie++,E["a"].multiplyByPoint(de,Ke,y),i["a"].minimumByComponent(y,le,le),i["a"].maximumByComponent(y,fe,fe),pe=Math.min(pe,xe)}}var Qe,et,tt=r["a"].fromPoints(Ee);if(Object(o["a"])(H)&&H.width<g["a"].PI_OVER_TWO+g["a"].EPSILON5&&(Qe=O["a"].fromRectangle(H,ce,ue,k)),Y){var at=new _["a"](k);et=at.computeHorizonCullingPoint(B,Ee)}for(var nt,rt,it,st,ot=new f["a"](le,fe,B),ct=new T["a"](ot,pe,ue,he,!1,z),ut=new Float32Array(ge*ct.getStride()),ht=0,dt=0;dt<ge;++dt)ht=ct.encode(ut,ht,Ee[dt],ve[dt],Oe[dt],void 0,Te[dt]);if(C>0){st=[],rt=[];for(var lt=0;lt<P;++lt)st.push(me+1+lt),rt.push(me*(_e-1)-2-lt);nt=[],it=[];for(var ft=0;ft<U;++ft)it.push((ft+1)*me+P),nt.push((U-ft)*me+1)}else{st=[],rt=[];for(var pt=0;pt<P;++pt)st.push(pt),rt.push(P*U-1-pt);nt=[],it=[];for(var mt=0;mt<U;++mt)it.push((mt+1)*P-1),nt.push((U-mt-1)*P)}return{vertices:ut,maximumHeight:ue,minimumHeight:ce,encoding:ct,boundingSphere3D:tt,orientedBoundingBox:Qe,occludeePointInScaledSpace:et,westIndicesSouthToNorth:nt,southIndicesEastToWest:rt,eastIndicesNorthToSouth:it,northIndicesWestToEast:st}};var R=S,A=a("6a29"),j=a("4261"),M=a("1ee6");function P(e){this._buffer=e.buffer,this._width=e.width,this._height=e.height,this._childTileMask=Object(s["a"])(e.childTileMask,15),this._encoding=Object(s["a"])(e.encoding,l.NONE);var t=R.DEFAULT_STRUCTURE,a=e.structure;Object(o["a"])(a)?a!==t&&(a.heightScale=Object(s["a"])(a.heightScale,t.heightScale),a.heightOffset=Object(s["a"])(a.heightOffset,t.heightOffset),a.elementsPerHeight=Object(s["a"])(a.elementsPerHeight,t.elementsPerHeight),a.stride=Object(s["a"])(a.stride,t.stride),a.elementMultiplier=Object(s["a"])(a.elementMultiplier,t.elementMultiplier),a.isBigEndian=Object(s["a"])(a.isBigEndian,t.isBigEndian)):a=t,this._structure=a,this._createdByUpsampling=Object(s["a"])(e.createdByUpsampling,!1),this._waterMask=e.waterMask,this._skirtHeight=void 0,this._bufferType=this._encoding===l.LERC?Float32Array:this._buffer.constructor,this._mesh=void 0}Object(c["a"])(P.prototype,{credits:{get:function(){}},waterMask:{get:function(){return this._waterMask}},childTileMask:{get:function(){return this._childTileMask}}});var U=new A["a"]("createVerticesFromHeightmap");function C(e,t,a,n,r,i,s,o,c,u){var h=(c-i.west)*(s-1)/(i.east-i.west),d=(u-i.south)*(o-1)/(i.north-i.south),l=0|h,f=l+1;f>=s&&(f=s-1,l=s-2);var p=0|d,m=p+1;m>=o&&(m=o-1,p=o-2);var _=h-l,g=d-p;p=o-1-p,m=o-1-m;var E=x(e,t,a,n,r,p*s+l),O=x(e,t,a,n,r,p*s+f),v=x(e,t,a,n,r,m*s+l),T=x(e,t,a,n,r,m*s+f);return k(_,g,E,O,v,T)}function L(e,t,a,n,r,i,s,o,c,u,h){var d=(c-i.west)*(s-1)/(i.east-i.west),l=(u-i.south)*(o-1)/(i.north-i.south);r>0&&(d+=1,l+=1,s+=2,o+=2);var f=r>0?s-1:s,p=0|d,m=p+1;m>=f&&(m=s-1,p=s-2);var _=r>0?o-1:o,g=0|l,E=g+1;E>=_&&(E=o-1,g=o-2);var O=d-p,v=l-g;g=o-1-g,E=o-1-E;var T=(t.decodeHeight(e,g*s+p)/h-a)/n,w=(t.decodeHeight(e,g*s+m)/h-a)/n,b=(t.decodeHeight(e,E*s+p)/h-a)/n,S=(t.decodeHeight(e,E*s+m)/h-a)/n;return k(O,v,T,w,b,S)}function k(e,t,a,n,r,i){return t<e?a+e*(n-a)+t*(i-n):a+e*(i-r)+t*(r-a)}function x(e,t,a,n,r,i){i*=n;var s,o=0;if(r)for(s=0;s<t;++s)o=o*a+e[i+s];else for(s=t-1;s>=0;--s)o=o*a+e[i+s];return o}function G(e,t,a,n,r,i,s,o){var c;if(s*=r,i)for(c=0;c<t-1;++c)e[s+c]=o/n|0,o-=e[s+c]*n,n/=a;else for(c=t-1;c>0;--c)e[s+c]=o/n|0,o-=e[s+c]*n,n/=a;e[s+c]=o}P.prototype.createMesh=function(e,t,a,c,h){var d=e.ellipsoid,l=e.tileXYToNativeRectangle(t,a,c),f=e.tileXYToRectangle(t,a,c);h=Object(s["a"])(h,1);var p=d.cartographicToCartesian(v["a"].center(f)),m=this._structure,_=M["a"].getEstimatedLevelZeroGeometricErrorForAHeightmap(d,this._width,e.getNumberOfXTilesAtLevel(0)),g=_/(1<<c);this._skirtHeight=Math.min(4*g,1e3);var E=U.scheduleTask({heightmap:this._buffer,structure:m,includeWebMercatorT:!0,width:this._width,height:this._height,nativeRectangle:l,rectangle:f,relativeToCenter:p,ellipsoid:d,skirtHeight:this._skirtHeight,isGeographic:e.projection instanceof u["a"],exaggeration:h,encoding:this._encoding});if(Object(o["a"])(E)){var w=this;return Object(n["a"])(E,(function(e){return w._mesh=new j["a"](p,new Float32Array(e.vertices),M["a"].getRegularGridIndices(e.gridWidth,e.gridHeight),e.minimumHeight,e.maximumHeight,r["a"].clone(e.boundingSphere3D),i["a"].clone(e.occludeePointInScaledSpace),e.numberOfAttributes,O["a"].clone(e.orientedBoundingBox),T["a"].clone(e.encoding),h,e.westIndicesSouthToNorth,e.southIndicesEastToWest,e.eastIndicesNorthToSouth,e.northIndicesWestToEast),w._buffer=void 0,w._mesh}))}},P.prototype._createMeshSync=function(e,t,a,n,r){var i=e.ellipsoid,o=e.tileXYToNativeRectangle(t,a,n),c=e.tileXYToRectangle(t,a,n);r=Object(s["a"])(r,1);var h=i.cartographicToCartesian(v["a"].center(c)),d=this._structure,l=M["a"].getEstimatedLevelZeroGeometricErrorForAHeightmap(i,this._width,e.getNumberOfXTilesAtLevel(0)),f=l/(1<<n);this._skirtHeight=Math.min(4*f,1e3);var p=R.computeVertices({heightmap:this._buffer,structure:d,includeWebMercatorT:!0,width:this._width,height:this._height,nativeRectangle:o,rectangle:c,relativeToCenter:h,ellipsoid:i,skirtHeight:this._skirtHeight,isGeographic:e.projection instanceof u["a"],exaggeration:r});this._buffer=void 0;var m=this._width,_=this._height;return this._skirtHeight>0&&(m+=2,_+=2),new j["a"](h,p.vertices,M["a"].getRegularGridIndices(m,_),p.minimumHeight,p.maximumHeight,p.boundingSphere3D,p.occludeePointInScaledSpace,p.encoding.getStride(),p.orientedBoundingBox,p.encoding,r,p.westIndicesSouthToNorth,p.southIndicesEastToWest,p.eastIndicesNorthToSouth,p.northIndicesWestToEast)},P.prototype.interpolateHeight=function(e,t,a){var n,r=this._width,i=this._height,s=this._structure,c=s.stride,u=s.elementsPerHeight,h=s.elementMultiplier,d=s.isBigEndian,l=s.heightOffset,f=s.heightScale;if(Object(o["a"])(this._mesh)){var p=this._mesh.vertices,m=this._mesh.encoding,_=this._skirtHeight,g=this._mesh.exaggeration;n=L(p,m,l,f,_,e,r,i,t,a,g)}else n=C(this._buffer,u,h,c,d,e,r,i,t,a),n=n*f+l;return n},P.prototype.upsample=function(e,t,a,n,r,i,s){var c=this._mesh;if(Object(o["a"])(c)){for(var u=this._width,h=this._height,d=this._structure,l=this._skirtHeight,f=d.stride,p=new this._bufferType(u*h*f),m=c.vertices,_=c.encoding,E=e.tileXYToRectangle(t,a,n),O=e.tileXYToRectangle(r,i,s),v=d.heightOffset,T=d.heightScale,w=c.exaggeration,b=d.elementsPerHeight,S=d.elementMultiplier,y=d.isBigEndian,I=Math.pow(S,b-1),N=0;N<h;++N)for(var D=g["a"].lerp(O.north,O.south,N/(h-1)),R=0;R<u;++R){var A=g["a"].lerp(O.west,O.east,R/(u-1)),j=L(m,_,v,T,l,E,u,h,A,D,w);j=j<d.lowestEncodedHeight?d.lowestEncodedHeight:j,j=j>d.highestEncodedHeight?d.highestEncodedHeight:j,G(p,b,S,I,f,y,N*u+R,j)}return new P({buffer:p,width:u,height:h,childTileMask:0,structure:this._structure,createdByUpsampling:!0})}},P.prototype.isChildAvailable=function(e,t,a,n){var r=2;return a!==2*e&&++r,n!==2*t&&(r-=2),0!==(this._childTileMask&1<<r)},P.prototype.wasCreatedByUpsampling=function(){return this._createdByUpsampling};t["a"]=P},b195:function(e,t,a){"use strict";var n=a("881b"),r=a("a58e"),i=a("8dfe"),s=a("535a"),o=a("2f63"),c=a("9f1d"),u=a("a9a8"),h=a("d4ed"),d=a("283e");function l(e,t){var a,r=e.externalType,i=Object(o["a"])(r);if(i){if("3DTILES"!==r&&"STK_TERRAIN_SERVER"!==r)throw new d["a"]("Ion.createResource does not support external imagery assets; use IonImageryProvider instead.");a={url:e.options.url}}else a={url:e.url,retryAttempts:1,retryCallback:f};h["a"].call(this,a),this._ionEndpoint=e,this._ionEndpointDomain=i?void 0:new n["a"](e.url).authority,this._ionEndpointResource=t,this._ionRoot=void 0,this._pendingPromise=void 0,this._credits=void 0,this._isExternal=i}function f(e,t){var a=Object(s["a"])(e._ionRoot,e),n=a._ionEndpointResource;return Object(o["a"])(t)&&(401===t.statusCode||t.target instanceof Image)?(Object(o["a"])(a._pendingPromise)||(a._pendingPromise=n.fetchJson().then((function(e){return a._ionEndpoint=e,e})).always((function(e){return a._pendingPromise=void 0,e}))),a._pendingPromise.then((function(t){return e._ionEndpoint=t,!0}))):r["a"].resolve(!1)}Object(o["a"])(Object.create)&&(l.prototype=Object.create(h["a"].prototype),l.prototype.constructor=l),l.fromAssetId=function(e,t){var a=l._createEndpointResource(e,t);return a.fetchJson().then((function(e){return new l(e,a)}))},Object(c["a"])(l.prototype,{credits:{get:function(){return Object(o["a"])(this._ionRoot)?this._ionRoot.credits:Object(o["a"])(this._credits)?this._credits:(this._credits=l.getCreditsFromEndpoint(this._ionEndpoint,this._ionEndpointResource),this._credits)}}}),l.getCreditsFromEndpoint=function(e,t){var a=e.attributions.map(i["a"].getIonCredit),n=u["a"].getDefaultTokenCredit(t.queryParameters.access_token);return Object(o["a"])(n)&&a.push(i["a"].clone(n)),a},l.prototype.clone=function(e){var t=Object(s["a"])(this._ionRoot,this);return Object(o["a"])(e)||(e=new l(t._ionEndpoint,t._ionEndpointResource)),e=h["a"].prototype.clone.call(this,e),e._ionRoot=t,e._isExternal=this._isExternal,e},l.prototype.fetchImage=function(e){if(!this._isExternal){var t=e;e={preferBlob:!0},Object(o["a"])(t)&&(e.flipY=t.flipY,e.preferImageBitmap=t.preferImageBitmap)}return h["a"].prototype.fetchImage.call(this,e)},l.prototype._makeRequest=function(e){if(this._isExternal||new n["a"](this.url).authority!==this._ionEndpointDomain)return h["a"].prototype._makeRequest.call(this,e);var t="*/*;access_token="+this._ionEndpoint.accessToken,a=t,r=this.headers;return Object(o["a"])(r)&&Object(o["a"])(r.Accept)&&(a=r.Accept+","+t),Object(o["a"])(e.headers)?Object(o["a"])(e.headers.Accept)?e.headers.Accept=e.headers.Accept+","+t:e.headers.Accept=a:e.headers={Accept:a},h["a"].prototype._makeRequest.call(this,e)},l._createEndpointResource=function(e,t){t=Object(s["a"])(t,s["a"].EMPTY_OBJECT);var a=Object(s["a"])(t.server,u["a"].defaultServer),n=Object(s["a"])(t.accessToken,u["a"].defaultAccessToken);a=h["a"].createIfNeeded(a);var r={url:"v1/assets/"+e+"/endpoint"};return Object(o["a"])(n)&&(r.queryParameters={access_token:n}),a.getDerivedResource(r)},t["a"]=l},c8ed:function(e,t,a){"use strict";var n=a("0e25"),r={SHIFT:0,CTRL:1,ALT:2};t["a"]=Object(n["a"])(r)},c8f9:function(e,t,a){"use strict";var n=a("670c"),r=a("be18"),i=a("2f63"),s={clipTriangleAtAxisAlignedThreshold:function(e,t,a,n,r,s){var o,c,u;Object(i["a"])(s)?s.length=0:s=[],t?(o=a<e,c=n<e,u=r<e):(o=a>e,c=n>e,u=r>e);var h,d,l,f,p,m,_=o+c+u;return 1===_?o?(h=(e-a)/(n-a),d=(e-a)/(r-a),s.push(1),s.push(2),1!==d&&(s.push(-1),s.push(0),s.push(2),s.push(d)),1!==h&&(s.push(-1),s.push(0),s.push(1),s.push(h))):c?(l=(e-n)/(r-n),f=(e-n)/(a-n),s.push(2),s.push(0),1!==f&&(s.push(-1),s.push(1),s.push(0),s.push(f)),1!==l&&(s.push(-1),s.push(1),s.push(2),s.push(l))):u&&(p=(e-r)/(a-r),m=(e-r)/(n-r),s.push(0),s.push(1),1!==m&&(s.push(-1),s.push(2),s.push(1),s.push(m)),1!==p&&(s.push(-1),s.push(2),s.push(0),s.push(p))):2===_?o||a===e?c||n===e?u||r===e||(d=(e-a)/(r-a),l=(e-n)/(r-n),s.push(2),s.push(-1),s.push(0),s.push(2),s.push(d),s.push(-1),s.push(1),s.push(2),s.push(l)):(m=(e-r)/(n-r),h=(e-a)/(n-a),s.push(1),s.push(-1),s.push(2),s.push(1),s.push(m),s.push(-1),s.push(0),s.push(1),s.push(h)):(f=(e-n)/(a-n),p=(e-r)/(a-r),s.push(0),s.push(-1),s.push(1),s.push(0),s.push(f),s.push(-1),s.push(2),s.push(0),s.push(p)):3!==_&&(s.push(0),s.push(1),s.push(2)),s},computeBarycentricCoordinates:function(e,t,a,n,s,o,c,u,h){var d=a-c,l=c-s,f=o-u,p=n-u,m=1/(f*d+l*p),_=t-u,g=e-c,E=(f*g+l*_)*m,O=(-p*g+d*_)*m,v=1-E-O;return Object(i["a"])(h)?(h.x=E,h.y=O,h.z=v,h):new r["a"](E,O,v)},computeLineSegmentLineSegmentIntersection:function(e,t,a,r,s,o,c,u,h){var d=(c-s)*(t-o)-(u-o)*(e-s),l=(a-e)*(t-o)-(r-t)*(e-s),f=(u-o)*(a-e)-(c-s)*(r-t);if(0!==f){var p=d/f,m=l/f;return p>=0&&p<=1&&m>=0&&m<=1?(Object(i["a"])(h)||(h=new n["a"]),h.x=e+p*(a-e),h.y=t+p*(r-t),h):void 0}}};t["a"]=s}}]);