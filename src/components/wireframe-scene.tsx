"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import * as THREE from "three";

type Pointer = { x: number; y: number };

function canUseWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl")),
    );
  } catch {
    return false;
  }
}

function Mark({
  pointer,
  motion,
}: {
  pointer: RefObject<Pointer>;
  motion: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.LineSegments>(null);
  const spin = useRef(0.6);

  const geometry = useMemo(() => {
    const shellSource = new THREE.IcosahedronGeometry(1.12, 1);
    const coreSource = new THREE.OctahedronGeometry(0.52, 0);
    const shell = new THREE.EdgesGeometry(shellSource);
    const coreEdges = new THREE.EdgesGeometry(coreSource);
    shellSource.dispose();
    coreSource.dispose();

    const count = 200;
    const positions = new Float32Array(count * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i += 1) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const scale = 1.42;
      positions[i * 3] = Math.cos(theta) * radius * scale;
      positions[i * 3 + 1] = y * scale;
      positions[i * 3 + 2] = Math.sin(theta) * radius * scale;
    }

    const points = new THREE.BufferGeometry();
    points.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    return { shell, coreEdges, points };
  }, []);

  useEffect(() => {
    return () => {
      geometry.shell.dispose();
      geometry.coreEdges.dispose();
      geometry.points.dispose();
    };
  }, [geometry]);

  useFrame((_, delta) => {
    const groupNode = group.current;
    if (!groupNode || !motion) return;

    const step = Math.min(delta, 0.05);
    spin.current += step * 0.16;
    const targetX = pointer.current.y * 0.32;
    const targetY = spin.current + pointer.current.x * 0.5;
    groupNode.rotation.x = THREE.MathUtils.damp(
      groupNode.rotation.x,
      targetX,
      2.2,
      step,
    );
    groupNode.rotation.y = THREE.MathUtils.damp(
      groupNode.rotation.y,
      targetY,
      2.2,
      step,
    );

    if (core.current) {
      core.current.rotation.y -= step * 0.12;
    }
  });

  return (
    <group ref={group} rotation={[0.4, 0.7, 0]}>
      <lineSegments geometry={geometry.shell} raycast={() => null}>
        <lineBasicMaterial color="#e7e2d6" />
      </lineSegments>
      <lineSegments
        ref={core}
        geometry={geometry.coreEdges}
        raycast={() => null}
      >
        <lineBasicMaterial color="#8d877c" />
      </lineSegments>
      <points geometry={geometry.points} raycast={() => null}>
        <pointsMaterial
          color="#b7b1a4"
          size={0.028}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}

function StillMark() {
  return (
    <div className="grid h-full w-full place-items-center">
      <div className="relative h-28 w-28">
        <div className="absolute inset-0 rounded-full border border-foreground/35" />
        <div className="absolute inset-[18%] rotate-45 border border-foreground/55" />
        <div className="absolute inset-[34%] rounded-full border border-foreground/40" />
      </div>
    </div>
  );
}

export default function WireframeScene() {
  const holder = useRef<HTMLDivElement>(null);
  const pointer = useRef<Pointer>({ x: 0, y: 0 });
  const [webgl] = useState(canUseWebGL);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const node = holder.current;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduce = motionQuery.matches;
    let onScreen = true;
    let hidden = document.hidden;

    const update = () => {
      setLive(!reduce && onScreen && !hidden);
    };

    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };

    const onVisibility = () => {
      hidden = document.hidden;
      update();
    };

    const onMotion = () => {
      reduce = motionQuery.matches;
      update();
    };

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      update();
    });

    if (node) observer.observe(node);
    motionQuery.addEventListener("change", onMotion);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pointermove", onMove, { passive: true });
    update();

    return () => {
      observer.disconnect();
      motionQuery.removeEventListener("change", onMotion);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={holder} className="h-full w-full">
      {webgl ? (
        <Canvas
          dpr={[1, 1.25]}
          camera={{ position: [0, 0, 5.2], fov: 36 }}
          frameloop={live ? "always" : "demand"}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "low-power",
            stencil: false,
          }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
          style={{ pointerEvents: "none" }}
        >
          <Mark pointer={pointer} motion={live} />
        </Canvas>
      ) : (
        <StillMark />
      )}
    </div>
  );
}
