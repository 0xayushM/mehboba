"use client"

import Image from 'next/image';
import React from 'react';
const Product = () => {

  return (
    <section className='w-full h-full md:h-screen '>
        <div id='products' className="bg-red-400 top-0 flex h-full flex-col md:flex-row animate-fadeIn justify-evenly w-full z-0">
        <div className='flex flex-col items-center justify-center rounded p-4'>
          <Image
            src='/images/diy_kit.png'
            alt='diy_kit'
            width={200} 
            height={100} 
            className="md:h-[50vh] md:w-[50vh]" 
          />
          <h2 className='text-xl font-mainheading font-bold mt-4'>Card 1</h2>
          <p className='font-content'>Details about card 1.</p>
        </div>
        <div className='flex flex-col items-center justify-center rounded p-4'>
          <Image
            src='/images/box.png'
            alt='box'
            width={200} 
            height={100} 
            className="md:h-[50vh] md:w-[50vh]" 
          />
          <h2 className='text-xl font-mainheading font-bold mt-4'>Card 2</h2>
          <p className='font-content'>Details about card 2.</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
