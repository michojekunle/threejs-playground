"use client"

import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, MeshTransmissionMaterial, ContactShadows } from "@react-three/drei"
import { Chair } from "./chair"

export default function GlassChair() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "linear-gradient(135deg, #fca5a5 0%, #93c5fd 50%, #e879f9 100%)",
      }}
    >
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

        {/* Chair Model */}
        <Chair position={[0, -0.5, 0]} />

        {/* Environment and Controls */}
        <Environment preset="studio" background={false} />
        <OrbitControls minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={false} />

        {/* Shadows */}
        <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={2} far={4} />
      </Canvas>
    </div>
  )
}

