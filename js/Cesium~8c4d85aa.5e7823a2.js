(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~8c4d85aa"],{e42d:function(_,P,R){"use strict";var B=R("6ef5"),r=R("0e25"),T=R("daa2"),t={DEPTH_COMPONENT:T["a"].DEPTH_COMPONENT,DEPTH_STENCIL:T["a"].DEPTH_STENCIL,ALPHA:T["a"].ALPHA,RGB:T["a"].RGB,RGBA:T["a"].RGBA,LUMINANCE:T["a"].LUMINANCE,LUMINANCE_ALPHA:T["a"].LUMINANCE_ALPHA,RGB_DXT1:T["a"].COMPRESSED_RGB_S3TC_DXT1_EXT,RGBA_DXT1:T["a"].COMPRESSED_RGBA_S3TC_DXT1_EXT,RGBA_DXT3:T["a"].COMPRESSED_RGBA_S3TC_DXT3_EXT,RGBA_DXT5:T["a"].COMPRESSED_RGBA_S3TC_DXT5_EXT,RGB_PVRTC_4BPPV1:T["a"].COMPRESSED_RGB_PVRTC_4BPPV1_IMG,RGB_PVRTC_2BPPV1:T["a"].COMPRESSED_RGB_PVRTC_2BPPV1_IMG,RGBA_PVRTC_4BPPV1:T["a"].COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,RGBA_PVRTC_2BPPV1:T["a"].COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,RGB_ETC1:T["a"].COMPRESSED_RGB_ETC1_WEBGL,componentsLength:function(_){switch(_){case t.RGB:return 3;case t.RGBA:return 4;case t.LUMINANCE_ALPHA:return 2;case t.ALPHA:case t.LUMINANCE:return 1;default:return 1}},validate:function(_){return _===t.DEPTH_COMPONENT||_===t.DEPTH_STENCIL||_===t.ALPHA||_===t.RGB||_===t.RGBA||_===t.LUMINANCE||_===t.LUMINANCE_ALPHA||_===t.RGB_DXT1||_===t.RGBA_DXT1||_===t.RGBA_DXT3||_===t.RGBA_DXT5||_===t.RGB_PVRTC_4BPPV1||_===t.RGB_PVRTC_2BPPV1||_===t.RGBA_PVRTC_4BPPV1||_===t.RGBA_PVRTC_2BPPV1||_===t.RGB_ETC1},isColorFormat:function(_){return _===t.ALPHA||_===t.RGB||_===t.RGBA||_===t.LUMINANCE||_===t.LUMINANCE_ALPHA},isDepthFormat:function(_){return _===t.DEPTH_COMPONENT||_===t.DEPTH_STENCIL},isCompressedFormat:function(_){return _===t.RGB_DXT1||_===t.RGBA_DXT1||_===t.RGBA_DXT3||_===t.RGBA_DXT5||_===t.RGB_PVRTC_4BPPV1||_===t.RGB_PVRTC_2BPPV1||_===t.RGBA_PVRTC_4BPPV1||_===t.RGBA_PVRTC_2BPPV1||_===t.RGB_ETC1},isDXTFormat:function(_){return _===t.RGB_DXT1||_===t.RGBA_DXT1||_===t.RGBA_DXT3||_===t.RGBA_DXT5},isPVRTCFormat:function(_){return _===t.RGB_PVRTC_4BPPV1||_===t.RGB_PVRTC_2BPPV1||_===t.RGBA_PVRTC_4BPPV1||_===t.RGBA_PVRTC_2BPPV1},isETC1Format:function(_){return _===t.RGB_ETC1},compressedTextureSizeInBytes:function(_,P,R){switch(_){case t.RGB_DXT1:case t.RGBA_DXT1:case t.RGB_ETC1:return Math.floor((P+3)/4)*Math.floor((R+3)/4)*8;case t.RGBA_DXT3:case t.RGBA_DXT5:return Math.floor((P+3)/4)*Math.floor((R+3)/4)*16;case t.RGB_PVRTC_4BPPV1:case t.RGBA_PVRTC_4BPPV1:return Math.floor((Math.max(P,8)*Math.max(R,8)*4+7)/8);case t.RGB_PVRTC_2BPPV1:case t.RGBA_PVRTC_2BPPV1:return Math.floor((Math.max(P,16)*Math.max(R,8)*2+7)/8);default:return 0}},textureSizeInBytes:function(_,P,R,r){var T=t.componentsLength(_);return B["a"].isPacked(P)&&(T=1),T*B["a"].sizeInBytes(P)*R*r},alignmentInBytes:function(_,P,R){var B=t.textureSizeInBytes(_,P,R,1)%4;return 0===B?4:2===B?2:1},createTypedArray:function(_,P,R,r){var T,a=B["a"].sizeInBytes(P);T=a===Uint8Array.BYTES_PER_ELEMENT?Uint8Array:a===Uint16Array.BYTES_PER_ELEMENT?Uint16Array:a===Float32Array.BYTES_PER_ELEMENT&&P===B["a"].FLOAT?Float32Array:Uint32Array;var e=t.componentsLength(_)*R*r;return new T(e)},flipY:function(_,P,R,B,r){if(1===r)return _;for(var T=t.createTypedArray(P,R,B,r),a=t.componentsLength(P),e=B*a,n=0;n<r;++n)for(var A=n*r*a,E=(r-n-1)*r*a,G=0;G<e;++G)T[E+G]=_[A+G];return T}};P["a"]=Object(r["a"])(t)}}]);