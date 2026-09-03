"use client";

import { useEffect, useRef, useState } from "react";
import { liquidFragSource } from "./vendor/liquid-frag";

const vertexShaderSource = `#version 300 es
precision mediump float;

in vec2 a_position;
out vec2 vUv;

void main() {
  vUv = .5 * (a_position + 1.);
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

function makeLogoImage(): ImageData {
  const source = document.createElement("canvas");
  source.width = 256;
  source.height = 256;
  const context = source.getContext("2d");
  if (!context) return new ImageData(256, 256);

  context.clearRect(0, 0, 256, 256);
  context.fillStyle = "#ffffff";
  context.font = '300 132px "Sylva Lexend", Arial, sans-serif';
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("NJ", 128, 128);
  return context.getImageData(0, 0, 256, 256);
}

export function LiquidMark({ label = "NJ" }: { label?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl2", { antialias: true, alpha: true });
    if (!canvas || !gl) return;

    const imageData = makeLogoImage();

    const compile = (source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compile(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compile(liquidFragSource, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    const positionBuffer = gl.createBuffer();
    if (!positionBuffer) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    gl.useProgram(program);
    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uniform = (name: string) => gl.getUniformLocation(program, name);
    const uniforms = {
      time: uniform("u_time"),
      ratio: uniform("u_ratio"),
      imageRatio: uniform("u_img_ratio"),
      patternScale: uniform("u_patternScale"),
      refraction: uniform("u_refraction"),
      edge: uniform("u_edge"),
      patternBlur: uniform("u_patternBlur"),
      liquid: uniform("u_liquid"),
      image: uniform("u_image_texture"),
    };

    const texture = gl.createTexture();
    if (!texture) return;
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, imageData.width, imageData.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imageData.data);
    if (uniforms.image) gl.uniform1i(uniforms.image, 0);
    if (uniforms.imageRatio) gl.uniform1f(uniforms.imageRatio, imageData.width / imageData.height);
    if (uniforms.patternScale) gl.uniform1f(uniforms.patternScale, 2.2);
    if (uniforms.refraction) gl.uniform1f(uniforms.refraction, 0.018);
    if (uniforms.edge) gl.uniform1f(uniforms.edge, 0.28);
    if (uniforms.patternBlur) gl.uniform1f(uniforms.patternBlur, 0.006);
    if (uniforms.liquid) gl.uniform1f(uniforms.liquid, 0.13);

    const resize = () => {
      const bounds = canvas.parentElement?.getBoundingClientRect();
      const cssSize = Math.max(bounds?.width ?? 0, bounds?.height ?? 0, 32);
      const size = Math.max(1, Math.ceil(cssSize * window.devicePixelRatio));
      canvas.width = size;
      canvas.height = size;
      gl.viewport(0, 0, size, size);
      if (uniforms.ratio) gl.uniform1f(uniforms.ratio, 1);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement ?? canvas);

    let frame = 0;
    const started = performance.now();
    const render = (now: number) => {
      if (uniforms.time) gl.uniform1f(uniforms.time, (now - started) * 0.3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frame = requestAnimationFrame(render);
    };
    setReady(true);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      gl.deleteTexture(texture);
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <span className="liquid-mark" data-ready={ready ? "true" : "false"} role="img" aria-label="Nishant Jha liquid logo">
      <span className="liquid-mark-fallback" aria-hidden="true">{label}</span>
      <canvas ref={canvasRef} aria-hidden="true" />
    </span>
  );
}
