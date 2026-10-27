"use client";

import dynamic from "next/dynamic";

const WireframeScene = dynamic(() => import("./wireframe-scene"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

export function HeroScene() {
  return (
    <div className="relative h-52 w-full sm:h-64" aria-hidden="true">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(235,231,223,0.08), transparent 64%)",
        }}
      />
      <WireframeScene />
    </div>
  );
}
