"use client";

import React, { useState, useMemo } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import Image from 'next/image';

function Model({ onClick }) {
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
      scale={new THREE.Vector3(0.2, 0.2, 0.2)}
      position={[0, positionY, 0]}
      rotation={[Math.PI / 90, 1, 0]}
      onClick={onClick}
    />
  );
}

export default function PackageModel() {
  const [showInfo, setShowInfo] = useState(false);

  const handleModelClick = () => {
    setShowInfo(true); // Set to true when model is clicked
  };

  return (
    <div className='md:bg-white md:shadow-2xl md:rounded-xl md:m-10 relative'> {/* Added relative positioning */}
      {!showInfo && (
        <div className='lg:hidden'>
          <Canvas
            style={{ height: '100vh', position: 'relative', zIndex: 10 }} // Set z-index
            camera={{ position: [0, 2, 5], fov: 70 }}
            shadows
            pixelRatio={Math.min(window.devicePixelRatio, 2)}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Model onClick={handleModelClick} />
            <OrbitControls enableZoom={false} enablePan={false} dampingFactor={0.1} rotateSpeed={0.5} />
          </Canvas>
        </div>
      )}
      <div className='hidden lg:block'>
        <Canvas
          style={{ height: '90vh', position: 'relative', zIndex: 10 }} // Set z-index
          camera={{ position: [0, 2, 5], fov: 50 }}
          shadows
          pixelRatio={Math.min(window.devicePixelRatio, 2)}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Model onClick={handleModelClick} />
          <OrbitControls enableZoom={false} enablePan={false} dampingFactor={0.1} rotateSpeed={0.5} />
        </Canvas>
      </div>

      {showInfo && (
        <div className="lg:hidden absolute top-0 flex h-full flex-col md:flex-row bg-yellow-400 animate-fadeIn z-0">
        <div className='flex flex-col items-center justify-center w-full bg-red-400 rounded p-4'>
          <Image
            src='/images/diy_kit.png'
            alt='diy_kit'
            width={100}
            height={50}  
          />
          <h2 className='text-xl font-bold mt-4'>Card 1</h2>
          <p>Details about card 1.</p>
        </div>
        <div className='flex flex-col items-center justify-center w-full rounded p-4'>
          <Image
            src='/images/box.png'
            alt='box'
            width={100} 
            height={50} 
          />
          <h2 className='text-xl font-bold mt-4'>Card 2</h2>
          <p>Details about card 2.</p>
        </div>
      </div>
      )}
      {showInfo && (
        <div className="absolute top-0 lg:flex hidden h-full flex-col md:flex-row bg-yellow-400 animate-fadeIn z-0">
        <div className='flex flex-col items-center justify-center w-full bg-red-400 rounded p-4'>
          <Image
            src='/images/diy_kit.png'
            alt='diy_kit'
            layout="responsive" // Makes the image responsive
            width={300} // Original width (for aspect ratio)
            height={100} // Original height (for aspect ratio)
            className="max-w-full h-auto" // Set max width to 100% and height to auto
          />
          <h2 className='text-xl font-bold mt-4'>Card 1</h2>
          <p>Details about card 1.</p>
        </div>
        <div className='flex flex-col items-center justify-center w-full rounded p-4'>
          <Image
            src='/images/box.png'
            alt='box'
            layout="responsive" // Makes the image responsive
            width={300} // Original width (for aspect ratio)
            height={100} // Original height (for aspect ratio)
            className="max-w-full h-auto" // Set max width to 100% and height to auto
          />
          <h2 className='text-xl font-bold mt-4'>Card 2</h2>
          <p>Details about card 2.</p>
        </div>
      </div>
      )}
    </div>
  );
}
