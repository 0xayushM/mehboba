"use client"

import React, { useState } from 'react';
import ProductCards from './productCards';
import Image from 'next/image';
import PackageModel from './packageModel'

const Product = () => {
  const [showCards, setShowCards] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleButtonClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowCards(true);
    }, 700); // Match this duration with the CSS transition duration
  };

  return (
    <section className='w-full h-screen relative'>
      {/* <div className={`flex items-center justify-center w-full md:p-20 lg:p-0 h-[100vh] overflow-visible ${fadeOut ? 'fade-out' : ''} ${showCards ? 'hidden' : ''}`}>
        <Image 
          src='/images/diy_kit.png' 
          height={200} 
          width={500} 
          alt='diy_kit' 
        />
      </div>
      {!showCards && <button 
        onClick={handleButtonClick} 
        className={`bg-white uppercase font-mainheading  absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-form p-4 rounded ${fadeOut ? 'fade-out' : ''}`}
      >
        Show Cards
      </button>}
      {showCards && <ProductCards />} */}
      <PackageModel/>
    </section>
  );
};

export default Product;
