"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1.5, 2]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#ff4d4d" 
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
          transparent={true}
          opacity={0.3}
        />
      </Icosahedron>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AbstractShape />
        {/* Floating dust particles for depth */}
        <Sparkles 
          count={200} 
          scale={12} 
          size={1.5} 
          speed={0.4} 
          opacity={0.2} 
          color="#ffffff" 
        />
      </Canvas>
    </div>
  );
}
