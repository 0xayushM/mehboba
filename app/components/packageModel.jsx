"use client";

import React, { useEffect, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import ProductCards from './productCards';

function Model({ onClick, clicked }) {
  const gltf = useLoader(GLTFLoader, '/models/package/package.gltf');

  useEffect(() => {
    console.log('Loaded GLTF Scene:', gltf.scene);
  }, [gltf]);

  // Floating animation using sine wave
  const [positionY, setPositionY] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPositionY((prev) => Math.sin(Date.now() / 500) * 0.1); // Floating effect
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <primitive 
      object={gltf.scene} 
      scale={new THREE.Vector3(0.2, 0.2, 0.2)} 
      position={[0, positionY, 0]} 
      rotation={[Math.PI / 90, 1, 0]} // Adjust rotation as needed
      onClick={onClick} // Add click handler
      castShadow // Enable shadow casting
      receiveShadow // Enable shadow receiving
    />
  );
}

export default function PackageModel() {
  const [showInfo, setShowInfo] = useState(false);

  const handleModelClick = () => {
    setShowInfo(true); // Set to true when model is clicked
  };

  return (
    <>
      <Canvas style={{ height: '100vh' }} camera={{ position: [0, 2, 5], fov: 50 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} />

        <Model onClick={handleModelClick} />

        {/* Shadow beneath the model */}
        <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <circleGeometry args={[0.5, 32]} />
          <meshStandardMaterial opacity={0.5} transparent color="#000000" />
        </mesh>

        <OrbitControls enableZoom={false} />
      </Canvas>

      {showInfo && (
        <div className="info-box">
          <div className="box left-box">
            <img src="/path/to/image1.jpg" alt="Image 1" />
            <h2>Heading 1</h2>
            <p>This is some text for the first box.</p>
          </div>
          <div className="box right-box">
            <div className="right-box-item">
              <img src="/path/to/image2.jpg" alt="Image 2" />
              <h2>Heading 2</h2>
              <p>This is some text for the second box.</p>
            </div>
            <div className="right-box-item">
              <img src="/path/to/image3.jpg" alt="Image 3" />
              <h2>Heading 3</h2>
              <p>This is some text for the third box.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
