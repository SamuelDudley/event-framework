(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~09d3628e"],{"563a":function(e,n,o){"use strict";n["a"]="uniform sampler2D u_texture;\n\nvarying vec2 v_textureCoordinates;\n\nvoid main()\n{\n    vec4 color = texture2D(u_texture, v_textureCoordinates);\n    gl_FragColor = czm_gammaCorrect(color);\n}\n"}}]);