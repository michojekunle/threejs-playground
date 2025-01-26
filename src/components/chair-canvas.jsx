import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Html } from '@react-three/drei';

function ChairModel() {
  // Load the 3D model (replace 'chair_model.glb' with your model path)
  const { scene } = useGLTF('/glass-chair.glb');
  return <primitive object={scene} />;
}

export default function ChairCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [2, 2, 5], fov: 35 }}
      style={{ height: '100vh', background: 'linear-gradient(to right, #FDCBFF, #D4FBFF)' }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
      <spotLight
        position={[5, 10, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />

      {/* 3D Model */}
      <React.Suspense fallback={<Html>Loading...</Html>}>
        <ChairModel />
      </React.Suspense>

      {/* Orbit Controls for interaction */}
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />

      {/* Environment for reflections */}
      <Environment preset="sunset" background />
    </Canvas>
  );
}

// Usage of useGLTF loader
useGLTF.preload('/glass-chair.glb');