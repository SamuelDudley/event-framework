(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~35e52684"],{"52f0":function(t,a,n){"use strict";var e=n("be18"),r=n("a561"),o=n("535a"),i=n("2f63"),u=n("9f1d"),c=n("45c5"),s=n("0e25"),l=n("93da"),f=n("df07"),h=n("283e");function O(t,a,n,e,r,i,u,c,s,l,f,h,O,b,m,M){this[0]=Object(o["a"])(t,0),this[1]=Object(o["a"])(r,0),this[2]=Object(o["a"])(s,0),this[3]=Object(o["a"])(O,0),this[4]=Object(o["a"])(a,0),this[5]=Object(o["a"])(i,0),this[6]=Object(o["a"])(l,0),this[7]=Object(o["a"])(b,0),this[8]=Object(o["a"])(n,0),this[9]=Object(o["a"])(u,0),this[10]=Object(o["a"])(f,0),this[11]=Object(o["a"])(m,0),this[12]=Object(o["a"])(e,0),this[13]=Object(o["a"])(c,0),this[14]=Object(o["a"])(h,0),this[15]=Object(o["a"])(M,0)}O.packedLength=16,O.pack=function(t,a,n){return n=Object(o["a"])(n,0),a[n++]=t[0],a[n++]=t[1],a[n++]=t[2],a[n++]=t[3],a[n++]=t[4],a[n++]=t[5],a[n++]=t[6],a[n++]=t[7],a[n++]=t[8],a[n++]=t[9],a[n++]=t[10],a[n++]=t[11],a[n++]=t[12],a[n++]=t[13],a[n++]=t[14],a[n]=t[15],a},O.unpack=function(t,a,n){return a=Object(o["a"])(a,0),Object(i["a"])(n)||(n=new O),n[0]=t[a++],n[1]=t[a++],n[2]=t[a++],n[3]=t[a++],n[4]=t[a++],n[5]=t[a++],n[6]=t[a++],n[7]=t[a++],n[8]=t[a++],n[9]=t[a++],n[10]=t[a++],n[11]=t[a++],n[12]=t[a++],n[13]=t[a++],n[14]=t[a++],n[15]=t[a],n},O.clone=function(t,a){if(Object(i["a"])(t))return Object(i["a"])(a)?(a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a):new O(t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15])},O.fromArray=O.unpack,O.fromColumnMajorArray=function(t,a){return O.clone(t,a)},O.fromRowMajorArray=function(t,a){return Object(i["a"])(a)?(a[0]=t[0],a[1]=t[4],a[2]=t[8],a[3]=t[12],a[4]=t[1],a[5]=t[5],a[6]=t[9],a[7]=t[13],a[8]=t[2],a[9]=t[6],a[10]=t[10],a[11]=t[14],a[12]=t[3],a[13]=t[7],a[14]=t[11],a[15]=t[15],a):new O(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},O.fromRotationTranslation=function(t,a,n){return a=Object(o["a"])(a,e["a"].ZERO),Object(i["a"])(n)?(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=0,n[4]=t[3],n[5]=t[4],n[6]=t[5],n[7]=0,n[8]=t[6],n[9]=t[7],n[10]=t[8],n[11]=0,n[12]=a.x,n[13]=a.y,n[14]=a.z,n[15]=1,n):new O(t[0],t[3],t[6],a.x,t[1],t[4],t[7],a.y,t[2],t[5],t[8],a.z,0,0,0,1)},O.fromTranslationQuaternionRotationScale=function(t,a,n,e){Object(i["a"])(e)||(e=new O);var r=n.x,o=n.y,u=n.z,c=a.x*a.x,s=a.x*a.y,l=a.x*a.z,f=a.x*a.w,h=a.y*a.y,b=a.y*a.z,m=a.y*a.w,M=a.z*a.z,y=a.z*a.w,d=a.w*a.w,p=c-h-M+d,v=2*(s-y),j=2*(l+m),x=2*(s+y),E=-c+h-M+d,R=2*(b-f),P=2*(l-m),w=2*(b+f),g=-c-h+M+d;return e[0]=p*r,e[1]=x*r,e[2]=P*r,e[3]=0,e[4]=v*o,e[5]=E*o,e[6]=w*o,e[7]=0,e[8]=j*u,e[9]=R*u,e[10]=g*u,e[11]=0,e[12]=t.x,e[13]=t.y,e[14]=t.z,e[15]=1,e},O.fromTranslationRotationScale=function(t,a){return O.fromTranslationQuaternionRotationScale(t.translation,t.rotation,t.scale,a)},O.fromTranslation=function(t,a){return O.fromRotationTranslation(f["a"].IDENTITY,t,a)},O.fromScale=function(t,a){return Object(i["a"])(a)?(a[0]=t.x,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=t.y,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=t.z,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a):new O(t.x,0,0,0,0,t.y,0,0,0,0,t.z,0,0,0,0,1)},O.fromUniformScale=function(t,a){return Object(i["a"])(a)?(a[0]=t,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=t,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=t,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a):new O(t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1)};var b=new e["a"],m=new e["a"],M=new e["a"];O.fromCamera=function(t,a){var n=t.position,r=t.direction,o=t.up;e["a"].normalize(r,b),e["a"].normalize(e["a"].cross(b,o,m),m),e["a"].normalize(e["a"].cross(m,b,M),M);var u=m.x,c=m.y,s=m.z,l=b.x,f=b.y,h=b.z,y=M.x,d=M.y,p=M.z,v=n.x,j=n.y,x=n.z,E=u*-v+c*-j+s*-x,R=y*-v+d*-j+p*-x,P=l*v+f*j+h*x;return Object(i["a"])(a)?(a[0]=u,a[1]=y,a[2]=-l,a[3]=0,a[4]=c,a[5]=d,a[6]=-f,a[7]=0,a[8]=s,a[9]=p,a[10]=-h,a[11]=0,a[12]=E,a[13]=R,a[14]=P,a[15]=1,a):new O(u,c,s,E,y,d,p,R,-l,-f,-h,P,0,0,0,1)},O.computePerspectiveFieldOfView=function(t,a,n,e,r){var o=Math.tan(.5*t),i=1/o,u=i/a,c=(e+n)/(n-e),s=2*e*n/(n-e);return r[0]=u,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=i,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=c,r[11]=-1,r[12]=0,r[13]=0,r[14]=s,r[15]=0,r},O.computeOrthographicOffCenter=function(t,a,n,e,r,o,i){var u=1/(a-t),c=1/(e-n),s=1/(o-r),l=-(a+t)*u,f=-(e+n)*c,h=-(o+r)*s;return u*=2,c*=2,s*=-2,i[0]=u,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=c,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=s,i[11]=0,i[12]=l,i[13]=f,i[14]=h,i[15]=1,i},O.computePerspectiveOffCenter=function(t,a,n,e,r,o,i){var u=2*r/(a-t),c=2*r/(e-n),s=(a+t)/(a-t),l=(e+n)/(e-n),f=-(o+r)/(o-r),h=-1,O=-2*o*r/(o-r);return i[0]=u,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=c,i[6]=0,i[7]=0,i[8]=s,i[9]=l,i[10]=f,i[11]=h,i[12]=0,i[13]=0,i[14]=O,i[15]=0,i},O.computeInfinitePerspectiveOffCenter=function(t,a,n,e,r,o){var i=2*r/(a-t),u=2*r/(e-n),c=(a+t)/(a-t),s=(e+n)/(e-n),l=-1,f=-1,h=-2*r;return o[0]=i,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=u,o[6]=0,o[7]=0,o[8]=c,o[9]=s,o[10]=l,o[11]=f,o[12]=0,o[13]=0,o[14]=h,o[15]=0,o},O.computeViewportTransformation=function(t,a,n,e){t=Object(o["a"])(t,o["a"].EMPTY_OBJECT);var r=Object(o["a"])(t.x,0),i=Object(o["a"])(t.y,0),u=Object(o["a"])(t.width,0),c=Object(o["a"])(t.height,0);a=Object(o["a"])(a,0),n=Object(o["a"])(n,1);var s=.5*u,l=.5*c,f=.5*(n-a),h=s,O=l,b=f,m=r+s,M=i+l,y=a+f,d=1;return e[0]=h,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=O,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=b,e[11]=0,e[12]=m,e[13]=M,e[14]=y,e[15]=d,e},O.computeView=function(t,a,n,r,o){return o[0]=r.x,o[1]=n.x,o[2]=-a.x,o[3]=0,o[4]=r.y,o[5]=n.y,o[6]=-a.y,o[7]=0,o[8]=r.z,o[9]=n.z,o[10]=-a.z,o[11]=0,o[12]=-e["a"].dot(r,t),o[13]=-e["a"].dot(n,t),o[14]=e["a"].dot(a,t),o[15]=1,o},O.toArray=function(t,a){return Object(i["a"])(a)?(a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a):[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]},O.getElementIndex=function(t,a){return 4*t+a},O.getColumn=function(t,a,n){var e=4*a,r=t[e],o=t[e+1],i=t[e+2],u=t[e+3];return n.x=r,n.y=o,n.z=i,n.w=u,n},O.setColumn=function(t,a,n,e){e=O.clone(t,e);var r=4*a;return e[r]=n.x,e[r+1]=n.y,e[r+2]=n.z,e[r+3]=n.w,e},O.setTranslation=function(t,a,n){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=a.x,n[13]=a.y,n[14]=a.z,n[15]=t[15],n};var y=new e["a"];O.setScale=function(t,a,n){var r=O.getScale(t,y),o=e["a"].divideComponents(a,r,y);return O.multiplyByScale(t,o,n)},O.getRow=function(t,a,n){var e=t[a],r=t[a+4],o=t[a+8],i=t[a+12];return n.x=e,n.y=r,n.z=o,n.w=i,n},O.setRow=function(t,a,n,e){return e=O.clone(t,e),e[a]=n.x,e[a+4]=n.y,e[a+8]=n.z,e[a+12]=n.w,e};var d=new e["a"];O.getScale=function(t,a){return a.x=e["a"].magnitude(e["a"].fromElements(t[0],t[1],t[2],d)),a.y=e["a"].magnitude(e["a"].fromElements(t[4],t[5],t[6],d)),a.z=e["a"].magnitude(e["a"].fromElements(t[8],t[9],t[10],d)),a};var p=new e["a"];O.getMaximumScale=function(t){return O.getScale(t,p),e["a"].maximumComponent(p)},O.multiply=function(t,a,n){var e=t[0],r=t[1],o=t[2],i=t[3],u=t[4],c=t[5],s=t[6],l=t[7],f=t[8],h=t[9],O=t[10],b=t[11],m=t[12],M=t[13],y=t[14],d=t[15],p=a[0],v=a[1],j=a[2],x=a[3],E=a[4],R=a[5],P=a[6],w=a[7],g=a[8],z=a[9],I=a[10],_=a[11],S=a[12],N=a[13],L=a[14],T=a[15],A=e*p+u*v+f*j+m*x,C=r*p+c*v+h*j+M*x,q=o*p+s*v+O*j+y*x,U=i*p+l*v+b*j+d*x,V=e*E+u*R+f*P+m*w,W=r*E+c*R+h*P+M*w,D=o*E+s*R+O*P+y*w,B=i*E+l*R+b*P+d*w,k=e*g+u*z+f*I+m*_,Y=r*g+c*z+h*I+M*_,G=o*g+s*z+O*I+y*_,F=i*g+l*z+b*I+d*_,X=e*S+u*N+f*L+m*T,Z=r*S+c*N+h*L+M*T,H=o*S+s*N+O*L+y*T,J=i*S+l*N+b*L+d*T;return n[0]=A,n[1]=C,n[2]=q,n[3]=U,n[4]=V,n[5]=W,n[6]=D,n[7]=B,n[8]=k,n[9]=Y,n[10]=G,n[11]=F,n[12]=X,n[13]=Z,n[14]=H,n[15]=J,n},O.add=function(t,a,n){return n[0]=t[0]+a[0],n[1]=t[1]+a[1],n[2]=t[2]+a[2],n[3]=t[3]+a[3],n[4]=t[4]+a[4],n[5]=t[5]+a[5],n[6]=t[6]+a[6],n[7]=t[7]+a[7],n[8]=t[8]+a[8],n[9]=t[9]+a[9],n[10]=t[10]+a[10],n[11]=t[11]+a[11],n[12]=t[12]+a[12],n[13]=t[13]+a[13],n[14]=t[14]+a[14],n[15]=t[15]+a[15],n},O.subtract=function(t,a,n){return n[0]=t[0]-a[0],n[1]=t[1]-a[1],n[2]=t[2]-a[2],n[3]=t[3]-a[3],n[4]=t[4]-a[4],n[5]=t[5]-a[5],n[6]=t[6]-a[6],n[7]=t[7]-a[7],n[8]=t[8]-a[8],n[9]=t[9]-a[9],n[10]=t[10]-a[10],n[11]=t[11]-a[11],n[12]=t[12]-a[12],n[13]=t[13]-a[13],n[14]=t[14]-a[14],n[15]=t[15]-a[15],n},O.multiplyTransformation=function(t,a,n){var e=t[0],r=t[1],o=t[2],i=t[4],u=t[5],c=t[6],s=t[8],l=t[9],f=t[10],h=t[12],O=t[13],b=t[14],m=a[0],M=a[1],y=a[2],d=a[4],p=a[5],v=a[6],j=a[8],x=a[9],E=a[10],R=a[12],P=a[13],w=a[14],g=e*m+i*M+s*y,z=r*m+u*M+l*y,I=o*m+c*M+f*y,_=e*d+i*p+s*v,S=r*d+u*p+l*v,N=o*d+c*p+f*v,L=e*j+i*x+s*E,T=r*j+u*x+l*E,A=o*j+c*x+f*E,C=e*R+i*P+s*w+h,q=r*R+u*P+l*w+O,U=o*R+c*P+f*w+b;return n[0]=g,n[1]=z,n[2]=I,n[3]=0,n[4]=_,n[5]=S,n[6]=N,n[7]=0,n[8]=L,n[9]=T,n[10]=A,n[11]=0,n[12]=C,n[13]=q,n[14]=U,n[15]=1,n},O.multiplyByMatrix3=function(t,a,n){var e=t[0],r=t[1],o=t[2],i=t[4],u=t[5],c=t[6],s=t[8],l=t[9],f=t[10],h=a[0],O=a[1],b=a[2],m=a[3],M=a[4],y=a[5],d=a[6],p=a[7],v=a[8],j=e*h+i*O+s*b,x=r*h+u*O+l*b,E=o*h+c*O+f*b,R=e*m+i*M+s*y,P=r*m+u*M+l*y,w=o*m+c*M+f*y,g=e*d+i*p+s*v,z=r*d+u*p+l*v,I=o*d+c*p+f*v;return n[0]=j,n[1]=x,n[2]=E,n[3]=0,n[4]=R,n[5]=P,n[6]=w,n[7]=0,n[8]=g,n[9]=z,n[10]=I,n[11]=0,n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n},O.multiplyByTranslation=function(t,a,n){var e=a.x,r=a.y,o=a.z,i=e*t[0]+r*t[4]+o*t[8]+t[12],u=e*t[1]+r*t[5]+o*t[9]+t[13],c=e*t[2]+r*t[6]+o*t[10]+t[14];return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=i,n[13]=u,n[14]=c,n[15]=t[15],n};var v=new e["a"];O.multiplyByUniformScale=function(t,a,n){return v.x=a,v.y=a,v.z=a,O.multiplyByScale(t,v,n)},O.multiplyByScale=function(t,a,n){var e=a.x,r=a.y,o=a.z;return 1===e&&1===r&&1===o?O.clone(t,n):(n[0]=e*t[0],n[1]=e*t[1],n[2]=e*t[2],n[3]=0,n[4]=r*t[4],n[5]=r*t[5],n[6]=r*t[6],n[7]=0,n[8]=o*t[8],n[9]=o*t[9],n[10]=o*t[10],n[11]=0,n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=1,n)},O.multiplyByVector=function(t,a,n){var e=a.x,r=a.y,o=a.z,i=a.w,u=t[0]*e+t[4]*r+t[8]*o+t[12]*i,c=t[1]*e+t[5]*r+t[9]*o+t[13]*i,s=t[2]*e+t[6]*r+t[10]*o+t[14]*i,l=t[3]*e+t[7]*r+t[11]*o+t[15]*i;return n.x=u,n.y=c,n.z=s,n.w=l,n},O.multiplyByPointAsVector=function(t,a,n){var e=a.x,r=a.y,o=a.z,i=t[0]*e+t[4]*r+t[8]*o,u=t[1]*e+t[5]*r+t[9]*o,c=t[2]*e+t[6]*r+t[10]*o;return n.x=i,n.y=u,n.z=c,n},O.multiplyByPoint=function(t,a,n){var e=a.x,r=a.y,o=a.z,i=t[0]*e+t[4]*r+t[8]*o+t[12],u=t[1]*e+t[5]*r+t[9]*o+t[13],c=t[2]*e+t[6]*r+t[10]*o+t[14];return n.x=i,n.y=u,n.z=c,n},O.multiplyByScalar=function(t,a,n){return n[0]=t[0]*a,n[1]=t[1]*a,n[2]=t[2]*a,n[3]=t[3]*a,n[4]=t[4]*a,n[5]=t[5]*a,n[6]=t[6]*a,n[7]=t[7]*a,n[8]=t[8]*a,n[9]=t[9]*a,n[10]=t[10]*a,n[11]=t[11]*a,n[12]=t[12]*a,n[13]=t[13]*a,n[14]=t[14]*a,n[15]=t[15]*a,n},O.negate=function(t,a){return a[0]=-t[0],a[1]=-t[1],a[2]=-t[2],a[3]=-t[3],a[4]=-t[4],a[5]=-t[5],a[6]=-t[6],a[7]=-t[7],a[8]=-t[8],a[9]=-t[9],a[10]=-t[10],a[11]=-t[11],a[12]=-t[12],a[13]=-t[13],a[14]=-t[14],a[15]=-t[15],a},O.transpose=function(t,a){var n=t[1],e=t[2],r=t[3],o=t[6],i=t[7],u=t[11];return a[0]=t[0],a[1]=t[4],a[2]=t[8],a[3]=t[12],a[4]=n,a[5]=t[5],a[6]=t[9],a[7]=t[13],a[8]=e,a[9]=o,a[10]=t[10],a[11]=t[14],a[12]=r,a[13]=i,a[14]=u,a[15]=t[15],a},O.abs=function(t,a){return a[0]=Math.abs(t[0]),a[1]=Math.abs(t[1]),a[2]=Math.abs(t[2]),a[3]=Math.abs(t[3]),a[4]=Math.abs(t[4]),a[5]=Math.abs(t[5]),a[6]=Math.abs(t[6]),a[7]=Math.abs(t[7]),a[8]=Math.abs(t[8]),a[9]=Math.abs(t[9]),a[10]=Math.abs(t[10]),a[11]=Math.abs(t[11]),a[12]=Math.abs(t[12]),a[13]=Math.abs(t[13]),a[14]=Math.abs(t[14]),a[15]=Math.abs(t[15]),a},O.equals=function(t,a){return t===a||Object(i["a"])(t)&&Object(i["a"])(a)&&t[12]===a[12]&&t[13]===a[13]&&t[14]===a[14]&&t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[8]===a[8]&&t[9]===a[9]&&t[10]===a[10]&&t[3]===a[3]&&t[7]===a[7]&&t[11]===a[11]&&t[15]===a[15]},O.equalsEpsilon=function(t,a,n){return t===a||Object(i["a"])(t)&&Object(i["a"])(a)&&Math.abs(t[0]-a[0])<=n&&Math.abs(t[1]-a[1])<=n&&Math.abs(t[2]-a[2])<=n&&Math.abs(t[3]-a[3])<=n&&Math.abs(t[4]-a[4])<=n&&Math.abs(t[5]-a[5])<=n&&Math.abs(t[6]-a[6])<=n&&Math.abs(t[7]-a[7])<=n&&Math.abs(t[8]-a[8])<=n&&Math.abs(t[9]-a[9])<=n&&Math.abs(t[10]-a[10])<=n&&Math.abs(t[11]-a[11])<=n&&Math.abs(t[12]-a[12])<=n&&Math.abs(t[13]-a[13])<=n&&Math.abs(t[14]-a[14])<=n&&Math.abs(t[15]-a[15])<=n},O.getTranslation=function(t,a){return a.x=t[12],a.y=t[13],a.z=t[14],a},O.getRotation=function(t,a){return Object(c["a"])("Matrix4.getRotation","Matrix4.getRotation is deprecated and will be removed in Cesium 1.65. Use Matrix4.getMatrix3 instead."),O.getMatrix3(t,a)},O.getMatrix3=function(t,a){return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[4],a[4]=t[5],a[5]=t[6],a[6]=t[8],a[7]=t[9],a[8]=t[10],a};var j=new f["a"],x=new f["a"],E=new r["a"],R=new r["a"](0,0,0,1);O.inverse=function(t,a){var n=t[0],e=t[4],o=t[8],i=t[12],u=t[1],c=t[5],s=t[9],b=t[13],m=t[2],M=t[6],y=t[10],d=t[14],p=t[3],v=t[7],P=t[11],w=t[15],g=y*w,z=d*P,I=M*w,_=d*v,S=M*P,N=y*v,L=m*w,T=d*p,A=m*P,C=y*p,q=m*v,U=M*p,V=g*c+_*s+S*b-(z*c+I*s+N*b),W=z*u+L*s+C*b-(g*u+T*s+A*b),D=I*u+T*c+q*b-(_*u+L*c+U*b),B=N*u+A*c+U*s-(S*u+C*c+q*s),k=z*e+I*o+N*i-(g*e+_*o+S*i),Y=g*n+T*o+A*i-(z*n+L*o+C*i),G=_*n+L*e+U*i-(I*n+T*e+q*i),F=S*n+C*e+q*o-(N*n+A*e+U*o);g=o*b,z=i*s,I=e*b,_=i*c,S=e*s,N=o*c,L=n*b,T=i*u,A=n*s,C=o*u,q=n*c,U=e*u;var X=g*v+_*P+S*w-(z*v+I*P+N*w),Z=z*p+L*P+C*w-(g*p+T*P+A*w),H=I*p+T*v+q*w-(_*p+L*v+U*w),J=N*p+A*v+U*P-(S*p+C*v+q*P),Q=I*y+N*d+z*M-(S*d+g*M+_*y),K=A*d+g*m+T*y-(L*y+C*d+z*m),$=L*M+U*d+_*m-(q*d+I*m+T*M),tt=q*y+S*m+C*M-(A*M+U*y+N*m),at=n*V+e*W+o*D+i*B;if(Math.abs(at)<l["a"].EPSILON21){if(f["a"].equalsEpsilon(O.getMatrix3(t,j),x,l["a"].EPSILON7)&&r["a"].equals(O.getRow(t,3,E),R))return a[0]=0,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=0,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=0,a[11]=0,a[12]=-t[12],a[13]=-t[13],a[14]=-t[14],a[15]=1,a;throw new h["a"]("matrix is not invertible because its determinate is zero.")}return at=1/at,a[0]=V*at,a[1]=W*at,a[2]=D*at,a[3]=B*at,a[4]=k*at,a[5]=Y*at,a[6]=G*at,a[7]=F*at,a[8]=X*at,a[9]=Z*at,a[10]=H*at,a[11]=J*at,a[12]=Q*at,a[13]=K*at,a[14]=$*at,a[15]=tt*at,a},O.inverseTransformation=function(t,a){var n=t[0],e=t[1],r=t[2],o=t[4],i=t[5],u=t[6],c=t[8],s=t[9],l=t[10],f=t[12],h=t[13],O=t[14],b=-n*f-e*h-r*O,m=-o*f-i*h-u*O,M=-c*f-s*h-l*O;return a[0]=n,a[1]=o,a[2]=c,a[3]=0,a[4]=e,a[5]=i,a[6]=s,a[7]=0,a[8]=r,a[9]=u,a[10]=l,a[11]=0,a[12]=b,a[13]=m,a[14]=M,a[15]=1,a},O.IDENTITY=Object(s["a"])(new O(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)),O.ZERO=Object(s["a"])(new O(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)),O.COLUMN0ROW0=0,O.COLUMN0ROW1=1,O.COLUMN0ROW2=2,O.COLUMN0ROW3=3,O.COLUMN1ROW0=4,O.COLUMN1ROW1=5,O.COLUMN1ROW2=6,O.COLUMN1ROW3=7,O.COLUMN2ROW0=8,O.COLUMN2ROW1=9,O.COLUMN2ROW2=10,O.COLUMN2ROW3=11,O.COLUMN3ROW0=12,O.COLUMN3ROW1=13,O.COLUMN3ROW2=14,O.COLUMN3ROW3=15,Object(u["a"])(O.prototype,{length:{get:function(){return O.packedLength}}}),O.prototype.clone=function(t){return O.clone(this,t)},O.prototype.equals=function(t){return O.equals(this,t)},O.equalsArray=function(t,a,n){return t[0]===a[n]&&t[1]===a[n+1]&&t[2]===a[n+2]&&t[3]===a[n+3]&&t[4]===a[n+4]&&t[5]===a[n+5]&&t[6]===a[n+6]&&t[7]===a[n+7]&&t[8]===a[n+8]&&t[9]===a[n+9]&&t[10]===a[n+10]&&t[11]===a[n+11]&&t[12]===a[n+12]&&t[13]===a[n+13]&&t[14]===a[n+14]&&t[15]===a[n+15]},O.prototype.equalsEpsilon=function(t,a){return O.equalsEpsilon(this,t,a)},O.prototype.toString=function(){return"("+this[0]+", "+this[4]+", "+this[8]+", "+this[12]+")\n("+this[1]+", "+this[5]+", "+this[9]+", "+this[13]+")\n("+this[2]+", "+this[6]+", "+this[10]+", "+this[14]+")\n("+this[3]+", "+this[7]+", "+this[11]+", "+this[15]+")"},a["a"]=O},"6dfc":function(t,a,n){"use strict";var e=n("535a"),r=n("2f63");function o(t,a,n,r){this.near=Object(e["a"])(t,0),this.nearValue=Object(e["a"])(a,0),this.far=Object(e["a"])(n,1),this.farValue=Object(e["a"])(r,0)}o.clone=function(t,a){if(Object(r["a"])(t))return Object(r["a"])(a)?(a.near=t.near,a.nearValue=t.nearValue,a.far=t.far,a.farValue=t.farValue,a):new o(t.near,t.nearValue,t.far,t.farValue)},o.packedLength=4,o.pack=function(t,a,n){return n=Object(e["a"])(n,0),a[n++]=t.near,a[n++]=t.nearValue,a[n++]=t.far,a[n]=t.farValue,a},o.unpack=function(t,a,n){return a=Object(e["a"])(a,0),Object(r["a"])(n)||(n=new o),n.near=t[a++],n.nearValue=t[a++],n.far=t[a++],n.farValue=t[a],n},o.equals=function(t,a){return t===a||Object(r["a"])(t)&&Object(r["a"])(a)&&t.near===a.near&&t.nearValue===a.nearValue&&t.far===a.far&&t.farValue===a.farValue},o.prototype.clone=function(t){return o.clone(this,t)},o.prototype.equals=function(t){return o.equals(this,t)},a["a"]=o},"93da":function(t,a,n){"use strict";var e=n("7aae"),r=n("535a"),o={EPSILON1:.1,EPSILON2:.01,EPSILON3:.001,EPSILON4:1e-4,EPSILON5:1e-5,EPSILON6:1e-6,EPSILON7:1e-7,EPSILON8:1e-8,EPSILON9:1e-9,EPSILON10:1e-10,EPSILON11:1e-11,EPSILON12:1e-12,EPSILON13:1e-13,EPSILON14:1e-14,EPSILON15:1e-15,EPSILON16:1e-16,EPSILON17:1e-17,EPSILON18:1e-18,EPSILON19:1e-19,EPSILON20:1e-20,EPSILON21:1e-21,GRAVITATIONALPARAMETER:3986004418e5,SOLAR_RADIUS:6955e5,LUNAR_RADIUS:1737400,SIXTY_FOUR_KILOBYTES:65536,FOUR_GIGABYTES:4294967296};o.sign=Object(r["a"])(Math.sign,(function(t){return t=+t,0===t||t!==t?t:t>0?1:-1})),o.signNotZero=function(t){return t<0?-1:1},o.toSNorm=function(t,a){return a=Object(r["a"])(a,255),Math.round((.5*o.clamp(t,-1,1)+.5)*a)},o.fromSNorm=function(t,a){return a=Object(r["a"])(a,255),o.clamp(t,0,a)/a*2-1},o.normalize=function(t,a,n){return n=Math.max(n-a,0),0===n?0:o.clamp((t-a)/n,0,1)},o.sinh=Object(r["a"])(Math.sinh,(function(t){return(Math.exp(t)-Math.exp(-t))/2})),o.cosh=Object(r["a"])(Math.cosh,(function(t){return(Math.exp(t)+Math.exp(-t))/2})),o.lerp=function(t,a,n){return(1-n)*t+n*a},o.PI=Math.PI,o.ONE_OVER_PI=1/Math.PI,o.PI_OVER_TWO=Math.PI/2,o.PI_OVER_THREE=Math.PI/3,o.PI_OVER_FOUR=Math.PI/4,o.PI_OVER_SIX=Math.PI/6,o.THREE_PI_OVER_TWO=3*Math.PI/2,o.TWO_PI=2*Math.PI,o.ONE_OVER_TWO_PI=1/(2*Math.PI),o.RADIANS_PER_DEGREE=Math.PI/180,o.DEGREES_PER_RADIAN=180/Math.PI,o.RADIANS_PER_ARCSECOND=o.RADIANS_PER_DEGREE/3600,o.toRadians=function(t){return t*o.RADIANS_PER_DEGREE},o.toDegrees=function(t){return t*o.DEGREES_PER_RADIAN},o.convertLongitudeRange=function(t){var a=o.TWO_PI,n=t-Math.floor(t/a)*a;return n<-Math.PI?n+a:n>=Math.PI?n-a:n},o.clampToLatitudeRange=function(t){return o.clamp(t,-1*o.PI_OVER_TWO,o.PI_OVER_TWO)},o.negativePiToPi=function(t){return o.zeroToTwoPi(t+o.PI)-o.PI},o.zeroToTwoPi=function(t){var a=o.mod(t,o.TWO_PI);return Math.abs(a)<o.EPSILON14&&Math.abs(t)>o.EPSILON14?o.TWO_PI:a},o.mod=function(t,a){return(t%a+a)%a},o.equalsEpsilon=function(t,a,n,e){e=Object(r["a"])(e,n);var o=Math.abs(t-a);return o<=e||o<=n*Math.max(Math.abs(t),Math.abs(a))},o.lessThan=function(t,a,n){return t-a<-n},o.lessThanOrEquals=function(t,a,n){return t-a<n},o.greaterThan=function(t,a,n){return t-a>n},o.greaterThanOrEquals=function(t,a,n){return t-a>-n};var i=[1];o.factorial=function(t){var a=i.length;if(t>=a)for(var n=i[a-1],e=a;e<=t;e++){var r=n*e;i.push(r),n=r}return i[t]},o.incrementWrap=function(t,a,n){return n=Object(r["a"])(n,0),++t,t>a&&(t=n),t},o.isPowerOfTwo=function(t){return 0!==t&&0===(t&t-1)},o.nextPowerOfTwo=function(t){return--t,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t,t},o.clamp=function(t,a,n){return t<a?a:t>n?n:t};var u=new e["a"];o.setRandomNumberSeed=function(t){u=new e["a"](t)},o.nextRandomNumber=function(){return u.random()},o.randomBetween=function(t,a){return o.nextRandomNumber()*(a-t)+t},o.acosClamped=function(t){return Math.acos(o.clamp(t,-1,1))},o.asinClamped=function(t){return Math.asin(o.clamp(t,-1,1))},o.chordLength=function(t,a){return 2*a*Math.sin(.5*t)},o.logBase=function(t,a){return Math.log(t)/Math.log(a)},o.cbrt=Object(r["a"])(Math.cbrt,(function(t){var a=Math.pow(Math.abs(t),1/3);return t<0?-a:a})),o.log2=Object(r["a"])(Math.log2,(function(t){return Math.log(t)*Math.LOG2E})),o.fog=function(t,a){var n=t*a;return 1-Math.exp(-n*n)},o.fastApproximateAtan=function(t){return t*(-.1784*Math.abs(t)-.0663*t*t+1.0301)},o.fastApproximateAtan2=function(t,a){var n,e,r=Math.abs(t);n=Math.abs(a),e=Math.max(r,n),n=Math.min(r,n);var i=n/e;return r=o.fastApproximateAtan(i),r=Math.abs(a)>Math.abs(t)?o.PI_OVER_TWO-r:r,r=t<0?o.PI-r:r,r=a<0?-r:r,r},a["a"]=o},"9e11":function(t,a,n){"use strict";var e=n("670c"),r=n("535a"),o=n("2f63"),i=n("9f1d"),u=n("0e25");function c(t,a,n,e){this[0]=Object(r["a"])(t,0),this[1]=Object(r["a"])(n,0),this[2]=Object(r["a"])(a,0),this[3]=Object(r["a"])(e,0)}c.packedLength=4,c.pack=function(t,a,n){return n=Object(r["a"])(n,0),a[n++]=t[0],a[n++]=t[1],a[n++]=t[2],a[n++]=t[3],a},c.unpack=function(t,a,n){return a=Object(r["a"])(a,0),Object(o["a"])(n)||(n=new c),n[0]=t[a++],n[1]=t[a++],n[2]=t[a++],n[3]=t[a++],n},c.clone=function(t,a){if(Object(o["a"])(t))return Object(o["a"])(a)?(a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a):new c(t[0],t[2],t[1],t[3])},c.fromArray=function(t,a,n){return a=Object(r["a"])(a,0),Object(o["a"])(n)||(n=new c),n[0]=t[a],n[1]=t[a+1],n[2]=t[a+2],n[3]=t[a+3],n},c.fromColumnMajorArray=function(t,a){return c.clone(t,a)},c.fromRowMajorArray=function(t,a){return Object(o["a"])(a)?(a[0]=t[0],a[1]=t[2],a[2]=t[1],a[3]=t[3],a):new c(t[0],t[1],t[2],t[3])},c.fromScale=function(t,a){return Object(o["a"])(a)?(a[0]=t.x,a[1]=0,a[2]=0,a[3]=t.y,a):new c(t.x,0,0,t.y)},c.fromUniformScale=function(t,a){return Object(o["a"])(a)?(a[0]=t,a[1]=0,a[2]=0,a[3]=t,a):new c(t,0,0,t)},c.fromRotation=function(t,a){var n=Math.cos(t),e=Math.sin(t);return Object(o["a"])(a)?(a[0]=n,a[1]=e,a[2]=-e,a[3]=n,a):new c(n,-e,e,n)},c.toArray=function(t,a){return Object(o["a"])(a)?(a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a):[t[0],t[1],t[2],t[3]]},c.getElementIndex=function(t,a){return 2*t+a},c.getColumn=function(t,a,n){var e=2*a,r=t[e],o=t[e+1];return n.x=r,n.y=o,n},c.setColumn=function(t,a,n,e){e=c.clone(t,e);var r=2*a;return e[r]=n.x,e[r+1]=n.y,e},c.getRow=function(t,a,n){var e=t[a],r=t[a+2];return n.x=e,n.y=r,n},c.setRow=function(t,a,n,e){return e=c.clone(t,e),e[a]=n.x,e[a+2]=n.y,e};var s=new e["a"];c.getScale=function(t,a){return a.x=e["a"].magnitude(e["a"].fromElements(t[0],t[1],s)),a.y=e["a"].magnitude(e["a"].fromElements(t[2],t[3],s)),a};var l=new e["a"];c.getMaximumScale=function(t){return c.getScale(t,l),e["a"].maximumComponent(l)},c.multiply=function(t,a,n){var e=t[0]*a[0]+t[2]*a[1],r=t[0]*a[2]+t[2]*a[3],o=t[1]*a[0]+t[3]*a[1],i=t[1]*a[2]+t[3]*a[3];return n[0]=e,n[1]=o,n[2]=r,n[3]=i,n},c.add=function(t,a,n){return n[0]=t[0]+a[0],n[1]=t[1]+a[1],n[2]=t[2]+a[2],n[3]=t[3]+a[3],n},c.subtract=function(t,a,n){return n[0]=t[0]-a[0],n[1]=t[1]-a[1],n[2]=t[2]-a[2],n[3]=t[3]-a[3],n},c.multiplyByVector=function(t,a,n){var e=t[0]*a.x+t[2]*a.y,r=t[1]*a.x+t[3]*a.y;return n.x=e,n.y=r,n},c.multiplyByScalar=function(t,a,n){return n[0]=t[0]*a,n[1]=t[1]*a,n[2]=t[2]*a,n[3]=t[3]*a,n},c.multiplyByScale=function(t,a,n){return n[0]=t[0]*a.x,n[1]=t[1]*a.x,n[2]=t[2]*a.y,n[3]=t[3]*a.y,n},c.negate=function(t,a){return a[0]=-t[0],a[1]=-t[1],a[2]=-t[2],a[3]=-t[3],a},c.transpose=function(t,a){var n=t[0],e=t[2],r=t[1],o=t[3];return a[0]=n,a[1]=e,a[2]=r,a[3]=o,a},c.abs=function(t,a){return a[0]=Math.abs(t[0]),a[1]=Math.abs(t[1]),a[2]=Math.abs(t[2]),a[3]=Math.abs(t[3]),a},c.equals=function(t,a){return t===a||Object(o["a"])(t)&&Object(o["a"])(a)&&t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]},c.equalsArray=function(t,a,n){return t[0]===a[n]&&t[1]===a[n+1]&&t[2]===a[n+2]&&t[3]===a[n+3]},c.equalsEpsilon=function(t,a,n){return t===a||Object(o["a"])(t)&&Object(o["a"])(a)&&Math.abs(t[0]-a[0])<=n&&Math.abs(t[1]-a[1])<=n&&Math.abs(t[2]-a[2])<=n&&Math.abs(t[3]-a[3])<=n},c.IDENTITY=Object(u["a"])(new c(1,0,0,1)),c.ZERO=Object(u["a"])(new c(0,0,0,0)),c.COLUMN0ROW0=0,c.COLUMN0ROW1=1,c.COLUMN1ROW0=2,c.COLUMN1ROW1=3,Object(i["a"])(c.prototype,{length:{get:function(){return c.packedLength}}}),c.prototype.clone=function(t){return c.clone(this,t)},c.prototype.equals=function(t){return c.equals(this,t)},c.prototype.equalsEpsilon=function(t,a){return c.equalsEpsilon(this,t,a)},c.prototype.toString=function(){return"("+this[0]+", "+this[2]+")\n("+this[1]+", "+this[3]+")"},a["a"]=c},df07:function(t,a,n){"use strict";var e=n("be18"),r=n("535a"),o=n("2f63"),i=n("9f1d"),u=n("0e25"),c=n("93da");function s(t,a,n,e,o,i,u,c,s){this[0]=Object(r["a"])(t,0),this[1]=Object(r["a"])(e,0),this[2]=Object(r["a"])(u,0),this[3]=Object(r["a"])(a,0),this[4]=Object(r["a"])(o,0),this[5]=Object(r["a"])(c,0),this[6]=Object(r["a"])(n,0),this[7]=Object(r["a"])(i,0),this[8]=Object(r["a"])(s,0)}s.packedLength=9,s.pack=function(t,a,n){return n=Object(r["a"])(n,0),a[n++]=t[0],a[n++]=t[1],a[n++]=t[2],a[n++]=t[3],a[n++]=t[4],a[n++]=t[5],a[n++]=t[6],a[n++]=t[7],a[n++]=t[8],a},s.unpack=function(t,a,n){return a=Object(r["a"])(a,0),Object(o["a"])(n)||(n=new s),n[0]=t[a++],n[1]=t[a++],n[2]=t[a++],n[3]=t[a++],n[4]=t[a++],n[5]=t[a++],n[6]=t[a++],n[7]=t[a++],n[8]=t[a++],n},s.clone=function(t,a){if(Object(o["a"])(t))return Object(o["a"])(a)?(a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a):new s(t[0],t[3],t[6],t[1],t[4],t[7],t[2],t[5],t[8])},s.fromArray=function(t,a,n){return a=Object(r["a"])(a,0),Object(o["a"])(n)||(n=new s),n[0]=t[a],n[1]=t[a+1],n[2]=t[a+2],n[3]=t[a+3],n[4]=t[a+4],n[5]=t[a+5],n[6]=t[a+6],n[7]=t[a+7],n[8]=t[a+8],n},s.fromColumnMajorArray=function(t,a){return s.clone(t,a)},s.fromRowMajorArray=function(t,a){return Object(o["a"])(a)?(a[0]=t[0],a[1]=t[3],a[2]=t[6],a[3]=t[1],a[4]=t[4],a[5]=t[7],a[6]=t[2],a[7]=t[5],a[8]=t[8],a):new s(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])},s.fromQuaternion=function(t,a){var n=t.x*t.x,e=t.x*t.y,r=t.x*t.z,i=t.x*t.w,u=t.y*t.y,c=t.y*t.z,l=t.y*t.w,f=t.z*t.z,h=t.z*t.w,O=t.w*t.w,b=n-u-f+O,m=2*(e-h),M=2*(r+l),y=2*(e+h),d=-n+u-f+O,p=2*(c-i),v=2*(r-l),j=2*(c+i),x=-n-u+f+O;return Object(o["a"])(a)?(a[0]=b,a[1]=y,a[2]=v,a[3]=m,a[4]=d,a[5]=j,a[6]=M,a[7]=p,a[8]=x,a):new s(b,m,M,y,d,p,v,j,x)},s.fromHeadingPitchRoll=function(t,a){var n=Math.cos(-t.pitch),e=Math.cos(-t.heading),r=Math.cos(t.roll),i=Math.sin(-t.pitch),u=Math.sin(-t.heading),c=Math.sin(t.roll),l=n*e,f=-r*u+c*i*e,h=c*u+r*i*e,O=n*u,b=r*e+c*i*u,m=-c*e+r*i*u,M=-i,y=c*n,d=r*n;return Object(o["a"])(a)?(a[0]=l,a[1]=O,a[2]=M,a[3]=f,a[4]=b,a[5]=y,a[6]=h,a[7]=m,a[8]=d,a):new s(l,f,h,O,b,m,M,y,d)},s.fromScale=function(t,a){return Object(o["a"])(a)?(a[0]=t.x,a[1]=0,a[2]=0,a[3]=0,a[4]=t.y,a[5]=0,a[6]=0,a[7]=0,a[8]=t.z,a):new s(t.x,0,0,0,t.y,0,0,0,t.z)},s.fromUniformScale=function(t,a){return Object(o["a"])(a)?(a[0]=t,a[1]=0,a[2]=0,a[3]=0,a[4]=t,a[5]=0,a[6]=0,a[7]=0,a[8]=t,a):new s(t,0,0,0,t,0,0,0,t)},s.fromCrossProduct=function(t,a){return Object(o["a"])(a)?(a[0]=0,a[1]=t.z,a[2]=-t.y,a[3]=-t.z,a[4]=0,a[5]=t.x,a[6]=t.y,a[7]=-t.x,a[8]=0,a):new s(0,-t.z,t.y,t.z,0,-t.x,-t.y,t.x,0)},s.fromRotationX=function(t,a){var n=Math.cos(t),e=Math.sin(t);return Object(o["a"])(a)?(a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=n,a[5]=e,a[6]=0,a[7]=-e,a[8]=n,a):new s(1,0,0,0,n,-e,0,e,n)},s.fromRotationY=function(t,a){var n=Math.cos(t),e=Math.sin(t);return Object(o["a"])(a)?(a[0]=n,a[1]=0,a[2]=-e,a[3]=0,a[4]=1,a[5]=0,a[6]=e,a[7]=0,a[8]=n,a):new s(n,0,e,0,1,0,-e,0,n)},s.fromRotationZ=function(t,a){var n=Math.cos(t),e=Math.sin(t);return Object(o["a"])(a)?(a[0]=n,a[1]=e,a[2]=0,a[3]=-e,a[4]=n,a[5]=0,a[6]=0,a[7]=0,a[8]=1,a):new s(n,-e,0,e,n,0,0,0,1)},s.toArray=function(t,a){return Object(o["a"])(a)?(a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a):[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},s.getElementIndex=function(t,a){return 3*t+a},s.getColumn=function(t,a,n){var e=3*a,r=t[e],o=t[e+1],i=t[e+2];return n.x=r,n.y=o,n.z=i,n},s.setColumn=function(t,a,n,e){e=s.clone(t,e);var r=3*a;return e[r]=n.x,e[r+1]=n.y,e[r+2]=n.z,e},s.getRow=function(t,a,n){var e=t[a],r=t[a+3],o=t[a+6];return n.x=e,n.y=r,n.z=o,n},s.setRow=function(t,a,n,e){return e=s.clone(t,e),e[a]=n.x,e[a+3]=n.y,e[a+6]=n.z,e};var l=new e["a"];s.getScale=function(t,a){return a.x=e["a"].magnitude(e["a"].fromElements(t[0],t[1],t[2],l)),a.y=e["a"].magnitude(e["a"].fromElements(t[3],t[4],t[5],l)),a.z=e["a"].magnitude(e["a"].fromElements(t[6],t[7],t[8],l)),a};var f=new e["a"];s.getMaximumScale=function(t){return s.getScale(t,f),e["a"].maximumComponent(f)},s.multiply=function(t,a,n){var e=t[0]*a[0]+t[3]*a[1]+t[6]*a[2],r=t[1]*a[0]+t[4]*a[1]+t[7]*a[2],o=t[2]*a[0]+t[5]*a[1]+t[8]*a[2],i=t[0]*a[3]+t[3]*a[4]+t[6]*a[5],u=t[1]*a[3]+t[4]*a[4]+t[7]*a[5],c=t[2]*a[3]+t[5]*a[4]+t[8]*a[5],s=t[0]*a[6]+t[3]*a[7]+t[6]*a[8],l=t[1]*a[6]+t[4]*a[7]+t[7]*a[8],f=t[2]*a[6]+t[5]*a[7]+t[8]*a[8];return n[0]=e,n[1]=r,n[2]=o,n[3]=i,n[4]=u,n[5]=c,n[6]=s,n[7]=l,n[8]=f,n},s.add=function(t,a,n){return n[0]=t[0]+a[0],n[1]=t[1]+a[1],n[2]=t[2]+a[2],n[3]=t[3]+a[3],n[4]=t[4]+a[4],n[5]=t[5]+a[5],n[6]=t[6]+a[6],n[7]=t[7]+a[7],n[8]=t[8]+a[8],n},s.subtract=function(t,a,n){return n[0]=t[0]-a[0],n[1]=t[1]-a[1],n[2]=t[2]-a[2],n[3]=t[3]-a[3],n[4]=t[4]-a[4],n[5]=t[5]-a[5],n[6]=t[6]-a[6],n[7]=t[7]-a[7],n[8]=t[8]-a[8],n},s.multiplyByVector=function(t,a,n){var e=a.x,r=a.y,o=a.z,i=t[0]*e+t[3]*r+t[6]*o,u=t[1]*e+t[4]*r+t[7]*o,c=t[2]*e+t[5]*r+t[8]*o;return n.x=i,n.y=u,n.z=c,n},s.multiplyByScalar=function(t,a,n){return n[0]=t[0]*a,n[1]=t[1]*a,n[2]=t[2]*a,n[3]=t[3]*a,n[4]=t[4]*a,n[5]=t[5]*a,n[6]=t[6]*a,n[7]=t[7]*a,n[8]=t[8]*a,n},s.multiplyByScale=function(t,a,n){return n[0]=t[0]*a.x,n[1]=t[1]*a.x,n[2]=t[2]*a.x,n[3]=t[3]*a.y,n[4]=t[4]*a.y,n[5]=t[5]*a.y,n[6]=t[6]*a.z,n[7]=t[7]*a.z,n[8]=t[8]*a.z,n},s.negate=function(t,a){return a[0]=-t[0],a[1]=-t[1],a[2]=-t[2],a[3]=-t[3],a[4]=-t[4],a[5]=-t[5],a[6]=-t[6],a[7]=-t[7],a[8]=-t[8],a},s.transpose=function(t,a){var n=t[0],e=t[3],r=t[6],o=t[1],i=t[4],u=t[7],c=t[2],s=t[5],l=t[8];return a[0]=n,a[1]=e,a[2]=r,a[3]=o,a[4]=i,a[5]=u,a[6]=c,a[7]=s,a[8]=l,a};var h=new e["a"](1,1,1);function O(t){for(var a=0,n=0;n<9;++n){var e=t[n];a+=e*e}return Math.sqrt(a)}s.getRotation=function(t,a){var n=e["a"].divideComponents(h,s.getScale(t,f),f);return a=s.multiplyByScale(t,n,a),a};var b=[1,0,0],m=[2,2,1];function M(t){for(var a=0,n=0;n<3;++n){var e=t[s.getElementIndex(m[n],b[n])];a+=2*e*e}return Math.sqrt(a)}function y(t,a){for(var n=c["a"].EPSILON15,e=0,r=1,o=0;o<3;++o){var i=Math.abs(t[s.getElementIndex(m[o],b[o])]);i>e&&(r=o,e=i)}var u=1,l=0,f=b[r],h=m[r];if(Math.abs(t[s.getElementIndex(h,f)])>n){var O,M=t[s.getElementIndex(h,h)],y=t[s.getElementIndex(f,f)],d=t[s.getElementIndex(h,f)],p=(M-y)/2/d;O=p<0?-1/(-p+Math.sqrt(1+p*p)):1/(p+Math.sqrt(1+p*p)),u=1/Math.sqrt(1+O*O),l=O*u}return a=s.clone(s.IDENTITY,a),a[s.getElementIndex(f,f)]=a[s.getElementIndex(h,h)]=u,a[s.getElementIndex(h,f)]=l,a[s.getElementIndex(f,h)]=-l,a}var d=new s,p=new s;s.computeEigenDecomposition=function(t,a){var n=c["a"].EPSILON20,e=10,r=0,i=0;Object(o["a"])(a)||(a={});var u=a.unitary=s.clone(s.IDENTITY,a.unitary),l=a.diagonal=s.clone(t,a.diagonal),f=n*O(l);while(i<e&&M(l)>f)y(l,d),s.transpose(d,p),s.multiply(l,d,l),s.multiply(p,l,l),s.multiply(u,d,u),++r>2&&(++i,r=0);return a},s.abs=function(t,a){return a[0]=Math.abs(t[0]),a[1]=Math.abs(t[1]),a[2]=Math.abs(t[2]),a[3]=Math.abs(t[3]),a[4]=Math.abs(t[4]),a[5]=Math.abs(t[5]),a[6]=Math.abs(t[6]),a[7]=Math.abs(t[7]),a[8]=Math.abs(t[8]),a},s.determinant=function(t){var a=t[0],n=t[3],e=t[6],r=t[1],o=t[4],i=t[7],u=t[2],c=t[5],s=t[8];return a*(o*s-c*i)+r*(c*e-n*s)+u*(n*i-o*e)},s.inverse=function(t,a){var n=t[0],e=t[1],r=t[2],o=t[3],i=t[4],u=t[5],c=t[6],l=t[7],f=t[8],h=s.determinant(t);a[0]=i*f-l*u,a[1]=l*r-e*f,a[2]=e*u-i*r,a[3]=c*u-o*f,a[4]=n*f-c*r,a[5]=o*r-n*u,a[6]=o*l-c*i,a[7]=c*e-n*l,a[8]=n*i-o*e;var O=1/h;return s.multiplyByScalar(a,O,a)},s.equals=function(t,a){return t===a||Object(o["a"])(t)&&Object(o["a"])(a)&&t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]},s.equalsEpsilon=function(t,a,n){return t===a||Object(o["a"])(t)&&Object(o["a"])(a)&&Math.abs(t[0]-a[0])<=n&&Math.abs(t[1]-a[1])<=n&&Math.abs(t[2]-a[2])<=n&&Math.abs(t[3]-a[3])<=n&&Math.abs(t[4]-a[4])<=n&&Math.abs(t[5]-a[5])<=n&&Math.abs(t[6]-a[6])<=n&&Math.abs(t[7]-a[7])<=n&&Math.abs(t[8]-a[8])<=n},s.IDENTITY=Object(u["a"])(new s(1,0,0,0,1,0,0,0,1)),s.ZERO=Object(u["a"])(new s(0,0,0,0,0,0,0,0,0)),s.COLUMN0ROW0=0,s.COLUMN0ROW1=1,s.COLUMN0ROW2=2,s.COLUMN1ROW0=3,s.COLUMN1ROW1=4,s.COLUMN1ROW2=5,s.COLUMN2ROW0=6,s.COLUMN2ROW1=7,s.COLUMN2ROW2=8,Object(i["a"])(s.prototype,{length:{get:function(){return s.packedLength}}}),s.prototype.clone=function(t){return s.clone(this,t)},s.prototype.equals=function(t){return s.equals(this,t)},s.equalsArray=function(t,a,n){return t[0]===a[n]&&t[1]===a[n+1]&&t[2]===a[n+2]&&t[3]===a[n+3]&&t[4]===a[n+4]&&t[5]===a[n+5]&&t[6]===a[n+6]&&t[7]===a[n+7]&&t[8]===a[n+8]},s.prototype.equalsEpsilon=function(t,a){return s.equalsEpsilon(this,t,a)},s.prototype.toString=function(){return"("+this[0]+", "+this[3]+", "+this[6]+")\n("+this[1]+", "+this[4]+", "+this[7]+")\n("+this[2]+", "+this[5]+", "+this[8]+")"},a["a"]=s},f0be:function(t,a,n){"use strict";var e=n("cef5"),r=n("be18"),o=n("535a"),i=n("2f63"),u=n("9f1d"),c=n("c52f"),s=n("93da"),l=n("eace"),f=n("2368");function h(t,a){this._occluderPosition=r["a"].clone(t.center),this._occluderRadius=t.radius,this._horizonDistance=0,this._horizonPlaneNormal=void 0,this._horizonPlanePosition=void 0,this._cameraPosition=void 0,this.cameraPosition=a}var O=new r["a"];Object(u["a"])(h.prototype,{position:{get:function(){return this._occluderPosition}},radius:{get:function(){return this._occluderRadius}},cameraPosition:{set:function(t){t=r["a"].clone(t,this._cameraPosition);var a,n,e,o=r["a"].subtract(this._occluderPosition,t,O),i=r["a"].magnitudeSquared(o),u=this._occluderRadius*this._occluderRadius;if(i>u){a=Math.sqrt(i-u),i=1/Math.sqrt(i),n=r["a"].multiplyByScalar(o,i,O);var c=a*a*i;e=r["a"].add(t,r["a"].multiplyByScalar(n,c,O),O)}else a=Number.MAX_VALUE;this._horizonDistance=a,this._horizonPlaneNormal=n,this._horizonPlanePosition=e,this._cameraPosition=t}}}),h.fromBoundingSphere=function(t,a,n){return Object(i["a"])(n)?(r["a"].clone(t.center,n._occluderPosition),n._occluderRadius=t.radius,n.cameraPosition=a,n):new h(t,a)};var b=new r["a"];h.prototype.isPointVisible=function(t){if(this._horizonDistance!==Number.MAX_VALUE){var a=r["a"].subtract(t,this._occluderPosition,b),n=this._occluderRadius;if(n=r["a"].magnitudeSquared(a)-n*n,n>0)return n=Math.sqrt(n)+this._horizonDistance,a=r["a"].subtract(t,this._cameraPosition,a),n*n>r["a"].magnitudeSquared(a)}return!1};var m=new r["a"];h.prototype.isBoundingSphereVisible=function(t){var a=r["a"].clone(t.center,m),n=t.radius;if(this._horizonDistance!==Number.MAX_VALUE){var e=r["a"].subtract(a,this._occluderPosition,b),o=this._occluderRadius-n;if(o=r["a"].magnitudeSquared(e)-o*o,n<this._occluderRadius)return o>0&&(o=Math.sqrt(o)+this._horizonDistance,e=r["a"].subtract(a,this._cameraPosition,e),o*o+n*n>r["a"].magnitudeSquared(e));if(o>0){e=r["a"].subtract(a,this._cameraPosition,e);var i=r["a"].magnitudeSquared(e),u=this._occluderRadius*this._occluderRadius,c=n*n;return(this._horizonDistance*this._horizonDistance+u)*c>i*u||(o=Math.sqrt(o)+this._horizonDistance,o*o+c>i)}return!0}return!1};var M=new r["a"];h.prototype.computeVisibility=function(t){var a=r["a"].clone(t.center),n=t.radius;if(n>this._occluderRadius)return f["a"].FULL;if(this._horizonDistance!==Number.MAX_VALUE){var e=r["a"].subtract(a,this._occluderPosition,M),o=this._occluderRadius-n,i=r["a"].magnitudeSquared(e);if(o=i-o*o,o>0){o=Math.sqrt(o)+this._horizonDistance,e=r["a"].subtract(a,this._cameraPosition,e);var u=r["a"].magnitudeSquared(e);return o*o+n*n<u?f["a"].NONE:(o=this._occluderRadius+n,o=i-o*o,o>0?(o=Math.sqrt(o)+this._horizonDistance,u<o*o+n*n?f["a"].FULL:f["a"].PARTIAL):(e=r["a"].subtract(a,this._horizonPlanePosition,e),r["a"].dot(e,this._horizonPlaneNormal)>-n?f["a"].PARTIAL:f["a"].FULL))}}return f["a"].NONE};var y=new r["a"];h.computeOccludeePoint=function(t,a,n){var e=r["a"].clone(a),o=r["a"].clone(t.center),i=t.radius,u=n.length,c=r["a"].normalize(r["a"].subtract(e,o,y),y),s=-r["a"].dot(c,o),l=h._anyRotationVector(o,c,s),f=h._horizonToPlaneNormalDotProduct(t,c,s,l,n[0]);if(f){for(var O,b=1;b<u;++b){if(O=h._horizonToPlaneNormalDotProduct(t,c,s,l,n[b]),!O)return;O<f&&(f=O)}if(!(f<.0017453283658983088)){var m=i/f;return r["a"].add(o,r["a"].multiplyByScalar(c,m,y),y)}}};var d=[];h.computeOccludeePointFromRectangle=function(t,a){a=Object(o["a"])(a,c["a"].WGS84);var n=l["a"].subsample(t,a,0,d),i=e["a"].fromPoints(n),u=r["a"].ZERO;if(!r["a"].equals(u,i.center))return h.computeOccludeePoint(new e["a"](u,a.minimumRadius),i.center,n)};var p=new r["a"];h._anyRotationVector=function(t,a,n){var e=r["a"].abs(a,p),o=e.x>e.y?0:1;(0===o&&e.z>e.x||1===o&&e.z>e.y)&&(o=2);var i,u=new r["a"];0===o?(e.x=t.x,e.y=t.y+1,e.z=t.z+1,i=r["a"].UNIT_X):1===o?(e.x=t.x+1,e.y=t.y,e.z=t.z+1,i=r["a"].UNIT_Y):(e.x=t.x+1,e.y=t.y+1,e.z=t.z,i=r["a"].UNIT_Z);var c=(r["a"].dot(a,e)+n)/-r["a"].dot(a,i);return r["a"].normalize(r["a"].subtract(r["a"].add(e,r["a"].multiplyByScalar(i,c,u),e),t,e),e)};var v=new r["a"];h._rotationVector=function(t,a,n,e,o){var i=r["a"].subtract(e,t,v);if(i=r["a"].normalize(i,i),r["a"].dot(a,i)<.9999999847691291){var u=r["a"].cross(a,i,i),c=r["a"].magnitude(u);if(c>s["a"].EPSILON13)return r["a"].normalize(u,new r["a"])}return o};var j=new r["a"],x=new r["a"],E=new r["a"],R=new r["a"];h._horizonToPlaneNormalDotProduct=function(t,a,n,e,o){var i=r["a"].clone(o,j),u=r["a"].clone(t.center,x),c=t.radius,s=r["a"].subtract(u,i,E),l=r["a"].magnitudeSquared(s),f=c*c;if(l<f)return!1;var h=l-f,O=Math.sqrt(h),b=Math.sqrt(l),m=1/b,M=O*m,y=M*O;s=r["a"].normalize(s,s);var d=r["a"].add(i,r["a"].multiplyByScalar(s,y,R),R),p=Math.sqrt(h-y*y),v=this._rotationVector(u,a,n,i,e),P=r["a"].fromElements(v.x*v.x*s.x+(v.x*v.y-v.z)*s.y+(v.x*v.z+v.y)*s.z,(v.x*v.y+v.z)*s.x+v.y*v.y*s.y+(v.y*v.z-v.x)*s.z,(v.x*v.z-v.y)*s.x+(v.y*v.z+v.x)*s.y+v.z*v.z*s.z,j);P=r["a"].normalize(P,P);var w=r["a"].multiplyByScalar(P,p,j);v=r["a"].normalize(r["a"].subtract(r["a"].add(d,w,E),u,E),E);var g=r["a"].dot(a,v);v=r["a"].normalize(r["a"].subtract(r["a"].subtract(d,w,v),u,v),v);var z=r["a"].dot(a,v);return g<z?g:z},a["a"]=h}}]);