"use client";

import * as THREE from "three";
import { useTexture } from "@react-three/drei";

interface CoinProps {
  setCoinGroup: (group: THREE.Group | null) => void;
}

export default function Coin({ setCoinGroup, ...props }: CoinProps & React.ComponentProps<"group">) {
  // Map provided 1K PNG logo texture to the flat front and back faces
  const texture = useTexture("/iicpc.png");
  texture.colorSpace = THREE.SRGBColorSpace;
  
  // FIX: Correct the texture orientation by rotating it around its center
  texture.center.set(0.5, 0.5);
  texture.rotation = Math.PI / 2; // Adjust to Math.PI / 2 if the logo is upside down after this change
  // Ensure the texture repeats or wraps nicely if needed, though for a logo it should be placed properly.

  return (
    <group ref={setCoinGroup} {...props}>
      {/* 
        Geometry: Strictly use procedural generation (0 kB). 
        Implement <cylinderGeometry args={[2, 2, 0.1, 64]} /> 
      */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[2, 2, 0.2, 64]} />
        
        {/* Material 0: Side edge (high metalness, low roughness, #555 for better visibility) */}
        <meshPhysicalMaterial attach="material-0" color="#555" metalness={0.9} roughness={0.1} />
        
        {/* Material 1: Top face */}
        <meshStandardMaterial attach="material-1" map={texture} roughness={0.4} metalness={0.6} />
        
        {/* Material 2: Bottom face */}
        <meshStandardMaterial attach="material-2" map={texture} roughness={0.4} metalness={0.6} />
      </mesh>
    </group>
  );
}
