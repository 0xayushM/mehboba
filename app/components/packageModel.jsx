"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
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
  const [pixelRatio, setPixelRatio] = useState(1); 

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
  }, []);

  const handleModelClick = () => {
    setShowInfo(true); 
  };

  return (
    <div className='md:bg-white md:shadow-2xl md:rounded-xl md:m-10 relative'> 
      {!showInfo && (
        <div className='lg:hidden'>
          <Canvas
            style={{ height: '100vh', position: 'relative', zIndex: 10 }} 
            camera={{ position: [0, 2, 5], fov: 70 }}
            shadows
            pixelRatio={pixelRatio} 
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
          style={{ height: '90vh', position: 'relative', zIndex: 10 }} 
          camera={{ position: [0, 2, 5], fov: 50 }}
          shadows
          pixelRatio={pixelRatio} 
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Model onClick={handleModelClick} />
          <OrbitControls enableZoom={false} enablePan={false} dampingFactor={0.1} rotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* {for screen size < lg} */}

      {showInfo && (
        <div className="lg:hidden absolute top-0 flex h-screen flex-col w-full md:flex-row items-center justify-center animate-fadeIn gap-5 p-4 z-0">
        <div className='flex flex-col items-center justify-center w-full shadow-2xl bg-white rounded p-4'>
          <Image
            src='/images/diy_kit.png'
            alt='diy_kit'
            width={140}
            height={60}  
          />
          <h2 className='text-xl font-bold mt-4'>Card 1</h2>
          <p>Details about card 1.</p>
        </div>
        <div className='flex flex-col items-center justify-center w-full shadow-2xl bg-white rounded p-4'>
          <Image
            src='/images/box.png'
            alt='box'
            width={140} 
            height={60} 
          />
          <h2 className='text-xl font-bold mt-4'>Card 2</h2>
          <p>Details about card 2.</p>
        </div>
      </div>
      )}

      {/* {for screen size >= lg} */}

      {showInfo && (
        <div className="absolute top-0 lg:flex hidden h-full flex-col md:flex-row animate-fadeIn justify-between w-full z-0">
        <div className='flex flex-col items-center justify-center rounded p-4'>
          <Image
            src='/images/diy_kit.png'
            alt='diy_kit'
            layout="responsive" 
            width={200} 
            height={100} 
            className="max-w-full h-auto" 
          />
          <h2 className='text-xl font-mainheading font-bold mt-4'>Card 1</h2>
          <p className='font-content'>Details about card 1.</p>
        </div>
        <div className='flex flex-col items-center justify-center rounded p-4'>
          <Image
            src='/images/box.png'
            alt='box'
            layout="responsive" 
            width={200} 
            height={100} 
            className="max-w-full h-auto" 
          />
          <h2 className='text-xl font-mainheading font-bold mt-4'>Card 2</h2>
          <p className='font-content'>Details about card 2.</p>
        </div>
      </div>
      )}
    </div>
  );
}
