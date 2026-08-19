"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sparkles, Float } from "@react-three/drei"
import * as THREE from "three"

function GeometricConstellation() {
  const groupRef = useRef<THREE.Group>(null)
  const leftMeshRef = useRef<THREE.Mesh>(null)
  const rightMeshRef = useRef<THREE.Mesh>(null)

  // Floating & rotation animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const { pointer } = state

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.2 + time * 0.04,
        0.05
      )
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.15 + Math.sin(time * 0.2) * 0.05,
        0.05
      )
    }

    if (leftMeshRef.current) {
      leftMeshRef.current.rotation.x = time * 0.08
      leftMeshRef.current.rotation.y = time * 0.05
    }

    if (rightMeshRef.current) {
      rightMeshRef.current.rotation.x = -time * 0.06
      rightMeshRef.current.rotation.z = time * 0.07
    }
  })

  // Geometric wireframe geometries
  const icosahedronGeo = useMemo(() => new THREE.IcosahedronGeometry(2.4, 1), [])
  const octahedronGeo = useMemo(() => new THREE.OctahedronGeometry(1.8, 1), [])

  return (
    <group ref={groupRef}>
      {/* Left Wireframe Polyhedron with warm orange accent */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh
          ref={leftMeshRef}
          position={[-3.5, 0.5, -2]}
          geometry={icosahedronGeo}
        >
          <meshBasicMaterial
            wireframe
            color="#ff5225"
            transparent
            opacity={0.18}
          />
        </mesh>
      </Float>

      {/* Right Wireframe Polyhedron with cool blue accent */}
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.4}>
        <mesh
          ref={rightMeshRef}
          position={[3.8, -0.8, -2.5]}
          geometry={octahedronGeo}
        >
          <meshBasicMaterial
            wireframe
            color="#4a90e2"
            transparent
            opacity={0.2}
          />
        </mesh>
      </Float>

      {/* Central subtle large wireframe backdrop */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.6}>
        <mesh position={[0.5, 0, -4]} geometry={icosahedronGeo} scale={2}>
          <meshBasicMaterial
            wireframe
            color="#ffffff"
            transparent
            opacity={0.05}
          />
        </mesh>
      </Float>
    </group>
  )
}

function GlowingNodes() {
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, colors } = useMemo(() => {
    const count = 45
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const colorOrange = new THREE.Color("#ff6b35")
    const colorBlue = new THREE.Color("#4a90e2")
    const colorWhite = new THREE.Color("#ffffff")

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 16
      positions[i3 + 1] = (Math.random() - 0.5) * 10
      positions[i3 + 2] = (Math.random() - 0.5) * 6 - 1

      const rand = Math.random()
      const c = rand < 0.4 ? colorOrange : rand < 0.75 ? colorBlue : colorWhite
      colors[i3] = c.r
      colors[i3 + 1] = c.g
      colors[i3 + 2] = c.b
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  )
}

export default function ThreeBackground() {
  return (
    <div className="three-background fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[-4, 2, 2]} color="#ff5225" intensity={1.5} distance={10} />
        <pointLight position={[4, -2, 2]} color="#4a90e2" intensity={1.5} distance={10} />

        <GeometricConstellation />
        <GlowingNodes />

        {/* Ambient floating sparkles for cosmic depth */}
        <Sparkles
          count={120}
          scale={14}
          size={1.4}
          speed={0.3}
          opacity={0.3}
          color="#ffffff"
        />
      </Canvas>
    </div>
  )
}
