import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import { Suspense } from "react";

function Scene() {
  const gltf = useGLTF("/glass-chair.glb");
  return <primitive object={gltf.scene} />;
}

export function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function SceneProper() {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <Scene />
        <OrbitControls/>
        <axesHelper args={[10]}/>
        <directionalLight position={[10, 3, 5]}/>
        {/* <spotlight/> */}
      </Suspense>
    </Canvas>
  );
}

export default SceneProper;
