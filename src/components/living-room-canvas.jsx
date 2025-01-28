import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Html, ContactShadows } from "@react-three/drei";

function SitingRoomModel() {
  // Load the 3D model (replace 'chair_model.glb' with your model path)
  const { scene } = useGLTF("/siting-room.glb");
  return <primitive object={scene} />;
}

export default function LivingRoomCanvas() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background:
          "linear-gradient(135deg, #fca5a5 0%, #93c5fd 50%, #e879f9 100%)",
      }}
    >
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />

        {/* 3D Model */}
        <React.Suspense fallback={<Html>Loading...</Html>}>
          <SitingRoomModel />
        </React.Suspense>

        {/* Environment and Controls */}
        <Environment preset="studio" background={false} />
        <OrbitControls
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          enableZoom={true}
          enablePan={false}
        />

        {/* Shadows */}
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.25}
          scale={10}
          blur={2}
          far={4}
        />
      </Canvas>
    </div>
  );
}

// Usage of useGLTF loader
useGLTF.preload("/siting-room.glb");
