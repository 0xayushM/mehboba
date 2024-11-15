
"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function Model() {
  const gltf = useLoader(GLTFLoader, '/models/package/package.gltf');
  const scene = useMemo(() => gltf.scene.clone(), [gltf.scene]);
  const [positionY, setPositionY] = useState(0);

  useFrame(() => {
    setPositionY(Math.sin(Date.now() / 500) * 0.1); // Floating effect
    scene.position.y = positionY;
  });

  return (
    <primitive
      object={scene}
      scale={new THREE.Vector3(0.35, 0.35, 0.35)}
      position={[0, positionY, 0]}
      rotation={[Math.PI / 90, 1, 0]}
    />
  );
}

export default function PackageModel2() {

  return (
    <div className='relative'>
      <Canvas
        style={{ height: '40vh', position: 'relative', zIndex: 10 }}
        camera={{ position: [0, 2, 5], fov: 70 }}
        shadows
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Model />
        <OrbitControls enableZoom={false} enablePan={false} dampingFactor={0.1} rotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
