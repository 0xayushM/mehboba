"use client";

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const ProductCards = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      const delay = Math.random() * 0.5 + 0.2; // Random delay between 0.2s and 0.7s
      card.style.animationDelay = `${delay}s`;
      card.classList.add('bounce-in');
    });
  }, []);

  return (
    <section className='h-screen flex gap-5 flex-col md:flex-row items-center justify-center md:justify-between p-5 md:p-20 lg:p-40'>
      <div className='p-6 rounded h-3/5 w-full opacity-0' ref={el => cardRefs.current[0] = el}>
        <Image 
          src='/images/diy_kit.png' 
          height={200} 
          width={500} 
          alt='diy_kit' 
        />
        <h2 className='text-xl font-bold'>Card 1</h2>
        <p>Details about card 1.</p>
      </div>
      <div className='p-6 rounded h-3/5 w-full opacity-0' ref={el => cardRefs.current[1] = el}>
        <Image 
          src='/images/box.png' 
          height={200} 
          width={500} 
          alt='box' 
        />
        <h2 className='text-xl font-bold'>Card 2</h2>
        <p>Details about card 2.</p>
      </div>
      <div className='p-6 rounded h-3/5 w-full opacity-0' ref={el => cardRefs.current[2] = el}>
        <Image 
          src='/images/mixer.png' 
          height={200} 
          width={400} 
          alt='diy_kit' 
        />
        <div>
        <h2 className='text-xl font-bold'>Card 3</h2>
        <p>Details about card 3.</p>
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
