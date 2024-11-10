"use client"

import Image from 'next/image';
import React from 'react';
const Product = () => {

  return (
    <section className='w-full h-full lg:h-screen flex justify-center items-center'>
      <div id='products' className="h-2/3 w-full grid grid-rows-2 place-items-center z-0 gap-40 lg:gap-0">


        <div className='flex w-full lg:w-2/3 flex-col lg:flex-row items-center md:justify-center p-4 gap-0'>
          <Image
            src='/images/diy_kit.png'
            alt='diy_kit'
            width={200}
            height={100}
            className="h-[20vh] w-[20vh] absolute left-[8%] md:top-[10%] lg:h-[42vh] lg:w-[42vh] -rotate-12"
          />
          <div className='flex flex-col max-w-[80%] lg:max-w-full w-full bg-[#e7d6ff] shadow-xl rounded-2xl border-white border-2 p-5 md:p-10 justify-center mt-24 md:mt-0 h-full md:h-2/3'>
            <h2 className='text-right text-secondaryBg font-pacifico lg:pl-40 text-[1rem] md:text-[2rem] leading-none pb-2'>Mixers</h2>
            <p className='font-content lg:pl-40 text-justify font-light text-xs md:text-sm lg:text-lg'>These are carefully crafted flavor mixes designed to be poured into your drink, infusing it with vibrant, fruity notes that elevate every sip. Just mix, pour, and enjoy a perfectly balanced burst of flavor.</p>
          </div>
        </div>



        <div className='flex flex-col-reverse w-full lg:w-2/3 lg:flex-row items-center justify-center p-4 gap-0'>
          <div className='flex flex-col max-w-[80%] lg:max-w-full w-full bg-[#e7d6ff] shadow-xl rounded-2xl border-white border-2 p-5 md:p-10 justify-center lg:mt-10 md:mt-0 h-full'>
            <h2 className='text-secondaryBg pr-40 font-pacifico text-[1rem] md:text-[2rem] leading-none pb-2'>Yoghurt Box</h2>
            <p className='lg:pr-40 font-content text-justify font-light text-xs md:text-sm lg:text-lg'>Smooth, creamy yogurt paired with our premium boba balls, adding a fun, chewy texture that enhances every spoonful. Perfect for layering flavors and textures, it’s an irresistible treat for your taste buds.</p>
          </div>
          <Image
            src='/images/box.png'
            alt='box'
            width={200}
            height={100}
            className="h-[22vh] w-[22vh] absolute right-[10%] bottom-[32%] lg:bottom-[10%] lg:h-[45vh] lg:w-[45vh] rotate-12"
          />

        </div>
      </div>
    </section>
  );
};

export default Product;
