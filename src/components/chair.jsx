"use client"

import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshTransmissionMaterial } from "@react-three/drei"
import * as THREE from "three"

export function Chair({ position = [0, 0, 0] }) {
  const chairRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    chairRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.05
  })

  return (
    <group ref={chairRef} position={position}>
      {/* Glass Shell */}
      <mesh castShadow>
        <sphereGeometry args={[1.2, 64, 64, 0, Math.PI]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.0}
          distortionScale={0.3}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
        />
      </mesh>

      {/* Cushions */}
      <group position={[0, 0.1, 0]} scale={0.85}>
        {/* Mint Green Cushion */}
        <mesh position={[-0.4, 0.2, 0]} castShadow>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#86efac" roughness={0.2} metalness={0.1} />
        </mesh>

        {/* Yellow Cushion */}
        <mesh position={[0.4, 0.2, 0]} castShadow>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#fef08a" roughness={0.2} metalness={0.1} />
        </mesh>

        {/* Coral Pink Cushion */}
        <mesh position={[0, -0.2, 0]} castShadow>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#fca5a5" roughness={0.2} metalness={0.1} />
        </mesh>
      </group>

      {/* Chair Base */}
      <group position={[0, -1.2, 0]}>
        {/* Metal Leg */}
        <mesh castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.8, 16]} />
          <meshStandardMaterial color="#fcd34d" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Base Plate */}
        <mesh position={[0, -0.4, 0]} rotation={[0, 0, 0]} receiveShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
          <meshStandardMaterial color="#fcd34d" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </group>
  )
}

