"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
* This file has been generated by spacker.exe utility. Do not change this file manualy as your changes
* will get lost when the file is regenerated. Original content is located in *.c files.
*/
exports.CubeShaders = {
    cube_fshader: ' precision mediump float; uniform float uAlpha; uniform sampler2D uTexture; uniform bool uColorCoding; uniform float uHighlighting; varying vec2 vTexCoord; varying vec4 vIdColor; void main(void) { if (uColorCoding) { gl_FragColor = vIdColor; } else { vec4 pixel = texture2D(uTexture, vTexCoord); if (vIdColor.x < 0.0) { gl_FragColor = vec4(pixel.rgb * uHighlighting, uAlpha); } else { gl_FragColor = vec4(pixel.rgb, uAlpha); } } }',
    cube_vshader: ' attribute highp vec3 aVertex; attribute highp vec2 aTexCoord; attribute highp float aId; uniform mat3 uRotation; uniform mat4 uPMatrix; uniform bool uColorCoding; uniform float uSelection; varying vec2 vTexCoord; varying vec4 vIdColor; vec4 getIdColor(float id){ float product = floor(id + 0.5); float B = floor(product / (256.0*256.0)); float G = floor((product - B * 256.0*256.0) / 256.0); float R = mod(product, 256.0); return vec4(R / 255.0, G / 255.0, B / 255.0, 1.0); } void main(void) { vec4 point = vec4(uRotation * aVertex, 1.0); gl_Position = uPMatrix * point; vTexCoord = aTexCoord; if (uColorCoding) { vIdColor = getIdColor(aId); return; } bool isSelected = abs(uSelection - aId) < 0.1; if (isSelected){ vIdColor = vec4(-1.0, -1.0, -1.0, -1.0); } else{ vIdColor = vec4(1.0, 1.0, 1.0, 1.0); } }'
};
