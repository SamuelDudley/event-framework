(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~8329ad14"],{3225:function(n,i,e){"use strict";i["a"]="attribute vec4 position;\nattribute vec2 textureCoordinates;\n\nvarying vec2 v_textureCoordinates;\n\nvoid main() \n{\n    gl_Position = position;\n    v_textureCoordinates = textureCoordinates;\n}\n"},"8fa0":function(n,i,e){"use strict";i["a"]="attribute vec3 position;\nattribute float a_batchId;\n\nuniform mat4 u_modifiedModelViewProjection;\n\nvoid main()\n{\n    gl_Position = czm_depthClampFarPlane(u_modifiedModelViewProjection * vec4(position, 1.0));\n}\n"},"95fe":function(n,i,e){"use strict";i["a"]="attribute vec4 currentPosition;\nattribute vec4 previousPosition;\nattribute vec4 nextPosition;\nattribute vec2 expandAndWidth;\nattribute float a_batchId;\n\nuniform mat4 u_modifiedModelView;\n\nvoid main()\n{\n    float expandDir = expandAndWidth.x;\n    float width = abs(expandAndWidth.y) + 0.5;\n    bool usePrev = expandAndWidth.y < 0.0;\n\n    vec4 p = u_modifiedModelView * currentPosition;\n    vec4 prev = u_modifiedModelView * previousPosition;\n    vec4 next = u_modifiedModelView * nextPosition;\n\n    float angle;\n    vec4 positionWC = getPolylineWindowCoordinatesEC(p, prev, next, expandDir, width, usePrev, angle);\n    gl_Position = czm_viewportOrthographic * positionWC;\n\n#ifdef LOG_DEPTH\n    czm_vertexLogDepth(czm_projection * p);\n#endif\n}\n"}}]);