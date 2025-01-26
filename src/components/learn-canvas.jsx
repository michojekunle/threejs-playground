import { OrbitControls, FirstPersonControls } from '@react-three/drei';
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Loader } from "./test-canvas";

function AnimatedBox() {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.005;
    boxRef.current.rotation.z += 0.005;
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function LearnCanvas() {
  return (
    <div>
      <Canvas>
        <Suspense fallback={<Loader />}>
            <OrbitControls />
            <AnimatedBox />
            <directionalLight position={[2, 5, 1]}/>
        </Suspense>
      </Canvas>
    </div>
  );
}
