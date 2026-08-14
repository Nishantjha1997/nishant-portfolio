"use client";

import { useEffect, useRef } from "react";

const palette = {
  coral: 0xf08b81,
  blue: 0x83b9ff,
};

export function AmbientField({ tone = "coral" }: { tone?: keyof typeof palette }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let frame = 0;
    let renderer: import("three").WebGLRenderer | undefined;

    import("three").then((THREE) => {
      if (disposed || !host) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100);
      camera.position.z = 4.6;
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      renderer.setClearColor(0x000000, 0);
      host.appendChild(renderer.domElement);

      const field = new THREE.Group();
      const color = palette[tone];
      const points = new Float32Array(180 * 3);
      for (let index = 0; index < 180; index += 1) {
        const radius = 1.35 + Math.random() * 1.65;
        const angle = Math.random() * Math.PI * 2;
        points[index * 3] = Math.cos(angle) * radius;
        points[index * 3 + 1] = (Math.random() - 0.5) * 2.2;
        points[index * 3 + 2] = Math.sin(angle) * radius - 0.8;
      }

      const pointGeometry = new THREE.BufferGeometry();
      pointGeometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
      const pointMaterial = new THREE.PointsMaterial({ color, size: 0.026, transparent: true, opacity: 0.44, blending: THREE.AdditiveBlending, depthWrite: false });
      const particleField = new THREE.Points(pointGeometry, pointMaterial);
      field.add(particleField);

      const ringGeometry = new THREE.TorusGeometry(1.38, 0.006, 8, 100);
      const ringMaterial = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.23 });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI * 0.54;
      field.add(ring);

      const innerRingMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.1 });
      const innerRing = new THREE.Mesh(ringGeometry, innerRingMaterial);
      innerRing.scale.setScalar(0.66);
      innerRing.rotation.x = Math.PI * 0.44;
      innerRing.rotation.z = Math.PI * 0.24;
      field.add(innerRing);
      scene.add(field);

      const scroll = { current: 0, target: window.scrollY };
      const onScroll = () => { scroll.target = window.scrollY; };
      const resize = () => {
        if (!renderer || !host) return;
        const width = host.clientWidth || 1;
        const height = host.clientHeight || 1;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };

      const tick = (time: number) => {
        if (disposed || !renderer) return;
        const seconds = time * 0.001;
        scroll.current += (scroll.target - scroll.current) * 0.035;
        const documentDepth = Math.min(scroll.current / Math.max(document.documentElement.scrollHeight, 1), 1);
        field.rotation.y = seconds * 0.055 + documentDepth * 0.8;
        field.rotation.x = Math.sin(seconds * 0.24) * 0.08 + documentDepth * 0.2;
        field.position.y = documentDepth * -0.42;
        ring.rotation.z = seconds * 0.12;
        innerRing.rotation.y = -seconds * 0.16;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(tick);
      };

      resize();
      window.addEventListener("resize", resize, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
      frame = requestAnimationFrame(tick);

      const cleanup = () => {
        window.removeEventListener("resize", resize);
        window.removeEventListener("scroll", onScroll);
        cancelAnimationFrame(frame);
        pointGeometry.dispose();
        pointMaterial.dispose();
        ringGeometry.dispose();
        ringMaterial.dispose();
        innerRingMaterial.dispose();
        renderer?.dispose();
        renderer?.domElement.remove();
      };

      (host as HTMLDivElement & { __cleanup?: () => void }).__cleanup = cleanup;
      if (disposed) cleanup();
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      (host as HTMLDivElement & { __cleanup?: () => void }).__cleanup?.();
    };
  }, [tone]);

  return <div ref={hostRef} className="ambient-field" aria-hidden="true" />;
}
