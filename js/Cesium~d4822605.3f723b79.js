(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~d4822605"],{8773:function(e,t,r){"use strict";var i=r("77af"),a=r("2f63"),n=r("7d62"),o=r("e42d"),s=r("ac3b"),c=r("00f8"),u=r("6ef5"),f=r("a913");function h(){this._depthStencilTexture=void 0,this._framebuffer=void 0,this._passState=void 0}function p(e){e._framebuffer=e._framebuffer&&e._framebuffer.destroy(),e._depthStencilTexture=e._depthStencilTexture&&e._depthStencilTexture.destroy()}function d(e,t){var r=t.drawingBufferWidth,a=t.drawingBufferHeight;e._depthStencilTexture=new f["a"]({context:t,width:r,height:a,pixelFormat:o["a"].DEPTH_STENCIL,pixelDatatype:u["a"].UNSIGNED_INT_24_8}),e._framebuffer=new s["a"]({context:t,depthStencilTexture:e._depthStencilTexture,destroyAttachments:!1});var n=new c["a"](t);n.blendingEnabled=!1,n.scissorTest={enabled:!0,rectangle:new i["a"]},n.viewport=new i["a"],e._passState=n}h.prototype.update=function(e,t,r){var i=r.width,n=r.height;Object(a["a"])(this._framebuffer)&&i===this._depthStencilTexture.width&&n===this._depthStencilTexture.height||(p(this),d(this,e));var o=this._framebuffer,s=this._passState;return s.framebuffer=o,s.viewport.width=i,s.viewport.height=n,s.scissorTest.rectangle.x=t.x,s.scissorTest.rectangle.y=n-t.y,s.scissorTest.rectangle.width=1,s.scissorTest.rectangle.height=1,s},h.prototype.isDestroyed=function(){return!1},h.prototype.destroy=function(){return p(this),Object(n["a"])(this)},t["a"]=h},d572:function(e,t,r){"use strict";var i=r("dd06"),a=r("77af"),n=r("670c"),o=r("be18"),s=r("bef8"),c=r("bd8d"),u=r("535a"),f=r("2f63"),h=r("52f0"),p=r("713f"),d=r("c34a"),m=r("4e1a"),l=r("4dc8"),v=r("2ac3"),w=r("ac9c"),_=r("a58e"),g=r("9dbf"),b=r("5af0"),y=r("d150"),x=r("56d3"),C=r("49c4"),D=r("a561"),O=r("7d62"),j=r("e42d"),k=r("ac3b"),T=r("6ef5"),P=r("6dc0"),S=r("5770"),F=r("a913");function E(){this._framebuffer=void 0,this._depthTexture=void 0,this._textureToCopy=void 0,this._copyDepthCommand=void 0,this._useLogDepth=void 0,this._debugPickDepthViewportCommand=void 0}function V(e,t,r,i){if(!Object(f["a"])(e._debugPickDepthViewportCommand)||i!==e._useLogDepth){var a="uniform sampler2D u_texture;\nvarying vec2 v_textureCoordinates;\nvoid main()\n{\n    float z_window = czm_unpackDepth(texture2D(u_texture, v_textureCoordinates));\n    z_window = czm_reverseLogDepth(z_window); \n    float n_range = czm_depthRange.near;\n    float f_range = czm_depthRange.far;\n    float z_ndc = (2.0 * z_window - n_range - f_range) / (f_range - n_range);\n    float scale = pow(z_ndc * 0.5 + 0.5, 8.0);\n    gl_FragColor = vec4(mix(vec3(0.0), vec3(1.0), scale), 1.0);\n}\n",n=new S["a"]({defines:[i?"LOG_DEPTH":""],sources:[a]});e._debugPickDepthViewportCommand=t.createViewportQuadCommand(n,{uniformMap:{u_texture:function(){return e._depthTexture}},owner:e}),e._useLogDepth=i}e._debugPickDepthViewportCommand.execute(t,r)}function R(e){e._depthTexture=e._depthTexture&&!e._depthTexture.isDestroyed()&&e._depthTexture.destroy()}function B(e){e._framebuffer=e._framebuffer&&!e._framebuffer.isDestroyed()&&e._framebuffer.destroy()}function M(e,t,r,i){e._depthTexture=new F["a"]({context:t,width:r,height:i,pixelFormat:j["a"].RGBA,pixelDatatype:T["a"].UNSIGNED_BYTE})}function z(e,t,r,i){R(e),B(e),M(e,t,r,i),e._framebuffer=new k["a"]({context:t,colorTextures:[e._depthTexture],destroyAttachments:!1})}function A(e,t,r){var i=r.width,a=r.height,n=e._depthTexture,o=!Object(f["a"])(n)||n.width!==i||n.height!==a;Object(f["a"])(e._framebuffer)&&!o||z(e,t,i,a)}function N(e,t,r){if(!Object(f["a"])(e._copyDepthCommand)){var i="uniform sampler2D u_texture;\nvarying vec2 v_textureCoordinates;\nvoid main()\n{\n    gl_FragColor = czm_packDepth(texture2D(u_texture, v_textureCoordinates).r);\n}\n";e._copyDepthCommand=t.createViewportQuadCommand(i,{renderState:P["a"].fromCache(),uniformMap:{u_texture:function(){return e._textureToCopy}},owner:e})}e._textureToCopy=r,e._copyDepthCommand.framebuffer=e._framebuffer}E.prototype.executeDebugPickDepth=function(e,t,r){V(this,e,t,r)},E.prototype.update=function(e,t){A(this,e,t),N(this,e,t)};var W=new D["a"],L=new D["a"](1,1/255,1/65025,1/16581375);E.prototype.getDepth=function(e,t,r){var i=e.readPixels({x:t,y:r,width:1,height:1,framebuffer:this._framebuffer}),a=D["a"].unpack(i,0,W);return D["a"].divideByScalar(a,255,a),D["a"].dot(a,L)},E.prototype.executeCopyDepth=function(e,t){this._copyDepthCommand.execute(e,t)},E.prototype.isDestroyed=function(){return!1},E.prototype.destroy=function(){return R(this),B(this),this._copyDepthCommand.shaderProgram=Object(f["a"])(this._copyDepthCommand.shaderProgram)&&this._copyDepthCommand.shaderProgram.destroy(),Object(O["a"])(this)};var H=E,I=r("738d"),G=r("a307"),q=r("0c80"),U=r("ef77"),J=.1,K=new x["a"]({pass:y["a"].MOST_DETAILED_PRELOAD}),Q=new x["a"]({pass:y["a"].MOST_DETAILED_PICK}),Y=new x["a"]({pass:y["a"].PICK});function X(e){this._mostDetailedRayPicks=[],this.pickRenderStateCache={},this._pickPositionCache={},this._pickPositionCacheDirty=!1;var t=new a["a"](0,0,1,1),r=new g["a"](e);r.frustum=new p["a"]({width:J,aspectRatio:1,near:.1}),this._pickOffscreenView=new U["a"](e,r,t)}X.prototype.update=function(){this._pickPositionCacheDirty=!0},X.prototype.getPickDepth=function(e,t){var r=e.view.pickDepths,i=r[t];return Object(f["a"])(i)||(i=new H,r[t]=i),i};var Z=new d["a"],$=new o["a"],ee=new o["a"],te=new n["a"],re=new h["a"];function ie(e,t,r,i,a){var n=e.camera,s=n.frustum;Object(f["a"])(s._offCenterFrustum)&&(s=s._offCenterFrustum);var c=2*(t.x-a.x)/a.width-1;c*=.5*(s.right-s.left);var u=2*(a.height-t.y-a.y)/a.height-1;u*=.5*(s.top-s.bottom);var p=h["a"].clone(n.transform,re);n._setTransform(h["a"].IDENTITY);var d=o["a"].clone(n.position,$);o["a"].multiplyByScalar(n.right,c,ee),o["a"].add(ee,d,d),o["a"].multiplyByScalar(n.up,u,ee),o["a"].add(ee,d,d),n._setTransform(p),e.mode===G["a"].SCENE2D&&o["a"].fromElements(d.z,d.x,d.y,d);var m=s.getPixelDimensions(a.width,a.height,1,1,te),l=Z;return l.right=.5*m.x,l.left=-l.right,l.top=.5*m.y,l.bottom=-l.top,l.near=s.near,l.far=s.far,l.computeCullingVolume(d,n.directionWC,n.upWC)}var ae=new l["a"],ne=new n["a"];function oe(e,t,r,i,a){var n=e.camera,o=n.frustum,s=o.near,c=Math.tan(.5*o.fovy),u=o.aspectRatio*c,f=2*(t.x-a.x)/a.width-1,h=2*(a.height-t.y-a.y)/a.height-1,p=f*s*u,d=h*s*c,m=o.getPixelDimensions(a.width,a.height,1,1,ne),l=m.x*r*.5,v=m.y*i*.5,w=ae;return w.top=d+v,w.bottom=d-v,w.right=p+l,w.left=p-l,w.near=s,w.far=o.far,w.computeCullingVolume(n.positionWC,n.directionWC,n.upWC)}function se(e,t,r,i,a){var n=e.camera.frustum;return n instanceof p["a"]||n instanceof d["a"]?ie(e,t,r,i,a):oe(e,t,r,i,a)}var ce=3,ue=3,fe=new a["a"](0,0,ce,ue),he=new n["a"],pe=new c["a"](0,0,0,0);function de(e,t){var r=e.context,i=e.frameState,n=e.environmentState,o=e.defaultView;e.view=o;var s=o.viewport;s.x=0,s.y=0,s.width=r.drawingBufferWidth,s.height=r.drawingBufferHeight;var c=o.passState;c.viewport=a["a"].clone(s,c.viewport),e.clearPasses(i.passes),i.passes.pick=!0,i.passes.depth=!0,i.cullingVolume=se(e,t,1,1,s),i.tilesetPassState=Y,e.updateEnvironment(),n.renderTranslucentDepthForPick=!0,c=o.pickDepthFramebuffer.update(r,t,s),e.updateAndExecuteCommands(c,pe),e.resolveFramebuffers(c),r.endFrame()}X.prototype.pick=function(e,t,r,i){ce=Object(u["a"])(r,3),ue=Object(u["a"])(i,ce);var n=e.context,o=n.uniformState,s=e.frameState,c=e.defaultView;e.view=c;var f=c.viewport;f.x=0,f.y=0,f.width=n.drawingBufferWidth,f.height=n.drawingBufferHeight;var h=c.passState;h.viewport=a["a"].clone(f,h.viewport);var p=q["a"].transformWindowToDrawingBuffer(e,t,he);e.jobScheduler.disableThisFrame(),e.updateFrameState(),s.cullingVolume=se(e,p,ce,ue,f),s.invertClassification=!1,s.passes.pick=!0,s.tilesetPassState=Y,o.update(s),e.updateEnvironment(),fe.x=p.x-.5*(ce-1),fe.y=e.drawingBufferHeight-p.y-.5*(ue-1),fe.width=ce,fe.height=ue,h=c.pickFramebuffer.begin(fe,c.viewport),e.updateAndExecuteCommands(h,pe),e.resolveFramebuffers(h);var d=c.pickFramebuffer.end(fe);return n.endFrame(),d};var me=new m["a"],le=new l["a"],ve=new p["a"],we=new d["a"];X.prototype.pickPositionWorldCoordinates=function(e,t,r){if(e.useDepthPicking){var i=t.toString();if(this._pickPositionCacheDirty)this._pickPositionCache={},this._pickPositionCacheDirty=!1;else if(this._pickPositionCache.hasOwnProperty(i))return o["a"].clone(this._pickPositionCache[i],r);var a=e.frameState,n=e.context,s=n.uniformState,c=e.defaultView;e.view=c;var u=q["a"].transformWindowToDrawingBuffer(e,t,he);e.pickTranslucentDepth?de(e,u):(e.updateFrameState(),s.update(a),e.updateEnvironment()),u.y=e.drawingBufferHeight-u.y;var h,p=e.camera;h=Object(f["a"])(p.frustum.fov)?p.frustum.clone(me):Object(f["a"])(p.frustum.infiniteProjectionMatrix)?p.frustum.clone(le):Object(f["a"])(p.frustum.width)?p.frustum.clone(ve):p.frustum.clone(we);for(var d=c.frustumCommandsList,m=d.length,l=0;l<m;++l){var v=this.getPickDepth(e,l),w=v.getDepth(n,u.x,u.y);if(w>0&&w<1){var _,g=d[l];return e.mode===G["a"].SCENE2D?(_=p.position.z,p.position.z=_-g.near+1,h.far=Math.max(1,g.far-g.near),h.near=1,s.update(a),s.updateFrustum(h)):(h.near=g.near*(0!==l?e.opaqueFrustumNearOffset:1),h.far=g.far,s.updateFrustum(h)),r=q["a"].drawingBufferToWgs84Coordinates(e,u,w,r),e.mode===G["a"].SCENE2D&&(p.position.z=_,s.update(a)),this._pickPositionCache[i]=o["a"].clone(r),r}}this._pickPositionCache[i]=void 0}};var _e=new s["a"];function ge(e,t){var r,i,a=[],n=[],o=[],s=[];Object(f["a"])(e)||(e=Number.MAX_VALUE);var c=t();while(Object(f["a"])(c)){var u=c.object,h=c.position,p=c.exclude;if(Object(f["a"])(h)&&!Object(f["a"])(u)){a.push(c);break}if(!Object(f["a"])(u)||!Object(f["a"])(u.primitive))break;if(!p&&(a.push(c),0>=--e))break;var d=u.primitive,m=!1;"function"===typeof d.getGeometryInstanceAttributes&&Object(f["a"])(u.id)&&(i=d.getGeometryInstanceAttributes(u.id),Object(f["a"])(i)&&Object(f["a"])(i.show)&&(m=!0,i.show=w["a"].toValue(!1,i.show),o.push(i))),u instanceof b["a"]&&(m=!0,u.show=!1,s.push(u)),m||(d.show=!1,n.push(d)),c=t()}for(r=0;r<n.length;++r)n[r].show=!0;for(r=0;r<o.length;++r)i=o[r],i.show=w["a"].toValue(!0,i.show);for(r=0;r<s.length;++r)s[r].show=!0;return a}X.prototype.pickPosition=function(e,t,r){if(r=this.pickPositionWorldCoordinates(e,t,r),Object(f["a"])(r)&&e.mode!==G["a"].SCENE3D){o["a"].fromElements(r.y,r.z,r.x,r);var i=e.mapProjection,a=i.ellipsoid,n=i.unproject(r,_e);a.cartographicToCartesian(n,r)}return r},X.prototype.drillPick=function(e,t,r,i,a){var n=this,o=function(){var r=n.pick(e,t,i,a);if(Object(f["a"])(r))return{object:r,position:void 0,exclude:!1}},s=ge(r,o);return s.map((function(e){return e.object}))};var be=new o["a"],ye=new o["a"];function xe(e,t,r){this.ray=e,this.width=t,this.tilesets=r,this.ready=!1,this.deferred=_["a"].defer(),this.promise=this.deferred.promise}function Ce(e,t,r,i){var a=t.direction,n=o["a"].mostOrthogonalAxis(a,be),s=o["a"].cross(a,n,be),c=o["a"].cross(a,s,ye);return i.position=t.origin,i.direction=a,i.up=c,i.right=s,i.frustum.width=Object(u["a"])(r,J),i.frustum.computeCullingVolume(i.positionWC,i.directionWC,i.upWC)}function De(e,t,r){var i=t.frameState,a=r.ray,n=r.width,o=r.tilesets,s=e._pickOffscreenView.camera,c=Ce(e,a,n,s),u=K;u.camera=s,u.cullingVolume=c;for(var f=!0,h=o.length,p=0;p<h;++p){var d=o[p];d.show&&t.primitives.contains(d)&&(d.updateForPass(i,u),f=f&&u.ready)}return f&&r.deferred.resolve(),f}function Oe(e,t,r){for(var i=e.length,a=0;a<i;++a){var n=e.get(a);n.show&&(n instanceof C["a"]?Object(f["a"])(t)&&-1!==t.indexOf(n)||r.push(n):n instanceof I["a"]&&Oe(n,t,r))}}function je(e,t,r,i,a,n){var o=[];if(Oe(t.primitives,i,o),0===o.length)return _["a"].resolve(n());var s=new xe(r,a,o);return e._mostDetailedRayPicks.push(s),s.promise.then((function(){return n()}))}function ke(e,t){return!(!Object(f["a"])(e)||!Object(f["a"])(t)||0===t.length)&&(t.indexOf(e)>-1||t.indexOf(e.primitive)>-1||t.indexOf(e.id)>-1)}function Te(e,t,r,i,n,o,s){var c=t.context,u=c.uniformState,h=t.frameState,p=e._pickOffscreenView;t.view=p,Ce(e,r,n,p.camera),fe=a["a"].clone(p.viewport,fe);var d,m=p.pickFramebuffer.begin(fe,p.viewport);t.jobScheduler.disableThisFrame(),t.updateFrameState(),h.invertClassification=!1,h.passes.pick=!0,h.passes.offscreen=!0,h.tilesetPassState=s?Q:Y,u.update(h),t.updateEnvironment(),t.updateAndExecuteCommands(m,pe),t.resolveFramebuffers(m);var l=p.pickFramebuffer.end(c);if(t.context.depthTexture)for(var w=p.frustumCommandsList.length,_=0;_<w;++_){var g=e.getPickDepth(t,_),b=g.getDepth(c,0,0);if(b>0&&b<1){var y=p.frustumCommandsList[_],x=y.near*(0!==_?t.opaqueFrustumNearOffset:1),C=y.far,D=x+b*(C-x);d=v["a"].getPoint(r,D);break}}if(t.view=t.defaultView,c.endFrame(),Object(f["a"])(l)||Object(f["a"])(d))return{object:l,position:d,exclude:!Object(f["a"])(d)&&o||ke(l,i)}}function Pe(e,t,r,i,a,n,o,s){var c=function(){return Te(e,t,r,a,n,o,s)};return ge(i,c)}function Se(e,t,r,i,a,n,o){var s=Pe(e,t,r,1,i,a,n,o);if(s.length>0)return s[0]}function Fe(e,t,r,i,a,n,o,s){return Pe(e,t,r,i,a,n,o,s)}function Ee(e,t){var r=_["a"].defer();return t.then((function(t){var i=e.postRender.addEventListener((function(){r.resolve(t),i()}));e.requestRender()})).otherwise((function(e){r.reject(e)})),r.promise}X.prototype.updateMostDetailedRayPicks=function(e){for(var t=this._mostDetailedRayPicks,r=0;r<t.length;++r)De(this,e,t[r])&&t.splice(r--,1)},X.prototype.pickFromRay=function(e,t,r,i){return Se(this,e,t,r,i,!1,!1)},X.prototype.drillPickFromRay=function(e,t,r,i,a){return Fe(this,e,t,r,i,a,!1,!1)},X.prototype.pickFromRayMostDetailed=function(e,t,r,i){var a=this;return t=v["a"].clone(t),r=Object(f["a"])(r)?r.slice():r,Ee(e,je(a,e,t,r,i,(function(){return Se(a,e,t,r,i,!1,!0)})))},X.prototype.drillPickFromRayMostDetailed=function(e,t,r,i,a){var n=this;return t=v["a"].clone(t),i=Object(f["a"])(i)?i.slice():i,Ee(e,je(n,e,t,i,a,(function(){return Fe(n,e,t,r,i,a,!1,!0)})))};var Ve=new o["a"],Re=new o["a"],Be=new v["a"],Me=new s["a"];function ze(e,t){var r=e.globe,a=Object(f["a"])(r)?r.ellipsoid:e.mapProjection.ellipsoid,n=i["a"]._defaultMaxTerrainHeight,c=a.geodeticSurfaceNormalCartographic(t,Re),u=s["a"].toCartesian(t,a,Ve),h=Be;h.origin=u,h.direction=c;var p=new v["a"];return v["a"].getPoint(h,n,p.origin),o["a"].negate(c,p.direction),p}function Ae(e,t){var r=e.globe,i=Object(f["a"])(r)?r.ellipsoid:e.mapProjection.ellipsoid,a=s["a"].fromCartesian(t,i,Me);return ze(e,a)}function Ne(e,t){var r=e.globe,i=Object(f["a"])(r)?r.ellipsoid:e.mapProjection.ellipsoid,a=s["a"].fromCartesian(t,i,Me);return a.height}function We(e,t,r,i,a){var n=ze(t,r);return je(e,t,n,i,a,(function(){var r=Se(e,t,n,i,a,!0,!0);if(Object(f["a"])(r))return Ne(t,r.position)}))}function Le(e,t,r,i,a,n){var s=Ae(t,r);return je(e,t,s,i,a,(function(){var r=Se(e,t,s,i,a,!0,!0);if(Object(f["a"])(r))return o["a"].clone(r.position,n)}))}X.prototype.sampleHeight=function(e,t,r,i){var a=ze(e,t),n=Se(this,e,a,r,i,!0,!1);if(Object(f["a"])(n))return Ne(e,n.position)},X.prototype.clampToHeight=function(e,t,r,i,a){var n=Ae(e,t),s=Se(this,e,n,r,i,!0,!1);if(Object(f["a"])(s))return o["a"].clone(s.position,a)},X.prototype.sampleHeightMostDetailed=function(e,t,r,i){r=Object(f["a"])(r)?r.slice():r;for(var a=t.length,n=new Array(a),o=0;o<a;++o)n[o]=We(this,e,t[o],r,i);return Ee(e,_["a"].all(n).then((function(e){for(var r=e.length,i=0;i<r;++i)t[i].height=e[i];return t})))},X.prototype.clampToHeightMostDetailed=function(e,t,r,i){r=Object(f["a"])(r)?r.slice():r;for(var a=t.length,n=new Array(a),o=0;o<a;++o)n[o]=Le(this,e,t[o],r,i,t[o]);return Ee(e,_["a"].all(n).then((function(e){for(var r=e.length,i=0;i<r;++i)t[i]=e[i];return t})))},X.prototype.destroy=function(){this._pickOffscreenView=this._pickOffscreenView&&this._pickOffscreenView.destroy()};t["a"]=X},e0bc:function(e,t,r){"use strict";var i=r("77af"),a=r("bd8d"),n=r("535a"),o=r("2f63"),s=r("7d62"),c=r("ac3b"),u=r("00f8"),f=r("8a65"),h=r("3550"),p=r("a913");function d(e){var t=new u["a"](e);t.blendingEnabled=!1,t.scissorTest={enabled:!0,rectangle:new i["a"]},t.viewport=new i["a"],this._context=e,this._fb=void 0,this._passState=t,this._width=0,this._height=0}d.prototype.begin=function(e,t){var r=this._context,a=t.width,n=t.height;return i["a"].clone(e,this._passState.scissorTest.rectangle),Object(o["a"])(this._fb)&&this._width===a&&this._height===n||(this._width=a,this._height=n,this._fb=this._fb&&this._fb.destroy(),this._fb=new c["a"]({context:r,colorTextures:[new p["a"]({context:r,width:a,height:n})],depthStencilRenderbuffer:new f["a"]({context:r,width:a,height:n,format:h["a"].DEPTH_STENCIL})}),this._passState.framebuffer=this._fb),this._passState.viewport.width=a,this._passState.viewport.height=n,this._passState};var m=new a["a"];d.prototype.end=function(e){for(var t=Object(n["a"])(e.width,1),r=Object(n["a"])(e.height,1),i=this._context,s=i.readPixels({x:e.x,y:e.y,width:t,height:r,framebuffer:this._fb}),c=Math.max(t,r),u=c*c,f=Math.floor(.5*t),h=Math.floor(.5*r),p=0,d=0,l=0,v=-1,w=0;w<u;++w){if(-f<=p&&p<=f&&-h<=d&&d<=h){var _=4*((h-d)*t+p+f);m.red=a["a"].byteToFloat(s[_]),m.green=a["a"].byteToFloat(s[_+1]),m.blue=a["a"].byteToFloat(s[_+2]),m.alpha=a["a"].byteToFloat(s[_+3]);var g=i.getObjectByPickColor(m);if(Object(o["a"])(g))return g}if(p===d||p<0&&-p===d||p>0&&p===1-d){var b=l;l=-v,v=b}p+=l,d+=v}},d.prototype.isDestroyed=function(){return!1},d.prototype.destroy=function(){return this._fb=this._fb&&this._fb.destroy(),Object(s["a"])(this)},t["a"]=d}}]);