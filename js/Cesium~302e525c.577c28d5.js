(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~302e525c"],{"228a":function(e,n,t){"use strict";function r(e,n,t){t=t||2;var r,a,o,h,f,x,l,p=n&&n.length,c=p?n[0]*t:e.length,v=i(e,0,c,t,!0),y=[];if(!v||v.next===v.prev)return y;if(p&&(v=s(e,n,v,t)),e.length>80*t){r=o=e[0],a=h=e[1];for(var d=t;d<c;d+=t)f=e[d],x=e[d+1],f<r&&(r=f),x<a&&(a=x),f>o&&(o=f),x>h&&(h=x);l=Math.max(o-r,h-a),l=0!==l?1/l:0}return u(v,y,t,r,a,l),y}function i(e,n,t,r,i){var a,u;if(i===L(e,n,t,r)>0)for(a=n;a<t;a+=r)u=S(a,e[a],e[a+1],u);else for(a=t-r;a>=n;a-=r)u=S(a,e[a],e[a+1],u);return u&&A(u,u.next)&&(B(u),u=u.next),u}function a(e,n){if(!e)return e;n||(n=e);var t,r=e;do{if(t=!1,r.steiner||!A(r,r.next)&&0!==M(r.prev,r,r.next))r=r.next;else{if(B(r),r=n=r.prev,r===r.next)break;t=!0}}while(t||r!==n);return n}function u(e,n,t,r,i,s,l){if(e){!l&&s&&y(e,r,i,s);var p,c,v=e;while(e.prev!==e.next)if(p=e.prev,c=e.next,s?h(e,r,i,s):o(e))n.push(p.i/t),n.push(e.i/t),n.push(c.i/t),B(e),e=c.next,v=c.next;else if(e=c,e===v){l?1===l?(e=f(a(e),n,t),u(e,n,t,r,i,s,2)):2===l&&x(e,n,t,r,i,s):u(a(e),n,t,r,i,s,1);break}}}function o(e){var n=e.prev,t=e,r=e.next;if(M(n,t,r)>=0)return!1;var i=e.next.next;while(i!==e.prev){if(m(n.x,n.y,t.x,t.y,r.x,r.y,i.x,i.y)&&M(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function h(e,n,t,r){var i=e.prev,a=e,u=e.next;if(M(i,a,u)>=0)return!1;var o=i.x<a.x?i.x<u.x?i.x:u.x:a.x<u.x?a.x:u.x,h=i.y<a.y?i.y<u.y?i.y:u.y:a.y<u.y?a.y:u.y,f=i.x>a.x?i.x>u.x?i.x:u.x:a.x>u.x?a.x:u.x,x=i.y>a.y?i.y>u.y?i.y:u.y:a.y>u.y?a.y:u.y,s=w(o,h,n,t,r),l=w(f,x,n,t,r),p=e.prevZ,c=e.nextZ;while(p&&p.z>=s&&c&&c.z<=l){if(p!==e.prev&&p!==e.next&&m(i.x,i.y,a.x,a.y,u.x,u.y,p.x,p.y)&&M(p.prev,p,p.next)>=0)return!1;if(p=p.prevZ,c!==e.prev&&c!==e.next&&m(i.x,i.y,a.x,a.y,u.x,u.y,c.x,c.y)&&M(c.prev,c,c.next)>=0)return!1;c=c.nextZ}while(p&&p.z>=s){if(p!==e.prev&&p!==e.next&&m(i.x,i.y,a.x,a.y,u.x,u.y,p.x,p.y)&&M(p.prev,p,p.next)>=0)return!1;p=p.prevZ}while(c&&c.z<=l){if(c!==e.prev&&c!==e.next&&m(i.x,i.y,a.x,a.y,u.x,u.y,c.x,c.y)&&M(c.prev,c,c.next)>=0)return!1;c=c.nextZ}return!0}function f(e,n,t){var r=e;do{var i=r.prev,u=r.next.next;!A(i,u)&&C(i,r,r.next,u)&&O(i,u)&&O(u,i)&&(n.push(i.i/t),n.push(r.i/t),n.push(u.i/t),B(r),B(r.next),r=e=u),r=r.next}while(r!==e);return a(r)}function x(e,n,t,r,i,o){var h=e;do{var f=h.next.next;while(f!==h.prev){if(h.i!==f.i&&b(h,f)){var x=z(h,f);return h=a(h,h.next),x=a(x,x.next),u(h,n,t,r,i,o),void u(x,n,t,r,i,o)}f=f.next}h=h.next}while(h!==e)}function s(e,n,t,r){var u,o,h,f,x,s=[];for(u=0,o=n.length;u<o;u++)h=n[u]*r,f=u<o-1?n[u+1]*r:e.length,x=i(e,h,f,r,!1),x===x.next&&(x.steiner=!0),s.push(g(x));for(s.sort(l),u=0;u<s.length;u++)p(s[u],t),t=a(t,t.next);return t}function l(e,n){return e.x-n.x}function p(e,n){if(n=c(e,n),n){var t=z(n,e);a(t,t.next)}}function c(e,n){var t,r=n,i=e.x,a=e.y,u=-1/0;do{if(a<=r.y&&a>=r.next.y&&r.next.y!==r.y){var o=r.x+(a-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(o<=i&&o>u){if(u=o,o===i){if(a===r.y)return r;if(a===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!t)return null;if(i===u)return t;var h,f=t,x=t.x,s=t.y,l=1/0;r=t;do{i>=r.x&&r.x>=x&&i!==r.x&&m(a<s?i:u,a,x,s,a<s?u:i,a,r.x,r.y)&&(h=Math.abs(a-r.y)/(i-r.x),O(r,e)&&(h<l||h===l&&(r.x>t.x||r.x===t.x&&v(t,r)))&&(t=r,l=h)),r=r.next}while(r!==f);return t}function v(e,n){return M(e.prev,e,n.prev)<0&&M(n.next,e,e.next)<0}function y(e,n,t,r){var i=e;do{null===i.z&&(i.z=w(i.x,i.y,n,t,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,d(i)}function d(e){var n,t,r,i,a,u,o,h,f=1;do{t=e,e=null,a=null,u=0;while(t){for(u++,r=t,o=0,n=0;n<f;n++)if(o++,r=r.nextZ,!r)break;h=f;while(o>0||h>0&&r)0!==o&&(0===h||!r||t.z<=r.z)?(i=t,t=t.nextZ,o--):(i=r,r=r.nextZ,h--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;t=r}a.nextZ=null,f*=2}while(u>1);return e}function w(e,n,t,r,i){return e=32767*(e-t)*i,n=32767*(n-r)*i,e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),n=16711935&(n|n<<8),n=252645135&(n|n<<4),n=858993459&(n|n<<2),n=1431655765&(n|n<<1),e|n<<1}function g(e){var n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function m(e,n,t,r,i,a,u,o){return(i-u)*(n-o)-(e-u)*(a-o)>=0&&(e-u)*(r-o)-(t-u)*(n-o)>=0&&(t-u)*(a-o)-(i-u)*(r-o)>=0}function b(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!k(e,n)&&(O(e,n)&&O(n,e)&&U(e,n)&&(M(e.prev,e,n.prev)||M(e,n.prev,n))||A(e,n)&&M(e.prev,e,e.next)>0&&M(n.prev,n,n.next)>0)}function M(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function A(e,n){return e.x===n.x&&e.y===n.y}function C(e,n,t,r){var i=E(M(e,n,t)),a=E(M(e,n,r)),u=E(M(t,r,e)),o=E(M(t,r,n));return i!==a&&u!==o||(!(0!==i||!Z(e,t,n))||(!(0!==a||!Z(e,r,n))||(!(0!==u||!Z(t,e,r))||!(0!==o||!Z(t,n,r)))))}function Z(e,n,t){return n.x<=Math.max(e.x,t.x)&&n.x>=Math.min(e.x,t.x)&&n.y<=Math.max(e.y,t.y)&&n.y>=Math.min(e.y,t.y)}function E(e){return e>0?1:e<0?-1:0}function k(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&C(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function O(e,n){return M(e.prev,e,e.next)<0?M(e,n,e.next)>=0&&M(e,e.prev,n)>=0:M(e,n,e.prev)<0||M(e,e.next,n)<0}function U(e,n){var t=e,r=!1,i=(e.x+n.x)/2,a=(e.y+n.y)/2;do{t.y>a!==t.next.y>a&&t.next.y!==t.y&&i<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next}while(t!==e);return r}function z(e,n){var t=new I(e.i,e.x,e.y),r=new I(n.i,n.x,n.y),i=e.next,a=n.prev;return e.next=n,n.prev=e,t.next=i,i.prev=t,r.next=t,t.prev=r,a.next=r,r.prev=a,r}function S(e,n,t,r){var i=new I(e,n,t);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function B(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function I(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function L(e,n,t,r){for(var i=0,a=n,u=t-r;a<t;a+=r)i+=(e[u]-e[a])*(e[a+1]+e[u+1]),u=a;return i}r.deviation=function(e,n,t,r){var i=n&&n.length,a=i?n[0]*t:e.length,u=Math.abs(L(e,0,a,t));if(i)for(var o=0,h=n.length;o<h;o++){var f=n[o]*t,x=o<h-1?n[o+1]*t:e.length;u-=Math.abs(L(e,f,x,t))}var s=0;for(o=0;o<r.length;o+=3){var l=r[o]*t,p=r[o+1]*t,c=r[o+2]*t;s+=Math.abs((e[l]-e[c])*(e[p+1]-e[l+1])-(e[l]-e[p])*(e[c+1]-e[l+1]))}return 0===u&&0===s?0:Math.abs((s-u)/u)},r.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var u=0;u<n;u++)t.vertices.push(e[i][a][u]);i>0&&(r+=e[i-1].length,t.holes.push(r))}return t},n["a"]=r},"743c":function(e,n,t){"use strict";function r(){var e=0,n=1,t=2,r=3,i=4,a=5,u=6,o=7,h=8,f=9,x=10,s=11,l=12,p=13,c=14,v=15,y=16,d=17,w=0,g=1,m=2,b=3,M=4;function A(e,n){return 55296<=e.charCodeAt(n)&&e.charCodeAt(n)<=56319&&56320<=e.charCodeAt(n+1)&&e.charCodeAt(n+1)<=57343}function C(e,n){void 0===n&&(n=0);var t=e.charCodeAt(n);if(55296<=t&&t<=56319&&n<e.length-1){var r=t,i=e.charCodeAt(n+1);return 56320<=i&&i<=57343?1024*(r-55296)+(i-56320)+65536:r}if(56320<=t&&t<=57343&&n>=1){r=e.charCodeAt(n-1),i=t;return 55296<=r&&r<=56319?1024*(r-55296)+(i-56320)+65536:i}return t}function Z(s,A,C){var Z=[s].concat(A).concat([C]),E=Z[Z.length-2],k=C,O=Z.lastIndexOf(c);if(O>1&&Z.slice(1,O).every((function(e){return e==r}))&&-1==[r,p,d].indexOf(s))return m;var U=Z.lastIndexOf(i);if(U>0&&Z.slice(1,U).every((function(e){return e==i}))&&-1==[l,i].indexOf(E))return Z.filter((function(e){return e==i})).length%2==1?b:M;if(E==e&&k==n)return w;if(E==t||E==e||E==n)return k==c&&A.every((function(e){return e==r}))?m:g;if(k==t||k==e||k==n)return g;if(E==u&&(k==u||k==o||k==f||k==x))return w;if(!(E!=f&&E!=o||k!=o&&k!=h))return w;if((E==x||E==h)&&k==h)return w;if(k==r||k==v)return w;if(k==a)return w;if(E==l)return w;var z=-1!=Z.indexOf(r)?Z.lastIndexOf(r)-1:Z.length-2;return-1!=[p,d].indexOf(Z[z])&&Z.slice(z+1,-1).every((function(e){return e==r}))&&k==c?w:E==v&&-1!=[y,d].indexOf(k)?w:-1!=A.indexOf(i)?m:E==i&&k==i?w:g}function E(w){return 1536<=w&&w<=1541||1757==w||1807==w||2274==w||3406==w||69821==w||70082<=w&&w<=70083||72250==w||72326<=w&&w<=72329||73030==w?l:13==w?e:10==w?n:0<=w&&w<=9||11<=w&&w<=12||14<=w&&w<=31||127<=w&&w<=159||173==w||1564==w||6158==w||8203==w||8206<=w&&w<=8207||8232==w||8233==w||8234<=w&&w<=8238||8288<=w&&w<=8292||8293==w||8294<=w&&w<=8303||55296<=w&&w<=57343||65279==w||65520<=w&&w<=65528||65529<=w&&w<=65531||113824<=w&&w<=113827||119155<=w&&w<=119162||917504==w||917505==w||917506<=w&&w<=917535||917632<=w&&w<=917759||918e3<=w&&w<=921599?t:768<=w&&w<=879||1155<=w&&w<=1159||1160<=w&&w<=1161||1425<=w&&w<=1469||1471==w||1473<=w&&w<=1474||1476<=w&&w<=1477||1479==w||1552<=w&&w<=1562||1611<=w&&w<=1631||1648==w||1750<=w&&w<=1756||1759<=w&&w<=1764||1767<=w&&w<=1768||1770<=w&&w<=1773||1809==w||1840<=w&&w<=1866||1958<=w&&w<=1968||2027<=w&&w<=2035||2070<=w&&w<=2073||2075<=w&&w<=2083||2085<=w&&w<=2087||2089<=w&&w<=2093||2137<=w&&w<=2139||2260<=w&&w<=2273||2275<=w&&w<=2306||2362==w||2364==w||2369<=w&&w<=2376||2381==w||2385<=w&&w<=2391||2402<=w&&w<=2403||2433==w||2492==w||2494==w||2497<=w&&w<=2500||2509==w||2519==w||2530<=w&&w<=2531||2561<=w&&w<=2562||2620==w||2625<=w&&w<=2626||2631<=w&&w<=2632||2635<=w&&w<=2637||2641==w||2672<=w&&w<=2673||2677==w||2689<=w&&w<=2690||2748==w||2753<=w&&w<=2757||2759<=w&&w<=2760||2765==w||2786<=w&&w<=2787||2810<=w&&w<=2815||2817==w||2876==w||2878==w||2879==w||2881<=w&&w<=2884||2893==w||2902==w||2903==w||2914<=w&&w<=2915||2946==w||3006==w||3008==w||3021==w||3031==w||3072==w||3134<=w&&w<=3136||3142<=w&&w<=3144||3146<=w&&w<=3149||3157<=w&&w<=3158||3170<=w&&w<=3171||3201==w||3260==w||3263==w||3266==w||3270==w||3276<=w&&w<=3277||3285<=w&&w<=3286||3298<=w&&w<=3299||3328<=w&&w<=3329||3387<=w&&w<=3388||3390==w||3393<=w&&w<=3396||3405==w||3415==w||3426<=w&&w<=3427||3530==w||3535==w||3538<=w&&w<=3540||3542==w||3551==w||3633==w||3636<=w&&w<=3642||3655<=w&&w<=3662||3761==w||3764<=w&&w<=3769||3771<=w&&w<=3772||3784<=w&&w<=3789||3864<=w&&w<=3865||3893==w||3895==w||3897==w||3953<=w&&w<=3966||3968<=w&&w<=3972||3974<=w&&w<=3975||3981<=w&&w<=3991||3993<=w&&w<=4028||4038==w||4141<=w&&w<=4144||4146<=w&&w<=4151||4153<=w&&w<=4154||4157<=w&&w<=4158||4184<=w&&w<=4185||4190<=w&&w<=4192||4209<=w&&w<=4212||4226==w||4229<=w&&w<=4230||4237==w||4253==w||4957<=w&&w<=4959||5906<=w&&w<=5908||5938<=w&&w<=5940||5970<=w&&w<=5971||6002<=w&&w<=6003||6068<=w&&w<=6069||6071<=w&&w<=6077||6086==w||6089<=w&&w<=6099||6109==w||6155<=w&&w<=6157||6277<=w&&w<=6278||6313==w||6432<=w&&w<=6434||6439<=w&&w<=6440||6450==w||6457<=w&&w<=6459||6679<=w&&w<=6680||6683==w||6742==w||6744<=w&&w<=6750||6752==w||6754==w||6757<=w&&w<=6764||6771<=w&&w<=6780||6783==w||6832<=w&&w<=6845||6846==w||6912<=w&&w<=6915||6964==w||6966<=w&&w<=6970||6972==w||6978==w||7019<=w&&w<=7027||7040<=w&&w<=7041||7074<=w&&w<=7077||7080<=w&&w<=7081||7083<=w&&w<=7085||7142==w||7144<=w&&w<=7145||7149==w||7151<=w&&w<=7153||7212<=w&&w<=7219||7222<=w&&w<=7223||7376<=w&&w<=7378||7380<=w&&w<=7392||7394<=w&&w<=7400||7405==w||7412==w||7416<=w&&w<=7417||7616<=w&&w<=7673||7675<=w&&w<=7679||8204==w||8400<=w&&w<=8412||8413<=w&&w<=8416||8417==w||8418<=w&&w<=8420||8421<=w&&w<=8432||11503<=w&&w<=11505||11647==w||11744<=w&&w<=11775||12330<=w&&w<=12333||12334<=w&&w<=12335||12441<=w&&w<=12442||42607==w||42608<=w&&w<=42610||42612<=w&&w<=42621||42654<=w&&w<=42655||42736<=w&&w<=42737||43010==w||43014==w||43019==w||43045<=w&&w<=43046||43204<=w&&w<=43205||43232<=w&&w<=43249||43302<=w&&w<=43309||43335<=w&&w<=43345||43392<=w&&w<=43394||43443==w||43446<=w&&w<=43449||43452==w||43493==w||43561<=w&&w<=43566||43569<=w&&w<=43570||43573<=w&&w<=43574||43587==w||43596==w||43644==w||43696==w||43698<=w&&w<=43700||43703<=w&&w<=43704||43710<=w&&w<=43711||43713==w||43756<=w&&w<=43757||43766==w||44005==w||44008==w||44013==w||64286==w||65024<=w&&w<=65039||65056<=w&&w<=65071||65438<=w&&w<=65439||66045==w||66272==w||66422<=w&&w<=66426||68097<=w&&w<=68099||68101<=w&&w<=68102||68108<=w&&w<=68111||68152<=w&&w<=68154||68159==w||68325<=w&&w<=68326||69633==w||69688<=w&&w<=69702||69759<=w&&w<=69761||69811<=w&&w<=69814||69817<=w&&w<=69818||69888<=w&&w<=69890||69927<=w&&w<=69931||69933<=w&&w<=69940||70003==w||70016<=w&&w<=70017||70070<=w&&w<=70078||70090<=w&&w<=70092||70191<=w&&w<=70193||70196==w||70198<=w&&w<=70199||70206==w||70367==w||70371<=w&&w<=70378||70400<=w&&w<=70401||70460==w||70462==w||70464==w||70487==w||70502<=w&&w<=70508||70512<=w&&w<=70516||70712<=w&&w<=70719||70722<=w&&w<=70724||70726==w||70832==w||70835<=w&&w<=70840||70842==w||70845==w||70847<=w&&w<=70848||70850<=w&&w<=70851||71087==w||71090<=w&&w<=71093||71100<=w&&w<=71101||71103<=w&&w<=71104||71132<=w&&w<=71133||71219<=w&&w<=71226||71229==w||71231<=w&&w<=71232||71339==w||71341==w||71344<=w&&w<=71349||71351==w||71453<=w&&w<=71455||71458<=w&&w<=71461||71463<=w&&w<=71467||72193<=w&&w<=72198||72201<=w&&w<=72202||72243<=w&&w<=72248||72251<=w&&w<=72254||72263==w||72273<=w&&w<=72278||72281<=w&&w<=72283||72330<=w&&w<=72342||72344<=w&&w<=72345||72752<=w&&w<=72758||72760<=w&&w<=72765||72767==w||72850<=w&&w<=72871||72874<=w&&w<=72880||72882<=w&&w<=72883||72885<=w&&w<=72886||73009<=w&&w<=73014||73018==w||73020<=w&&w<=73021||73023<=w&&w<=73029||73031==w||92912<=w&&w<=92916||92976<=w&&w<=92982||94095<=w&&w<=94098||113821<=w&&w<=113822||119141==w||119143<=w&&w<=119145||119150<=w&&w<=119154||119163<=w&&w<=119170||119173<=w&&w<=119179||119210<=w&&w<=119213||119362<=w&&w<=119364||121344<=w&&w<=121398||121403<=w&&w<=121452||121461==w||121476==w||121499<=w&&w<=121503||121505<=w&&w<=121519||122880<=w&&w<=122886||122888<=w&&w<=122904||122907<=w&&w<=122913||122915<=w&&w<=122916||122918<=w&&w<=122922||125136<=w&&w<=125142||125252<=w&&w<=125258||917536<=w&&w<=917631||917760<=w&&w<=917999?r:127462<=w&&w<=127487?i:2307==w||2363==w||2366<=w&&w<=2368||2377<=w&&w<=2380||2382<=w&&w<=2383||2434<=w&&w<=2435||2495<=w&&w<=2496||2503<=w&&w<=2504||2507<=w&&w<=2508||2563==w||2622<=w&&w<=2624||2691==w||2750<=w&&w<=2752||2761==w||2763<=w&&w<=2764||2818<=w&&w<=2819||2880==w||2887<=w&&w<=2888||2891<=w&&w<=2892||3007==w||3009<=w&&w<=3010||3014<=w&&w<=3016||3018<=w&&w<=3020||3073<=w&&w<=3075||3137<=w&&w<=3140||3202<=w&&w<=3203||3262==w||3264<=w&&w<=3265||3267<=w&&w<=3268||3271<=w&&w<=3272||3274<=w&&w<=3275||3330<=w&&w<=3331||3391<=w&&w<=3392||3398<=w&&w<=3400||3402<=w&&w<=3404||3458<=w&&w<=3459||3536<=w&&w<=3537||3544<=w&&w<=3550||3570<=w&&w<=3571||3635==w||3763==w||3902<=w&&w<=3903||3967==w||4145==w||4155<=w&&w<=4156||4182<=w&&w<=4183||4228==w||6070==w||6078<=w&&w<=6085||6087<=w&&w<=6088||6435<=w&&w<=6438||6441<=w&&w<=6443||6448<=w&&w<=6449||6451<=w&&w<=6456||6681<=w&&w<=6682||6741==w||6743==w||6765<=w&&w<=6770||6916==w||6965==w||6971==w||6973<=w&&w<=6977||6979<=w&&w<=6980||7042==w||7073==w||7078<=w&&w<=7079||7082==w||7143==w||7146<=w&&w<=7148||7150==w||7154<=w&&w<=7155||7204<=w&&w<=7211||7220<=w&&w<=7221||7393==w||7410<=w&&w<=7411||7415==w||43043<=w&&w<=43044||43047==w||43136<=w&&w<=43137||43188<=w&&w<=43203||43346<=w&&w<=43347||43395==w||43444<=w&&w<=43445||43450<=w&&w<=43451||43453<=w&&w<=43456||43567<=w&&w<=43568||43571<=w&&w<=43572||43597==w||43755==w||43758<=w&&w<=43759||43765==w||44003<=w&&w<=44004||44006<=w&&w<=44007||44009<=w&&w<=44010||44012==w||69632==w||69634==w||69762==w||69808<=w&&w<=69810||69815<=w&&w<=69816||69932==w||70018==w||70067<=w&&w<=70069||70079<=w&&w<=70080||70188<=w&&w<=70190||70194<=w&&w<=70195||70197==w||70368<=w&&w<=70370||70402<=w&&w<=70403||70463==w||70465<=w&&w<=70468||70471<=w&&w<=70472||70475<=w&&w<=70477||70498<=w&&w<=70499||70709<=w&&w<=70711||70720<=w&&w<=70721||70725==w||70833<=w&&w<=70834||70841==w||70843<=w&&w<=70844||70846==w||70849==w||71088<=w&&w<=71089||71096<=w&&w<=71099||71102==w||71216<=w&&w<=71218||71227<=w&&w<=71228||71230==w||71340==w||71342<=w&&w<=71343||71350==w||71456<=w&&w<=71457||71462==w||72199<=w&&w<=72200||72249==w||72279<=w&&w<=72280||72343==w||72751==w||72766==w||72873==w||72881==w||72884==w||94033<=w&&w<=94078||119142==w||119149==w?a:4352<=w&&w<=4447||43360<=w&&w<=43388?u:4448<=w&&w<=4519||55216<=w&&w<=55238?o:4520<=w&&w<=4607||55243<=w&&w<=55291?h:44032==w||44060==w||44088==w||44116==w||44144==w||44172==w||44200==w||44228==w||44256==w||44284==w||44312==w||44340==w||44368==w||44396==w||44424==w||44452==w||44480==w||44508==w||44536==w||44564==w||44592==w||44620==w||44648==w||44676==w||44704==w||44732==w||44760==w||44788==w||44816==w||44844==w||44872==w||44900==w||44928==w||44956==w||44984==w||45012==w||45040==w||45068==w||45096==w||45124==w||45152==w||45180==w||45208==w||45236==w||45264==w||45292==w||45320==w||45348==w||45376==w||45404==w||45432==w||45460==w||45488==w||45516==w||45544==w||45572==w||45600==w||45628==w||45656==w||45684==w||45712==w||45740==w||45768==w||45796==w||45824==w||45852==w||45880==w||45908==w||45936==w||45964==w||45992==w||46020==w||46048==w||46076==w||46104==w||46132==w||46160==w||46188==w||46216==w||46244==w||46272==w||46300==w||46328==w||46356==w||46384==w||46412==w||46440==w||46468==w||46496==w||46524==w||46552==w||46580==w||46608==w||46636==w||46664==w||46692==w||46720==w||46748==w||46776==w||46804==w||46832==w||46860==w||46888==w||46916==w||46944==w||46972==w||47e3==w||47028==w||47056==w||47084==w||47112==w||47140==w||47168==w||47196==w||47224==w||47252==w||47280==w||47308==w||47336==w||47364==w||47392==w||47420==w||47448==w||47476==w||47504==w||47532==w||47560==w||47588==w||47616==w||47644==w||47672==w||47700==w||47728==w||47756==w||47784==w||47812==w||47840==w||47868==w||47896==w||47924==w||47952==w||47980==w||48008==w||48036==w||48064==w||48092==w||48120==w||48148==w||48176==w||48204==w||48232==w||48260==w||48288==w||48316==w||48344==w||48372==w||48400==w||48428==w||48456==w||48484==w||48512==w||48540==w||48568==w||48596==w||48624==w||48652==w||48680==w||48708==w||48736==w||48764==w||48792==w||48820==w||48848==w||48876==w||48904==w||48932==w||48960==w||48988==w||49016==w||49044==w||49072==w||49100==w||49128==w||49156==w||49184==w||49212==w||49240==w||49268==w||49296==w||49324==w||49352==w||49380==w||49408==w||49436==w||49464==w||49492==w||49520==w||49548==w||49576==w||49604==w||49632==w||49660==w||49688==w||49716==w||49744==w||49772==w||49800==w||49828==w||49856==w||49884==w||49912==w||49940==w||49968==w||49996==w||50024==w||50052==w||50080==w||50108==w||50136==w||50164==w||50192==w||50220==w||50248==w||50276==w||50304==w||50332==w||50360==w||50388==w||50416==w||50444==w||50472==w||50500==w||50528==w||50556==w||50584==w||50612==w||50640==w||50668==w||50696==w||50724==w||50752==w||50780==w||50808==w||50836==w||50864==w||50892==w||50920==w||50948==w||50976==w||51004==w||51032==w||51060==w||51088==w||51116==w||51144==w||51172==w||51200==w||51228==w||51256==w||51284==w||51312==w||51340==w||51368==w||51396==w||51424==w||51452==w||51480==w||51508==w||51536==w||51564==w||51592==w||51620==w||51648==w||51676==w||51704==w||51732==w||51760==w||51788==w||51816==w||51844==w||51872==w||51900==w||51928==w||51956==w||51984==w||52012==w||52040==w||52068==w||52096==w||52124==w||52152==w||52180==w||52208==w||52236==w||52264==w||52292==w||52320==w||52348==w||52376==w||52404==w||52432==w||52460==w||52488==w||52516==w||52544==w||52572==w||52600==w||52628==w||52656==w||52684==w||52712==w||52740==w||52768==w||52796==w||52824==w||52852==w||52880==w||52908==w||52936==w||52964==w||52992==w||53020==w||53048==w||53076==w||53104==w||53132==w||53160==w||53188==w||53216==w||53244==w||53272==w||53300==w||53328==w||53356==w||53384==w||53412==w||53440==w||53468==w||53496==w||53524==w||53552==w||53580==w||53608==w||53636==w||53664==w||53692==w||53720==w||53748==w||53776==w||53804==w||53832==w||53860==w||53888==w||53916==w||53944==w||53972==w||54e3==w||54028==w||54056==w||54084==w||54112==w||54140==w||54168==w||54196==w||54224==w||54252==w||54280==w||54308==w||54336==w||54364==w||54392==w||54420==w||54448==w||54476==w||54504==w||54532==w||54560==w||54588==w||54616==w||54644==w||54672==w||54700==w||54728==w||54756==w||54784==w||54812==w||54840==w||54868==w||54896==w||54924==w||54952==w||54980==w||55008==w||55036==w||55064==w||55092==w||55120==w||55148==w||55176==w?f:44033<=w&&w<=44059||44061<=w&&w<=44087||44089<=w&&w<=44115||44117<=w&&w<=44143||44145<=w&&w<=44171||44173<=w&&w<=44199||44201<=w&&w<=44227||44229<=w&&w<=44255||44257<=w&&w<=44283||44285<=w&&w<=44311||44313<=w&&w<=44339||44341<=w&&w<=44367||44369<=w&&w<=44395||44397<=w&&w<=44423||44425<=w&&w<=44451||44453<=w&&w<=44479||44481<=w&&w<=44507||44509<=w&&w<=44535||44537<=w&&w<=44563||44565<=w&&w<=44591||44593<=w&&w<=44619||44621<=w&&w<=44647||44649<=w&&w<=44675||44677<=w&&w<=44703||44705<=w&&w<=44731||44733<=w&&w<=44759||44761<=w&&w<=44787||44789<=w&&w<=44815||44817<=w&&w<=44843||44845<=w&&w<=44871||44873<=w&&w<=44899||44901<=w&&w<=44927||44929<=w&&w<=44955||44957<=w&&w<=44983||44985<=w&&w<=45011||45013<=w&&w<=45039||45041<=w&&w<=45067||45069<=w&&w<=45095||45097<=w&&w<=45123||45125<=w&&w<=45151||45153<=w&&w<=45179||45181<=w&&w<=45207||45209<=w&&w<=45235||45237<=w&&w<=45263||45265<=w&&w<=45291||45293<=w&&w<=45319||45321<=w&&w<=45347||45349<=w&&w<=45375||45377<=w&&w<=45403||45405<=w&&w<=45431||45433<=w&&w<=45459||45461<=w&&w<=45487||45489<=w&&w<=45515||45517<=w&&w<=45543||45545<=w&&w<=45571||45573<=w&&w<=45599||45601<=w&&w<=45627||45629<=w&&w<=45655||45657<=w&&w<=45683||45685<=w&&w<=45711||45713<=w&&w<=45739||45741<=w&&w<=45767||45769<=w&&w<=45795||45797<=w&&w<=45823||45825<=w&&w<=45851||45853<=w&&w<=45879||45881<=w&&w<=45907||45909<=w&&w<=45935||45937<=w&&w<=45963||45965<=w&&w<=45991||45993<=w&&w<=46019||46021<=w&&w<=46047||46049<=w&&w<=46075||46077<=w&&w<=46103||46105<=w&&w<=46131||46133<=w&&w<=46159||46161<=w&&w<=46187||46189<=w&&w<=46215||46217<=w&&w<=46243||46245<=w&&w<=46271||46273<=w&&w<=46299||46301<=w&&w<=46327||46329<=w&&w<=46355||46357<=w&&w<=46383||46385<=w&&w<=46411||46413<=w&&w<=46439||46441<=w&&w<=46467||46469<=w&&w<=46495||46497<=w&&w<=46523||46525<=w&&w<=46551||46553<=w&&w<=46579||46581<=w&&w<=46607||46609<=w&&w<=46635||46637<=w&&w<=46663||46665<=w&&w<=46691||46693<=w&&w<=46719||46721<=w&&w<=46747||46749<=w&&w<=46775||46777<=w&&w<=46803||46805<=w&&w<=46831||46833<=w&&w<=46859||46861<=w&&w<=46887||46889<=w&&w<=46915||46917<=w&&w<=46943||46945<=w&&w<=46971||46973<=w&&w<=46999||47001<=w&&w<=47027||47029<=w&&w<=47055||47057<=w&&w<=47083||47085<=w&&w<=47111||47113<=w&&w<=47139||47141<=w&&w<=47167||47169<=w&&w<=47195||47197<=w&&w<=47223||47225<=w&&w<=47251||47253<=w&&w<=47279||47281<=w&&w<=47307||47309<=w&&w<=47335||47337<=w&&w<=47363||47365<=w&&w<=47391||47393<=w&&w<=47419||47421<=w&&w<=47447||47449<=w&&w<=47475||47477<=w&&w<=47503||47505<=w&&w<=47531||47533<=w&&w<=47559||47561<=w&&w<=47587||47589<=w&&w<=47615||47617<=w&&w<=47643||47645<=w&&w<=47671||47673<=w&&w<=47699||47701<=w&&w<=47727||47729<=w&&w<=47755||47757<=w&&w<=47783||47785<=w&&w<=47811||47813<=w&&w<=47839||47841<=w&&w<=47867||47869<=w&&w<=47895||47897<=w&&w<=47923||47925<=w&&w<=47951||47953<=w&&w<=47979||47981<=w&&w<=48007||48009<=w&&w<=48035||48037<=w&&w<=48063||48065<=w&&w<=48091||48093<=w&&w<=48119||48121<=w&&w<=48147||48149<=w&&w<=48175||48177<=w&&w<=48203||48205<=w&&w<=48231||48233<=w&&w<=48259||48261<=w&&w<=48287||48289<=w&&w<=48315||48317<=w&&w<=48343||48345<=w&&w<=48371||48373<=w&&w<=48399||48401<=w&&w<=48427||48429<=w&&w<=48455||48457<=w&&w<=48483||48485<=w&&w<=48511||48513<=w&&w<=48539||48541<=w&&w<=48567||48569<=w&&w<=48595||48597<=w&&w<=48623||48625<=w&&w<=48651||48653<=w&&w<=48679||48681<=w&&w<=48707||48709<=w&&w<=48735||48737<=w&&w<=48763||48765<=w&&w<=48791||48793<=w&&w<=48819||48821<=w&&w<=48847||48849<=w&&w<=48875||48877<=w&&w<=48903||48905<=w&&w<=48931||48933<=w&&w<=48959||48961<=w&&w<=48987||48989<=w&&w<=49015||49017<=w&&w<=49043||49045<=w&&w<=49071||49073<=w&&w<=49099||49101<=w&&w<=49127||49129<=w&&w<=49155||49157<=w&&w<=49183||49185<=w&&w<=49211||49213<=w&&w<=49239||49241<=w&&w<=49267||49269<=w&&w<=49295||49297<=w&&w<=49323||49325<=w&&w<=49351||49353<=w&&w<=49379||49381<=w&&w<=49407||49409<=w&&w<=49435||49437<=w&&w<=49463||49465<=w&&w<=49491||49493<=w&&w<=49519||49521<=w&&w<=49547||49549<=w&&w<=49575||49577<=w&&w<=49603||49605<=w&&w<=49631||49633<=w&&w<=49659||49661<=w&&w<=49687||49689<=w&&w<=49715||49717<=w&&w<=49743||49745<=w&&w<=49771||49773<=w&&w<=49799||49801<=w&&w<=49827||49829<=w&&w<=49855||49857<=w&&w<=49883||49885<=w&&w<=49911||49913<=w&&w<=49939||49941<=w&&w<=49967||49969<=w&&w<=49995||49997<=w&&w<=50023||50025<=w&&w<=50051||50053<=w&&w<=50079||50081<=w&&w<=50107||50109<=w&&w<=50135||50137<=w&&w<=50163||50165<=w&&w<=50191||50193<=w&&w<=50219||50221<=w&&w<=50247||50249<=w&&w<=50275||50277<=w&&w<=50303||50305<=w&&w<=50331||50333<=w&&w<=50359||50361<=w&&w<=50387||50389<=w&&w<=50415||50417<=w&&w<=50443||50445<=w&&w<=50471||50473<=w&&w<=50499||50501<=w&&w<=50527||50529<=w&&w<=50555||50557<=w&&w<=50583||50585<=w&&w<=50611||50613<=w&&w<=50639||50641<=w&&w<=50667||50669<=w&&w<=50695||50697<=w&&w<=50723||50725<=w&&w<=50751||50753<=w&&w<=50779||50781<=w&&w<=50807||50809<=w&&w<=50835||50837<=w&&w<=50863||50865<=w&&w<=50891||50893<=w&&w<=50919||50921<=w&&w<=50947||50949<=w&&w<=50975||50977<=w&&w<=51003||51005<=w&&w<=51031||51033<=w&&w<=51059||51061<=w&&w<=51087||51089<=w&&w<=51115||51117<=w&&w<=51143||51145<=w&&w<=51171||51173<=w&&w<=51199||51201<=w&&w<=51227||51229<=w&&w<=51255||51257<=w&&w<=51283||51285<=w&&w<=51311||51313<=w&&w<=51339||51341<=w&&w<=51367||51369<=w&&w<=51395||51397<=w&&w<=51423||51425<=w&&w<=51451||51453<=w&&w<=51479||51481<=w&&w<=51507||51509<=w&&w<=51535||51537<=w&&w<=51563||51565<=w&&w<=51591||51593<=w&&w<=51619||51621<=w&&w<=51647||51649<=w&&w<=51675||51677<=w&&w<=51703||51705<=w&&w<=51731||51733<=w&&w<=51759||51761<=w&&w<=51787||51789<=w&&w<=51815||51817<=w&&w<=51843||51845<=w&&w<=51871||51873<=w&&w<=51899||51901<=w&&w<=51927||51929<=w&&w<=51955||51957<=w&&w<=51983||51985<=w&&w<=52011||52013<=w&&w<=52039||52041<=w&&w<=52067||52069<=w&&w<=52095||52097<=w&&w<=52123||52125<=w&&w<=52151||52153<=w&&w<=52179||52181<=w&&w<=52207||52209<=w&&w<=52235||52237<=w&&w<=52263||52265<=w&&w<=52291||52293<=w&&w<=52319||52321<=w&&w<=52347||52349<=w&&w<=52375||52377<=w&&w<=52403||52405<=w&&w<=52431||52433<=w&&w<=52459||52461<=w&&w<=52487||52489<=w&&w<=52515||52517<=w&&w<=52543||52545<=w&&w<=52571||52573<=w&&w<=52599||52601<=w&&w<=52627||52629<=w&&w<=52655||52657<=w&&w<=52683||52685<=w&&w<=52711||52713<=w&&w<=52739||52741<=w&&w<=52767||52769<=w&&w<=52795||52797<=w&&w<=52823||52825<=w&&w<=52851||52853<=w&&w<=52879||52881<=w&&w<=52907||52909<=w&&w<=52935||52937<=w&&w<=52963||52965<=w&&w<=52991||52993<=w&&w<=53019||53021<=w&&w<=53047||53049<=w&&w<=53075||53077<=w&&w<=53103||53105<=w&&w<=53131||53133<=w&&w<=53159||53161<=w&&w<=53187||53189<=w&&w<=53215||53217<=w&&w<=53243||53245<=w&&w<=53271||53273<=w&&w<=53299||53301<=w&&w<=53327||53329<=w&&w<=53355||53357<=w&&w<=53383||53385<=w&&w<=53411||53413<=w&&w<=53439||53441<=w&&w<=53467||53469<=w&&w<=53495||53497<=w&&w<=53523||53525<=w&&w<=53551||53553<=w&&w<=53579||53581<=w&&w<=53607||53609<=w&&w<=53635||53637<=w&&w<=53663||53665<=w&&w<=53691||53693<=w&&w<=53719||53721<=w&&w<=53747||53749<=w&&w<=53775||53777<=w&&w<=53803||53805<=w&&w<=53831||53833<=w&&w<=53859||53861<=w&&w<=53887||53889<=w&&w<=53915||53917<=w&&w<=53943||53945<=w&&w<=53971||53973<=w&&w<=53999||54001<=w&&w<=54027||54029<=w&&w<=54055||54057<=w&&w<=54083||54085<=w&&w<=54111||54113<=w&&w<=54139||54141<=w&&w<=54167||54169<=w&&w<=54195||54197<=w&&w<=54223||54225<=w&&w<=54251||54253<=w&&w<=54279||54281<=w&&w<=54307||54309<=w&&w<=54335||54337<=w&&w<=54363||54365<=w&&w<=54391||54393<=w&&w<=54419||54421<=w&&w<=54447||54449<=w&&w<=54475||54477<=w&&w<=54503||54505<=w&&w<=54531||54533<=w&&w<=54559||54561<=w&&w<=54587||54589<=w&&w<=54615||54617<=w&&w<=54643||54645<=w&&w<=54671||54673<=w&&w<=54699||54701<=w&&w<=54727||54729<=w&&w<=54755||54757<=w&&w<=54783||54785<=w&&w<=54811||54813<=w&&w<=54839||54841<=w&&w<=54867||54869<=w&&w<=54895||54897<=w&&w<=54923||54925<=w&&w<=54951||54953<=w&&w<=54979||54981<=w&&w<=55007||55009<=w&&w<=55035||55037<=w&&w<=55063||55065<=w&&w<=55091||55093<=w&&w<=55119||55121<=w&&w<=55147||55149<=w&&w<=55175||55177<=w&&w<=55203?x:9757==w||9977==w||9994<=w&&w<=9997||127877==w||127938<=w&&w<=127940||127943==w||127946<=w&&w<=127948||128066<=w&&w<=128067||128070<=w&&w<=128080||128110==w||128112<=w&&w<=128120||128124==w||128129<=w&&w<=128131||128133<=w&&w<=128135||128170==w||128372<=w&&w<=128373||128378==w||128400==w||128405<=w&&w<=128406||128581<=w&&w<=128583||128587<=w&&w<=128591||128675==w||128692<=w&&w<=128694||128704==w||128716==w||129304<=w&&w<=129308||129310<=w&&w<=129311||129318==w||129328<=w&&w<=129337||129341<=w&&w<=129342||129489<=w&&w<=129501?p:127995<=w&&w<=127999?c:8205==w?v:9792==w||9794==w||9877<=w&&w<=9878||9992==w||10084==w||127752==w||127806==w||127859==w||127891==w||127908==w||127912==w||127979==w||127981==w||128139==w||128187<=w&&w<=128188||128295==w||128300==w||128488==w||128640==w||128658==w?y:128102<=w&&w<=128105?d:s}return this.nextBreak=function(e,n){if(void 0===n&&(n=0),n<0)return 0;if(n>=e.length-1)return e.length;for(var t=E(C(e,n)),r=[],i=n+1;i<e.length;i++)if(!A(e,i-1)){var a=E(C(e,i));if(Z(t,r,a))return i;r.push(a)}return e.length},this.splitGraphemes=function(e){var n,t=[],r=0;while((n=this.nextBreak(e,r))<e.length)t.push(e.slice(r,n)),r=n;return r<e.length&&t.push(e.slice(r)),t},this.iterateGraphemes=function(e){var n=0,t={next:function(){var t,r;return(r=this.nextBreak(e,n))<e.length?(t=e.slice(n,r),n=r,{value:t,done:!1}):n<e.length?(t=e.slice(n),n=e.length,{value:t,done:!1}):{value:void 0,done:!0}}.bind(this)};return"undefined"!==typeof Symbol&&Symbol.iterator&&(t[Symbol.iterator]=function(){return t}),t},this.countGraphemes=function(e){var n,t=0,r=0;while((n=this.nextBreak(e,r))<e.length)r=n,t++;return r<e.length&&t++,t},this}n["a"]=r},9710:function(e,n,t){"use strict";var r=1e20;function i(e,n,t){return n<t?e<n?n:e>t?t:e:e<t?t:e>n?n:e}function a(e,n){n||(n={});var t,a,o,h,f,x,s,l,p,c,v,y=null==n.cutoff?.25:n.cutoff,d=null==n.radius?8:n.radius,w=n.channel||0;if(ArrayBuffer.isView(e)||Array.isArray(e)){if(!n.width||!n.height)throw Error("For raw data width and height should be provided by options");t=n.width,a=n.height,h=e,x=n.stride?n.stride:Math.floor(e.length/t/a)}else window.HTMLCanvasElement&&e instanceof window.HTMLCanvasElement?(l=e,s=l.getContext("2d"),t=l.width,a=l.height,p=s.getImageData(0,0,t,a),h=p.data,x=4):window.CanvasRenderingContext2D&&e instanceof window.CanvasRenderingContext2D?(l=e.canvas,s=e,t=l.width,a=l.height,p=s.getImageData(0,0,t,a),h=p.data,x=4):window.ImageData&&e instanceof window.ImageData&&(p=e,t=e.width,a=e.height,h=p.data,x=4);if(o=Math.max(t,a),window.Uint8ClampedArray&&h instanceof window.Uint8ClampedArray||window.Uint8Array&&h instanceof window.Uint8Array)for(f=h,h=Array(t*a),c=0,v=f.length;c<v;c++)h[c]=f[c*x+w]/255;else if(1!==x)throw Error("Raw data can have only 1 value per pixel");var g=Array(t*a),m=Array(t*a),b=Array(o),M=Array(o),A=Array(o+1),C=Array(o);for(c=0,v=t*a;c<v;c++){var Z=h[c];g[c]=1===Z?0:0===Z?r:Math.pow(Math.max(0,.5-Z),2),m[c]=1===Z?r:0===Z?0:Math.pow(Math.max(0,Z-.5),2)}u(g,t,a,b,M,C,A),u(m,t,a,b,M,C,A);var E=window.Float32Array?new Float32Array(t*a):new Array(t*a);for(c=0,v=t*a;c<v;c++)E[c]=i(1-((g[c]-m[c])/d+y),0,1);return E}function u(e,n,t,r,i,a,u){for(var h=0;h<n;h++){for(var f=0;f<t;f++)r[f]=e[f*n+h];for(o(r,i,a,u,t),f=0;f<t;f++)e[f*n+h]=i[f]}for(f=0;f<t;f++){for(h=0;h<n;h++)r[h]=e[f*n+h];for(o(r,i,a,u,n),h=0;h<n;h++)e[f*n+h]=Math.sqrt(i[h])}}function o(e,n,t,i,a){t[0]=0,i[0]=-r,i[1]=+r;for(var u=1,o=0;u<a;u++){var h=(e[u]+u*u-(e[t[o]]+t[o]*t[o]))/(2*u-2*t[o]);while(h<=i[o])o--,h=(e[u]+u*u-(e[t[o]]+t[o]*t[o]))/(2*u-2*t[o]);o++,t[o]=u,i[o]=h,i[o+1]=+r}for(u=0,o=0;u<a;u++){while(i[o+1]<u)o++;n[u]=(u-t[o])*(u-t[o])+e[t[o]]}}n["a"]=a},"98be":function(e,n,t){"use strict";function r(e,n,t,r,a){return new i(e,n,t,r,a)}function i(e,n,t,r,i){n=n||a,t=t||u,i=i||Array,this.nodeSize=r||64,this.points=e,this.ids=new i(e.length),this.coords=new i(2*e.length);for(var o=0;o<e.length;o++)this.ids[o]=o,this.coords[2*o]=n(e[o]),this.coords[2*o+1]=t(e[o]);h(this.ids,this.coords,this.nodeSize,0,this.ids.length-1,0)}function a(e){return e[0]}function u(e){return e[1]}function o(e,n,t,r,i,a,u){var o,h,f=[0,e.length-1,0],x=[];while(f.length){var s=f.pop(),l=f.pop(),p=f.pop();if(l-p<=u)for(var c=p;c<=l;c++)o=n[2*c],h=n[2*c+1],o>=t&&o<=i&&h>=r&&h<=a&&x.push(e[c]);else{var v=Math.floor((p+l)/2);o=n[2*v],h=n[2*v+1],o>=t&&o<=i&&h>=r&&h<=a&&x.push(e[v]);var y=(s+1)%2;(0===s?t<=o:r<=h)&&(f.push(p),f.push(v-1),f.push(y)),(0===s?i>=o:a>=h)&&(f.push(v+1),f.push(l),f.push(y))}}return x}function h(e,n,t,r,i,a){if(!(i-r<=t)){var u=Math.floor((r+i)/2);f(e,n,u,r,i,a%2),h(e,n,t,r,u-1,a+1),h(e,n,t,u+1,i,a+1)}}function f(e,n,t,r,i,a){while(i>r){if(i-r>600){var u=i-r+1,o=t-r+1,h=Math.log(u),s=.5*Math.exp(2*h/3),l=.5*Math.sqrt(h*s*(u-s)/u)*(o-u/2<0?-1:1),p=Math.max(r,Math.floor(t-o*s/u+l)),c=Math.min(i,Math.floor(t+(u-o)*s/u+l));f(e,n,t,p,c,a)}var v=n[2*t+a],y=r,d=i;x(e,n,r,t),n[2*i+a]>v&&x(e,n,r,i);while(y<d){x(e,n,y,d),y++,d--;while(n[2*y+a]<v)y++;while(n[2*d+a]>v)d--}n[2*r+a]===v?x(e,n,r,d):(d++,x(e,n,d,i)),d<=t&&(r=d+1),t<=d&&(i=d-1)}}function x(e,n,t,r){s(e,t,r),s(n,2*t,2*r),s(n,2*t+1,2*r+1)}function s(e,n,t){var r=e[n];e[n]=e[t],e[t]=r}function l(e,n,t,r,i,a){var u=[0,e.length-1,0],o=[],h=i*i;while(u.length){var f=u.pop(),x=u.pop(),s=u.pop();if(x-s<=a)for(var l=s;l<=x;l++)p(n[2*l],n[2*l+1],t,r)<=h&&o.push(e[l]);else{var c=Math.floor((s+x)/2),v=n[2*c],y=n[2*c+1];p(v,y,t,r)<=h&&o.push(e[c]);var d=(f+1)%2;(0===f?t-i<=v:r-i<=y)&&(u.push(s),u.push(c-1),u.push(d)),(0===f?t+i>=v:r+i>=y)&&(u.push(c+1),u.push(x),u.push(d))}}return o}function p(e,n,t,r){var i=e-t,a=n-r;return i*i+a*a}i.prototype={range:function(e,n,t,r){return o(this.ids,this.coords,e,n,t,r,this.nodeSize)},within:function(e,n,t){return l(this.ids,this.coords,e,n,t,this.nodeSize)}},n["a"]=r},e787:function(e,n,t){"use strict";var r={};(function(e){var n="Compound",t="Identifier",r="MemberExpression",i="Literal",a="ThisExpression",u="CallExpression",o="UnaryExpression",h="BinaryExpression",f="LogicalExpression",x="ConditionalExpression",s="ArrayExpression",l=46,p=44,c=39,v=34,y=40,d=41,w=91,g=93,m=63,b=59,M=58,A=function(e,n){var t=new Error(e+" at character "+n);throw t.index=n,t.description=e,t},C=!0,Z={"-":C,"!":C,"~":C,"+":C},E={"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},k=function(e){var n,t=0;for(var r in e)(n=r.length)>t&&e.hasOwnProperty(r)&&(t=n);return t},O=k(Z),U=k(E),z={true:!0,false:!1,null:null},S="this",B=function(e){return E[e]||0},I=function(e,n,t){var r="||"===e||"&&"===e?f:h;return{type:r,operator:e,left:n,right:t}},L=function(e){return e>=48&&e<=57},D=function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=128&&!E[String.fromCharCode(e)]},P=function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e>=128&&!E[String.fromCharCode(e)]},j=function(e){var h,f,C=0,k=e.charAt,j=e.charCodeAt,q=function(n){return k.call(e,n)},F=function(n){return j.call(e,n)},J=e.length,G=function(){var e=F(C);while(32===e||9===e)e=F(++C)},R=function(){var e,n,t=H();return G(),F(C)!==m?t:(C++,e=R(),e||A("Expected expression",C),G(),F(C)===M?(C++,n=R(),n||A("Expected expression",C),{type:x,test:t,consequent:e,alternate:n}):void A("Expected :",C))},T=function(){G();var n=e.substr(C,U),t=n.length;while(t>0){if(E.hasOwnProperty(n))return C+=t,n;n=n.substr(0,--t)}return!1},H=function(){var e,n,t,r,i,a,u,o;if(a=V(),n=T(),!n)return a;i={value:n,prec:B(n)},u=V(),u||A("Expected expression after "+n,C),r=[a,i,u];while(n=T()){if(t=B(n),0===t)break;i={value:n,prec:t};while(r.length>2&&t<=r[r.length-2].prec)u=r.pop(),n=r.pop().value,a=r.pop(),e=I(n,a,u),r.push(e);e=V(),e||A("Expected expression after "+n,C),r.push(i,e)}o=r.length-1,e=r[o];while(o>1)e=I(r[o-1].value,r[o-2],e),o-=2;return e},V=function(){var n,t,r;if(G(),n=F(C),L(n)||n===l)return K();if(n===c||n===v)return N();if(D(n)||n===y)return X();if(n===w)return $();t=e.substr(C,O),r=t.length;while(r>0){if(Z.hasOwnProperty(t))return C+=r,{type:o,operator:t,argument:V(),prefix:!0};t=t.substr(0,--r)}return!1},K=function(){var e,n,t="";while(L(F(C)))t+=q(C++);if(F(C)===l){t+=q(C++);while(L(F(C)))t+=q(C++)}if(e=q(C),"e"===e||"E"===e){t+=q(C++),e=q(C),"+"!==e&&"-"!==e||(t+=q(C++));while(L(F(C)))t+=q(C++);L(F(C-1))||A("Expected exponent ("+t+q(C)+")",C)}return n=F(C),D(n)?A("Variable names cannot start with a number ("+t+q(C)+")",C):n===l&&A("Unexpected period",C),{type:i,value:parseFloat(t),raw:t}},N=function(){var e,n="",t=q(C++),r=!1;while(C<J){if(e=q(C++),e===t){r=!0;break}if("\\"===e)switch(e=q(C++),e){case"n":n+="\n";break;case"r":n+="\r";break;case"t":n+="\t";break;case"b":n+="\b";break;case"f":n+="\f";break;case"v":n+="\v";break;default:n+="\\"+e}else n+=e}return r||A('Unclosed quote after "'+n+'"',C),{type:i,value:n,raw:t+n+t}},Q=function(){var n,r=F(C),u=C;D(r)?C++:A("Unexpected "+q(C),C);while(C<J){if(r=F(C),!P(r))break;C++}return n=e.slice(u,C),z.hasOwnProperty(n)?{type:i,value:z[n],raw:n}:n===S?{type:a}:{type:t,name:n}},W=function(e){var t,r,i=[],a=!1;while(C<J){if(G(),t=F(C),t===e){a=!0,C++;break}t===p?C++:(r=R(),r&&r.type!==n||A("Expected comma",C),i.push(r))}return a||A("Expected "+String.fromCharCode(e),C),i},X=function(){var e,n;e=F(C),n=e===y?Y():Q(),G(),e=F(C);while(e===l||e===w||e===y)C++,e===l?(G(),n={type:r,computed:!1,object:n,property:Q()}):e===w?(n={type:r,computed:!0,object:n,property:R()},G(),e=F(C),e!==g&&A("Unclosed [",C),C++):e===y&&(n={type:u,arguments:W(d),callee:n}),G(),e=F(C);return n},Y=function(){C++;var e=R();if(G(),F(C)===d)return C++,e;A("Unclosed (",C)},$=function(){return C++,{type:s,elements:W(g)}},_=[];while(C<J)h=F(C),h===b||h===p?C++:(f=R())?_.push(f):C<J&&A('Unexpected "'+q(C)+'"',C);return 1===_.length?_[0]:{type:n,body:_}};j.version="0.3.1",j.toString=function(){return"JavaScript Expression Parser (JSEP) v"+j.version},j.addUnaryOp=function(e){return O=Math.max(e.length,O),Z[e]=C,this},j.addBinaryOp=function(e,n){return U=Math.max(e.length,U),E[e]=n,this},j.addLiteral=function(e,n){return z[e]=n,this},j.removeUnaryOp=function(e){return delete Z[e],e.length===O&&(O=k(Z)),this},j.removeAllUnaryOps=function(){return Z={},O=0,this},j.removeBinaryOp=function(e){return delete E[e],e.length===U&&(U=k(E)),this},j.removeAllBinaryOps=function(){return E={},U=0,this},j.removeLiteral=function(e){return delete z[e],this},j.removeAllLiterals=function(){return z={},this},e.jsep=j})(r),n["a"]=r.jsep}}]);