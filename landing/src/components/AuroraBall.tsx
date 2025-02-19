"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"
import * as THREE from "three"

export default function AuroraBallScene() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <OrbitControls />
      <AuroraBall />
    </>
  )
}

function AuroraBall() {
  const meshRef = useRef<THREE.Mesh>(null)
  const shaderRef = useRef<THREE.ShaderMaterial>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3
    }
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef}>
      <shaderMaterial
        ref={shaderRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uColorA: { value: new THREE.Color(0xff69b4) }, // Hot pink
          uColorB: { value: new THREE.Color(0x00ffff) }, // Cyan
        }}
        transparent
        side={THREE.DoubleSide}
      />
    </Sphere>
  )
}

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uTime;
  
  void main() {
    vUv = uv;
    vPosition = position;
    
    vec3 pos = position;
    pos.y += sin(pos.x * 10.0 + uTime) * 0.1;
    pos.x += cos(pos.y * 10.0 + uTime) * 0.1;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  
  void main() {
    vec3 color = mix(uColorA, uColorB, 0.5 + 0.5 * sin(vPosition.x * 5.0 + uTime));
    
    float alpha = 0.7 + 0.3 * sin(vPosition.y * 8.0 + uTime * 1.5);
    
    // Add a subtle pulse effect
    color += 0.1 * sin(uTime * 2.0) * vec3(1.0, 0.8, 0.9);
    
    gl_FragColor = vec4(color, alpha);
  }
`

