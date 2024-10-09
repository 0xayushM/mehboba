"use client";

import React, { useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

// Component to load and render the GLTF model
function Model() {
  // Load the GLTF model using useLoader from @react-three/fiber
  const gltf = useLoader(GLTFLoader, '/models/package/package.gltf');

  // Debug: Log the loaded GLTF scene to inspect its structure
  useEffect(() => {
    console.log('Loaded GLTF Scene:', gltf.scene);
  }, [gltf]);

  // Set the initial scale and position to ensure visibility
  return <primitive object={gltf.scene} scale={new THREE.Vector3(0.2, 0.2, 0.2)} position={[0, 0, 0]} />;
}

export default function PackageModel() {
  return (
    <Canvas style={{ height: '100vh' }} camera={{ position: [0, 2, 5], fov: 50 }}>
      {/* Basic lighting setup */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Render the Model component inside the Canvas */}
      <Model />

      {/* Camera controls with zoom disabled */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
