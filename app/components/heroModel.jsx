// components/Three3dModel.jsx
"use client";

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/models/boba_tea/scene.gltf');
  const ref = useRef();

  // Floating animation
  useFrame((state) => {
    ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1; // Floating effect
    ref.current.position.x = Math.sin(state.clock.elapsedTime) * 0.1; // Floating effect
  });

  return <primitive object={scene} scale={0.55} ref={ref} position={[1, 0, 0]} />; // Adjust y position to move model to the bottom
};

const HeroModel = () => {
  const modelRef = useRef();

  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }} style={{width: '100%', height: '100vh', overflow: "visible"}}>
      <Suspense fallback={null}>
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={10} />
        <OrbitControls enableZoom={false} />
        <Model ref={modelRef} />
      </Suspense>
    </Canvas>
  );
};

export default HeroModel;
