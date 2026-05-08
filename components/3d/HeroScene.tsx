"use client";

import { Canvas } from "@react-three/fiber";
import Coin from "./Coin";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";

interface HeroSceneProps {
  setCoinGroup: (group: THREE.Group | null) => void;
}

export default function HeroScene({ setCoinGroup }: HeroSceneProps) {
  const [fov, setFov] = useState(45);
  const [cameraZ, setCameraZ] = useState(15);

  useEffect(() => {
    const handleResize = () => {
      // Custom MOBILE_FOV and Z-offset logic to ensure the coin isn't cropped or overlapping
      if (window.innerWidth < 768) {
        setFov(65);
        setCameraZ(22); // Pull camera back on mobile
      } else {
        setFov(45);
        setCameraZ(15);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, cameraZ], fov }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        {/* Using robust local lighting instead of Environment maps to prevent Context Lost errors */}
        <ambientLight intensity={3} />
        <directionalLight position={[10, 10, 5]} intensity={5} />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#ffffff" />
        <pointLight position={[0, 0, 5]} intensity={2} />
        <Coin setCoinGroup={setCoinGroup} />
      </Suspense>
    </Canvas>
  );
}